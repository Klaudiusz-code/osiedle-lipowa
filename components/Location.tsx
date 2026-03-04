import {
  FaMapMarkerAlt,
  FaSchool,
  FaShoppingCart,
  FaTree,
  FaBus,
  FaHospital,
} from "react-icons/fa";

export default function Location() {
  return (
    <section
      id="localization"
      className="bg-slate-50 py-16 md:py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4">
            Doskonała komunikacja
          </span>
          <h2 className="font-heading text-xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Lokalizacja w sercu <br className="md:hidden" />Tomaszowa Lubelskiego
          </h2>
          <p className="text-sm md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Ul. Lipowa to miejsce, gdzie spokój spotyka się z wygodą. Wszystko,
            czego potrzebujesz do życia codziennego, masz w zasięgu ręki.
          </p>
        </div>

        <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 mb-12 md:mb-20 group">
          <div className="absolute inset-0 z-0 bg-slate-900">
            <iframe
              title="Mapa Osiedla Lipowa"
              src="https://maps.google.com/maps?q=ul.+Lipowa+12,+Tomasz%C3%B3w+Lubelski&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 opacity-90 grayscale-[100%] invert-[92%] contrast-[83%]"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Ozdobna karta z adresem */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-8 md:bottom-8 w-[90%] md:w-auto bg-white/95 backdrop-blur-md p-4 md:p-5 rounded-2xl shadow-2xl border border-white/50 z-20">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-slate-900 text-white rounded-xl shrink-0 shadow-lg">
                <FaMapMarkerAlt className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">
                  Osiedle Lipowa
                </h4>
                <p className="text-slate-500 text-sm mt-0.5">
                  ul. Lipowa 12, 22-600 Tomaszów Lubelski
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible pb-8 md:pb-0 mb-12 md:mb-16 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {[
            {
              icon: FaSchool,
              title: "Edukacja",
              desc: "Szkoły podstawowe i przedszkola w odległości 500m.",
              color: "text-blue-600",
              bg: "bg-blue-50",
            },
            {
              icon: FaShoppingCart,
              title: "Zakupy",
              desc: "Biedronka, Kaufland i lokalne sklepy w pobliżu.",
              color: "text-orange-500",
              bg: "bg-orange-50",
            },
            {
              icon: FaTree,
              title: "Rekreacja",
              desc: "Park miejski i tereny zielone idealne do spacerów.",
              color: "text-emerald-600",
              bg: "bg-emerald-50",
            },
            {
              icon: FaBus,
              title: "Komunikacja",
              desc: "Przystanki autobusowe przy głównej ulicy.",
              color: "text-purple-600",
              bg: "bg-purple-50",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="min-w-[260px] md:min-w-0 snap-center group p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}
              >
                <item.icon className="text-2xl md:text-3xl" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Lista w najbliższym otoczeniu */}
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-sm">
          <h3 className="font-heading text-xl md:text-2xl font-bold text-slate-900 mb-8 text-center">
            W najbliższym otoczeniu
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-16 gap-y-4">
            {[
              { name: "Szkoła Podstawowa nr 1", dist: "400 m" },
              { name: "Przychodnia Zdrowia", dist: "650 m" },
              { name: "Urząd Miejski", dist: "1.2 km" },
              { name: "Centrum Handlowe", dist: "1.5 km" },
              { name: "Dworzec PKP/PKS", dist: "2.0 km" },
              { name: "Park Miejski", dist: "300 m" },
            ].map((place, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-emerald-50/50 transition-colors"
              >
                <span className="font-medium text-slate-700 text-sm md:text-base">
                  {place.name}
                </span>
                <span className="text-xs md:text-sm font-bold text-emerald-600 bg-emerald-100 px-3 py-1.5 rounded-lg">
                  {place.dist}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}