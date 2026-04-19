/*
 * AGENTIX — /use-cases
 */

import { ShoppingCart, Plane, Heart, Building2, Wifi, Shield, ArrowRight, Check } from "lucide-react";
import { Navbar, DemoBookingModal, PageFooter, openDemoModal } from "@/components/SharedLayout";

const industries = [
  {
    icon: ShoppingCart,
    color: "#2563EB",
    name: "E-Commerce",
    headline: "Turn every shopper into a loyal customer",
    desc: "Agentix handles order tracking, returns, product questions, and post-purchase support — 24/7, in any language. Reduce support costs while improving CSAT.",
    stats: [
      { label: "Reduction in tickets", value: "73%" },
      { label: "Avg. response time", value: "0.4s" },
      { label: "CSAT improvement", value: "+28%" },
    ],
    useCases: ["Order status & tracking", "Returns & refunds", "Product recommendations", "Cart abandonment recovery", "Post-purchase follow-up"],
    quote: "We handle 40,000 conversations a month with zero additional headcount.",
    author: "Head of CX, Fashion Retailer",
  },
  {
    icon: Building2,
    color: "#8b5cf6",
    name: "Banking & Finance",
    headline: "Compliant, secure, always-on financial support",
    desc: "Handle balance inquiries, fraud alerts, account management, and loan applications — with full audit trails and regulatory compliance built in.",
    stats: [
      { label: "Cost per interaction", value: "-65%" },
      { label: "First contact resolution", value: "91%" },
      { label: "Compliance score", value: "100%" },
    ],
    useCases: ["Account balance & transactions", "Fraud detection alerts", "Loan & card applications", "KYC document collection", "Regulatory Q&A"],
    quote: "Agentix passed our compliance audit with zero issues. That never happens.",
    author: "CTO, Digital Bank",
  },
  {
    icon: Plane,
    color: "#10b981",
    name: "Travel & Hospitality",
    headline: "Delight travelers at every touchpoint",
    desc: "From booking to check-out, Agentix handles itinerary changes, cancellations, upgrades, and loyalty inquiries — in 40+ languages.",
    stats: [
      { label: "Escalations avoided", value: "81%" },
      { label: "Languages supported", value: "40+" },
      { label: "Customer satisfaction", value: "4.8/5" },
    ],
    useCases: ["Flight & hotel changes", "Cancellation & rebooking", "Loyalty program support", "Real-time travel alerts", "Multilingual assistance"],
    quote: "We now handle peak-season volume without hiring seasonal staff.",
    author: "VP Operations, Major Airline",
  },
  {
    icon: Heart,
    color: "#ef4444",
    name: "Healthcare",
    headline: "Patient-first support at any hour",
    desc: "Agentix handles appointment scheduling, symptom triage, insurance verification, and prescription inquiries — with HIPAA compliance built in.",
    stats: [
      { label: "No-show reduction", value: "34%" },
      { label: "Admin time saved", value: "60%" },
      { label: "Patient satisfaction", value: "4.9/5" },
    ],
    useCases: ["Appointment booking & reminders", "Symptom pre-screening", "Insurance verification", "Prescription refill requests", "Billing inquiries"],
    quote: "Patients get answers at 2am. Our staff focus on what only humans can do.",
    author: "CMO, Health Network",
  },
  {
    icon: Wifi,
    color: "#f59e0b",
    name: "Telecom",
    headline: "Resolve faster, churn less",
    desc: "Agentix handles billing disputes, plan changes, technical troubleshooting, and device support — reducing churn through proactive engagement.",
    stats: [
      { label: "Handle time reduction", value: "55%" },
      { label: "Churn reduction", value: "18%" },
      { label: "Self-serve resolution", value: "78%" },
    ],
    useCases: ["Bill explanation & disputes", "Plan upgrades & changes", "Network troubleshooting", "Device setup support", "Churn prevention offers"],
    quote: "We saved $2M in operational costs in our first year with Agentix.",
    author: "Director of CX, Telco",
  },
  {
    icon: Shield,
    color: "#06b6d4",
    name: "Insurance",
    headline: "Claims support that builds trust",
    desc: "Guide policyholders through claims, renewals, and coverage questions with empathetic AI that knows when to escalate to a human.",
    stats: [
      { label: "Claims processing speed", value: "+40%" },
      { label: "Customer effort score", value: "-52%" },
      { label: "Escalation rate", value: "12%" },
    ],
    useCases: ["Claims filing & status", "Policy renewal & upgrades", "Coverage Q&A", "Document collection", "Fraud detection alerts"],
    quote: "Agentix handles the routine so our adjusters can focus on complex cases.",
    author: "Head of Claims, Insurance Co.",
  },
];

export default function UseCases() {
  return (
    <div className="min-h-screen bg-[#050508]">
      <Navbar activePage="Use Cases" />

      {/* Hero */}
      <section className="pt-40 pb-20 text-center container mx-auto px-4">
        <div className="label-tag mb-5 mx-auto w-fit">Use Cases</div>
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
          Built for your industry
        </h1>
        <p className="text-xl text-white/50 max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
          Agentix adapts to the specific workflows, compliance requirements, and customer expectations of your industry.
        </p>
      </section>

      {/* Industry cards */}
      <section className="pb-24 container mx-auto px-4 max-w-6xl">
        <div className="space-y-8">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div key={ind.name} className={`rounded-2xl border border-white/8 overflow-hidden ${i % 2 === 1 ? "bg-white/3" : "bg-white/2"}`}>
                <div className="p-8 grid lg:grid-cols-2 gap-10">
                  {/* Left */}
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${ind.color}20` }}>
                        <Icon size={20} style={{ color: ind.color }} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: ind.color, fontFamily: "Inter, sans-serif" }}>{ind.name}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{ind.headline}</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-6" style={{ fontFamily: "Inter, sans-serif" }}>{ind.desc}</p>

                    {/* Stats */}
                    <div className="flex gap-6 mb-6">
                      {ind.stats.map((s) => (
                        <div key={s.label}>
                          <p className="text-2xl font-bold" style={{ fontFamily: "Space Grotesk, sans-serif", color: ind.color }}>{s.value}</p>
                          <p className="text-white/40 text-xs mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>{s.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="border-l-2 pl-4" style={{ borderColor: ind.color }}>
                      <p className="text-white/60 text-sm italic mb-1" style={{ fontFamily: "Inter, sans-serif" }}>"{ind.quote}"</p>
                      <p className="text-white/30 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>— {ind.author}</p>
                    </div>
                  </div>

                  {/* Right — use cases */}
                  <div className="flex flex-col justify-center">
                    <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4" style={{ fontFamily: "Inter, sans-serif" }}>What Agentix handles</p>
                    <ul className="space-y-3">
                      {ind.useCases.map((uc) => (
                        <li key={uc} className="flex items-center gap-3 bg-white/4 rounded-xl px-4 py-3">
                          <Check size={14} style={{ color: ind.color }} className="flex-shrink-0" />
                          <span className="text-white/70 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{uc}</span>
                        </li>
                      ))}
                    </ul>
                    <button onClick={openDemoModal} className="mt-6 self-start btn-primary py-2.5 px-6 text-sm flex items-center gap-2">
                      See {ind.name} demo <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section-light py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#050508] mb-5" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Don't see your industry?</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Agentix works across any industry with high-volume customer interactions. Talk to us about your specific use case.
          </p>
          <button onClick={openDemoModal} className="btn-primary py-4 px-10 text-base">Talk to our team →</button>
        </div>
      </section>

      <PageFooter />
      <DemoBookingModal />
    </div>
  );
}
