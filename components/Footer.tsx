import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-slate-900 opacity-50" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
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
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                OSIEDLE LIPOWA
              </span>
            </div>
            <p className="leading-relaxed text-slate-400 text-sm mb-6">
              Inwestycja mieszkaniowa realizowana z pasją i dbałością o każdy
              szczegół w Tomaszowie Lubelskim. Twój nowy dom.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6 font-heading">
              Kontakt
            </h3>
            <ul className="space-y-4">
              <li className="group">
                <Link
                  href="#"
                  className="flex items-start gap-3 text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mt-0.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <span className="group-hover:underline underline-offset-4 decoration-emerald-500/30">
                    ul. Lipowa 12
                    <br />
                    <span className="text-xs">22-600 Tomaszów Lubelski</span>
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="tel:+48123456789"
                  className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  <svg
                    className="w-5 h-5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <span className="group-hover:underline underline-offset-4 decoration-emerald-500/30">
                    +48 123 456 789
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:biuro@osiedlelipowa.pl"
                  className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  <svg
                    className="w-5 h-5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <span className="group-hover:underline underline-offset-4 decoration-emerald-500/30">
                    biuro@osiedlelipowa.pl
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6 font-heading">
              Biuro Sprzedaży
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Poniedziałek - Piątek</span>
                <span className="text-white font-medium">09:00 - 17:00</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Sobota</span>
                <span className="text-white font-medium">10:00 - 14:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-400">Niedziela</span>
                <span className="text-slate-500">Zamknięte</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-6 font-heading">
              Szybkie linki
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  O Inwestycji
                </a>
              </li>
              <li>
                <a
                  href="#offer"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Dostępne mieszkania
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Galeria
                </a>
              </li>
              <li>
                <a
                  href="#localization"
                  className="text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  Lokalizacja
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Osiedle Lipowa. Wszelkie prawa
            zastrzeżone.
          </p>

          <a
            href="https://klaudiuszdev.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-600 hover:text-white transition-colors group text-sm font-medium"
          >
            <span className="text-slate-700 group-hover:text-emerald-400 transition-colors">
              Realizacja:
            </span>

            <Image
              src="https://klaudiuszdev.pl/hello.svg"
              alt="klaudiuszdev logo"
              width={20}
              height={20}
              className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
            />

            <span className="font-heading tracking-tight">klaudiuszdev</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
