/*
 * AGENTIX — Shared Layout Components
 * Navbar + DemoBookingModal used across all pages
 */

import { useState, useEffect } from "react";
import { Bot, Menu, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function openDemoModal() {
  window.dispatchEvent(new CustomEvent("demo:open"));
}

// ─── Shared Navbar ────────────────────────────────────────────────────────────
export function Navbar({ activePage = "" }: { activePage?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navBg = scrolled
    ? "bg-[#050508]/95 backdrop-blur-md border-b border-white/8"
    : "bg-[#050508]/95 backdrop-blur-md border-b border-white/8";

  const links = [
    { label: "Platform", href: "/platform" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "Pricing", href: "/pricing" },
    { label: "Company", href: "/company" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
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
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              style={activePage === link.label ? { color: "white", opacity: 1 } : {}}
            >
              {link.label}
            </a>
          ))}
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
        <div
          className="md:hidden bg-[#050508]/98 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-5"
          role="navigation"
          aria-label="Mobile navigation"
          style={{ animation: "slideDown 0.22s ease-out" }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-lg"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <a href="/login" className="btn-outline-white text-center">Log in</a>
            <button
              onClick={() => { setMobileOpen(false); openDemoModal(); }}
              className="btn-primary text-center"
            >
              Get a demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

// ─── Shared Demo Booking Modal (Calendly) ─────────────────────────────────────
export function DemoBookingModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);
    window.addEventListener("demo:open", onOpen);
    window.addEventListener("demo:close", onClose);
    return () => {
      window.removeEventListener("demo:open", onOpen);
      window.removeEventListener("demo:close", onClose);
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-2xl bg-white p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle
            className="text-2xl font-bold text-[#050508]"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
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

// ─── Shared Footer (inner pages — minimal) ───────────────────────────────────
export function PageFooter() {
  return (
    <footer className="bg-[#050508] text-center py-8 border-t border-white/8">
      <p className="text-white/30 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
        © 2026 Agentix Technologies Ltd. ·{" "}
        <a href="/" className="hover:text-white/60">Home</a> ·{" "}
        <a href="/pricing" className="hover:text-white/60">Pricing</a> ·{" "}
        <a href="/company" className="hover:text-white/60">Company</a>
      </p>
    </footer>
  );
}
