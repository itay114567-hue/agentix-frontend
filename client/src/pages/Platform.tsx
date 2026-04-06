/*
 * AGENTIX — /platform
 */

import { Bot, Zap, Shield, Globe, BarChart3, Settings, ArrowRight, Check, MessageSquare, Mail, PhoneCall, Brain, Database, Lock } from "lucide-react";

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
          <a href="/platform" className="nav-link" style={{ color: "white" }}>Platform</a>
          <a href="/use-cases" className="nav-link">Use Cases</a>
          <a href="/pricing" className="nav-link">Pricing</a>
          <a href="/company" className="nav-link">Company</a>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a href="/login" className="btn-outline-white text-sm py-2 px-5">Log in</a>
          <button onClick={openDemoModal} className="btn-primary text-sm py-2 px-5">Get a demo</button>
        </div>
      </div>
    </nav>
  );
}

const layers = [
  {
    icon: Brain,
    color: "#2563EB",
    title: "AI Engine",
    subtitle: "Powered by GPT-4 + proprietary models",
    desc: "Our multi-model architecture routes each conversation to the best AI model for the task — balancing speed, cost, and accuracy in real time.",
    points: ["Intent classification", "Sentiment detection", "Context memory", "Multilingual (40+ languages)"],
  },
  {
    icon: MessageSquare,
    color: "#8b5cf6",
    title: "Omnichannel Inbox",
    subtitle: "Every channel, one platform",
    desc: "Handle WhatsApp, email, live chat, voice, SMS, and social DMs from a single AI-powered inbox — with no channel getting left behind.",
    points: ["WhatsApp Business API", "Email & SMS", "Live chat widget", "Voice & IVR integration"],
  },
  {
    icon: Database,
    color: "#10b981",
    title: "Knowledge & Memory",
    subtitle: "Context-aware, always accurate",
    desc: "Connect your CRM, help center, product catalog, and internal docs. Every agent knows your business as well as your best employee.",
    points: ["CRM sync (Salesforce, HubSpot)", "Help center integration", "Custom knowledge base", "Real-time data access"],
  },
  {
    icon: BarChart3,
    color: "#f59e0b",
    title: "Analytics & Reporting",
    subtitle: "Measure what matters",
    desc: "Track resolution rates, CSAT, response times, escalation rates, and cost savings. Export reports or push to your BI stack.",
    points: ["Real-time dashboards", "CSAT tracking", "Escalation analysis", "ROI reporting"],
  },
  {
    icon: Lock,
    color: "#ef4444",
    title: "Security & Compliance",
    subtitle: "Enterprise-grade trust",
    desc: "Agentix is SOC 2 Type II certified, GDPR-compliant, and supports data residency in EU, US, and APAC regions.",
    points: ["SOC 2 Type II", "GDPR & CCPA compliant", "Data encryption at rest & in transit", "Audit logs & SSO"],
  },
];

export default function Platform() {
  return (
    <div className="min-h-screen bg-[#050508]">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 text-center container mx-auto px-4">
        <div className="label-tag mb-5 mx-auto w-fit">The Platform</div>
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
          Built for enterprise-scale<br />customer service
        </h1>
        <p className="text-xl text-white/50 max-w-2xl mx-auto mb-10" style={{ fontFamily: "Inter, sans-serif" }}>
          Every layer of the Agentix platform is designed to handle millions of interactions without breaking a sweat.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button onClick={openDemoModal} className="btn-primary py-3.5 px-8 text-base flex items-center gap-2">
            See it live <ArrowRight size={16} />
          </button>
          <a href="/pricing" className="btn-outline-white py-3.5 px-8 text-base">View pricing</a>
        </div>
      </section>

      {/* Platform layers */}
      <section className="pb-24 container mx-auto px-4 max-w-5xl">
        <div className="space-y-6">
          {layers.map((layer, i) => {
            const Icon = layer.icon;
            return (
              <div key={layer.title} className={`rounded-2xl border border-white/8 p-8 flex flex-col lg:flex-row gap-8 ${i % 2 === 1 ? "bg-white/3" : "bg-white/2"}`}>
                <div className="lg:w-2/5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: `${layer.color}20` }}>
                    <Icon size={22} style={{ color: layer.color }} />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: layer.color, fontFamily: "Inter, sans-serif" }}>{layer.subtitle}</p>
                  <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{layer.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{layer.desc}</p>
                </div>
                <div className="lg:w-3/5 flex items-center">
                  <ul className="grid grid-cols-2 gap-3 w-full">
                    {layer.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 bg-white/4 rounded-xl px-4 py-3">
                        <Check size={14} style={{ color: layer.color }} className="flex-shrink-0" />
                        <span className="text-white/70 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section-light py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#050508] mb-5" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Ready to see the platform in action?</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Book a 30-minute demo and we'll show you exactly how Agentix works with your stack.
          </p>
          <button onClick={openDemoModal} className="btn-primary py-4 px-10 text-base">Book a demo →</button>
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
