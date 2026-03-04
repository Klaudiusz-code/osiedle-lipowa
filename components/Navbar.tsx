"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e: any, targetId: any) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Wysokość paska nawigacji + margines
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled || mobileMenuOpen
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100"
          : "bg-transparent py-6 border-b border-white/10"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          href="/"
          className={`font-heading font-bold text-xl tracking-tight flex items-center gap-2.5 transition-all duration-300 ${
            scrolled || mobileMenuOpen
              ? "text-slate-900"
              : "text-white drop-shadow-md"
          }`}
        >
          <div className="relative group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg transform transition-transform group-hover:rotate-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
          </div>
          <span className="font-heading tracking-wide">OSIEDLE LIPOWA</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {[
            { label: "O Inwestycji", id: "o-inwestycji" },
            { label: "Oferta", id: "offer" },
            { label: "Galeria", id: "gallery" },
            { label: "Lokalizacja", id: "localization" },
            { label: "Warunki zakupu", id: "warunki-zakupu" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={(e) => handleScroll(e, item.id)}
              className={`text-sm font-semibold tracking-wide transition-colors relative group py-2 bg-transparent border-none cursor-pointer ${
                scrolled || mobileMenuOpen
                  ? "text-slate-600 hover:text-emerald-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full ${
                  scrolled ? "bg-emerald-600" : "bg-white"
                }`}
              ></span>
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className={`text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg transform hover:-translate-y-0.5 ${
              scrolled || mobileMenuOpen
                ? "bg-emerald-600 text-white hover:bg-emerald-700"
                : "bg-white text-emerald-700 hover:bg-emerald-50"
            }`}
          >
            Kontakt
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 rounded-md transition-colors ${
            scrolled || mobileMenuOpen ? "text-slate-900" : "text-white"
          }`}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-2xl py-4 px-6 flex flex-col gap-1 animate-in slide-in-from-top-2">
          {[
            { label: "O Inwestycji", id: "o-inwestycji" },
            { label: "Oferta", id: "offer" },
            { label: "Galeria", id: "gallery" },
            { label: "Lokalizacja", id: "localization" },
            { label: "Warunki zakupu", id: "warunki-zakupu" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={(e) => handleScroll(e, item.id)}
              className="text-left text-slate-700 font-medium py-3 px-2 hover:bg-slate-50 rounded-lg transition-colors border-b border-slate-50 last:border-0 bg-transparent border-none w-full text-base"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 mt-2">
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className="block w-full text-center bg-emerald-600 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-emerald-500/30"
            >
              Skontaktuj się
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
