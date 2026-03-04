"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaMapMarkedAlt,
  FaRulerCombined,
  FaCheckCircle,
  FaCouch,
  FaHiking,
  FaTree,
  FaPhone,
  FaShieldAlt,
  FaPhoneAlt,
  FaRegBuilding,
} from "react-icons/fa";
import { BsShieldCheck, BsGrid3X3GapFill } from "react-icons/bs";
import { FiDownload, FiMail, FiLayers } from "react-icons/fi";
import { Playfair_Display, Inter } from "next/font/google";
import { FaPersonMilitaryToPerson } from "react-icons/fa6";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const apartment = {
  id: 5,
  building: "B",
  floor: 0,
  number: "1B",
  area: 38.0,
  rooms: 2,
  layout: "M2",
  priceM2: 6450,
  status: "sold",
};

export default function Apartment1BPage() {
  const router = useRouter();
  const totalPrice = Math.round(
    apartment.area * apartment.priceM2,
  ).toLocaleString("pl-PL");

  const isSold = apartment.status === "sold";

  const statusStyles = isSold
    ? "bg-white/90 text-rose-600 border-rose-100 shadow-rose-100/50"
    : "bg-emerald-600 text-white border-emerald-500 shadow-emerald-500/30";

  const statusText = isSold ? "Sprzedane" : "Wolne";

  return (
    <main
      className={`min-h-screen bg-slate-50 text-slate-800 ${inter.variable} font-sans selection:bg-emerald-100 selection:text-emerald-800`}
    >
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/60 transition-all duration-300 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">
          <Link
            href="/#offer"
            className="group flex items-center gap-3 text-slate-500 hover:text-emerald-600 font-semibold text-sm transition-all duration-300"
          >
            <div className="p-2.5 rounded-full bg-slate-100 group-hover:bg-emerald-50 text-slate-400 group-hover:text-emerald-600 transition-all duration-300 shadow-sm">
              <FaArrowLeft className="text-sm" />
            </div>
            <span className="tracking-wide">Powrót do listy</span>
          </Link>

          <div className="hidden md:flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">
              Oferta ekskluzywna
            </span>
            <span className="h-4 w-px bg-slate-300"></span>
            <h1
              className={`font-serif text-xl font-medium text-slate-900 ${playfair.variable}`}
            >
              Mieszkanie {apartment.number}
            </h1>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8 md:py-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-8 flex flex-col gap-4 md:gap-6">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/table.jpg"
                alt={`Wizualizacja mieszkania ${apartment.number}`}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/40 to-transparent pointer-events-none"></div>

              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
                <div className="flex justify-between items-end">
                  <div className="space-y-2">
                    <h2
                      className={`text-3xl md:text-5xl text-white font-bold leading-tight ${playfair.variable}`}
                    >
                      Mieszkanie{" "}
                      <span className="text-emerald-400">
                        {apartment.number}
                      </span>
                    </h2>
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 text-slate-200 text-xs md:text-sm font-medium">
                      <span className="flex items-center gap-1.5 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                        <FaRegBuilding /> Budynek {apartment.building}
                      </span>
                      <span className="flex items-center gap-1.5 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                        <BsGrid3X3GapFill />{" "}
                        {apartment.floor === 0
                          ? "Parter"
                          : apartment.floor + ". piętro"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative aspect-video rounded-xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-emerald-500 transition-all shadow-md group"
                >
                  <Image
                    src="/table.jpg"
                    alt={`Miniatura ${i}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 md:p-7 rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl -z-10 translate-x-10 -translate-y-10"></div>

              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Cena brutto
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl md:text-4xl font-bold text-emerald-700 tracking-tight">
                      {totalPrice}
                    </span>
                    <span className="text-base md:text-lg font-semibold text-slate-500">
                      zł
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-slate-400 mt-1">
                    {apartment.area} m² × {apartment.priceM2} zł/m²
                  </p>
                </div>
                <div
                  className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider border shadow-sm ${statusStyles}`}
                >
                  {statusText}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-6 gap-x-4 py-6 border-y border-slate-100">
                <SpecItem
                  label="Pokoje"
                  value={apartment.rooms}
                  icon={FaCouch}
                />
                <SpecItem
                  label="Powierzchnia"
                  value={`${apartment.area} m²`}
                  icon={FaRulerCombined}
                />
                <SpecItem
                  label="Piętro"
                  value={apartment.floor === 0 ? "Parter" : apartment.floor}
                  icon={FaPersonMilitaryToPerson}
                />
                <SpecItem
                  label="Układ"
                  value={apartment.layout}
                  icon={BsGrid3X3GapFill}
                />
              </div>

              <div className="pt-6 flex flex-col gap-3 w-full">
                <a
                  href="tel:+48123456789"
                  className="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold text-sm md:text-base hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 active:scale-[0.98] flex items-center justify-center gap-3 group"
                >
                  <FaPhoneAlt className="text-base md:text-lg group-hover:animate-pulse" />
                  Zadzwoń do doradcy
                </a>

                <a
                  href="mailto:biuro@osiedlelipowa.pl?subject=Zapytanie o mieszkanie 1B&body=Dzień dobry, interesuje mnie mieszkanie numer 1B."
                  className="w-full py-4 bg-slate-50 text-slate-700 border border-slate-200 rounded-2xl font-bold text-sm md:text-base hover:bg-slate-100 hover:border-slate-300 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                >
                  <FiMail className="text-lg md:text-xl" />
                  Wyślij zapytanie
                </a>
              </div>
            </div>

            <div className="bg-slate-900 p-5 md:p-6 rounded-3xl text-white flex items-center justify-between shadow-xl hover:shadow-2xl hover:bg-slate-800 transition-all cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                  <FiDownload className="text-xl" />
                </div>
                <div>
                  <p className="font-bold text-sm">Karta mieszkania</p>
                  <p className="text-xs text-slate-400">Plik PDF, 1.2 MB</p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full border border-slate-600 flex items-center justify-center group-hover:border-emerald-500 group-hover:text-emerald-500 transition-colors">
                <FaArrowLeft className="text-xs rotate-180" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-white rounded-[2.5rem] p-8 md:p-14 shadow-sm border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <span className="text-emerald-600 font-bold text-xs uppercase tracking-[0.2em] mb-3 block">
                Jakość Premium
              </span>
              <h2
                className={`text-3xl md:text-4xl text-slate-900 font-bold mb-4 ${playfair.variable}`}
              >
                Standard wykończenia{" "}
                <span className="italic font-normal text-slate-500">
                  w cenie
                </span>
              </h2>
              <p className="text-slate-500 leading-relaxed">
                Zadbaliśmy o każdy detal, abyś mógł cieszyć się najwyższą
                jakością życia od pierwszego dnia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StandardCard
                icon={FaShieldAlt}
                title="Bezpieczeństwo"
                desc="Drzwi antywłamaniowe z wkładką antywłamaniową klasy C."
              />
              <StandardCard
                icon={FaCouch}
                title="Ściany"
                desc="Gładkie tynki gipsowe malowane farbą emulsyjną."
              />
              <StandardCard
                icon={FaMapMarkedAlt}
                title="Podłogi"
                desc="Wylewki anhydrytowe samopoziomujące pod panele."
              />
              <StandardCard
                icon={FaTree}
                title="Stolarka okienna"
                desc="3-szybowe pakiety energooszczędne, rolety zewnętrzne."
              />
              <StandardCard
                icon={FaHiking}
                title="Instalacje"
                desc="W pełni rozwinięta instalacja C.O. i wodno-kanalizacyjna."
              />
              <StandardCard
                icon={FaRulerCombined}
                title="Balkon / Taras"
                desc="Wylewka z hydroizolacją i odprowadzeniem wody."
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function SpecItem({ label, value, icon: Icon }: any) {
  return (
    <div className="group">
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
        <Icon className="text-[10px]" /> {label}
      </p>
      <p className="text-lg font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">
        {value}
      </p>
    </div>
  );
}

function StandardCard({ icon: Icon, title, desc }: any) {
  return (
    <div className="group p-6 bg-slate-50 rounded-2xl hover:bg-emerald-50 transition-all duration-300 border border-transparent hover:border-emerald-100">
      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-400 group-hover:text-emerald-600 group-hover:shadow-md transition-all mb-4">
        <Icon className="text-xl" />
      </div>
      <h4 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-emerald-800 transition-colors">
        {title}
      </h4>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
