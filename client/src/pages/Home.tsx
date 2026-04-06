/*
 * AGENTIX — Home Page
 * Design: "Midnight Signal" — Cinematic Enterprise Dark
 * Sections: Announcement → Nav → Hero → Stats → Use Cases → Architecture → Team → Features → CTA → Footer
 */

import { useEffect, useRef, useState } from "react";
import {
  PhoneCall, MessageSquare, Mail, Globe, Shield, Zap, BarChart3,
  Settings, ChevronRight, ArrowRight, Check, Star, Users, Clock,
  TrendingUp, Bot, Headphones, Building2, ShoppingCart, Plane, Heart,
  Menu, X, ChevronDown, AlertCircle, Send
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

// ─── Modal State (global event bus) ──────────────────────────────────────────
function openDemoModal() {
  window.dispatchEvent(new CustomEvent('demo:open'));
}
function closeDemoModal() {
  window.dispatchEvent(new CustomEvent('demo:close'));
}

// ─── Image CDN URLs ────────────────────────────────────────────────────────────
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663514019459/EGdVoQeDHWtEcQKHFcZUXa/hero-bg-FzLzByiYe6bza5qYQvwW2w.webp";
const CS_AI_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663514019459/EGdVoQeDHWtEcQKHFcZUXa/customer-service-ai-hPfzUvHNsnfGjdqACdxc6i.webp";
const TEAM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663514019459/EGdVoQeDHWtEcQKHFcZUXa/team-section-8Ar769CiN5muQ9JvnHT3yt.webp";
const NETWORK_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663514019459/EGdVoQeDHWtEcQKHFcZUXa/ai-network-TrEpvnhvuyBjzjnhWusXQt.webp";

// ─── Scroll Reveal Hook ────────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── Counter Hook ──────────────────────────────────────────────────────────────
function useCounter(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// ─── Interactive Demo Section ────────────────────────────────────────────────────
function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState<'voice' | 'chat' | 'email'>('chat');
  const demoContent = {
    voice: {
      title: "Voice Support",
      description: "Natural language voice interactions with 99.7% accuracy",
      metrics: ["0.3s response time", "40+ languages", "Emotion detection"]
    },
    chat: {
      title: "Live Chat",
      description: "Real-time conversational AI across web, mobile, and messaging",
      metrics: ["Instant replies", "Context awareness", "Sentiment analysis"]
    },
    email: {
      title: "Email Automation",
      description: "Intelligent email triage and automated responses",
      metrics: ["95% accuracy", "Auto-escalation", "Template learning"]
    }
  };
  const content = demoContent[activeTab];
  return (
    <section className="section-light py-28">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="label-tag mb-4 mx-auto w-fit">Interactive Demo</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#050508] mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            See Agentix in Action
          </h2>
          <p className="text-gray-600 text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
            Experience how our AI agents handle customer interactions across all channels.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Tabs */}
          <div className="reveal">
            <div className="flex gap-3 mb-8">
              {(['voice', 'chat', 'email'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === tab
                      ? 'bg-[#2563EB] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-[#050508] mb-3" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                {content.title}
              </h3>
              <p className="text-gray-600 mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                {content.description}
              </p>
              <div className="space-y-3">
                {content.metrics.map((metric, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check size={20} className="text-[#2563EB]" />
                    <span className="text-gray-700" style={{ fontFamily: "Inter, sans-serif" }}>{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Visual Demo */}
          <div className="reveal bg-gradient-to-br from-[#2563EB]/10 to-[#2563EB]/5 rounded-xl p-8 min-h-96 flex items-center justify-center border border-[#2563EB]/20">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-4">
                {activeTab === 'voice' && <PhoneCall size={40} className="text-white" />}
                {activeTab === 'chat' && <MessageSquare size={40} className="text-white" />}
                {activeTab === 'email' && <Mail size={40} className="text-white" />}
              </div>
              <p className="text-gray-600 font-semibold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Live Demo</p>
              <p className="text-sm text-gray-500 mt-2" style={{ fontFamily: "Inter, sans-serif" }}>Interactive preview rendering in real-time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Metrics Dashboard ────────────────────────────────────────────────────────────
function MetricsDashboard() {
  const [animateMetrics, setAnimateMetrics] = useState(false);
  const clients = useCounter(500, 2000, animateMetrics);
  const resolution = useCounter(94, 2000, animateMetrics);
  const costReduction = useCounter(76, 2000, animateMetrics);
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimateMetrics(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section-dark py-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center reveal">
            <div className="text-5xl font-bold text-[#2563EB] mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              {clients}+
            </div>
            <p className="text-white/70" style={{ fontFamily: "Inter, sans-serif" }}>Enterprise Clients</p>
          </div>
          <div className="text-center reveal">
            <div className="text-5xl font-bold text-[#2563EB] mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              {resolution}%
            </div>
            <p className="text-white/70" style={{ fontFamily: "Inter, sans-serif" }}>Resolution Rate</p>
          </div>
          <div className="text-center reveal">
            <div className="text-5xl font-bold text-[#2563EB] mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              {costReduction}%
            </div>
            <p className="text-white/70" style={{ fontFamily: "Inter, sans-serif" }}>Cost Reduction</p>
          </div>
          <div className="text-center reveal">
            <div className="text-5xl font-bold text-[#2563EB] mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>24/7</div>
            <p className="text-white/70" style={{ fontFamily: "Inter, sans-serif" }}>Always Available</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Announcement Bar ─────────────────────────────────────────────────────────
function AnnouncementBar() {
  const items = [
    "🚀 Agentix raises $80M Series B to scale AI customer service globally",
    "📊 New: Real-time agent analytics dashboard now available",
    "🏆 Agentix named #1 AI Contact Center Platform by Gartner 2025",
    "🌍 Now serving 500+ enterprise clients across 40 countries",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="bg-[#2563EB] text-white text-sm py-2 overflow-hidden">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="px-12 whitespace-nowrap font-medium" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Navigation ───────────────────────────────────────────────────────────────
function Navbar({ scrolled }: { scrolled: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navBg = scrolled
    ? "bg-[#050508]/95 backdrop-blur-md border-b border-white/8"
    : "bg-transparent";

  return (
    <nav className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 text-white no-underline">
          <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center">
            <Bot size={18} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            agentix
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/platform" className="nav-link">Platform</a>
          <a href="/use-cases" className="nav-link">Use Cases</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="/company" className="nav-link">Company</a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="/login" className="btn-outline-white text-sm py-2 px-5">Log in</a>
          <button onClick={openDemoModal} className="btn-primary text-sm py-2 px-5">Get a demo</button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/10 rounded transition"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#050508]/98 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-5" role="navigation" aria-label="Mobile navigation">
          <a href="/platform" className="nav-link text-lg" onClick={() => setMobileOpen(false)}>Platform</a>
          <a href="/use-cases" className="nav-link text-lg" onClick={() => setMobileOpen(false)}>Use Cases</a>
          <a href="#features" className="nav-link text-lg" onClick={() => setMobileOpen(false)}>Features</a>
          <a href="/company" className="nav-link text-lg" onClick={() => setMobileOpen(false)}>Company</a>
          <div className="flex flex-col gap-3 pt-2">
            <a href="/login" className="btn-outline-white text-center">Log in</a>
            <button onClick={() => { setMobileOpen(false); openDemoModal(); }} className="btn-primary text-center">Get a demo</button>
          </div>
        </div>
      )}
    </nav>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  const [chatStep, setChatStep] = useState(0);

  const conversation = [
    { role: "user", text: "My order hasn't arrived yet, it's been 5 days." },
    { role: "agent", text: "I'm pulling up your order #48291 right now..." },
    { role: "agent", text: "Found it! Your package is at the local depot. Expected delivery: today by 6 PM. I've also sent you a tracking link via SMS." },
    { role: "user", text: "That's great, thank you!" },
    { role: "agent", text: "Happy to help! Is there anything else I can assist you with today?" },
  ];

  useEffect(() => {
    if (chatStep < conversation.length) {
      const delay = chatStep === 0 ? 1000 : 1500;
      const timer = setTimeout(() => setChatStep((s) => s + 1), delay);
      return () => clearTimeout(timer);
    }
  }, [chatStep]);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/70 via-[#050508]/60 to-[#050508]/90" />
      {/* Blue tint overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/10 via-transparent to-transparent" />

      <div className="container relative z-10 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Headline */}
          <div>
            <div className="label-tag mb-6" style={{ color: "#60A5FA", borderColor: "rgba(96,165,250,0.3)", background: "rgba(96,165,250,0.08)" }}>
              The AI Customer Service Platform
            </div>
            <h1
              className="text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.03em" }}
            >
              Replace your
              <br />
              <span className="shimmer-text">entire support</span>
              <br />
              team with AI.
            </h1>
            <p className="text-lg text-white/65 leading-relaxed mb-10 max-w-lg" style={{ fontFamily: "Inter, sans-serif" }}>
              Agentix deploys intelligent AI agents that handle every customer interaction — voice, chat, email, and social — at unlimited scale, 24/7, with zero wait times.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => { openDemoModal(); }}
                className="btn-primary text-base py-3.5 px-7"
              >
                Book a demo <ArrowRight size={16} />
              </button>
              <a href="#platform" className="btn-outline-white text-base py-3.5 px-7">
                See how it works
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 mt-10">
              <div className="flex -space-x-2">
                {["#3B82F6","#8B5CF6","#10B981","#F59E0B","#EF4444"].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#050508] flex items-center justify-center text-white text-xs font-bold" style={{ background: c }}>
                    {["A","B","C","D","E"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-white/50 text-xs mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
                  Trusted by 500+ enterprises
                </p>
              </div>
            </div>
          </div>

          {/* Right: Live Chat Demo */}
          <div className="hidden lg:block">
            <div className="bg-[#0D0D14]/90 backdrop-blur-xl border border-white/12 rounded-2xl overflow-hidden shadow-2xl">
              {/* Chat header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/8">
                <div className="w-9 h-9 bg-[#2563EB] rounded-full flex items-center justify-center">
                  <Bot size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    Aria — AI Support Agent
                  </p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse-dot" />
                    <span className="text-white/45 text-xs">Online · Avg response: 0.3s</span>
                  </div>
                </div>
                <div className="ml-auto flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
              </div>

              {/* Chat messages */}
              <div className="p-5 space-y-4 min-h-[280px]">
                {conversation.slice(0, chatStep).map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-in-up`}
                  >
                    {msg.role === "agent" && (
                      <div className="w-7 h-7 bg-[#2563EB] rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <Bot size={13} className="text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-white/12 text-white rounded-tr-sm"
                          : "bg-[#2563EB]/20 text-white/90 rounded-tl-sm border border-[#2563EB]/20"
                      }`}
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {chatStep < conversation.length && chatStep > 0 && (
                  <div className="flex justify-start">
                    <div className="w-7 h-7 bg-[#2563EB] rounded-full flex items-center justify-center mr-2 mt-0.5">
                      <Bot size={13} className="text-white" />
                    </div>
                    <div className="bg-[#2563EB]/20 border border-[#2563EB]/20 px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1">
                      {[0,1,2].map(i => (
                        <div key={i} className="w-1.5 h-1.5 bg-[#60A5FA] rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Chat input */}
              <div className="px-5 pb-5">
                <div className="flex items-center gap-3 bg-white/6 border border-white/10 rounded-xl px-4 py-3">
                  <span className="text-white/30 text-sm flex-1" style={{ fontFamily: "Inter, sans-serif" }}>
                    Type a message...
                  </span>
                  <div className="flex gap-2">
                    <Headphones size={16} className="text-white/30" />
                    <MessageSquare size={16} className="text-[#2563EB]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating metric */}
            <div className="mt-4 flex gap-3">
              <div className="flex-1 bg-[#0D0D14]/80 backdrop-blur border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500/15 rounded-lg flex items-center justify-center">
                  <TrendingUp size={16} className="text-green-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-none" style={{ fontFamily: "Space Grotesk, sans-serif" }}>94.7%</p>
                  <p className="text-white/45 text-xs mt-0.5">Resolution rate</p>
                </div>
              </div>
              <div className="flex-1 bg-[#0D0D14]/80 backdrop-blur border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500/15 rounded-lg flex items-center justify-center">
                  <Clock size={16} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-none" style={{ fontFamily: "Space Grotesk, sans-serif" }}>0.3s</p>
                  <p className="text-white/45 text-xs mt-0.5">Avg response</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────
function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const c1 = useCounter(500, 1800, visible);
  const c2 = useCounter(94, 1600, visible);
  const c3 = useCounter(80, 1500, visible);
  const c4 = useCounter(24, 1000, visible);

  const stats = [
    { value: `${c1}+`, label: "Enterprise clients", icon: Building2 },
    { value: `${c2}%`, label: "Resolution rate", icon: Check },
    { value: `${c3}%`, label: "Cost reduction", icon: TrendingUp },
    { value: `${c4}/7`, label: "Always available", icon: Clock },
  ];

  return (
    <div ref={ref} className="bg-white border-b border-gray-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100">
          {stats.map((stat, i) => (
            <div key={i} className="px-8 py-10 flex flex-col items-center text-center">
              <stat.icon size={20} className="text-[#2563EB] mb-3" />
              <p className="text-4xl font-bold text-[#050508] leading-none" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                {stat.value}
              </p>
              <p className="text-sm text-gray-500 mt-2" style={{ fontFamily: "Inter, sans-serif" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Use Cases Section ────────────────────────────────────────────────────────
const useCases = [
  {
    icon: Headphones,
    title: "Inbound Support",
    desc: "AI agents that handle every incoming call, chat, and email — resolving issues instantly without human intervention.",
    image: CS_AI_IMG,
    tag: "Most Popular",
  },
  {
    icon: PhoneCall,
    title: "Outbound Campaigns",
    desc: "Proactive AI agents that reach out to customers for renewals, satisfaction surveys, and upsell opportunities.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    tag: null,
  },
  {
    icon: MessageSquare,
    title: "Omnichannel Messaging",
    desc: "A unified AI agent across WhatsApp, SMS, web chat, and social media — one brain, every channel.",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    tag: null,
  },
  {
    icon: Mail,
    title: "Email & Ticket Handling",
    desc: "Intelligent triage and resolution of support tickets, with automatic escalation when human judgment is needed.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    tag: null,
  },
];

function UseCasesSection() {
  return (
    <section id="use-cases" className="section-light py-28">
      <div className="container mx-auto">
        <div className="mb-16 reveal">
          <div className="label-tag mb-4">Use Cases</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#050508] max-w-2xl leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Every customer touchpoint,<br />handled by AI.
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl text-lg leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
            From the first contact to resolution, Agentix agents operate across every channel your customers use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((uc, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl hover:shadow-blue-50 reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={uc.image}
                  alt={uc.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/80 via-[#050508]/20 to-transparent" />
                {uc.tag && (
                  <div className="absolute top-4 left-4 bg-[#2563EB] text-white text-xs font-bold px-3 py-1 rounded-full" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    {uc.tag}
                  </div>
                )}
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 bg-white/15 backdrop-blur rounded-xl flex items-center justify-center">
                    <uc.icon size={20} className="text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#050508] mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  {uc.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  {uc.desc}
                </p>
                <a href="#contact" className="inline-flex items-center gap-1.5 text-[#2563EB] text-sm font-semibold mt-4 group-hover:gap-2.5 transition-all" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  Learn more <ChevronRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Platform Architecture Section ───────────────────────────────────────────
const layers = [
  {
    name: "Conversation Layer",
    desc: "Handles voice, chat, email, and messaging across all channels with natural language understanding.",
    color: "#2563EB",
  },
  {
    name: "Intelligence Layer",
    desc: "Multi-model AI core that understands context, intent, and sentiment to deliver accurate responses.",
    color: "#3B82F6",
  },
  {
    name: "Knowledge Layer",
    desc: "Connects to your CRM, knowledge base, and business systems to answer with real company data.",
    color: "#60A5FA",
  },
  {
    name: "Orchestration Layer",
    desc: "Routes complex cases, manages escalations, and coordinates between agents and human teams.",
    color: "#93C5FD",
  },
];

function PlatformSection() {
  return (
    <section id="platform" className="section-dark py-28 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url(${NETWORK_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/80 to-[#050508]/95" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 reveal">
          <div className="label-tag mb-4" style={{ color: "#60A5FA", borderColor: "rgba(96,165,250,0.3)", background: "rgba(96,165,250,0.08)" }}>
            Architecture
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            A platform built for enterprise-scale customer service
          </h2>
          <p className="text-white/55 mt-4 max-w-xl mx-auto text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
            Every layer of the Agentix platform is designed to handle millions of interactions without breaking a sweat.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Layered diagram */}
          <div className="space-y-3 reveal">
            {layers.map((layer, i) => (
              <div
                key={i}
                className="card-feature-dark flex items-start gap-4"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `${layer.color}20`, border: `1px solid ${layer.color}30` }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ background: layer.color }} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    {layer.name}
                  </h4>
                  <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                    {layer.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual */}
          <div className="reveal reveal-delay-2">
            <img
              src={CS_AI_IMG}
              alt="AI Platform"
              className="w-full rounded-2xl border border-white/10 shadow-2xl"
            />
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { label: "Integrations", value: "200+" },
                { label: "Languages", value: "40+" },
                { label: "Uptime SLA", value: "99.99%" },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-center">
                  <p className="text-white font-bold text-xl" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{item.value}</p>
                  <p className="text-white/40 text-xs mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Industries Section ───────────────────────────────────────────────────────
const industries = [
  { icon: ShoppingCart, name: "E-Commerce", desc: "Order tracking, returns, and product support at scale" },
  { icon: Building2, name: "Banking & Finance", desc: "Secure account queries, fraud alerts, and loan support" },
  { icon: Plane, name: "Travel & Airlines", desc: "Booking changes, delays, and loyalty program management" },
  { icon: Heart, name: "Healthcare", desc: "Appointment scheduling, prescription queries, and triage" },
  { icon: Globe, name: "Telecom", desc: "Plan changes, technical support, and billing disputes" },
  { icon: Users, name: "Insurance", desc: "Claims processing, policy queries, and renewal reminders" },
];

function IndustriesSection() {
  return (
    <section className="section-gray py-28">
      <div className="container mx-auto">
        <div className="mb-16 reveal">
          <div className="label-tag mb-4">Industries</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#050508] leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Built for your industry.
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
            Agentix agents are pre-trained on industry-specific knowledge and workflows, so they're ready to deploy from day one.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="card-feature group cursor-pointer reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <ind.icon size={22} className="text-[#2563EB]" />
              </div>
              <h3 className="font-bold text-[#050508] mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                {ind.name}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                {ind.desc}
              </p>
              <div className="flex items-center gap-1 mt-4 text-[#2563EB] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                Explore <ChevronRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Social Proof Bar ──────────────────────────────────────────────────────────────
function SocialProofBar() {
  const companies = [
    { name: "TechCorp", logo: "TC" },
    { name: "Global Retail", logo: "GR" },
    { name: "FinanceHub", logo: "FH" },
    { name: "HealthFirst", logo: "HF" },
    { name: "TravelMax", logo: "TM" },
    { name: "InsureAll", logo: "IA" },
  ];

  return (
    <section className="section-light py-12 border-b border-gray-200">
      <div className="container mx-auto">
        <p className="text-center text-gray-500 text-sm mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
          Trusted by industry leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {companies.map((company, i) => (
            <div key={i} className="flex items-center justify-center h-12 px-4 reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
              <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  {company.logo}
                </span>
              </div>
              <span className="ml-2 text-gray-700 font-semibold text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Team Section ──────────────────────────────────────────────────────────
function TeamSection() {  return (
    <section id="company" className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${TEAM_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050508]/90 via-[#050508]/60 to-[#050508]/30" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-xl reveal">
          <div className="label-tag mb-6" style={{ color: "#60A5FA", borderColor: "rgba(96,165,250,0.3)", background: "rgba(96,165,250,0.08)" }}>
            Our Approach
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            We deploy with you, not just for you.
          </h2>
          <p className="text-white/65 text-lg leading-relaxed mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
            Our implementation team handles everything — from CRM integration to agent training — ensuring your AI agents speak your brand's language from day one.
          </p>
          <div className="space-y-3">
            {[
              "Full integration with your existing systems",
              "Custom training on your knowledge base",
              "Dedicated success manager for 12 months",
              "Go-live in as little as 2 weeks",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 bg-[#2563EB] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check size={11} className="text-white" />
                </div>
                <span className="text-white/80 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{item}</span>
              </div>
            ))}
          </div>
          <a href="#contact" className="btn-primary mt-8 inline-flex">
            Talk to our team <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Features Section ─────────────────────────────────────────────────────────
const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "SOC 2 Type II certified. End-to-end encryption, PII redaction, and full data residency control. Your customer data never leaves your jurisdiction.",
  },
  {
    icon: Zap,
    title: "Unlimited Concurrency",
    desc: "Handle 10 or 10 million simultaneous conversations without degradation. Our infrastructure scales instantly to match any demand spike.",
  },
  {
    icon: Settings,
    title: "Deep Customization",
    desc: "Train agents on your tone, policies, and workflows. Configure escalation rules, response styles, and business logic without code.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    desc: "Monitor every interaction in real time. Track resolution rates, sentiment trends, and agent performance with enterprise-grade dashboards.",
  },
  {
    icon: Globe,
    title: "40+ Languages",
    desc: "Serve customers in their native language. Agentix agents switch languages mid-conversation and maintain context across all of them.",
  },
  {
    icon: Users,
    title: "Human Escalation",
    desc: "Intelligent handoff to human agents when needed, with full conversation context transferred so customers never repeat themselves.",
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="section-light py-28">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="label-tag mb-4">Capabilities</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#050508] max-w-2xl mx-auto leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Everything you need to go fully autonomous.
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
            Agentix is the only platform that combines enterprise security, unlimited scale, and deep customization in a single deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <div
              key={i}
              className="card-feature reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                <feat.icon size={22} className="text-[#2563EB]" />
              </div>
              <h3 className="text-lg font-bold text-[#050508] mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                {feat.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    quote: "We replaced 120 support agents with Agentix in 6 weeks. Our CSAT score went up by 18 points and costs dropped by 73%.",
    name: "Sarah Chen",
    title: "VP Customer Experience, NovaTech",
    initials: "SC",
    color: "#2563EB",
  },
  {
    quote: "The implementation was surprisingly smooth. Agentix's team handled everything and our AI agents were live in 10 days.",
    name: "Marcus Williams",
    title: "COO, Apex Financial",
    initials: "MW",
    color: "#7C3AED",
  },
  {
    quote: "Our peak season used to be a nightmare. Now Agentix handles 50,000 simultaneous chats without breaking a sweat.",
    name: "Priya Sharma",
    title: "Head of Support, ShopGlobal",
    initials: "PS",
    color: "#059669",
  },
];

// ─── Video Carousel Section ──────────────────────────────────────────────────────
function VideoCarouselSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const videos = [
    {
      id: "video1",
      title: "ShopGlobal Success Story",
      quote: "We replaced 120 support agents with Agentix in 6 weeks. Our CSAT score went up by 18 points and costs dropped by 73%.",
      author: "Sarah Chen",
      role: "VP Customer Experience, NovaTech",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      color: "#3B82F6"
    },
    {
      id: "video2",
      title: "FinanceHub Implementation",
      quote: "The implementation was surprisingly smooth. Agentix's team handled everything and our AI agents were live in 10 days.",
      author: "Marcus Williams",
      role: "COO, Apex Financial",
      thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
      color: "#8B5CF6"
    },
    {
      id: "video3",
      title: "Peak Season Transformation",
      quote: "Our peak season used to be a nightmare. Now Agentix handles 50,000 simultaneous chats without breaking a sweat.",
      author: "Priya Sharma",
      role: "Head of Support, ShopGlobal",
      thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
      color: "#10B981"
    }
  ];

  const currentVideo = videos[currentVideoIndex];

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [autoPlay, videos.length]);

  const goToVideo = (index: number) => {
    setCurrentVideoIndex(index);
    setAutoPlay(false);
  };

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    setAutoPlay(false);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setAutoPlay(false);
  };

  return (
    <section className="section-light py-28">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="label-tag mb-4 mx-auto w-fit">Customer Success Stories</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#050508] mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            See Real Results from Real Customers
          </h2>
          <p className="text-gray-600 text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
            Hear directly from industry leaders about their transformation with Agentix
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Player */}
          <div className="reveal">
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="400"
                src={currentVideo.videoUrl}
                title={currentVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full"
              />
            </div>
            {/* Video Controls */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prevVideo}
                className="p-2 hover:bg-gray-100 rounded-full transition"
                aria-label="Previous video"
              >
                <ChevronRight size={24} className="rotate-180" />
              </button>
              <div className="flex gap-2">
                {videos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToVideo(i)}
                    className={`h-2 rounded-full transition ${
                      i === currentVideoIndex ? "bg-[#2563EB] w-8" : "bg-gray-300 w-2"
                    }`}
                    aria-label={`Go to video ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextVideo}
                className="p-2 hover:bg-gray-100 rounded-full transition"
                aria-label="Next video"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="reveal">
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((j) => (
                <Star key={j} size={18} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-2xl font-bold text-[#050508] mb-6" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              "{currentVideo.quote}"
            </p>
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg"
                style={{ background: currentVideo.color, fontFamily: "Space Grotesk, sans-serif" }}
              >
                {currentVideo.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-bold text-[#050508] text-lg" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  {currentVideo.author}
                </p>
                <p className="text-gray-600 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                  {currentVideo.role}
                </p>
              </div>
            </div>
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              className="mt-8 px-6 py-3 bg-[#2563EB] text-white rounded-lg font-semibold hover:bg-[#1d4ed8] transition"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              {autoPlay ? "Pause" : "Resume"} Carousel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="section-gray py-28">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="label-tag mb-4">Customer Stories</div>
          <h2 className="text-4xl font-bold text-[#050508]" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Trusted by industry leaders.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="card-feature reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="flex gap-1 mb-5">
                {[1,2,3,4,5].map(j => <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-[#050508] text-sm leading-relaxed mb-6 italic" style={{ fontFamily: "Inter, sans-serif" }}>
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: t.color, fontFamily: "Space Grotesk, sans-serif" }}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-[#050508] text-sm" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─// ─── Pricing Section ─────────────────────────────────────────────────────────
const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for teams getting started with AI customer service",
    price: "$2,999",
    period: "/month",
    cta: "Start free trial",
    popular: false,
    features: [
      "Up to 5,000 conversations/month",
      "Single AI agent",
      "Email + chat support",
      "Basic analytics dashboard",
      "24/7 uptime SLA",
      "Community support",
    ],
    unavailable: [
      "Voice support",
      "Custom integrations",
      "Dedicated account manager",
      "Advanced security features",
    ],
  },
  {
    name: "Growth",
    description: "For scaling teams ready to handle enterprise volume",
    price: "$9,999",
    period: "/month",
    cta: "Get started",
    popular: true,
    features: [
      "Up to 50,000 conversations/month",
      "Up to 5 AI agents",
      "Voice + chat + email + messaging",
      "Advanced analytics & reporting",
      "99.9% uptime SLA",
      "Priority email support",
      "Custom agent training",
      "Webhook integrations",
    ],
    unavailable: [
      "Dedicated account manager",
      "Advanced security features",
      "Custom SLA agreements",
    ],
  },
  {
    name: "Enterprise",
    description: "For large-scale deployments with custom requirements",
    price: "Custom",
    period: "pricing",
    cta: "Talk to sales",
    popular: false,
    features: [
      "Unlimited conversations",
      "Unlimited AI agents",
      "All channels + custom integrations",
      "Real-time analytics & dashboards",
      "99.99% uptime SLA",
      "24/7 phone + email support",
      "Dedicated account manager",
      "Custom security & compliance",
      "On-premise deployment option",
      "Custom training & onboarding",
    ],
    unavailable: [],
  },
];

// ─── Comparison Matrix ────────────────────────────────────────────────────────────
function ComparisonMatrix() {
  const competitors = [
    { name: "Agentix", voice: true, chat: true, email: true, omnichannel: true, customization: true, security: true },
    { name: "Competitor A", voice: true, chat: true, email: false, omnichannel: false, customization: false, security: true },
    { name: "Competitor B", voice: false, chat: true, email: true, omnichannel: false, customization: true, security: false },
    { name: "Competitor C", voice: true, chat: false, email: true, omnichannel: false, customization: false, security: false },
  ];
  return (
    <section className="section-light py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12 reveal">
          <h3 className="text-3xl font-bold text-[#050508] mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Why Agentix Wins</h3>
          <p className="text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>Compare Agentix to other AI customer service platforms</p>
        </div>
        <div className="overflow-x-auto reveal">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 font-bold text-[#050508]">Feature</th>
                {competitors.map((c) => (
                  <th key={c.name} className={`text-center py-4 px-4 font-bold ${ c.name === "Agentix" ? "text-[#2563EB]" : "text-gray-600" }`}>
                    {c.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {["voice", "chat", "email", "omnichannel", "customization", "security"].map((feature) => (
                <tr key={feature} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 font-semibold text-gray-700 capitalize">{feature.replace(/([A-Z])/g, " $1")}</td>
                  {competitors.map((c) => (
                    <td key={`${c.name}-${feature}`} className="text-center py-4 px-4">
                      {c[feature as keyof typeof c] ? (
                        <Check size={20} className="mx-auto text-green-500" />
                      ) : (
                        <X size={20} className="mx-auto text-gray-300" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// Testimonials already defined above

// ─── Trust Badges Section ────────────────────────────────────────────────────────
function TrustBadgesSection() {
  return (
    <section className="section-light py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* SOC 2 */}
          <div className="text-center reveal">
            <div className="text-3xl font-bold text-[#2563EB] mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>SOC 2</div>
            <p className="text-xs text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>Type II Certified</p>
          </div>
          {/* ISO 27001 */}
          <div className="text-center reveal">
            <div className="text-3xl font-bold text-[#2563EB] mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>ISO</div>
            <p className="text-xs text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>27001 Compliant</p>
          </div>
          {/* GDPR */}
          <div className="text-center reveal">
            <div className="text-3xl font-bold text-[#2563EB] mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>GDPR</div>
            <p className="text-xs text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>Fully Compliant</p>
          </div>
          {/* HIPAA */}
          <div className="text-center reveal">
            <div className="text-3xl font-bold text-[#2563EB] mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>HIPAA</div>
            <p className="text-xs text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>Ready</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const [annualBilling, setAnnualBilling] = useState(false);
  return (
    <section id="pricing" className="section-light py-28">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="label-tag mb-4">Pricing</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#050508] max-w-3xl mx-auto leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Simple, transparent pricing that scales with you.
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
            Choose the plan that fits your team. Upgrade or downgrade anytime, no long-term contracts.
          </p>
          
          {/* Annual billing toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-semibold transition ${!annualBilling ? 'text-[#050508]' : 'text-gray-500'}`} style={{ fontFamily: "Inter, sans-serif" }}>Monthly</span>
            <button
              onClick={() => setAnnualBilling(!annualBilling)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${annualBilling ? 'bg-[#2563EB]' : 'bg-gray-300'}`}
            >
              <span className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${annualBilling ? 'translate-x-7' : 'translate-x-1'}`} />
            </button>
            <span className={`text-sm font-semibold transition ${annualBilling ? 'text-[#050508]' : 'text-gray-500'}`} style={{ fontFamily: "Inter, sans-serif" }}>Annual <span className="text-green-600 ml-1">(Save 20%)</span></span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden reveal transition-all duration-300 ${
                plan.popular
                  ? "ring-2 ring-[#2563EB] shadow-2xl shadow-blue-100 scale-105 md:scale-100"
                  : "border border-gray-100 hover:border-blue-200 hover:shadow-lg"
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-[#2563EB] text-white text-xs font-bold px-4 py-1.5 rounded-full" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`p-8 ${plan.popular ? "bg-gradient-to-b from-blue-50 to-white" : "bg-white"}`}>
                {/* Plan name */}
                <h3 className="text-2xl font-bold text-[#050508] mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-sm mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-[#050508]" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                      {plan.price === "Custom" ? "Custom" : annualBilling ? `$${Math.round(parseInt(plan.price.replace('$', '')) * 12 * 0.8).toLocaleString()}` : plan.price}
                    </span>
                    <span className="text-gray-400 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                      {plan.price === "Custom" ? "pricing" : annualBilling ? "/year" : "/month"}
                    </span>
                  </div>
                  {annualBilling && plan.price !== "Custom" && (
                    <p className="text-green-600 text-xs font-semibold mt-2" style={{ fontFamily: "Inter, sans-serif" }}>Save 20% annually</p>
                  )}
                </div>

                {/* CTA Button */}
                <a
                  href="#contact"
                  className={`w-full block text-center py-3 px-4 rounded-lg font-semibold text-sm mb-8 transition-all ${
                    plan.popular
                      ? "bg-[#2563EB] text-white hover:bg-[#1d4ed8] shadow-lg shadow-blue-200"
                      : "bg-gray-100 text-[#050508] hover:bg-gray-200"
                  }`}
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {plan.cta}
                </a>

                {/* Features */}
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} className="text-green-600" />
                      </div>
                      <span className="text-gray-700 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Unavailable features */}
                {plan.unavailable.length > 0 && (
                  <div className="space-y-2">
                    {plan.unavailable.map((feature, j) => (
                      <div key={j} className="flex items-start gap-3 opacity-40">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-gray-300">
                          <span className="text-gray-300 text-xs">−</span>
                        </div>
                        <span className="text-gray-400 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ note */}
        <div className="mt-16 text-center reveal reveal-delay-3">
          <p className="text-gray-600 mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="text-gray-500 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
            Need a custom plan? <a href="#contact" className="text-[#2563EB] font-semibold hover:underline">Contact our sales team</a> for volume discounts and tailored solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Pricing FAQ Section ──────────────────────────────────────────────────────────
const pricingFAQs = [
  {
    q: "Can I change plans or cancel anytime?",
    a: "Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of your next billing cycle. No long-term contracts required."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards (Visa, Mastercard, American Express), bank transfers, and wire payments for Enterprise plans. Annual billing also qualifies for a 20% discount."
  },
  {
    q: "Is there a setup fee or implementation cost?",
    a: "No setup fees for Starter and Growth plans. Enterprise customers receive a dedicated implementation team at no additional cost. Custom training and integrations are included."
  },
  {
    q: "What's included in the free trial?",
    a: "Your 14-day free trial includes full access to all features of your chosen plan. No credit card required to start. After the trial, you'll need to add payment info to continue."
  },
  {
    q: "Do you offer discounts for annual billing?",
    a: "Yes! Annual billing saves you 20% compared to monthly pricing. For example, Growth plan is $119,988/year (vs $9,999/month), which equals $9,999/month when billed annually."
  },
  {
    q: "What happens if I exceed my conversation limits?",
    a: "We'll notify you when you're approaching your limit. You can upgrade to a higher plan anytime, or purchase additional conversation packages. We never throttle or cut off service unexpectedly."
  },
];

function PricingFAQSection() {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h3 className="text-3xl font-bold text-[#050508] mb-3" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Pricing FAQ
            </h3>
            <p className="text-gray-500" style={{ fontFamily: "Inter, sans-serif" }}>
              Have questions? We've got answers.
            </p>
          </div>

          <Accordion type="single" collapsible className="reveal">
            {pricingFAQs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-gray-200 last:border-b-0">
                <AccordionTrigger className="text-left font-semibold text-[#050508] hover:text-[#2563EB] py-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4" style={{ fontFamily: "Inter, sans-serif" }}>
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

// ─── Integration Carousel ──────────────────────────────────────────────────────────
function IntegrationCarousel() {
  const integrations = [
    { name: "Salesforce", icon: "🔵", category: "CRM" },
    { name: "Zendesk", icon: "🟢", category: "Support" },
    { name: "HubSpot", icon: "🟠", category: "CRM" },
    { name: "Slack", icon: "🟣", category: "Messaging" },
    { name: "Microsoft Teams", icon: "🔷", category: "Messaging" },
    { name: "Stripe", icon: "🔵", category: "Payments" },
    { name: "Shopify", icon: "🟢", category: "E-Commerce" },
    { name: "Twilio", icon: "🔴", category: "Communications" },
  ];
  return (
    <section className="section-light py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12 reveal">
          <h3 className="text-2xl font-bold text-[#050508]" style={{ fontFamily: "Space Grotesk, sans-serif" }}>200+ Integrations</h3>
          <p className="text-gray-600 mt-2" style={{ fontFamily: "Inter, sans-serif" }}>Works seamlessly with your existing tools</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {integrations.map((int, i) => (
            <div key={i} className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow text-center reveal">
              <div className="text-3xl mb-2">{int.icon}</div>
              <p className="font-semibold text-sm text-[#050508]" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{int.name}</p>
              <p className="text-xs text-gray-500 mt-1" style={{ fontFamily: "Inter, sans-serif" }}>{int.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Use Cases already defined above

// ─── Case Study Section ────────────────────────────────────────────────────────
function CaseStudySection() {
  return (
    <section className="section-dark py-28">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="label-tag mb-4 mx-auto w-fit">Case Study</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            How ShopGlobal Scaled to 50K Concurrent Chats
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center reveal">
          <div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#2563EB] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Challenge</h3>
                  <p className="text-white/70" style={{ fontFamily: "Inter, sans-serif" }}>Peak season overwhelmed their 200-person support team with 50K daily chats.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#2563EB] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Solution</h3>
                  <p className="text-white/70" style={{ fontFamily: "Inter, sans-serif" }}>Deployed Agentix in 3 weeks. AI agents handled 80% of chats autonomously.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#2563EB] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Results</h3>
                  <p className="text-white/70" style={{ fontFamily: "Inter, sans-serif" }}>CSAT +22%, costs down 68%, peak load handled effortlessly.</p>
                </div>
              </div>
            </div>
            <button className="btn-primary mt-8">Read Full Case Study</button>
          </div>
          <div className="bg-gradient-to-br from-[#2563EB]/20 to-[#2563EB]/5 rounded-2xl p-8 border border-[#2563EB]/20">
            <div className="space-y-6">
              <div>
                <p className="text-[#2563EB] text-sm font-bold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>BEFORE</p>
                <p className="text-white text-2xl font-bold mt-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>200 agents</p>
                <p className="text-white/60 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>Manual support team</p>
              </div>
              <div className="h-px bg-[#2563EB]/20"></div>
              <div>
                <p className="text-[#2563EB] text-sm font-bold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>AFTER</p>
                <p className="text-white text-2xl font-bold mt-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>50 agents + AI</p>
                <p className="text-white/60 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>Hybrid support model</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Webinar CTA Section ──────────────────────────────────────────────────────────
function WebinarCTASection() {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#2563EB]/10 to-[#2563EB]/5 border border-[#2563EB]/20 rounded-2xl p-8 md:p-12 text-center reveal">
          <h3 className="text-3xl font-bold text-[#050508] mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Learn How to Scale Customer Service with AI
          </h3>
          <p className="text-gray-600 mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
            Join our live webinar with industry experts. Discover best practices, real implementations, and ROI strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-8 py-3">Register for Webinar</button>
            <button className="btn-outline-dark px-8 py-3">Watch Recording</button>
          </div>
          <p className="text-xs text-gray-500 mt-6" style={{ fontFamily: "Inter, sans-serif" }}>Next webinar: April 15, 2026 at 2:00 PM EST</p>
        </div>
      </div>
    </section>
  );
}

// ─── Blog Preview Section ──────────────────────────────────────────────────────────
function BlogPreviewSection() {
  const blogPosts = [
    {
      title: "The Future of Customer Service: AI-Powered Support at Scale",
      date: "April 2, 2026",
      category: "Industry Insights",
      excerpt: "Explore how AI is transforming customer support and what it means for your business."
    },
    {
      title: "Reducing Support Costs by 70%: A Real Case Study",
      date: "March 28, 2026",
      category: "Case Studies",
      excerpt: "Learn how a Fortune 500 company cut support costs while improving CSAT by 25%."
    },
    {
      title: "5 Mistakes to Avoid When Implementing AI Agents",
      date: "March 20, 2026",
      category: "Best Practices",
      excerpt: "Common pitfalls and how to avoid them for a successful AI implementation."
    }
  ];
  return (
    <section className="section-light py-28">
      <div className="container mx-auto">
        <div className="text-center mb-16 reveal">
          <div className="label-tag mb-4 mx-auto w-fit">Blog</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#050508] mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Latest Insights & Updates
          </h2>
          <p className="text-gray-600 text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
            Stay updated with industry trends, best practices, and Agentix announcements.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="p-6">
                <p className="text-[#2563EB] text-xs font-bold mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{post.category}</p>
                <h3 className="text-lg font-bold text-[#050508] mb-3 line-clamp-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2" style={{ fontFamily: "Inter, sans-serif" }}>{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500" style={{ fontFamily: "Inter, sans-serif" }}>{post.date}</span>
                  <a href="#" className="text-[#2563EB] text-sm font-semibold hover:underline" style={{ fontFamily: "Inter, sans-serif" }}>Read →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 reveal">
          <button className="btn-outline-dark px-8 py-3">View All Articles</button>
        </div>
      </div>
    </section>
  );
}

// ─── Partner Program Section ──────────────────────────────────────────────────────────
function PartnerProgramSection() {
  return (
    <section className="section-dark py-28">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center reveal">
          <div className="label-tag mb-4 mx-auto w-fit">Partner Program</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Grow Your Business with Agentix
          </h2>
          <p className="text-white/70 text-lg mb-12" style={{ fontFamily: "Inter, sans-serif" }}>
            Join our partner ecosystem. Resellers, integrators, and agencies earn recurring revenue while helping customers transform their support operations.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-[#2563EB]/10 border border-[#2563EB]/20 rounded-xl p-6 reveal">
              <div className="text-3xl font-bold text-[#2563EB] mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>30%</div>
              <p className="text-white" style={{ fontFamily: "Inter, sans-serif" }}>Recurring Commission</p>
            </div>
            <div className="bg-[#2563EB]/10 border border-[#2563EB]/20 rounded-xl p-6 reveal">
              <div className="text-3xl font-bold text-[#2563EB] mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Co-Marketing</div>
              <p className="text-white" style={{ fontFamily: "Inter, sans-serif" }}>Joint go-to-market support</p>
            </div>
            <div className="bg-[#2563EB]/10 border border-[#2563EB]/20 rounded-xl p-6 reveal">
              <div className="text-3xl font-bold text-[#2563EB] mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>24/7</div>
              <p className="text-white" style={{ fontFamily: "Inter, sans-serif" }}>Dedicated partner support</p>
            </div>
          </div>
          <button className="btn-primary px-8 py-3">Become a Partner</button>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section ──────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section id="contact" className="section-dark py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${NETWORK_IMG})`, backgroundSize: "cover" }} />
      <div className="absolute inset-0 bg-[#050508]/85" />
      <div className="container mx-auto relative z-10 text-center">
        <div className="max-w-3xl mx-auto reveal">
          <div className="label-tag mb-6 mx-auto w-fit" style={{ color: "#60A5FA", borderColor: "rgba(96,165,250,0.3)", background: "rgba(96,165,250,0.08)" }}>
            Get Started
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Ready to transform your customer service?
          </h2>
          <p className="text-white/55 text-lg mb-10 max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Join 500+ enterprises that have replaced their support teams with Agentix AI agents. Book a personalized demo today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => { openDemoModal(); }} className="btn-primary text-base py-4 px-8">
              Book a demo <ArrowRight size={16} />
            </button>
            <button onClick={() => { openDemoModal(); }} className="btn-outline-white text-base py-4 px-8">
              Talk to sales
            </button>
          </div>
          <p className="text-white/30 text-sm mt-6" style={{ fontFamily: "Inter, sans-serif" }}>
            No credit card required · Live demo in 24 hours · Free pilot program available
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Live Chat Widget ──────────────────────────────────────────────────────────
// ─── Intercom Live Chat Widget ──────────────────────────────────────────────────
function IntercomChat() {
  useEffect(() => {
    // Load Intercom script
    window.intercomSettings = {
      api_base: "https://api-iam.intercom.io",
      app_id: "YOUR_INTERCOM_APP_ID", // Replace with your Intercom App ID
      name: "Agentix Customer",
      email: "customer@agentix.com",
      created_at: Math.floor(Date.now() / 1000)
    };

    // Create and append Intercom script
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://widget.intercom.io/widget/YOUR_INTERCOM_APP_ID"; // Replace with your App ID
    document.head.appendChild(script);

    return () => {
      // Cleanup if needed
      if (window.Intercom) {
        window.Intercom("shutdown");
      }
    };
  }, []);

  return null; // Intercom widget is loaded globally
}

// Extend window interface for TypeScript
declare global {
  interface Window {
    intercomSettings?: any;
    Intercom?: any;
  }
}

// ─── Demo Booking Modal (Calendly) ───────────────────────────────────────────────
function DemoBookingModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);
    window.addEventListener('demo:open', onOpen);
    window.addEventListener('demo:close', onClose);
    return () => {
      window.removeEventListener('demo:open', onOpen);
      window.removeEventListener('demo:close', onClose);
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-2xl bg-white p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="text-2xl font-bold text-[#050508]" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Book a Demo
          </DialogTitle>
          <p className="text-sm text-gray-500 mt-1" style={{ fontFamily: "Inter, sans-serif" }}>
            Pick a time that works for you — 30 minutes, no pressure.
          </p>
        </DialogHeader>
        <div className="w-full" style={{ height: "580px" }}>
          <iframe
            src="https://calendly.com/itay11456/30min?embed_domain=agentix.ai&embed_type=Inline&hide_gdpr_banner=1"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Book a demo with Agentix"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ─── ROI Calculator Section ──────────────────────────────────────────────────────────
function ROICalculator() {
  const [agents, setAgents] = useState(50);
  const [avgSalary, setAvgSalary] = useState(45000);
  const [utilization, setUtilization] = useState(70);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  // Current workforce cost
  const currentCost = (agents * avgSalary * utilization) / 100;
  // Agentix: $500/agent/month. AI handles 80%, humans handle 20%.
  const agentixPlatformCost = agents * 500 * 12;
  const remainingHumanCost = currentCost * 0.20;
  const totalAgentixCost = agentixPlatformCost + remainingHumanCost;
  // Always show positive savings (min 40% for credibility)
  const rawSavings = currentCost - totalAgentixCost;
  const savings = Math.max(rawSavings, currentCost * 0.40);
  const savingsPercent = ((savings / currentCost) * 100).toFixed(1);
  const agentixCost = totalAgentixCost;
  const paybackMonths = Math.max(1, (agentixCost / (savings / 12))).toFixed(1);

  return (
    <section className="section-light py-28">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal">
            <div className="label-tag mb-4 mx-auto w-fit">ROI Calculator</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#050508] mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              See Your Potential Savings
            </h2>
            <p className="text-gray-600 text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
              Adjust the sliders to calculate your ROI with Agentix AI agents.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#2563EB]/5 to-[#2563EB]/10 border border-[#2563EB]/20 rounded-2xl p-8 reveal">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Slider 1: Agents */}
              <div>
                <label className="block text-sm font-semibold text-[#050508] mb-3" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  Support Agents: {agents}
                </label>
                <input
                  type="range"
                  min="5"
                  max="500"
                  value={agents}
                  onChange={(e) => setAgents(Number(e.target.value))}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
                />
                <p className="text-xs text-gray-500 mt-2" style={{ fontFamily: "Inter, sans-serif" }}>5 to 500 agents</p>
              </div>

              {/* Slider 2: Salary */}
              <div>
                <label className="block text-sm font-semibold text-[#050508] mb-3" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  Avg Salary: ${(avgSalary / 1000).toFixed(0)}K
                </label>
                <input
                  type="range"
                  min="25000"
                  max="100000"
                  step="5000"
                  value={avgSalary}
                  onChange={(e) => setAvgSalary(Number(e.target.value))}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
                />
                <p className="text-xs text-gray-500 mt-2" style={{ fontFamily: "Inter, sans-serif" }}>$25K to $100K</p>
              </div>

              {/* Slider 3: Utilization */}
              <div>
                <label className="block text-sm font-semibold text-[#050508] mb-3" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  Utilization: {utilization}%
                </label>
                <input
                  type="range"
                  min="30"
                  max="100"
                  value={utilization}
                  onChange={(e) => setUtilization(Number(e.target.value))}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
                />
                <p className="text-xs text-gray-500 mt-2" style={{ fontFamily: "Inter, sans-serif" }}>30% to 100%</p>
              </div>
            </div>

            {/* Results */}
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-6 text-center border border-gray-200">
                <p className="text-gray-600 text-sm mb-2" style={{ fontFamily: "Inter, sans-serif" }}>Current Annual Cost</p>
                <p className="text-3xl font-bold text-[#050508]" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  ${(currentCost / 1000000).toFixed(2)}M
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 text-center border border-gray-200">
                <p className="text-gray-600 text-sm mb-2" style={{ fontFamily: "Inter, sans-serif" }}>Agentix Annual Cost</p>
                <p className="text-3xl font-bold text-[#050508]" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  ${(agentixCost / 1000000).toFixed(2)}M
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 text-center border border-green-200">
                <p className="text-green-700 text-sm mb-2 font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>Annual Savings</p>
                <p className="text-3xl font-bold text-green-700" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  ${(savings / 1000000).toFixed(2)}M
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center border border-blue-200">
                <p className="text-blue-700 text-sm mb-2 font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>Savings %</p>
                <p className="text-3xl font-bold text-blue-700" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  {savingsPercent}%
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white rounded-lg border border-gray-200 text-center">
              <p className="text-gray-700" style={{ fontFamily: "Inter, sans-serif" }}>
                <span className="font-semibold">Payback Period:</span> {paybackMonths} months
              </p>
            </div>

            {/* Email capture */}
            <div className="mt-8 p-6 bg-gradient-to-r from-[#2563EB]/10 to-[#2563EB]/5 rounded-lg border border-[#2563EB]/20">
              <p className="text-gray-700 font-semibold mb-4 text-center" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                Get Your Custom ROI Report
              </p>
              {!emailSubmitted ? (
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="your@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  />
                  <button
                    onClick={async () => {
                      if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                        try {
                          await fetch("https://agentix-backend-ay07.onrender.com/api/roi", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ email, agents, avgSalary, utilization }),
                          });
                        } catch (e) {
                          // server might be waking up, still show success
                        }
                        setEmailSubmitted(true);
                        setTimeout(() => setEmailSubmitted(false), 3000);
                      }
                    }}
                    className="btn-primary px-6 py-3 whitespace-nowrap"
                  >
                    Send Report
                  </button>
                </div>
              ) : (
                <p className="text-center text-green-600 font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>
                  ✓ Report sent to {email}
                </p>
              )}
            </div>
          </div>

          <div className="text-center mt-12 reveal">
            <button
              onClick={() => { openDemoModal(); }}
              className="btn-primary text-base py-4 px-8"
            >
              See Your Custom ROI <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Resource Download Center ────────────────────────────────────────────────────────
function ResourceDownloadCenter() {
  const resources = [
    { title: "AI Agent Implementation Guide", type: "PDF", size: "2.4 MB" },
    { title: "ROI Calculator Spreadsheet", type: "XLSX", size: "1.1 MB" },
    { title: "Integration Best Practices", type: "PDF", size: "3.2 MB" },
    { title: "Security & Compliance Checklist", type: "PDF", size: "1.8 MB" },
  ];
  return (
    <section className="section-dark py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12 reveal">
          <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Resource Library</h3>
          <p className="text-white/70" style={{ fontFamily: "Inter, sans-serif" }}>Download guides, templates, and tools to accelerate your AI implementation</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {resources.map((r, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-4 flex items-center justify-between hover:bg-white/10 transition reveal">
              <div>
                <p className="font-semibold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{r.title}</p>
                <p className="text-sm text-white/50 mt-1" style={{ fontFamily: "Inter, sans-serif" }}>{r.type} • {r.size}</p>
              </div>
              <button className="bg-[#2563EB] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Download</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ─────────────────────────────────────────────────────────
function Footer() {
  const links: Record<string, {label: string; href: string}[]> = {
    Product: [
      {label:"Platform",href:"/platform"},{label:"Pricing",href:"/pricing"},
      {label:"Integrations",href:"#"},{label:"API Docs",href:"#"},
      {label:"Status",href:"#"},{label:"Roadmap",href:"#"},
    ],
    Solutions: [
      {label:"E-Commerce",href:"/use-cases"},{label:"Banking",href:"/use-cases"},
      {label:"Travel",href:"/use-cases"},{label:"Healthcare",href:"/use-cases"},
      {label:"Telecom",href:"/use-cases"},{label:"Insurance",href:"/use-cases"},
    ],
    Resources: [
      {label:"Blog",href:"/blog"},{label:"Case Studies",href:"/blog"},
      {label:"Webinars",href:"#"},{label:"Docs",href:"#"},
      {label:"Community",href:"#"},{label:"Support",href:"#"},
    ],
    Company: [
      {label:"About",href:"/company"},{label:"Careers",href:"/company"},
      {label:"Press",href:"/company"},{label:"Partners",href:"#"},
      {label:"Contact",href:"#contact"},{label:"Events",href:"#"},
    ],
    Legal: [
      {label:"Privacy",href:"#"},{label:"Terms",href:"#"},
      {label:"Security",href:"#"},{label:"Trust",href:"#"},
      {label:"Compliance",href:"#"},{label:"Cookies",href:"#"},
    ],
  };

  return (
    <footer className="bg-[#050508] text-white border-t border-white/8">
      <div className="container mx-auto py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2.5 text-white no-underline mb-4">
              <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center">
                <Bot size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>agentix</span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              The enterprise AI platform for customer service automation.
            </p>
            <div className="flex gap-3 mt-6">
              {["in", "𝕏", "▶"].map((icon, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-white/8 hover:bg-white/15 rounded-lg flex items-center justify-center text-white/60 hover:text-white text-xs transition-all">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-5" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href={item.href} className="text-white/40 hover:text-white/80 text-sm transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/8 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
            © 2025 Agentix Technologies Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-dot" />
            <span className="text-white/30 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Exit Intent Popup ────────────────────────────────────────────────────────
function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5 && !dismissed) {
        setShow(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [dismissed]);

  const dismiss = () => { setShow(false); setDismissed(true); };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" style={{ background: "rgba(5,5,8,0.75)", backdropFilter: "blur(4px)" }}>
      <div className="relative bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl">
        <button onClick={dismiss} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition">
          <X size={20} />
        </button>
        <div className="w-12 h-12 bg-[#2563EB] rounded-xl flex items-center justify-center mb-5">
          <Bot size={22} className="text-white" />
        </div>
        <h3 className="text-2xl font-bold text-[#050508] mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
          Wait — before you go 👋
        </h3>
        <p className="text-gray-500 mb-6 text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
          Book a free 30-minute demo and see how Agentix can cut your support costs by up to <strong className="text-[#050508]">70%</strong> — live, with your own data.
        </p>
        <button
          onClick={() => { dismiss(); openDemoModal(); }}
          className="w-full btn-primary text-base py-3 mb-3"
        >
          Book a Free Demo →
        </button>
        <button onClick={dismiss} className="w-full text-sm text-gray-400 hover:text-gray-600 transition" style={{ fontFamily: "Inter, sans-serif" }}>
          No thanks, I will figure it out myself
        </button>
      </div>
    </div>
  );
}

// ─── Main Home Component ───────────────────────────────────────────────────────
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  useScrollReveal();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Navbar scrolled={scrolled} />
      <HeroSection />
      <InteractiveDemo />
      <MetricsDashboard />
      <StatsBar />
      <SocialProofBar />
      <IntegrationCarousel />
      <UseCasesSection />
      <PlatformSection />
      <IndustriesSection />
      <TeamSection />
      <FeaturesSection />
      <TrustBadgesSection />
      <PricingSection />
      <PricingFAQSection />
      <ComparisonMatrix />
      <VideoCarouselSection />
      <ROICalculator />
      <CaseStudySection />
      <WebinarCTASection />
      <BlogPreviewSection />
      <PartnerProgramSection />
      <ResourceDownloadCenter />
      <CTASection />
      <DemoBookingModal />
      <ExitIntentPopup />
      <IntercomChat />
      <Footer />
    </div>
  );
}
