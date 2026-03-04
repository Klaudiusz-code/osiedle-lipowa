import {
  FaTree,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaBuilding,
  FaChild,
  FaCar,
} from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs"; 

export default function AboutInvestment() {
  const features = [
    {
      icon: <FaTree className="text-2xl" />,
      title: "Zieleń i Spokój",
      desc: "Osiedle Lipowa położone jest w zacisznej części Tomaszowa, otoczone zielenią, z dala od zgiełku miasta.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      icon: <FaMapMarkedAlt className="text-2xl" />,
      title: "Doskonała Lokalizacja",
      desc: "Szybki dojazd do centrum, a w pobliżu sklepy, szkoły i punkty usługowe. Wszystko, czego potrzebujesz.",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: <FaBuilding className="text-2xl" />,
      title: "Wysoki Standard",
      desc: "Energooszczędne budynki, cichobieżne windy i wysokiej jakości materiały wykończeniowe części wspólnych.",
      color: "text-slate-700",
      bg: "bg-slate-100",
    },
    {
      icon: <BsShieldCheck className="text-2xl" />,
      title: "Bezpieczne Otoczenie",
      desc: "Monitorowany teren i ogrodzenie zapewniają bezpieczeństwo Tobie i Twoim dzieciom.",
      color: "text-orange-500",
      bg: "bg-orange-50",
    },
  ];

  return (
    <section id="o-inwestycji" className="py-28 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-2 block">
              O Inwestycji
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Czym jest <span className="text-emerald-600">Osiedle Lipowa</span>
              ?
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mb-8 rounded-full"></div>

            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              To wieloetapowa inwestycja mieszkaniowa przy ul. Lipowej w
              Tomaszowie Lubelskim. Stworzyliśmy miejsce, które łączy nowoczesną
              architekturę z przyjazną atmosferą przedmieść.
            </p>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Oferujemy szeroki wybór mieszkań – od kompaktowych kawalerek po
              przestronne apartamenty rodzinne. Każdy lokal posiada balkon lub
              taras, a część mieszkań na parterze posiada ogródki.
            </p>

            <div className="flex flex-wrap gap-4">
              {["Garaże podziemne", "Place zabaw", "Miejsca parkingowe"].map(
                (tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 shadow-sm"
                  >
                    ✓ {tag}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/40 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2 transition-all duration-300 flex flex-col items-start"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-inner`}
                >
                  {feature.icon}
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-3 font-heading">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
