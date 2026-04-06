/*
 * AGENTIX — /company
 */

import { Bot, Users, Globe, Zap, Heart, ArrowRight, Linkedin } from "lucide-react";

function openDemoModal() { window.dispatchEvent(new CustomEvent("demo:open")); }

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050508]/95 backdrop-blur-md border-b border-white/8">
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="/" className="flex items-center gap-2.5 text-white no-underline">
          <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center">
            <Bot size={18} className="text-white" />
          </div>
          <span className="text-xl font-bold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>agentix</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="/platform" className="nav-link">Platform</a>
          <a href="/use-cases" className="nav-link">Use Cases</a>
          <a href="/pricing" className="nav-link">Pricing</a>
          <a href="/company" className="nav-link" style={{ color: "white" }}>Company</a>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a href="/login" className="btn-outline-white text-sm py-2 px-5">Log in</a>
          <button onClick={openDemoModal} className="btn-primary text-sm py-2 px-5">Get a demo</button>
        </div>
      </div>
    </nav>
  );
}

const values = [
  { icon: Zap, color: "#2563EB", title: "Move fast, stay honest", desc: "We ship quickly, admit mistakes, and always tell customers what we're building next." },
  { icon: Users, color: "#8b5cf6", title: "Customer obsession", desc: "Every product decision starts with one question: does this make our customers' customers happier?" },
  { icon: Globe, color: "#10b981", title: "Think global from day one", desc: "We build for 40+ languages and every timezone because great support doesn't stop at borders." },
  { icon: Heart, color: "#ef4444", title: "Human + AI, not AI vs Human", desc: "We believe AI should handle routine work so humans can focus on empathy, creativity, and judgment." },
];

const team = [
  { name: "Maya Cohen", role: "CEO & Co-Founder", bg: "#2563EB", initials: "MC", bio: "Previously VP Product at Zendesk. 12 years building CX tools." },
  { name: "Daniel Levi", role: "CTO & Co-Founder", bg: "#8b5cf6", initials: "DL", bio: "Ex-Google Brain. PhD in NLP from Technion." },
  { name: "Noa Shapiro", role: "Chief Revenue Officer", bg: "#10b981", initials: "NS", bio: "15 years scaling SaaS companies from seed to IPO." },
  { name: "Avi Mizrahi", role: "Head of AI Research", bg: "#f59e0b", initials: "AM", bio: "Former research scientist at OpenAI and Microsoft Research." },
  { name: "Rachel Ben-David", role: "VP Engineering", bg: "#ef4444", initials: "RB", bio: "Built distributed systems at AWS and Meta before joining Agentix." },
  { name: "Tal Ofer", role: "Head of Design", bg: "#06b6d4", initials: "TO", bio: "Designed products used by 50M+ users across 3 continents." },
];

const milestones = [
  { year: "2021", event: "Agentix founded in Tel Aviv" },
  { year: "2022", event: "Seed round: $4M. First 10 enterprise customers." },
  { year: "2023", event: "Series A: $22M. Launched voice AI channel." },
  { year: "2024", event: "Reached 1M conversations/day. Opened London & NYC offices." },
  { year: "2025", event: "Series B: $65M. Expanding to APAC & LATAM." },
];

export default function Company() {
  return (
    <div className="min-h-screen bg-[#050508]">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 container mx-auto px-4 max-w-4xl text-center">
        <div className="label-tag mb-5 mx-auto w-fit">About Agentix</div>
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
          We believe support should never feel like support
        </h1>
        <p className="text-xl text-white/50 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
          Agentix was founded in 2021 by a team obsessed with one idea: what if every customer interaction could be as fast, helpful, and human as talking to your best friend who happens to know everything?
        </p>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "1M+", label: "Conversations per day" },
              { value: "500+", label: "Enterprise customers" },
              { value: "40+", label: "Languages supported" },
              { value: "$65M", label: "Series B raised" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-4xl font-bold text-white mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{value}</p>
                <p className="text-white/40 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Our mission</h2>
        <p className="text-white/60 text-lg leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
          To make every customer feel like a VIP — at any scale, in any language, at any hour. We do this by building AI agents that don't just answer questions, but <em className="text-white not-italic font-semibold">actually solve problems</em>.
        </p>
      </section>

      {/* Values */}
      <section className="pb-24 container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-white text-center mb-12" style={{ fontFamily: "Space Grotesk, sans-serif" }}>What we believe</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {values.map(({ icon: Icon, color, title, desc }) => (
            <div key={title} className="bg-white/4 border border-white/8 rounded-2xl p-6 flex gap-5">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${color}20` }}>
                <Icon size={20} style={{ color }} />
              </div>
              <div>
                <h4 className="text-white font-bold mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{title}</h4>
                <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white/2 border-y border-white/8">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Our journey</h2>
          <div className="relative">
            <div className="absolute left-[72px] top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-8">
              {milestones.map(({ year, event }) => (
                <div key={year} className="flex items-start gap-6">
                  <span className="w-16 text-right text-[#2563EB] font-bold text-sm flex-shrink-0 pt-0.5" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{year}</span>
                  <div className="w-3 h-3 rounded-full bg-[#2563EB] mt-1.5 flex-shrink-0 relative z-10" />
                  <p className="text-white/70 text-sm pt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>{event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-white text-center mb-3" style={{ fontFamily: "Space Grotesk, sans-serif" }}>The team</h2>
        <p className="text-white/40 text-center mb-12 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>Building the future of customer experience, one interaction at a time.</p>
        <div className="grid md:grid-cols-3 gap-5">
          {team.map(({ name, role, bg, initials, bio }) => (
            <div key={name} className="bg-white/4 border border-white/8 rounded-2xl p-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg mb-4" style={{ background: bg, fontFamily: "Space Grotesk, sans-serif" }}>
                {initials}
              </div>
              <h4 className="text-white font-bold mb-0.5" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{name}</h4>
              <p className="text-[#2563EB] text-xs font-semibold mb-3" style={{ fontFamily: "Inter, sans-serif" }}>{role}</p>
              <p className="text-white/40 text-xs leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join us */}
      <section className="section-light py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#050508] mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>We're hiring</h2>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Join a team of 85 people across Tel Aviv, London, and New York building the future of customer experience.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button onClick={openDemoModal} className="btn-primary py-3.5 px-8">See open roles →</button>
            <a href="https://linkedin.com/company/agentix-ai" target="_blank" rel="noopener noreferrer" className="btn-outline-dark py-3.5 px-8 flex items-center gap-2">
              <Linkedin size={16} /> Follow us
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#050508] text-center py-8 border-t border-white/8">
        <p className="text-white/30 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
          © 2025 Agentix Technologies Ltd. · <a href="/" className="hover:text-white/60">Home</a> · <a href="/pricing" className="hover:text-white/60">Pricing</a>
        </p>
      </footer>
    </div>
  );
}
