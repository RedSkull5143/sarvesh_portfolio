"use client";
import { useState, useEffect } from "react";

/* ═══════════════════════════ DATA ═══════════════════════════ */

const EXPERIENCE = [
  {
    company: "DP World",
    location: "Mumbai",
    roles: [
      {
        title: "Consultant – Talent Acquisition (GCC)",
        period: "December 2025 – Present",
        current: true,
      },
      {
        title: "Consultant – Corporate Talent Acquisition (SCO)",
        period: "May 2024 – November 2025",
        current: false,
      },
    ],
    subtitle: "Global Logistics Giant – PAN India & GCC Hiring",
    tools: ["Oracle Fusion HCM", "LinkedIn Recruiter", "Naukri", "NaukriGulf", "Excel Dashboards", "ATS & MIS Reporting"],
    highlights: [
      "Led end-to-end recruitment for corporate, commercial, and operational roles across PAN India and GCC markets (UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain) — managing 80+ positions annually across mid to senior levels.",
      "Partnered with CXOs, functional heads, and hiring managers to translate workforce plans into actionable hiring strategies, improving time-to-hire by ~10% through proactive pipeline creation.",
      "Closed leadership and niche mandates with compensation up to INR 12 million, demonstrating strong market mapping and strategic candidate engagement.",
      "Spearheaded campus recruitment by collaborating with premier institutes — managing pre-placement engagement, assessments, and onboarding for an early-talent pipeline.",
      "Leveraged Oracle Fusion HCM for requisition management, interview workflows, offer processing, onboarding coordination, and MIS reporting with real-time dashboards for leadership.",
      "Transitioned from SCO to GCC hiring based on performance and aspiration.",
    ],
  },
  {
    company: "Mahindra Logistics Ltd.",
    location: "Mumbai",
    roles: [
      {
        title: "Assistant Manager – Talent Acquisition",
        period: "October 2022 – April 2024",
        current: false,
      },
    ],
    subtitle: "Leading Integrated 3PL Solutions Provider – PAN India",
    tools: ["Oracle Fusion", "Darwinbox", "HRMIS", "Excel", "OnGrid"],
    highlights: [
      "Supported workforce planning and manpower requirements for corporate and business verticals across PAN India, aligning hiring plans with operational needs.",
      "Owned end-to-end recruitment governance, ensuring adherence to internal hiring policies, approvals, documentation, and compliance standards.",
      "Coordinated employee onboarding and pre-joining processes with HR operations, payroll, and IT teams for a seamless new joiner experience.",
      "Actively contributed to diversity & inclusion hiring initiatives and special hiring drives across metro locations.",
      "Generated and analysed HR MIS and analytics reports covering hiring progress, headcount, attrition trends, and recruitment efficiency.",
    ],
  },
  {
    company: "SYHR Consulting Pvt. Ltd.",
    location: "Mumbai",
    roles: [
      {
        title: "HR Intern → HR Generalist",
        period: "March 2021 – October 2022",
        current: false,
      },
    ],
    subtitle: "HR Advisory & Consulting – BFSI, Retail, ITS clients",
    tools: ["Oracle Fusion", "SAP", "Zoho", "Workday", "MS Excel"],
    highlights: [
      "Supported end-to-end employee lifecycle management across multiple client accounts — onboarding, confirmation, transfers, and exits.",
      "Acted as first point of contact for employee HR queries, ensuring uniform application of people practices across client organisations.",
      "Maintained HRIS and employee documentation across Oracle Fusion, SAP, Zoho, and Workday, ensuring audit readiness and compliance.",
      "Generated HR MIS and analytical reports including headcount, attrition, leave trends, and compliance trackers using MS Excel.",
      "Transitioned from HR Intern to HR Generalist based on performance and aspiration.",
    ],
  },
];

const EDUCATION = [
  { degree: "E-PGDM", spec: "HRM & IR", type: "Executive", institute: "Tata Institute of Social Sciences", year: "2023–2025" },
  { degree: "Diploma", spec: "HRM", type: "Distance", institute: "SVKM's NMIMS", year: "2021–2022" },
  { degree: "M.Com", spec: "Business Management", type: "Full Time", institute: "Ghanshyamdas Saraf College", year: "2019–2021" },
  { degree: "B.Com", spec: "General", type: "Full Time", institute: "Ghanshyamdas Saraf College", year: "2016–2019" },
];

const AWARDS = [
  { icon: "⭐", title: "Star of the Month", org: "Mahindra Logistics Ltd.", year: "Oct 2023", desc: "Felicitated by CHRO for outstanding performance in talent acquisition." },
  { icon: "🏆", title: "Spot Award – Going the Extra Mile", org: "Mahindra Logistics Ltd.", year: "Mar 2023", desc: "For sourcing talented resources for the operations team FY'22-23." },
  { icon: "📊", title: "Spot Award – Making Difference", org: "Mahindra Logistics Ltd.", year: "Jul 2023", desc: "Recognised for TA Analytics for PAN India hiring, FY 22-23." },
  { icon: "📈", title: "Spot Award – Great Job", org: "Mahindra Logistics Ltd.", year: "Feb 2023", desc: "For Recruitment Dashboards and Analytics, FY'22-23." },
  { icon: "🤝", title: "Best Team Player", org: "Mahindra Logistics Ltd.", year: "Mar 2023", desc: "Spot Recognition Program for collaborative performance." },
  { icon: "💼", title: "Leadership Mandate Closure", org: "DP World", year: "FY'25-26", desc: "Successfully closed a key leadership role at INR 12M — demonstrating strategic candidate engagement for niche roles." },
];

const SKILLS_HR = [
  "End-to-End Recruitment", "Talent Acquisition Strategy", "GCC & PAN India Hiring",
  "Campus Hiring", "Leadership & Niche Mandates", "Stakeholder Management",
  "Vendor Management", "Diversity, Equity & Inclusion", "Head Hunting",
  "Talent Mapping", "Sourcing & Screening", "Selection & Coordination",
];

const SKILLS_TECH = [
  "Oracle Fusion HCM", "Darwinbox", "LinkedIn Recruiter", "Naukri.com",
  "NaukriGulf.com", "IIMjobs.com", "OnGrid", "MS Office Suite",
  "Google Sheets", "Excel Dashboards", "ATS & MIS Reporting", "HRMIS",
];

const STATS = [
  { num: "5+", label: "Years in Talent Acquisition" },
  { num: "80+", label: "Positions Managed Annually" },
  { num: "7", label: "GCC Countries Covered" },
  { num: "6", label: "Awards & Recognitions" },
];

/* ═══════════════════════════ ICONS ═══════════════════════════ */

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* ═══════════════════════════ NAV ═══════════════════════════ */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-logo">Sarvesh <span>Pawar</span></a>
        <div className="nav-links">
          {[["About", "#about"], ["Experience", "#experience"], ["Skills", "#skills"], ["Education", "#education"], ["Awards", "#awards"], ["Contact", "#contact"]].map(([l, h]) => (
            <a key={h} href={h} className="nav-link">{l}</a>
          ))}
        </div>
        <a href="mailto:hr.sarveshpawar@gmail.com" className="nav-cta hide-mobile">
          <MailIcon /> Get in Touch
        </a>
      </div>
    </nav>
  );
}

/* ═══════════════════════════ HERO ═══════════════════════════ */

function Hero() {
  return (
    <section id="top" style={{ paddingTop: "8rem", paddingBottom: "5rem", background: "linear-gradient(160deg, #faf8f5 60%, #f5f0e8 100%)", position: "relative", overflow: "hidden" }}>
      {/* Background ornament */}
      <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", background: "radial-gradient(ellipse at top right, rgba(212,160,23,0.09) 0%, transparent 60%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "280px", height: "280px", borderRadius: "50%", border: "1px solid rgba(184,134,11,0.12)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-30px", left: "-30px", width: "180px", height: "180px", borderRadius: "50%", border: "1px solid rgba(184,134,11,0.18)", pointerEvents: "none" }} />

      <div className="container">
        <div className="hero-cols" style={{ display: "flex", gap: "3rem", alignItems: "center" }}>
          {/* Left */}
          <div style={{ flex: 1 }}>
            <div className="eyebrow anim-fade-in">Human Resources · Talent Acquisition</div>

            <h1 className="anim-fade-up d1" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.8rem, 6vw, 4.5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, color: "var(--fg)", marginBottom: "0.25rem" }}>
              Sarvesh
            </h1>
            <h1 className="anim-fade-up d2" style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.8rem, 6vw, 4.5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, color: "var(--gold)", marginBottom: "1.5rem", fontStyle: "italic" }}>
              S. Pawar
            </h1>

            <p className="anim-fade-up d3" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)", color: "var(--fg-muted)", maxWidth: "540px", lineHeight: 1.8, marginBottom: "2rem" }}>
              Talent Acquisition professional with <strong style={{ color: "var(--fg)", fontWeight: 600 }}>5+ years of experience</strong> across logistics, 3PL, retail, and consulting. Specialising in GCC hiring, end-to-end recruitment, TA analytics, campus hiring, and leadership mandates — delivering data-driven talent solutions.
            </p>

            {/* Specialty tags */}
            <div className="anim-fade-up d3" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
              {["GCC Hiring", "Leadership Mandates", "TA Analytics", "Campus Recruitment", "Oracle Fusion HCM"].map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>

            {/* CTAs */}
            <div className="anim-fade-up d4 btn-row" style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
              <a href="https://www.linkedin.com/in/sarveshpawar" target="_blank" rel="noreferrer" className="btn-gold">
                <LinkedinIcon /> LinkedIn Profile
              </a>
              <a href="mailto:hr.sarveshpawar@gmail.com" className="btn-outline-gold">
                <MailIcon /> Email Me
              </a>
              <a href="#experience" className="btn-outline-gold">
                View Experience →
              </a>
            </div>

            {/* Contact chips */}
            <div className="anim-fade-up d5" style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", marginTop: "2rem", paddingTop: "1.75rem", borderTop: "1px solid var(--border)" }}>
              {[
                // { icon: <PhoneIcon />, val: "+91 8291647164 / 9970073357" },
                { icon: <MailIcon />, val: "hr.sarveshpawar@gmail.com" },
                { icon: <MapIcon />, val: "Mumbai, India" },
              ].map((c) => (
                <div key={c.val} style={{ display: "flex", alignItems: "center", gap: "0.45rem", fontSize: "0.82rem", color: "var(--fg-muted)" }}>
                  <span style={{ color: "var(--gold)" }}>{c.icon}</span>
                  {c.val}
                </div>
              ))}
            </div>
          </div>

          {/* Right — stat block */}
          <div className="anim-fade-in d4 hide-mobile" style={{ flexShrink: 0, width: "280px" }}>
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "12px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.07)" }}>
              <div style={{ background: "var(--gold)", padding: "1.25rem 1.5rem" }}>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 600, color: "#fff", opacity: 0.9 }}>Career at a Glance</p>
              </div>
              <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {STATS.map((s) => (
                  <div key={s.num} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div className="stat-num">{s.num}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ padding: "1rem 1.5rem", borderTop: "1px solid var(--border)", background: "var(--bg-warm)", fontSize: "0.78rem", color: "var(--fg-light)", fontStyle: "italic" }}>
                Currently: DP World — GCC Hiring
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ ABOUT ═══════════════════════════ */

function About() {
  return (
    <section id="about" style={{ padding: "5rem 0", background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="container">
        <div className="eyebrow">Profile</div>
        <h2 className="section-title">Building Talent Pipelines<br /><em style={{ fontWeight: 400, color: "var(--fg-muted)" }}>that move organisations forward</em></h2>
        <div className="gold-divider" />

        <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "3rem", alignItems: "start" }}>
          <div>
            <p style={{ color: "var(--fg-muted)", fontSize: "1rem", lineHeight: 1.9, marginBottom: "1.25rem" }}>
              I am a Talent Acquisition professional with over 5 years of experience spanning logistics, 3PL, retail, and HR consulting. My career has been built on partnering with senior stakeholders to design and execute hiring strategies that align people with business goals — at speed and with precision.
            </p>
            <p style={{ color: "var(--fg-muted)", fontSize: "1rem", lineHeight: 1.9 }}>
              From managing 80+ positions annually at a global logistics giant to closing leadership mandates at INR 12 million, I bring both the strategic mindset and operational rigour needed to deliver talent outcomes. I am equally comfortable with GCC international hiring, campus engagement, high-volume drives, and data-driven TA dashboards.
            </p>
          </div>

          <div>
            <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--fg-light)", marginBottom: "1rem" }}>Core Strengths</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {[
                "End-to-end recruitment across corporate, commercial & operational roles",
                "GCC & international hiring (UAE, KSA, Qatar, Oman, Kuwait, Bahrain)",
                "Stakeholder management — CXO to functional heads",
                "TA analytics, dashboards & Oracle Fusion HCM",
                "Campus hiring, leadership mandates & diversity initiatives",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.9rem", color: "var(--fg-muted)", lineHeight: 1.6 }}>
                  <span style={{ color: "var(--gold)", marginTop: "3px", flexShrink: 0 }}><CheckIcon /></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile stats */}
        <div className="stat-row" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", marginTop: "3rem", background: "var(--border)", border: "1px solid var(--border)", borderRadius: "8px", overflow: "hidden" }}>
          {STATS.map((s) => (
            <div key={s.num} style={{ background: "var(--bg-card)", padding: "1.25rem 1rem", textAlign: "center" }}>
              <div className="stat-num" style={{ fontSize: "2rem", textAlign: "center" }}>{s.num}</div>
              <div className="stat-label" style={{ textAlign: "center" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ EXPERIENCE ═══════════════════════════ */

function Experience() {
  return (
    <section id="experience" style={{ padding: "5rem 0" }}>
      <div className="container">
        <div className="eyebrow">Career</div>
        <h2 className="section-title">Professional Experience</h2>
        <div className="gold-divider" />

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="card" style={{ borderLeft: "3px solid var(--gold-border)", paddingLeft: "2rem", position: "relative" }}>
              {/* Gold left accent */}
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "3px", background: i === 0 ? "var(--gold)" : "var(--gold-border)", borderRadius: "0 0 0 8px" }} />

              {/* Header */}
              <div className="exp-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem", gap: "1rem" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap", marginBottom: "0.25rem" }}>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 700, color: "var(--fg)" }}>{exp.company}</h3>
                    {i === 0 && (
                      <span style={{ fontSize: "0.68rem", fontWeight: 600, padding: "0.2rem 0.65rem", background: "rgba(184,134,11,0.12)", color: "var(--gold)", border: "1px solid var(--gold-border)", borderRadius: "99px", letterSpacing: "0.05em" }}>
                        Current
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "var(--fg-light)", fontStyle: "italic" }}>{exp.subtitle}</p>
                </div>
                <span style={{ fontSize: "0.8rem", color: "var(--fg-light)", flexShrink: 0 }}>{exp.location}</span>
              </div>

              {/* Roles */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem", marginBottom: "1.25rem" }}>
                {exp.roles.map((r, j) => (
                  <div key={j} style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", alignItems: "center" }}>
                    <span style={{ fontSize: "0.9rem", fontWeight: 600, color: j === 0 ? "var(--gold)" : "var(--slate-light)" }}>{r.title}</span>
                    <span style={{ fontSize: "0.78rem", color: "var(--fg-light)", background: "var(--bg-warm)", padding: "0.2rem 0.65rem", borderRadius: "3px", border: "1px solid var(--border)" }}>{r.period}</span>
                  </div>
                ))}
              </div>

              {/* Bullets */}
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.55rem", marginBottom: "1.25rem" }}>
                {exp.highlights.map((h, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontSize: "0.875rem", color: "var(--fg-muted)", lineHeight: 1.7 }}>
                    <span style={{ color: "var(--gold)", marginTop: "4px", flexShrink: 0 }}><CheckIcon /></span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tools */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", paddingTop: "1rem", borderTop: "1px solid var(--border)" }}>
                <span style={{ fontSize: "0.72rem", color: "var(--fg-light)", marginRight: "0.35rem", alignSelf: "center", fontWeight: 500 }}>Tools:</span>
                {exp.tools.map((t) => (
                  <span key={t} className="chip chip-slate" style={{ fontSize: "0.72rem" }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ SKILLS ═══════════════════════════ */

function Skills() {
  return (
    <section id="skills" style={{ padding: "5rem 0", background: "var(--bg-warm)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="container">
        <div className="eyebrow">Expertise</div>
        <h2 className="section-title">Skills & Toolkit</h2>
        <div className="gold-divider" />

        <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
          {/* HR Skills */}
          <div className="card">
            <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ width: "18px", height: "1.5px", background: "var(--gold)", display: "inline-block" }} />
              HR & Talent Acquisition
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {SKILLS_HR.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </div>

          {/* Tech Skills */}
          <div className="card">
            <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--slate-light)", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ width: "18px", height: "1.5px", background: "var(--slate-light)", display: "inline-block" }} />
              Technical Tools & Platforms
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {SKILLS_TECH.map((s) => (
                <span key={s} className="chip chip-slate">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ EDUCATION ═══════════════════════════ */

function Education() {
  return (
    <section id="education" style={{ padding: "5rem 0" }}>
      <div className="container">
        <div className="eyebrow">Academic Background</div>
        <h2 className="section-title">Qualifications</h2>
        <div className="gold-divider" />

        <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
          {EDUCATION.map((edu, i) => (
            <div key={i} className="card" style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "6px", background: i === 0 ? "var(--gold)" : "var(--bg-warm)", border: `1px solid ${i === 0 ? "var(--gold)" : "var(--border)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: i === 0 ? "#fff" : "var(--fg-muted)" }}>{edu.degree.slice(0, 2)}</span>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "1rem", color: "var(--fg)", marginBottom: "0.2rem" }}>{edu.degree} — {edu.spec}</div>
                <div style={{ fontSize: "0.82rem", color: "var(--fg-muted)", marginBottom: "0.35rem" }}>{edu.institute}</div>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.72rem", color: "var(--fg-light)", background: "var(--bg-warm)", padding: "0.15rem 0.55rem", borderRadius: "3px", border: "1px solid var(--border)" }}>{edu.type}</span>
                  <span style={{ fontSize: "0.72rem", color: "var(--gold)", fontWeight: 600 }}>{edu.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ AWARDS ═══════════════════════════ */

function Awards() {
  return (
    <section id="awards" style={{ padding: "5rem 0", background: "var(--bg-warm)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="container">
        <div className="eyebrow">Recognition</div>
        <h2 className="section-title">Awards & Achievements</h2>
        <div className="gold-divider" />

        <div className="three-col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
          {AWARDS.map((a, i) => (
            <div key={i} className="card" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div className="award-icon">{a.icon}</div>
                <span style={{ fontSize: "0.72rem", color: "var(--fg-light)", background: "var(--bg-warm)", padding: "0.2rem 0.55rem", border: "1px solid var(--border)", borderRadius: "3px" }}>{a.year}</span>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "0.95rem", color: "var(--fg)", marginBottom: "0.2rem" }}>{a.title}</div>
                <div style={{ fontSize: "0.78rem", color: "var(--gold)", fontWeight: 500, marginBottom: "0.5rem" }}>{a.org}</div>
                <p style={{ fontSize: "0.82rem", color: "var(--fg-muted)", lineHeight: 1.65 }}>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ CONTACT ═══════════════════════════ */

function Contact() {
  return (
    <section id="contact" style={{ padding: "5rem 0" }}>
      <div className="container">
        <div className="eyebrow">Get in Touch</div>
        <h2 className="section-title">Open to New Conversations</h2>
        <div className="gold-divider" />

        <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "3rem", alignItems: "start" }}>
          <div>
            <p style={{ color: "var(--fg-muted)", fontSize: "1rem", lineHeight: 1.85, marginBottom: "2rem" }}>
              I am open to exciting opportunities in Talent Acquisition, HR leadership, and people strategy roles — particularly those with a GCC or international hiring scope. Whether you have a role to discuss, a talent challenge to solve, or just want to connect, feel free to reach out.
            </p>
            <div className="btn-row" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="https://www.linkedin.com/in/sarveshpawar" target="_blank" rel="noreferrer" className="btn-gold">
                <LinkedinIcon /> Connect on LinkedIn
              </a>
              <a href="mailto:hr.sarveshpawar@gmail.com" className="btn-outline-gold">
                <MailIcon /> Send an Email
              </a>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { icon: <MailIcon />, label: "Email", val: "hr.sarveshpawar@gmail.com", href: "mailto:hr.sarveshpawar@gmail.com" },
              // { icon: <PhoneIcon />, label: "Phone", val: "+91 8291647164 / 9970073357", href: "tel:+918291647164" },
              { icon: <MapIcon />, label: "Location", val: "Mumbai, India", href: null },
              { icon: <LinkedinIcon />, label: "LinkedIn", val: "linkedin.com/in/sarveshpawar", href: "https://www.linkedin.com/in/sarveshpawar" },
            ].map((c) => (
              <div key={c.label} className="card" style={{ display: "flex", gap: "1rem", alignItems: "center", padding: "1rem 1.25rem" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "var(--gold-pale)", border: "1px solid var(--gold-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--gold)", flexShrink: 0 }}>
                  {c.icon}
                </div>
                <div>
                  <div style={{ fontSize: "0.7rem", color: "var(--fg-light)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>{c.label}</div>
                  {c.href ? (
                    <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" style={{ fontSize: "0.87rem", color: "var(--fg)", fontWeight: 500, textDecoration: "none", wordBreak: "break-all" }}>{c.val}</a>
                  ) : (
                    <span style={{ fontSize: "0.87rem", color: "var(--fg)", fontWeight: 500 }}>{c.val}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════ FOOTER ═══════════════════════════ */

function Footer() {
  return (
    <footer className="footer">
      <p style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 600, color: "rgba(255,255,255,0.9)", marginBottom: "0.5rem" }}>
        Sarvesh S. Pawar
      </p>
      <p style={{ marginBottom: "0.75rem" }}>Talent Acquisition Leader · Mumbai</p>
      <p>
        <a href="mailto:hr.sarveshpawar@gmail.com">hr.sarveshpawar@gmail.com</a>
      </p>
      <p style={{ marginTop: "1.5rem", opacity: 0.45, fontSize: "0.75rem" }}>© {new Date().getFullYear()} Sarvesh S. Pawar. All rights reserved.</p>
    </footer>
  );
}

/* ═══════════════════════════ PAGE ═══════════════════════════ */

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Awards />
      <Contact />
      <Footer />
    </main>
  );
}
