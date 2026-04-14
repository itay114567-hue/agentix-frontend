/*
 * AGENTIX — Login Page
 * Email + password + Google OAuth
 */

import { useState } from "react";
import { Bot, Mail, Lock, Eye, EyeOff, Chrome } from "lucide-react";
import { toast } from "sonner";

const BACKEND = "https://agentix-backend-bpgg.onrender.com";

export default function Login() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) { toast.error("Please fill in all fields."); return; }
    setLoading(true);
    try {
      const endpoint = mode === "login" ? "/api/auth/login" : "/api/auth/register";
      const res = await fetch(`${BACKEND}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Authentication failed");
      toast.success(mode === "login" ? "Welcome back!" : "Account created!");
      window.location.href = "/dashboard";
    } catch (err: any) {
      toast.error(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = () => {
    window.location.href = `${BACKEND}/api/auth/google?redirect=${encodeURIComponent(window.location.origin + "/dashboard")}`;
  };

  return (
    <div className="min-h-screen bg-[#050508] flex items-center justify-center p-4">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#2563EB]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 text-white no-underline mb-10 justify-center">
          <div className="w-9 h-9 bg-[#2563EB] rounded-xl flex items-center justify-center">
            <Bot size={20} className="text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            agentix
          </span>
        </a>

        {/* Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
          {/* Toggle */}
          <div className="flex bg-white/5 rounded-xl p-1 mb-8">
            {(["login", "signup"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
                  mode === m
                    ? "bg-[#2563EB] text-white"
                    : "text-white/50 hover:text-white/70"
                }`}
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {m === "login" ? "Log in" : "Sign up"}
              </button>
            ))}
          </div>

          <h1 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            {mode === "login" ? "Welcome back" : "Create your account"}
          </h1>
          <p className="text-white/40 text-sm mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
            {mode === "login"
              ? "Sign in to your Agentix dashboard"
              : "Start automating customer service today"}
          </p>

          {/* Google */}
          <button
            onClick={handleGoogle}
            className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-white/15 text-white hover:bg-white/8 transition-all mb-6"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "14px" }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M17.64 9.20c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
              <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-white/30 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>or continue with email</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2 block" style={{ fontFamily: "Inter, sans-serif" }}>
                Email
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder-white/25 outline-none focus:border-[#2563EB] transition text-sm"
                  style={{ fontFamily: "Inter, sans-serif" }}
                />
              </div>
            </div>
            <div>
              <label className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2 block" style={{ fontFamily: "Inter, sans-serif" }}>
                Password
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-11 text-white placeholder-white/25 outline-none focus:border-[#2563EB] transition text-sm"
                  style={{ fontFamily: "Inter, sans-serif" }}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {mode === "login" && (
              <div className="text-right">
                <a href="#" className="text-[#2563EB] text-xs hover:underline" style={{ fontFamily: "Inter, sans-serif" }}>
                  Forgot password?
                </a>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] disabled:opacity-60 text-white font-bold py-3 rounded-xl transition-all text-sm mt-2"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              {loading ? "Please wait..." : mode === "login" ? "Sign in" : "Create account"}
            </button>
          </form>
        </div>

        <p className="text-center text-white/25 text-xs mt-6" style={{ fontFamily: "Inter, sans-serif" }}>
          By continuing, you agree to our{" "}
          <a href="#" className="hover:text-white/50 underline">Terms</a> and{" "}
          <a href="#" className="hover:text-white/50 underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}
