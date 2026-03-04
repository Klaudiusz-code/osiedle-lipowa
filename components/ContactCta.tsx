"use client";

import {
  FaMapMarkerAlt,
  FaHome,
  FaArrowRight,
  FaPhoneAlt,
} from "react-icons/fa";

export default function ContactCTA() {
  return (
    <section className="relative py-12 md:py-16 bg-slate-50 overflow-hidden font-sans border-t border-slate-100">
      {/* Delikatne tło - mniejsze i mniej inwazyjne */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-teal-50 rounded-full blur-[100px] opacity-70 -translate-y-1/2 translate-x-1/4"></div>

      {/* Szeroki kontener, ale zwarty w pionie */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* LEWA: Zwarty tekst */}
          <div className="lg:w-[45%] text-center lg:text-left space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-[10px] font-bold uppercase tracking-widest">
              <FaMapMarkerAlt className="text-[10px]" />
              Zapraszamy do biura
            </div>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 leading-tight">
              Zobacz <span className="text-teal-600">Osiedle Lipowa</span> na
              żywo
            </h2>

            <p className="text-slate-600 text-base leading-relaxed max-w-md mx-auto lg:mx-0">
              Odwiedź nas w Tomaszowie Lubelskim. Chętnie odpowiemy na pytania i
              pokażemy standard wykończenia w mieszkaniu pokazowym.
            </p>

            {/* Adres w wersji minimalistycznej (bez dużego boxa) */}
            <div className="pt-2">
              <div className="flex flex-col items-center lg:items-start gap-1 text-slate-700">
                <div className="flex items-center gap-2 font-medium">
                  <FaMapMarkerAlt className="text-teal-600" />
                  ul. Lipowa 1, Tomaszów Lubelski
                </div>
                <span className="text-sm text-slate-400 pl-6">
                  Pn - Pt: 9:00 - 17:00
                </span>
              </div>
            </div>
          </div>

          {/* PRAWA: Standardowe Karty (Niższe) */}
          <div className="lg:w-[55%] w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Karta 1: Mieszkanie Pokazowe */}
            <a
              href="#mieszkanie-pokazowe"
              className="group flex flex-col justify-between p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:border-teal-200 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-xl group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <FaHome />
                </div>
                <FaArrowRight className="text-slate-300 group-hover:text-teal-600 transition-colors" />
              </div>

              <div>
                <h3 className="font-heading font-bold text-slate-900 text-lg mb-1">
                  Mieszkanie pokazowe
                </h3>
                <p className="text-slate-500 text-sm">Sprawdź jakość na żywo</p>
              </div>
            </a>

            {/* Karta 2: Telefon (Teal) */}
            <a
              href="tel:+48000000000"
              className="group flex flex-col justify-between p-6 bg-slate-900 rounded-2xl shadow-sm border border-slate-800 hover:bg-slate-800 transition-all duration-300 text-white"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-700 text-white flex items-center justify-center text-xl group-hover:bg-white group-hover:text-slate-900 transition-colors">
                  <FaPhoneAlt />
                </div>
              </div>

              <div>
                <h3 className="font-heading font-bold text-white text-lg mb-1">
                  Zadzwoń do nas
                </h3>
                <p className="text-slate-400 text-sm mb-3">Infolinia czynna</p>
                <span className="text-lg font-bold text-teal-400">
                  +48 000 000 000
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
