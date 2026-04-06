/*
 * AGENTIX — /pricing
 */

import { useState } from "react";
import { Bot, Check, ChevronRight, Zap, Shield, Building2 } from "lucide-react";

function openDemoModal() { window.dispatchEvent(new CustomEvent("demo:open")); }

const plans = [
  {
    name: "Starter",
    price: { monthly: 499, annual: 399 },
    desc: "For growing teams ready to automate support",
    icon: Zap,
    color: "#2563EB",
    features: [
      "Up to 5,000 conversations/month",
      "1 AI Agent",
      "WhatsApp & email channels",
      "Basic CRM integration",
      "Email support",
      "Standard analytics",
    ],
    cta: "Start free trial",
  },
  {
    name: "Growth",
    price: { monthly: 1999, annual: 1599 },
    desc: "For scaling businesses with high conversation volume",
    icon: Shield,
    color: "#8b5cf6",
    popular: true,
    features: [
      "Up to 50,000 conversations/month",
      "5 AI Agents",
      "All channels (WhatsApp, email, chat, voice)",
      "Full CRM & helpdesk integration",
      "Priority support",
      "Advanced analytics & reporting",
      "Custom AI training",
      "Multi-language support (40+)",
    ],
    cta: "Start free trial",
  },
  {
    name: "Enterprise",
    price: { monthly: null, annual: null },
    desc: "For large organizations with custom requirements",
    icon: Building2,
    color: "#f59e0b",
    features: [
      "Unlimited conversations",
      "Unlimited AI Agents",
      "Custom channel integrations",
      "Dedicated account manager",
      "SLA guarantees",
      "On-premise deployment option",
      "Custom AI model fine-tuning",
      "SOC 2 & GDPR compliance",
      "White-label option",
    ],
    cta: "Contact sales",
  },
];

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
          <a href="/pricing" className="nav-link" style={{ color: "white" }}>Pricing</a>
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

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <div className="min-h-screen bg-[#050508]">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 text-center container mx-auto px-4">
        <div className="label-tag mb-5 mx-auto w-fit">Pricing</div>
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
          Simple, transparent pricing
        </h1>
        <p className="text-xl text-white/50 max-w-2xl mx-auto mb-10" style={{ fontFamily: "Inter, sans-serif" }}>
          No hidden fees. No per-seat surprises. Pay for what you use and scale as you grow.
        </p>

        {/* Toggle */}
        <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-1.5">
          <button
            onClick={() => setAnnual(false)}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${!annual ? "bg-white text-[#050508]" : "text-white/50 hover:text-white"}`}
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${annual ? "bg-white text-[#050508]" : "text-white/50 hover:text-white"}`}
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Annual
            <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">-20%</span>
          </button>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-24 container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const price = annual ? plan.price.annual : plan.price.monthly;
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 border flex flex-col ${
                  plan.popular
                    ? "bg-gradient-to-b from-[#1e3a8a]/30 to-[#2563EB]/10 border-[#2563EB]/50"
                    : "bg-white/4 border-white/8"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2563EB] text-white text-xs font-bold px-4 py-1 rounded-full" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    Most Popular
                  </div>
                )}
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: `${plan.color}20` }}>
                  <Icon size={20} style={{ color: plan.color }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{plan.name}</h3>
                <p className="text-white/40 text-sm mb-6" style={{ fontFamily: "Inter, sans-serif" }}>{plan.desc}</p>

                <div className="mb-8">
                  {price !== null ? (
                    <>
                      <span className="text-5xl font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>${price.toLocaleString()}</span>
                      <span className="text-white/40 text-sm ml-2">/month</span>
                      {annual && <p className="text-green-400 text-xs mt-1">Billed annually</p>}
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Custom</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check size={15} className="text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/60 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={plan.name === "Enterprise" ? openDemoModal : openDemoModal}
                  className={`w-full py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                    plan.popular
                      ? "bg-[#2563EB] hover:bg-[#1d4ed8] text-white"
                      : "border border-white/20 text-white hover:bg-white/8"
                  }`}
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {plan.cta} <ChevronRight size={14} />
                </button>
              </div>
            );
          })}
        </div>

        <p className="text-center text-white/30 text-sm mt-10" style={{ fontFamily: "Inter, sans-serif" }}>
          All plans include a 14-day free trial. No credit card required.
        </p>
      </section>

      {/* FAQ */}
      <section className="section-light py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-[#050508] text-center mb-12" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Frequently asked questions</h2>
          {[
            { q: "What counts as a conversation?", a: "A conversation is a single support interaction from start to resolution, regardless of how many messages it takes. We never charge per message." },
            { q: "Can I switch plans later?", a: "Yes, you can upgrade or downgrade at any time. Upgrades take effect immediately; downgrades apply at the next billing cycle." },
            { q: "Is there a free trial?", a: "All paid plans come with a 14-day free trial — no credit card needed. You'll get full access to all features for your chosen plan." },
            { q: "What integrations are included?", a: "We integrate with Salesforce, HubSpot, Zendesk, Freshdesk, Intercom, and 50+ other tools. Enterprise customers can request custom integrations." },
            { q: "Do you offer volume discounts?", a: "Yes. Enterprise plans are fully custom-priced based on your volume. Contact our sales team to discuss pricing for high-volume deployments." },
          ].map(({ q, a }) => (
            <div key={q} className="border-b border-gray-200 py-6">
              <h4 className="text-[#050508] font-semibold mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{q}</h4>
              <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050508] text-center py-8 border-t border-white/8">
        <p className="text-white/30 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
          © 2025 Agentix Technologies Ltd. · <a href="/" className="hover:text-white/60">Home</a> · <a href="/company" className="hover:text-white/60">Company</a>
        </p>
      </footer>
    </div>
  );
}
