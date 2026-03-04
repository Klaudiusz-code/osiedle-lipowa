"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [imgSrc, setImgSrc] = useState("/himg.jpg");

  const handleImageError = () => {
    setImgSrc(
      "https://images.unsplash.com/photo-1600596542815-e32c8ec049b8?q=80&w=2070&auto=format&fit=crop",
    );
  };

  return (
    <section className="relative min-h-[65vh] md:min-h-[70vh] lg:min-h-[75vh] w-full overflow-hidden flex items-start pt-32 md:pt-40 bg-slate-900">
      <div className="absolute inset-0 z-0">
        <Image
          src={imgSrc}
          alt="Osiedle Lipowa Tomaszów Lubelski"
          fill
          className="object-cover"
          priority
          quality={85}
          onError={handleImageError}
        />

        {/* Gradienty do poprawy czytelności tekstu */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/85 to-slate-900/20 md:from-slate-900/90 md:via-slate-900/40 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="text-white max-w-xl lg:max-w-2xl animate-in fade-in slide-in-from-bottom-6 duration-1000 fill-mode-forwards">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[10px] md:text-xs font-bold tracking-widest uppercase text-emerald-400 bg-slate-900/60 border border-emerald-500/30 rounded-full backdrop-blur-md shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Ul. Lipowa, Tomaszów Lubelski
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-5 text-white drop-shadow-xl">
            Nowy wymiar <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              życia rodzinnego.
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-200 mb-8 font-light leading-relaxed max-w-lg opacity-90 drop-shadow-md">
            Komfortowe mieszkania w sercu Tomaszowa Lubelskiego. Przestrzeń
            zaprojektowana z myślą o Twoim spokoju i wygodzie.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#offer"
              className="inline-flex justify-center items-center px-7 py-3.5 bg-emerald-500 text-white rounded-lg font-bold text-base shadow-lg shadow-emerald-900/40 hover:bg-emerald-400 hover:-translate-y-0.5 transition-all duration-300"
            >
              Sprawdź mieszkania
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            <a
              href="#o-inwestycji"
              className="inline-flex justify-center items-center px-7 py-3.5 bg-white/5 backdrop-blur-sm border border-white/20 text-white rounded-lg font-bold text-base hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Poznaj Osiedle
            </a>
          </div>
        </div>

        {/* Dekoracyjne światło po prawej stronie */}
        <div className="hidden lg:block h-full pointer-events-none">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] -z-10"></div>
        </div>
      </div>

      {/* Strzałka scrollowania */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 z-10 hidden sm:block animate-bounce">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
