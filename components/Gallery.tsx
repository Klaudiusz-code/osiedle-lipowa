"use client";

import { useState } from "react";
import Image from "next/image";
import { FiX, FiZoomIn, FiArrowLeft } from "react-icons/fi";

const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
    title: "Salon z aneksem",
    category: "Wnętrze",
    span: "md:col-span-2 md:row-span-2",
    description:
      "Przestronny salon z dostępem do balkonu. Jasne przestrzenie i duża ilość światła dziennego.",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
    title: "Nowoczesna kuchnia",
    category: "Detale",
    description:
      "Funkcjonalne rozwiązania, wysoka klasa sprzęt AGD i elegancka zabudowa.",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    title: "Elewacja budynku",
    category: "Zewnętrze",
    description:
      "Elegancka biel i drewno. Nowoczesna architektura wkomponowana w otoczenie.",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=800&auto=format&fit=crop",
    title: "Sypialnia",
    category: "Wnętrze",
    description:
      "Spokój i cisza w strefie prywatnej. Miejsce na regały i szafy wnękowe.",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    title: "Łazienka",
    category: "Łazienka",
    description: "Wysokiej jakości glazura, ceramika i nowoczesne armatura.",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=800&auto=format&fit=crop",
    title: "Taras",
    category: "Zewnętrze",
    description:
      "Miejsce na poranną kawę i wieczorny relaks. Widok na zielone otoczenie.",
    span: "md:col-span-2 md:row-span-1",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryItems)[0] | null
  >(null);

  return (
    <section id="gallery" className="bg-slate-50 py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-xl">
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-2 block">
              Galeria
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Zobacz Osiedle Lipowa
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Przekrój jakości i standardu wykonania. Zobacz, jak wygląda życie
              w naszych mieszkaniach na co dzień.
            </p>
          </div>
          <a
            href="#contact"
            className="text-emerald-600 font-bold border-b-2 border-emerald-200 hover:border-emerald-600 transition-colors pb-1 w-fit"
          >
            Zapytaj o standard wykończenia
          </a>
        </div>

        {/* Siatka Galerii */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[250px] gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`relative group rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 ${item.span} bg-white`}
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-900 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                    <FiZoomIn className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-20">
                <span className="inline-block px-2 py-1 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider rounded mb-2">
                  {item.category}
                </span>
                <h3 className="text-white font-bold text-lg leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2 bg-black/20 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-sm border border-white/10"
            aria-label="Zamknij"
          >
            <FiX className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          <div
            className="relative w-full h-full flex flex-col md:flex-row animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[55vh] md:h-full md:flex-1 bg-black/40 flex items-center justify-center p-2 md:p-8">
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="w-full md:w-[450px] lg:w-[500px] bg-white flex flex-col justify-between overflow-y-auto">
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest">
                    {selectedImage.category}
                  </span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span className="text-slate-400 text-xs">01 / 06</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                  {selectedImage.title}
                </h3>

                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {selectedImage.description}
                </p>
              </div>

              <div className="p-8 md:p-12 bg-slate-50 border-t border-slate-100">
                <a
                  href="#offer"
                  className="inline-flex items-center justify-center w-full px-6 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  Zobacz podobne mieszkania
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
