import { Resend } from "resend";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const name = clean(body.name, 80);
    const email = clean(body.email, 160).toLowerCase();
    const company = clean(body.company, 120);
    const projectType = clean(body.projectType, 80) || "General enquiry";
    const message = clean(body.message, 2000);
    const website = clean(body.website, 120);

    if (website) {
      return Response.json({ ok: true }, { status: 201 });
    }

    if (name.length < 2) {
      return Response.json({ error: "Please enter your name." }, { status: 400 });
    }
    if (!emailPattern.test(email)) {
      return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (message.length < 20) {
      return Response.json(
        { error: "Tell me a little more about the opportunity or project." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL || "ugedestiny6@gmail.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";
    if (!apiKey) {
      return Response.json(
        { error: "The contact form is not configured yet. Please email me directly." },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      replyTo: email,
      subject: `Portfolio enquiry — ${projectType}`,
      html: `
        <h2>New portfolio enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
        <p><strong>Type:</strong> ${escapeHtml(projectType)}</p>
        <hr />
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      `,
    });

    if (error) throw new Error(error.message);

    return Response.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Contact submission failed", error);
    return Response.json(
      { error: "Your message could not be sent right now. Please try again." },
      { status: 500 },
    );
  }
}

export async function GET() {
  return Response.json({ healthy: true, emailConfigured: Boolean(process.env.RESEND_API_KEY) });
}
