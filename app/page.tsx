import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutInvestment from "../components/AboutInvestment";
import ApartmentTable from "../components/ApartamentTable";
import Gallery from "../components/Gallery";
import Location from "../components/Location";
import Footer from "../components/Footer";
import PurchaseConditions from "@/components/PurchaseConditions";
import ContactCTA from "@/components/ContactCta";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      <Hero />

      <AboutInvestment />

      <section
        id="offer"
        className=" py-16 scroll-mt-24 bg-slate-50 border-t border-slate-100"
      >
        <div className="container mx-auto px-6">
          <ApartmentTable />
        </div>
      </section>

      <Gallery />
      <ContactCTA />
      <Location />
      <PurchaseConditions />

      <section className="bg-slate-50 py-10 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <p className="text-xs text-slate-500 text-justify leading-relaxed max-w-7xl mx-auto font-light">
            Materiały zamieszczone na stronie tj. projekty zagospodarowania
            pomieszczeń, lokali mieszkalnych budynku oraz otoczenia budynku,
            utrwalone zdjęciami i grafikami, mają zadanie przedstawić jedynie
            możliwą aranżację pomieszczenia / przestrzeni i materiały. Te jako
            materiały reklamowe stanowią zaproszenie do zawarcia umowy zgodnie z
            art. 71 Kodeksu Cywilnego i nie stanowią oferty w rozumieniu art. 66
            Kodeksu Cywilnego. Prezentowany katalog produktów nie stanowi oferty
            handlowej w rozumieniu Kodeksu Cywilnego, a ma jedynie charakter
            informacyjny.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
