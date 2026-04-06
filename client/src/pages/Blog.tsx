/*
 * AGENTIX — /blog
 */

import { useState } from "react";
import { Bot, Clock, ArrowRight, Tag } from "lucide-react";

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

const posts = [
  {
    slug: "ai-customer-service-2025",
    category: "Industry",
    title: "The state of AI in customer service: 2025 report",
    excerpt: "We analyzed 12M support conversations across 500 enterprise deployments. Here's what we found about AI resolution rates, escalation patterns, and CSAT impact.",
    author: "Maya Cohen",
    date: "March 28, 2025",
    readTime: "8 min",
    featured: true,
    color: "#2563EB",
  },
  {
    slug: "cut-support-costs-70-percent",
    category: "Case Study",
    title: "How a Fortune 500 retailer cut support costs by 70% in 90 days",
    excerpt: "A major fashion brand was drowning in 50,000 tickets a month. Here's exactly how they deployed Agentix and what happened to their numbers.",
    author: "Noa Shapiro",
    date: "March 15, 2025",
    readTime: "6 min",
    color: "#10b981",
  },
  {
    slug: "whatsapp-ai-support",
    category: "Product",
    title: "Why WhatsApp is the best channel for AI support (and how to set it up)",
    excerpt: "WhatsApp has a 98% open rate. Here's a step-by-step guide to deploying an AI agent on WhatsApp Business API using Agentix.",
    author: "Daniel Levi",
    date: "March 8, 2025",
    readTime: "10 min",
    color: "#8b5cf6",
  },
  {
    slug: "multilingual-ai-support",
    category: "Product",
    title: "Speaking 40 languages: how Agentix handles multilingual support at scale",
    excerpt: "Language detection, code-switching, and cultural context — the technical decisions behind Agentix's multilingual engine.",
    author: "Avi Mizrahi",
    date: "February 22, 2025",
    readTime: "7 min",
    color: "#f59e0b",
  },
  {
    slug: "measuring-ai-support-roi",
    category: "Guide",
    title: "The definitive guide to measuring ROI on AI customer support",
    excerpt: "Which metrics actually matter? Cost per resolution, CSAT delta, escalation rate, and more — plus a free calculator template.",
    author: "Rachel Ben-David",
    date: "February 10, 2025",
    readTime: "9 min",
    color: "#ef4444",
  },
  {
    slug: "human-handoff-design",
    category: "Guide",
    title: "Designing a seamless AI-to-human handoff: best practices",
    excerpt: "The hardest part of deploying AI support isn't the AI — it's the moment it says 'I'll connect you with a human.' Here's how to get that transition right.",
    author: "Tal Ofer",
    date: "January 28, 2025",
    readTime: "5 min",
    color: "#06b6d4",
  },
];

const categories = ["All", "Industry", "Case Study", "Product", "Guide"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? posts : posts.filter((p) => p.category === activeCategory);
  const [featured, ...rest] = filtered;

  return (
    <div className="min-h-screen bg-[#050508]">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-16 text-center container mx-auto px-4">
        <div className="label-tag mb-5 mx-auto w-fit">Blog</div>
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-5" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
          Insights on AI & CX
        </h1>
        <p className="text-xl text-white/50 max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
          Research, case studies, and guides from the team building the future of customer service.
        </p>
      </section>

      {/* Category filter */}
      <section className="pb-10 container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-[#2563EB] text-white"
                  : "bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/8"
              }`}
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Posts */}
      <section className="pb-24 container mx-auto px-4 max-w-5xl">
        {/* Featured */}
        {featured && (
          <div className="bg-white/4 border border-white/10 rounded-2xl p-8 mb-6 hover:bg-white/6 transition cursor-pointer group">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: `${featured.color}20`, color: featured.color, fontFamily: "Inter, sans-serif" }}>
                {featured.category}
              </span>
              <span className="text-white/25 text-xs flex items-center gap-1" style={{ fontFamily: "Inter, sans-serif" }}>
                <Clock size={11} /> {featured.readTime} read
              </span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-[#60a5fa] transition" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              {featured.title}
            </h2>
            <p className="text-white/50 mb-6 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{featured.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: featured.color }}>
                  {featured.author[0]}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{featured.author}</p>
                  <p className="text-white/30 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>{featured.date}</p>
                </div>
              </div>
              <span className="text-[#2563EB] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Read more <ArrowRight size={14} />
              </span>
            </div>
          </div>
        )}

        {/* Rest */}
        <div className="grid md:grid-cols-2 gap-5">
          {rest.map((post) => (
            <div key={post.slug} className="bg-white/4 border border-white/10 rounded-2xl p-6 hover:bg-white/6 transition cursor-pointer group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: `${post.color}20`, color: post.color, fontFamily: "Inter, sans-serif" }}>
                  {post.category}
                </span>
                <span className="text-white/25 text-xs flex items-center gap-1" style={{ fontFamily: "Inter, sans-serif" }}>
                  <Clock size={11} /> {post.readTime} read
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#60a5fa] transition leading-snug" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                {post.title}
              </h3>
              <p className="text-white/40 text-sm mb-5 leading-relaxed line-clamp-3" style={{ fontFamily: "Inter, sans-serif" }}>{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: post.color }}>
                    {post.author[0]}
                  </div>
                  <span className="text-white/40 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>{post.author} · {post.date}</span>
                </div>
                <ArrowRight size={14} className="text-white/30 group-hover:text-[#2563EB] transition" />
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-10 bg-gradient-to-r from-[#1e3a8a]/30 to-[#2563EB]/10 border border-[#2563EB]/30 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Get the latest in your inbox</h3>
          <p className="text-white/50 text-sm mb-6" style={{ fontFamily: "Inter, sans-serif" }}>New articles every week. No spam. Unsubscribe anytime.</p>
          <div className="flex gap-3 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-white placeholder-white/25 outline-none focus:border-[#2563EB] transition text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            />
            <button className="btn-primary px-5 py-2.5 text-sm">Subscribe</button>
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
