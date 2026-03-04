import {
  FaHome,
  FaFileAlt,
  FaKey,
  FaShieldAlt,
} from "react-icons/fa";
import { BsShieldCheck } from "react-icons/bs";

export default function PurchaseConditions() {
  return (
    <section
      id="warunki-zakupu"
      className="bg-white py-24 border-t border-slate-100"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Zakup mieszkania w 3 prostych krokach
          </h2>
          <p className="text-slate-600">
            Nie musisz znać się na budownictwie. Zadbamy o wszystko – od
            dokumentów po odbiór kluczy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="relative p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="text-6xl font-black text-slate-200 absolute top-4 right-6 -z-0 group-hover:text-emerald-100 transition-colors">
              01
            </div>
            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600 mb-6 relative z-10">
              <FaHome className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">
              Wybierasz lokal
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed relative z-10">
              Spotykasz się z nami, oglądasz mieszkanie i wybierasz ten, który
              Ci się podoba.
            </p>
          </div>

          <div className="relative p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="text-6xl font-black text-slate-200 absolute top-4 right-6 -z-0 group-hover:text-blue-100 transition-colors">
              02
            </div>
            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 mb-6 relative z-10">
              <FaFileAlt className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">
              Podpisujemy umowę
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed relative z-10">
              Przygotowujemy dokumenty. Ty podpisujesz umowę deweloperską i
              ustalasz harmonogram płatności.
            </p>
          </div>

          <div className="relative p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
            <div className="text-6xl font-black text-slate-200 absolute top-4 right-6 -z-0 group-hover:text-orange-100 transition-colors">
              03
            </div>
            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-600 mb-6 relative z-10">
              <FaKey className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">
              Odbierasz klucze
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed relative z-10">
              Gdy budynek stoi gotowy, wspólnie go odbieramy i przekazujemy Ci
              klucze do nowego domu.
            </p>
          </div>
        </div>

        <div className="bg-emerald-50 rounded-3xl p-8 md:p-12 border border-emerald-100 flex flex-col md:flex-row items-center gap-10">
          <div className="shrink-0">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg text-emerald-600">
              <BsShieldCheck className="text-5xl" />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">
              Gwarancja Jakości i Bezpieczeństwo
            </h3>
            <p className="text-slate-700 leading-relaxed mb-6">
              Kupujesz nowe, więc masz pełną kontrolę. Zapewniamy{" "}
              <strong>5-letnią gwarancję</strong> na konstrukcję budynku oraz{" "}
              <strong>2-letnią gwarancję</strong> na instalacje i wykończenia.
              Jeśli coś nie działa – naprawiamy na nasz koszt.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-bold text-slate-700 shadow-sm">
                🔨 Solidna konstrukcja
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-bold text-slate-700 shadow-sm">
                🔒 Czysty stan prawny
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-bold text-slate-700 shadow-sm">
                🛠️ Serwis gwarancyjny
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
