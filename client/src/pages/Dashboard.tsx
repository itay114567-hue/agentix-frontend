/*
 * AGENTIX — Customer Dashboard
 * Protected page shown after login
 */

import { useEffect, useState } from "react";
import { Bot, BarChart3, MessageSquare, Clock, TrendingUp, Settings, LogOut, Bell, ChevronRight, Zap, Users } from "lucide-react";

const BACKEND = "https://agentix-backend-ay07.onrender.com";

interface User {
  name?: string;
  email: string;
  company?: string;
}

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BACKEND}/api/auth/me`, { credentials: "include" })
      .then((r) => r.json())
      .then((data) => {
        if (data.user) {
          setUser(data.user);
        } else {
          window.location.href = "/login";
        }
      })
      .catch(() => window.location.href = "/login")
      .finally(() => setLoading(false));
  }, []);

  const handleLogout = async () => {
    await fetch(`${BACKEND}/api/auth/logout`, { method: "POST", credentials: "include" });
    window.location.href = "/";
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050508] flex items-center justify-center">
        <div className="flex items-center gap-3 text-white/50">
          <div className="w-5 h-5 border-2 border-[#2563EB] border-t-transparent rounded-full animate-spin" />
          <span style={{ fontFamily: "Inter, sans-serif" }}>Loading dashboard...</span>
        </div>
      </div>
    );
  }

  const stats = [
    { label: "Conversations today", value: "1,284", change: "+12%", icon: MessageSquare, color: "#2563EB" },
    { label: "Avg. response time", value: "0.4s", change: "-8%", icon: Clock, color: "#10b981" },
    { label: "Resolution rate", value: "94.2%", change: "+2.1%", icon: TrendingUp, color: "#f59e0b" },
    { label: "Active agents", value: "3", change: "Live now", icon: Zap, color: "#8b5cf6" },
  ];

  const recentConversations = [
    { id: "#4821", customer: "Michal R.", topic: "Order status inquiry", status: "Resolved", time: "2m ago" },
    { id: "#4820", customer: "Yaron K.", topic: "Billing question", status: "In progress", time: "5m ago" },
    { id: "#4819", customer: "Dana S.", topic: "Technical support", status: "Escalated", time: "14m ago" },
    { id: "#4818", customer: "Amit B.", topic: "Return request", status: "Resolved", time: "22m ago" },
    { id: "#4817", customer: "Liora M.", topic: "Product inquiry", status: "Resolved", time: "31m ago" },
  ];

  const statusColors: Record<string, string> = {
    "Resolved": "bg-green-500/15 text-green-400",
    "In progress": "bg-blue-500/15 text-blue-400",
    "Escalated": "bg-amber-500/15 text-amber-400",
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Sidebar */}
      <div className="fixed left-0 top-0 bottom-0 w-64 bg-[#050508] border-r border-white/8 flex flex-col z-50">
        <div className="p-6 border-b border-white/8">
          <a href="/" className="flex items-center gap-2.5 text-white no-underline">
            <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center">
              <Bot size={17} className="text-white" />
            </div>
            <span className="text-lg font-bold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>agentix</span>
          </a>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {[
            { icon: BarChart3, label: "Overview", active: true },
            { icon: MessageSquare, label: "Conversations" },
            { icon: Users, label: "Customers" },
            { icon: Zap, label: "AI Agents" },
            { icon: TrendingUp, label: "Analytics" },
            { icon: Settings, label: "Settings" },
          ].map(({ icon: Icon, label, active }) => (
            <button
              key={label}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all ${
                active
                  ? "bg-[#2563EB]/20 text-[#60a5fa] font-semibold"
                  : "text-white/40 hover:text-white/70 hover:bg-white/5"
              }`}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/8">
          <div className="flex items-center gap-3 mb-4 px-2">
            <div className="w-8 h-8 bg-[#2563EB] rounded-full flex items-center justify-center text-xs font-bold text-white">
              {(user?.name || user?.email || "?")[0].toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-semibold truncate">{user?.name || "My Account"}</p>
              <p className="text-white/30 text-xs truncate">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-4 py-2 rounded-xl text-white/40 hover:text-white/70 hover:bg-white/5 text-sm transition-all"
          >
            <LogOut size={15} />
            Sign out
          </button>
        </div>
      </div>

      {/* Main */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              Good morning{user?.name ? `, ${user.name.split(" ")[0]}` : ""} 👋
            </h1>
            <p className="text-white/40 text-sm mt-1">Here's what's happening with your AI agents today.</p>
          </div>
          <button className="relative p-2 rounded-xl border border-white/10 hover:bg-white/5 transition">
            <Bell size={18} className="text-white/50" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#2563EB] rounded-full" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {stats.map(({ label, value, change, icon: Icon, color }) => (
            <div key={label} className="bg-white/4 border border-white/8 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white/40 text-xs font-semibold uppercase tracking-wider">{label}</span>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${color}20` }}>
                  <Icon size={15} style={{ color }} />
                </div>
              </div>
              <p className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "Space Grotesk, sans-serif" }}>{value}</p>
              <p className="text-xs" style={{ color, fontFamily: "Inter, sans-serif" }}>{change} vs yesterday</p>
            </div>
          ))}
        </div>

        {/* Recent conversations */}
        <div className="bg-white/4 border border-white/8 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Recent Conversations</h2>
            <button className="text-[#2563EB] text-sm hover:underline flex items-center gap-1">
              View all <ChevronRight size={14} />
            </button>
          </div>
          <div className="space-y-2">
            {recentConversations.map((conv) => (
              <div key={conv.id} className="flex items-center gap-4 py-3 px-4 rounded-xl hover:bg-white/4 transition cursor-pointer">
                <span className="text-white/25 text-xs font-mono w-12">{conv.id}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-semibold">{conv.customer}</p>
                  <p className="text-white/40 text-xs truncate">{conv.topic}</p>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-lg font-semibold ${statusColors[conv.status]}`}>
                  {conv.status}
                </span>
                <span className="text-white/25 text-xs w-16 text-right">{conv.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Onboarding banner if new */}
        <div className="mt-6 bg-gradient-to-r from-[#2563EB]/20 to-[#8b5cf6]/20 border border-[#2563EB]/30 rounded-2xl p-6 flex items-center justify-between">
          <div>
            <p className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              🚀 Connect your first channel
            </p>
            <p className="text-white/50 text-xs">Link WhatsApp, email, or live chat to start handling conversations automatically.</p>
          </div>
          <button className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition whitespace-nowrap" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Get started →
          </button>
        </div>
      </div>
    </div>
  );
}
