"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Moon,
  Send,
  Server,
  ShoppingBag,
  Sparkles,
  Sun,
  Video,
  Workflow,
  X,
} from "lucide-react";

const navigation = [
  ["About", "#about"],
  ["Work", "#work"],
  ["Research", "#research"],
  ["Stack", "#stack"],
  ["Journey", "#journey"],
  ["Contact", "#contact"],
];

const capabilities = [
  {
    number: "01",
    icon: Code2,
    title: "Full-stack development",
    text: "Responsive interfaces, scalable APIs, databases, authentication, dashboards and production integrations.",
  },
  {
    number: "02",
    icon: BriefcaseBusiness,
    title: "Business strategy",
    text: "Connecting product decisions to customer needs, operations, market opportunity and sustainable growth.",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Product engineering",
    text: "Taking digital products from problem definition and system planning through development, deployment and iteration.",
  },
  {
    number: "04",
    icon: ShoppingBag,
    title: "Commerce systems",
    text: "Building seller tools, product discovery, payments, messaging, dispatch and delivery workflows that work together.",
  },
];

const stackGroups = [
  { label: "Frontend", items: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"] },
  { label: "Backend", items: ["Node.js", "Express", "REST APIs", "Authentication", "System Architecture"] },
  { label: "Data", items: ["PostgreSQL", "Neon", "MongoDB", "SQLite", "Cloudinary"] },
  { label: "Product", items: ["Business Strategy", "Product Planning", "Technical PM", "User Workflows"] },
  { label: "Automation", items: ["n8n Research", "API Workflows", "Human Approval", "Operational Reporting"] },
  { label: "Delivery", items: ["Git", "GitHub", "Vercel", "Render", "Brevo", "Paystack"] },
];

function SystemVisual() {
  return (
    <div className="system-visual" aria-hidden="true">
      <div className="system-grid" />
      <div className="orbit orbit-a"><span /></div>
      <div className="orbit orbit-b"><span /></div>
      <div className="orbit orbit-c"><span /></div>
      <div className="system-core">
        <span className="core-pulse" />
        <Code2 size={30} />
      </div>
      <div className="system-tag tag-react"><span /> REACT_CORE</div>
      <div className="system-tag tag-node"><span /> NODE_API</div>
      <div className="system-tag tag-data"><span /> DATA_LAYER</div>
      <div className="system-tag tag-strategy"><span /> STRATEGY</div>
      <div className="terminal-card">
        <div className="terminal-top"><i /><i /><i /><span>uge.system.ts</span></div>
        <div className="terminal-code">
          <p><b>01</b><span className="syntax-purple">const</span> idea = <span className="syntax-green">await</span> understand(problem);</p>
          <p><b>02</b><span className="syntax-purple">const</span> system = architect(idea);</p>
          <p><b>03</b><span className="syntax-purple">const</span> product = build(system);</p>
          <p><b>04</b><span className="syntax-green">return</span> scale(product);<em className="code-caret" /></p>
        </div>
      </div>
      <div className="coordinate coordinate-one">05°33&apos;N / 05°46&apos;E</div>
      <div className="coordinate coordinate-two">SYSTEM STATUS — BUILDING</div>
    </div>
  );
}

function GleencVisual() {
  return (
    <div className="project-screen gleenc-screen" aria-label="Gleenc product interface placeholder">
      <div className="screen-bar"><span className="screen-brand">Gleenc<span>.</span></span><div className="screen-search">Search nearby products</div><i /></div>
      <div className="commerce-shell">
        <aside><b>Discover</b><span>Campus market</span><span>Used market</span><span>Local market</span><span>Orders</span></aside>
        <div className="commerce-feed">
          <div className="story-row"><i /><i /><i /><i /><i /></div>
          <div className="feed-card">
            <div className="seller-line"><i /><span><b>Campus Store</b><small>Verified seller · Nearby</small></span><strong>•••</strong></div>
            <div className="product-art"><span>LOCAL<br />COMMERCE</span><i className="bag-shape" /></div>
            <div className="product-meta"><span>New arrival</span><b>₦24,500</b></div>
          </div>
        </div>
        <div className="commerce-stats">
          <span><small>Verified buyers</small><b>20</b></span>
          <span><small>Verified sellers</small><b>15</b></span>
          <span><small>Core roles</small><b>04</b></span>
        </div>
      </div>
      <div className="visual-stamp">LIVE BETA</div>
    </div>
  );
}

function TekagonVisual() {
  return (
    <div className="project-screen tekagon-screen" aria-label="Tekagon dashboard interface placeholder">
      <div className="tek-sidebar"><b>T<span>K</span></b><i /><i /><i /><i /><i /></div>
      <div className="tek-main">
        <div className="tek-head"><span><small>Welcome back</small><b>Digital operations, simplified.</b></span><i /></div>
        <div className="tek-stats"><span><small>Active projects</small><b>08</b><em>+12%</em></span><span><small>Open tickets</small><b>03</b><em>Live</em></span><span><small>Client messages</small><b>14</b><em>+4</em></span></div>
        <div className="tek-grid">
          <div className="chart-card"><small>PROJECT ACTIVITY</small><div className="chart-bars"><i /><i /><i /><i /><i /><i /><i /></div><div className="chart-base" /></div>
          <div className="service-card"><small>SERVICES</small><span>Web development <b>72%</b></span><span>Automation <b>54%</b></span><span>Business strategy <b>81%</b></span></div>
        </div>
      </div>
      <div className="visual-stamp">DIGITAL SYSTEMS</div>
    </div>
  );
}

function ResearchVisual() {
  return (
    <div className="research-canvas" aria-hidden="true">
      <div className="research-grid" />
      <div className="research-hud">
        <span>UGE / APPLIED SYSTEMS LAB</span>
        <b>SCROLL FILM <i data-frame>001</i> / 180</b>
      </div>

      <div className="research-layer map-layer">
        <div className="map-coordinate map-coordinate-a">05.5546° N</div>
        <div className="map-coordinate map-coordinate-b">05.7932° E</div>
        <svg className="market-map" viewBox="0 0 800 620" role="img" aria-label="Abstract marketplace route map">
          <path className="map-road road-one" d="M80 92 C210 136 170 260 318 290 S520 270 730 358" />
          <path className="map-road road-two" d="M116 550 C260 468 270 392 406 372 S590 380 700 92" />
          <path className="map-road road-three" d="M42 330 C172 302 280 338 358 470 S566 548 760 504" />
          <path className="map-route" d="M120 514 C226 430 238 354 350 338 C466 320 520 392 666 154" />
        </svg>
        <span className="map-node node-buyer"><i />BUYER</span>
        <span className="map-node node-stall"><i />STALL B-17</span>
        <span className="map-node node-rider"><i />RIDER / LIVE</span>
        <span className="map-node node-landmark"><i />LANDMARK 04</span>
        <div className="map-status"><span /> Route confidence</div>
      </div>

      <div className="research-layer automation-layer">
        <div className="flow-line flow-one"><i /></div>
        <div className="flow-line flow-two"><i /></div>
        <div className="flow-line flow-three"><i /></div>
        <div className="flow-line flow-four"><i /></div>
        {[
          ["01", "TRIGGER", "Lead captured"],
          ["02", "AI LAYER", "Classify + draft"],
          ["03", "HUMAN CHECK", "Approve decision"],
          ["04", "ACTION", "Publish + notify"],
          ["05", "INSIGHT", "Report outcome"],
        ].map(([number, label, value], index) => (
          <div className={`flow-node flow-node-${index + 1}`} key={number}>
            <span>{number}</span><small>{label}</small><b>{value}</b>
          </div>
        ))}
        <div className="automation-core"><Workflow size={28} /><span>N8N / ORCHESTRATION</span></div>
      </div>

      <div className="research-caption">
        <span className="caption-map">MARKET INTELLIGENCE / ROUTE 01</span>
        <span className="caption-flow">BUSINESS AUTOMATION / FLOW 02</span>
      </div>
    </div>
  );
}

export default function Home() {
  const root = useRef<HTMLElement>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    const saved = window.localStorage.getItem("uge-theme") as "dark" | "light" | null;
    const preferred = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    const next = saved ?? preferred;
    document.documentElement.dataset.theme = next;
    const frame = window.requestAnimationFrame(() => setTheme(next));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("uge-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onPointer = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", onPointer, { passive: true });
    return () => window.removeEventListener("pointermove", onPointer);
  }, []);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) return;

      const lenis = new Lenis({ duration: 1.05, smoothWheel: true, wheelMultiplier: 0.9 });
      const update = (time: number) => lenis.raf(time * 1000);
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(update);
      gsap.ticker.lagSmoothing(0);

      const intro = gsap.timeline({ defaults: { ease: "power4.out" } });
      intro
        .from(".site-header", { y: -30, opacity: 0, duration: 0.8 })
        .from(".hero-kicker", { y: 24, opacity: 0, duration: 0.65 }, "-=0.4")
        .from(".hero-title .line > span", { yPercent: 110, rotate: 2, duration: 1.15, stagger: 0.12 }, "-=0.4")
        .from(".hero-copy, .hero-actions, .hero-meta", { y: 24, opacity: 0, duration: 0.7, stagger: 0.12 }, "-=0.65")
        .from(".system-visual", { scale: 0.92, opacity: 0, duration: 1.1 }, "-=1")
        .from(".terminal-card", { x: 45, y: 35, opacity: 0, duration: 0.8 }, "-=0.55");

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          y: 64,
          opacity: 0,
          duration: 0.95,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 84%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".capability-card").forEach((card, index) => {
        gsap.from(card, {
          y: 70,
          rotate: index % 2 ? 1.5 : -1.5,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".project-screen").forEach((screen) => {
        gsap.fromTo(
          screen,
          { y: 90, rotateX: 7, scale: 0.96 },
          {
            y: -20,
            rotateX: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: { trigger: screen, start: "top bottom", end: "bottom top", scrub: 1.2 },
          },
        );
      });

      gsap.fromTo(
        ".portrait-image",
        { yPercent: 8, scale: 1.04 },
        { yPercent: -5, scale: 1, ease: "none", scrollTrigger: { trigger: ".about-profile", start: "top bottom", end: "bottom top", scrub: 1 } },
      );
      gsap.to(".portrait-ring", { rotate: 180, ease: "none", scrollTrigger: { trigger: ".about-profile", start: "top bottom", end: "bottom top", scrub: 1.2 } });

      const researchFrame = document.querySelector<HTMLElement>("[data-frame]");
      const researchTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".research-showcase",
          start: "top 72%",
          end: "bottom 28%",
          scrub: 1.15,
          onUpdate: (self) => {
            if (researchFrame) researchFrame.textContent = String(Math.max(1, Math.round(self.progress * 179) + 1)).padStart(3, "0");
          },
        },
      });
      researchTimeline
        .fromTo(".map-route", { strokeDashoffset: 950 }, { strokeDashoffset: 0, duration: 1.2, ease: "none" })
        .fromTo(".map-node", { scale: 0.65, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.12, duration: 0.6 }, 0.15)
        .to(".map-layer, .caption-map", { opacity: 0.08, scale: 0.96, duration: 0.65 }, 1.55)
        .fromTo(".automation-layer, .caption-flow", { opacity: 0, scale: 1.04 }, { opacity: 1, scale: 1, duration: 0.65 }, 1.55)
        .fromTo(".flow-node", { y: 22, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.55 }, 1.65)
        .fromTo(".flow-line i", { xPercent: -160 }, { xPercent: 760, stagger: 0.12, duration: 1.4, ease: "none" }, 1.75);

      gsap.to(".research-canvas", {
        yPercent: -4,
        ease: "none",
        scrollTrigger: { trigger: ".research-showcase", start: "top bottom", end: "bottom top", scrub: 1.3 },
      });

      gsap.to(".orbit-a", { rotate: 360, duration: 22, repeat: -1, ease: "none" });
      gsap.to(".orbit-b", { rotate: -360, duration: 30, repeat: -1, ease: "none" });
      gsap.to(".orbit-c", { rotate: 360, duration: 38, repeat: -1, ease: "none" });
      gsap.to(".system-core", { y: -10, duration: 2.4, repeat: -1, yoyo: true, ease: "sine.inOut" });

      const progressTween = gsap.to(".scroll-progress", { scaleX: 1, ease: "none", paused: true });
      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => progressTween.progress(self.progress),
      });

      return () => {
        gsap.ticker.remove(update);
        lenis.destroy();
      };
    },
    { scope: root },
  );

  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  const submitContact = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState("sending");
    setFormMessage("");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error || "Message could not be sent.");
      setFormState("success");
      setFormMessage("Your message is in. I’ll get back to you shortly.");
      form.reset();
    } catch (error) {
      setFormState("error");
      setFormMessage(error instanceof Error ? error.message : "Message could not be sent.");
    }
  };

  return (
    <main ref={root}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="pointer-glow" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true" />

      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Uge Destiny home"><span>U</span>D<i>.</i></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="icon-button theme-button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
          <button className="icon-button menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={19} /></button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <button className="icon-button mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X size={20} /></button>
        <span className="menu-label">NAVIGATION / 2026</span>
        <nav>{navigation.map(([label, href], index) => <a key={href} href={href} onClick={() => setMenuOpen(false)}><small>0{index + 1}</small>{label}<ArrowUpRight /></a>)}</nav>
        <p>Available for remote roles and selected freelance projects.</p>
      </div>

      <section className="hero" id="top">
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-content" id="main-content">
          <div className="hero-copy-column">
            <p className="hero-kicker"><span className="status-dot" /> Full-stack developer · Business strategist</p>
            <h1 className="hero-title" aria-label="I build digital systems that turn ambitious ideas into scalable businesses">
              <span className="line"><span>I build digital systems</span></span>
              <span className="line"><span>that turn <em>ambitious ideas</em></span></span>
              <span className="line"><span>into scalable businesses.</span></span>
            </h1>
            <p className="hero-copy">I&apos;m Uge Destiny Enanefe—a product-minded developer building modern platforms at the intersection of technology, commerce and real-world problems.</p>
            <div className="hero-actions">
              <a className="button primary-button magnetic" href="#work">Explore my work <ArrowDown size={17} /></a>
              <a className="text-link" href="#contact">Let&apos;s build together <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <SystemVisual />
          <div className="hero-meta">
            <span><MapPin size={15} /> Warri, Nigeria <b>·</b> Remote worldwide</span>
            <span>Developer by execution. Strategist by thinking. Builder by nature.</span>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true"><span>PORTFOLIO / 01</span><i /></div>
      </section>

      <section className="signal-strip" aria-label="Professional focus">
        <div className="marquee-track">
          {["FULL-STACK DEVELOPMENT", "BUSINESS STRATEGY", "PRODUCT ENGINEERING", "E-COMMERCE", "AI SYSTEMS", "REMOTE COLLABORATION", "FULL-STACK DEVELOPMENT", "BUSINESS STRATEGY", "PRODUCT ENGINEERING", "E-COMMERCE"].map((item, index) => <span key={`${item}-${index}`}>{item}<i>✦</i></span>)}
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="section-heading" data-reveal><span className="section-number">01</span><p>About / Systems thinking</p><i /></div>
        <div className="about-grid">
          <div className="about-lead" data-reveal>
            <p>Not just code.</p>
            <h2>I connect technical execution with <em>business clarity.</em></h2>
          </div>
          <div className="about-copy" data-reveal>
            <p>I build digital products from concept and system architecture to development, deployment and continuous improvement. My work is grounded in understanding the problem before choosing the technology.</p>
            <p>My Chemical Engineering background strengthens how I break down complex systems. Building Gleenc and Tekagon has given me practical experience across commerce, payments, communication, user operations and product strategy.</p>
            <div className="about-signoff"><span>UDE</span><p>Based in Effurun/Warri<br />Building for a connected world.</p></div>
          </div>
        </div>
        <div className="about-profile" data-reveal>
          <div className="portrait-stage">
            <div className="portrait-ring"><span>FULL-STACK</span><span>STRATEGY</span><span>COMMERCE</span><span>AI SYSTEMS</span></div>
            <div className="portrait-glow" />
            <Image className="portrait-image" src="/uge-destiny.webp" alt="Uge Destiny Enanefe" width={1400} height={1259} sizes="(max-width: 700px) 92vw, 520px" />
            <span className="portrait-code">UD / 05°33&apos;N</span>
          </div>
          <div className="profile-copy">
            <p>THE BUILDER BEHIND THE SYSTEMS</p>
            <h3>Technical enough to build it.<br />Strategic enough to make it <em>matter.</em></h3>
            <p>I&apos;m Uge Destiny Enanefe, a full-stack web developer and business strategist who turns ambitious, real-world problems into connected digital products. I think in systems, build with purpose and care about the business outcome after the code ships.</p>
            <div><span>Warri, Nigeria</span><span>Remote worldwide</span><span>Open to impact</span></div>
          </div>
        </div>
        <div className="metrics-grid">
          <article data-reveal><b>02</b><span>Flagship digital platforms</span></article>
          <article data-reveal><b>04</b><span>Connected user systems</span></article>
          <article data-reveal><b>35</b><span>Early verified Gleenc users</span></article>
          <article data-reveal><b>∞</b><span>Curiosity for better systems</span></article>
        </div>
      </section>

      <section className="section capabilities-section">
        <div className="section-heading" data-reveal><span className="section-number">02</span><p>Capabilities / What I bring</p><i /></div>
        <div className="capability-intro" data-reveal><h2>Ideas need more than implementation. They need <em>direction.</em></h2><p>I combine product thinking, software development and business strategy to move work from possibility to production.</p></div>
        <div className="capabilities-grid">
          {capabilities.map(({ number, icon: Icon, title, text }) => (
            <article className="capability-card" key={number}>
              <div><span>{number}</span><Icon size={25} /></div>
              <h3>{title}</h3><p>{text}</p><i className="card-arrow"><ArrowUpRight size={17} /></i>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="work">
        <div className="section-heading light-heading" data-reveal><span className="section-number">03</span><p>Selected work / Built for use</p><i /></div>
        <div className="projects-intro" data-reveal><h2>Products with a reason<br />to <em>exist.</em></h2><p>Two evolving platforms. Different markets. One consistent approach: understand the system, build the product and keep improving it.</p></div>

        <article className="project-case gleenc-case">
          <div className="project-info" data-reveal>
            <span className="project-count">01 / 02</span>
            <p className="project-type">SOCIAL COMMERCE · LOGISTICS · FINTECH</p>
            <h3>Gleenc<span>.</span></h3>
            <p className="project-statement">Building the infrastructure for faster, trusted local commerce.</p>
            <p className="project-description">A social-commerce and delivery platform connecting buyers with campus sellers, used-product vendors, local-market businesses and verified riders.</p>
            <div className="project-role"><span>MY ROLE</span><p>Founder · Full-stack developer<br />Product strategist · Project lead</p></div>
            <div className="project-links"><a href="https://beta.gleenc.com" target="_blank" rel="noreferrer">View live beta <ExternalLink size={15} /></a><a href="https://gleenc.com" target="_blank" rel="noreferrer">View waitlist <ArrowUpRight size={15} /></a></div>
          </div>
          <div className="project-visual-wrap"><GleencVisual /><span className="media-note">PROJECT MEDIA PLACEHOLDER · YOUR IMAGES/VIDEO WILL SLOT IN HERE</span></div>
          <div className="project-tags"><span>React</span><span>TypeScript</span><span>Node.js</span><span>PostgreSQL</span><span>Paystack</span><span>Cloudinary</span></div>
        </article>

        <article className="project-case tekagon-case">
          <div className="project-info" data-reveal>
            <span className="project-count">02 / 02</span>
            <p className="project-type">DIGITAL SERVICES · CLIENT OPERATIONS</p>
            <h3>Tekagon<span>.</span></h3>
            <p className="project-statement">Turning business needs into functional digital systems.</p>
            <p className="project-description">A technology platform that helps businesses discover services, communicate, manage support and improve their digital operations.</p>
            <div className="project-role"><span>MY ROLE</span><p>Full-stack developer<br />Project developer · Business strategist</p></div>
            <div className="project-links"><a href="https://tekagon.vercel.app" target="_blank" rel="noreferrer">Explore Tekagon <ExternalLink size={15} /></a></div>
          </div>
          <div className="project-visual-wrap"><TekagonVisual /><span className="media-note">PROJECT MEDIA PLACEHOLDER · YOUR IMAGES/VIDEO WILL SLOT IN HERE</span></div>
          <div className="project-tags"><span>JavaScript</span><span>Node.js</span><span>Express</span><span>MongoDB</span><span>Vercel</span><span>Render</span></div>
        </article>

        <div className="future-project" data-reveal><span>03</span><div><p>NEXT PROJECT SLOT</p><h3>Your next case study belongs here.</h3></div><i><Layers3 size={26} /></i></div>
      </section>

      <section className="section research-section" id="research">
        <div className="section-heading" data-reveal><span className="section-number">04</span><p>Applied research / Systems in motion</p><i /></div>
        <div className="research-intro" data-reveal>
          <p>RESEARCHING THE NEXT USEFUL LAYER</p>
          <h2>From real-world friction<br />to <em>intelligent flow.</em></h2>
          <p>I&apos;m exploring how AI-assisted spatial systems and practical automation can remove delays from commerce and everyday business operations.</p>
        </div>
        <div className="research-showcase">
          <ResearchVisual />
          <div className="research-stories">
            <article className="research-story map-story" data-reveal>
              <div className="story-index"><span>01</span><b>RESEARCH BLUEPRINT</b></div>
              <p className="story-kicker"><MapPin size={15} /> AI-ASSISTED MARKETPLACE MAPPING</p>
              <h3>A map for the places ordinary maps cannot read.</h3>
              <p>Busy local markets are dense, constantly changing and often described by landmarks instead of street addresses. I&apos;m researching a marketplace mapping system that turns stalls, shop IDs, QR checkpoints and verified landmarks into structured, searchable location data.</p>
              <p>Human-mapped GeoJSON would form the trusted base. AI could then help match typed directions to seller locations, classify useful landmarks and recommend routes for buyers and riders using live position data—while admin verification protects the quality of the map.</p>
              <div className="research-chips"><span>Seller onboarding</span><span>Stall discovery</span><span>Rider guidance</span><span>Offline-aware access</span><span>Map verification</span></div>
              <div className="research-principle"><b>DESIGN PRINCIPLE</b><span>AI assists the map. Verified local data remains the source of truth.</span></div>
            </article>

            <article className="research-story automation-story" data-reveal>
              <div className="story-index"><span>02</span><b>AUTOMATION RESEARCH</b></div>
              <p className="story-kicker"><Workflow size={15} /> N8N BUSINESS PROCESS AUTOMATION</p>
              <h3>Automating repetition without automating judgment.</h3>
              <p>I&apos;m building my knowledge of n8n as an orchestration layer for business processes: connecting lead intake, content operations, approval loops, scheduled publishing, notifications and reporting into observable workflows.</p>
              <p>The approach is intentionally controlled. Core product logic, payments and transaction authority stay inside the primary backend. n8n coordinates the secondary work between tools, APIs and people, with human checkpoints wherever a decision carries business risk.</p>
              <div className="research-chips"><span>Lead routing</span><span>Approval flows</span><span>AI-assisted drafting</span><span>Scheduled actions</span><span>Operational reporting</span></div>
              <div className="research-principle"><b>DESIGN PRINCIPLE</b><span>Automate the hand-offs. Keep people responsible for consequential decisions.</span></div>
            </article>
          </div>
        </div>
      </section>

      <section className="section stack-section" id="stack">
        <div className="section-heading" data-reveal><span className="section-number">05</span><p>Stack / Tools with purpose</p><i /></div>
        <div className="stack-layout">
          <div className="stack-title" data-reveal><p>TECHNICAL SYSTEM</p><h2>The tools change.<br />The standard <em>doesn&apos;t.</em></h2><div className="stack-orb"><Server /><Database /><Cpu /></div></div>
          <div className="stack-groups">
            {stackGroups.map((group, index) => <article key={group.label} data-reveal><span>0{index + 1}</span><h3>{group.label}</h3><div>{group.items.map((item) => <p key={item}>{item}</p>)}</div></article>)}
          </div>
        </div>
      </section>

      <section className="focus-section">
        <div className="focus-grid" aria-hidden="true" />
        <div className="focus-kicker" data-reveal><Sparkles size={18} /><span>CURRENT DIRECTION / 2026</span></div>
        <h2 data-reveal>Building at the intersection of <em>commerce</em>, product systems and <em>AI engineering.</em></h2>
        <div className="focus-cards">
          <article data-reveal><span>01</span><Cpu /><h3>AI-enabled products</h3><p>Exploring practical AI engineering and intelligent automation that improve how digital products work.</p></article>
          <article data-reveal><span>02</span><ShoppingBag /><h3>Commerce infrastructure</h3><p>Creating the systems that make local discovery, payment, trust and delivery work as one experience.</p></article>
          <article data-reveal><span>03</span><Workflow /><h3>Scalable operations</h3><p>Designing product workflows that remain understandable as teams, users and business complexity grow.</p></article>
        </div>
      </section>

      <section className="section journey-section" id="journey">
        <div className="section-heading" data-reveal><span className="section-number">06</span><p>Journey / Always building</p><i /></div>
        <div className="journey-layout">
          <div className="journey-title" data-reveal><h2>Learning in public.<br /><em>Building in practice.</em></h2><p>A path shaped by engineering, technology, entrepreneurship and the drive to turn problems into working systems.</p></div>
          <div className="timeline">
            <article data-reveal><span>2026 — PRESENT</span><div><small>GLEENC</small><h3>Founder · Full-stack Developer · Product Strategist</h3><p>Leading the development of a multi-role social-commerce, payment and local-delivery platform.</p></div></article>
            <article data-reveal><span>2025 — PRESENT</span><div><small>TEKAGON</small><h3>Full-stack Developer · Business Strategist</h3><p>Building digital service, communication and client-operation systems for modern businesses.</p></div></article>
            <article data-reveal><span>2021 — 2022</span><div><small>WELUP DIGITAL</small><h3>Junior Developer</h3><p>Worked alongside senior developers to build and maintain APIs, research product-design decisions and strengthen the scalability of growing projects. The role developed my understanding of dependable backend work, maintainable systems and how technical choices affect a product as its users and requirements expand.</p><a className="timeline-link" href="https://www.welupdigital.com/" target="_blank" rel="noreferrer">Visit Welup Digital <ArrowUpRight size={13} /></a></div></article>
            <article data-reveal><span>CURRENT</span><div><small>FUPRE</small><h3>Chemical Engineering · 400 Level</h3><p>Strengthening analytical thinking, systems reasoning and structured problem-solving at the Federal University of Petroleum Resources, Effurun.</p></div></article>
            <article data-reveal><span>FOUNDATION</span><div><small>EDOBIT ICT ACADEMY</small><h3>Diploma in Web Design and Graphics</h3><p>The creative and technical foundation that began my journey into building for the web.</p></div></article>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-orbit" aria-hidden="true"><span /><span /><i /></div>
        <div className="contact-intro" data-reveal>
          <span className="section-number">07 / CONTACT</span>
          <h2>Have an opportunity<br />or problem worth <em>solving?</em></h2>
          <p>I&apos;m available for remote full-stack roles, technology projects and selected freelance collaborations.</p>
          <div className="contact-direct"><a href="mailto:ugedestiny6@gmail.com"><Mail size={17} /> ugedestiny6@gmail.com</a><span><MapPin size={17} /> Warri, Nigeria · Remote worldwide</span></div>
          <div className="social-links"><a href="https://www.linkedin.com/in/uge-destiny" target="_blank" rel="noreferrer"><BriefcaseBusiness /> LinkedIn</a><a href="https://github.com/Uge-dev" target="_blank" rel="noreferrer"><Code2 /> GitHub</a><a href="https://www.tiktok.com/@ugedestiny?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer"><Video /> TikTok</a></div>
        </div>
        <form className="contact-form" onSubmit={submitContact} data-reveal>
          <div className="form-row"><label><span>Your name</span><input name="name" placeholder="What should I call you?" minLength={2} maxLength={80} required /></label><label><span>Email address</span><input name="email" type="email" placeholder="you@company.com" maxLength={160} required /></label></div>
          <div className="form-row"><label><span>Company <small>(optional)</small></span><input name="company" placeholder="Where are you building?" maxLength={120} /></label><label><span>What are we discussing?</span><select name="projectType" defaultValue="Remote opportunity"><option>Remote opportunity</option><option>Freelance project</option><option>Startup collaboration</option><option>Product strategy</option><option>General enquiry</option></select></label></div>
          <label className="full-field"><span>Tell me about it</span><textarea name="message" placeholder="Share the role, project or problem you want to solve…" minLength={20} maxLength={2000} required /></label>
          <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
          <div className="form-footer"><p aria-live="polite" className={`form-status ${formState}`}>{formMessage || "I usually reply as soon as I can."}</p><button className="button submit-button" type="submit" disabled={formState === "sending"}>{formState === "sending" ? "Sending…" : formState === "success" ? <><CheckCircle2 size={17} /> Message sent</> : <>Send message <Send size={16} /></>}</button></div>
        </form>
      </section>

      <footer>
        <a className="monogram footer-monogram" href="#top"><span>U</span>D<i>.</i></a>
        <p>FULL-STACK DEVELOPER · BUSINESS STRATEGIST</p>
        <span>© 2026 UGE DESTINY ENANEFE</span>
        <a href="#top">Back to top <ArrowUpRight size={14} /></a>
      </footer>
    </main>
  );
}
