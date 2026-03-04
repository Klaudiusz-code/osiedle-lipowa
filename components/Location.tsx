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
      className="bg-white py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            Doskonała komunikacja
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Lokalizacja w sercu Tomaszowa Lubelskiego
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Ul. Lipowa to miejsce, gdzie spokój spotyka się z wygodą. Wszystko,
            czego potrzebujesz do życia codziennego, masz w zasięgu ręki.
          </p>
        </div>

        <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 mb-16 group">
          <div className="absolute inset-0 bg-slate-100 animate-pulse z-0" />
          <iframe
            title="Mapa Osiedla Lipowa"
            src="https://www.openstreetmap.org/export/embed.html?bbox=23.3500%2C50.0000%2C23.4500%2C50.0500&layer=mapnik&marker=50.0250%2C23.4000"
            className="relative z-10 w-full h-full border-0 grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
            allowFullScreen
            loading="lazy"
          ></iframe>

          <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100 z-20 max-w-xs">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                <FaMapMarkerAlt className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">
                  Osiedle Lipowa
                </h4>
                <p className="text-slate-500 text-xs mt-1">
                  ul. Lipowa 12, 22-600 Tomaszów Lubelski
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
              className="group p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-default"
            >
              <div
                className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className="text-2xl" />
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

        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
          <h3 className="font-heading text-2xl font-bold text-slate-900 mb-8 text-center">
            W najbliższym otoczeniu
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
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
                className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-100"
              >
                <span className="font-medium text-slate-700">{place.name}</span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
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
