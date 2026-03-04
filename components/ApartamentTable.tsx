"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { apartmentsData } from "@/app/data/apartaments";
import { Apartment, Status } from "@/app/types/aparament";
import {
  FiDownload,
  FiEye,
  FiGrid,
  FiMapPin,
  FiLayers,
  FiX,
} from "react-icons/fi";

const FILTER_CONFIG = [
  {
    id: "building",
    label: "Budynek",
    placeholder: "-- Dowolny budynek --",
    options: [
      { value: "A", label: "Budynek A" },
      { value: "B", label: "Budynek B" },
      { value: "C", label: "Budynek C" },
    ],
  },
  {
    id: "floor",
    label: "Piętro",
    placeholder: "-- Dowolne piętro --",
    options: [
      { value: "0", label: "Parter" },
      { value: "1", label: "1 piętro" },
      { value: "2", label: "2 piętro" },
      { value: "3", label: "3 piętro" },
    ],
  },
  {
    id: "rooms",
    label: "Pokoje",
    placeholder: "-- Dowolna ilość --",
    options: [
      { value: "1", label: "1 pokój" },
      { value: "2", label: "2 pokoje" },
      { value: "3", label: "3 pokoje" },
      { value: "4", label: "4 pokoje" },
    ],
  },
  {
    id: "status",
    label: "Status",
    placeholder: "-- Dowolny status --",
    options: [
      { value: "free", label: "Wolne" },
      { value: "reserved", label: "Zarezerwowane" },
    ],
  },
];

export default function ApartmentTable() {
  const router = useRouter();

  const [isPlanOpen, setIsPlanOpen] = useState(false);

  const [filters, setFilters] = useState({
    building: "",
    floor: "",
    rooms: "",
    status: "",
    maxArea: 69,
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({ ...prev, maxArea: Number(e.target.value) }));
  };

  const filteredApartments = useMemo(() => {
    return apartmentsData.filter((apt) => {
      const matchBuilding =
        !filters.building || apt.building === filters.building;
      const matchFloor =
        !filters.floor || apt.floor.toString() === filters.floor;
      const matchRooms =
        !filters.rooms || apt.rooms.toString() === filters.rooms;
      const matchStatus = !filters.status || apt.status === filters.status;
      const matchArea = apt.area <= filters.maxArea;

      return (
        matchBuilding && matchFloor && matchRooms && matchStatus && matchArea
      );
    });
  }, [filters]);

  const getStatusBadge = (status: Status) => {
    switch (status) {
      case "free":
        return "bg-emerald-100 text-emerald-700 border border-emerald-200 shadow-sm";
      case "reserved":
        return "bg-orange-100 text-orange-700 border border-orange-200 shadow-sm";
      case "sold":
        return "bg-slate-100 text-slate-500 border border-slate-200";
      default:
        return "";
    }
  };

  const getStatusText = (status: Status) => {
    switch (status) {
      case "free":
        return "Wolne";
      case "reserved":
        return "Zarezerwowane";
      case "sold":
        return "Sprzedane";
    }
  };

  return (
    <div
      id="offer"
      className="w-full max-w-[1600px] mx-auto space-y-0 md:space-y-10 px-0 md:px-6"
    >
      <div className="relative w-full h-[350px] md:h-[500px] rounded-none md:rounded-3xl overflow-hidden shadow-2xl group ring-1 ring-slate-900/5">
        <Image
          src="/table.jpg"
          alt="Wizualizacja Osiedla Lipowa"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-6 md:p-12">
          <div className="flex items-center gap-2 text-emerald-400 font-bold tracking-wider uppercase text-xs mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Dostępne od ręki
          </div>
          <h3 className="text-white font-heading text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg">
            Nowoczesna Bryła
          </h3>
          <p className="text-slate-200 text-sm md:text-base max-w-2xl font-light leading-relaxed">
            Elegancka elewacja, przestronne balkony i wysokie okna. Osiedle
            Lipowa to symbioza komfortu i estetyki.
          </p>
        </div>
      </div>

      <div className="bg-white/90 backdrop-blur-md py-6 px-3 md:py-8 md:px-8 shadow-xl border-x-0 md:border-x border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8 gap-4">
          <div>
            <h4 className="text-xl font-bold text-slate-800 flex items-center gap-3">
              <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                <FiGrid className="w-5 h-5" />
              </div>
              Wyszukiwarka Mieszkań
            </h4>
            <p className="text-slate-500 text-sm mt-1 ml-11 hidden md:block">
              Dostosuj kryteria, aby znaleźć idealny lokal.
            </p>
          </div>

          <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto justify-end">
            <div className="bg-slate-50 px-3 py-2 rounded-xl border border-slate-200 whitespace-nowrap">
              <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider mr-1 md:mr-2">
                Wyniki:
              </span>
              <span className="text-base md:text-lg font-bold text-emerald-600">
                {filteredApartments.length}
              </span>
            </div>

            <button
              onClick={() => setIsPlanOpen(true)}
              className="flex items-center gap-2 px-3 md:px-4 py-2 bg-slate-900 text-white text-xs md:text-sm font-bold rounded-xl hover:bg-emerald-600 transition-colors shadow-lg shadow-slate-200 whitespace-nowrap"
            >
              <FiMapPin className="text-base md:text-lg" />
              Plan osiedla
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6 items-end">
          {FILTER_CONFIG.map((field) => (
            <div key={field.id} className="flex flex-col gap-2">
              <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                {field.id === "building" && (
                  <FiMapPin className="w-3.5 h-3.5" />
                )}
                {field.id === "rooms" && <FiLayers className="w-3.5 h-3.5" />}
                {field.label}
              </label>
              <div className="relative w-full">
                <select
                  name={field.id}
                  value={filters[field.id as keyof typeof filters]}
                  onChange={handleFilterChange}
                  className="w-full p-3 md:p-4 pl-4 bg-white border border-slate-200 rounded-xl text-slate-700 font-medium focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all hover:border-emerald-300 cursor-pointer appearance-none shadow-sm text-xs md:text-sm md:text-base"
                >
                  <option value="">{field.placeholder}</option>
                  {field.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}

          <div className="flex flex-col gap-3 h-full justify-end pb-1">
            <div className="flex justify-between items-center">
              <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
                Max Pow.
              </label>
              <span className="text-xs md:text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 whitespace-nowrap">
                {filters.maxArea} m²
              </span>
            </div>
            <input
              type="range"
              min="32"
              max="69"
              value={filters.maxArea}
              onChange={handleRangeChange}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600 hover:accent-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-none md:rounded-3xl shadow-xl border-x-0 md:border-x border-slate-100 overflow-hidden ring-1 ring-slate-900/5">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <th className="px-3 py-3 md:p-6 font-semibold whitespace-nowrap">
                  Budynek
                </th>
                <th className="px-3 py-3 md:p-6 font-semibold whitespace-nowrap">
                  Piętro
                </th>
                <th className="px-3 py-3 md:p-6 font-semibold whitespace-nowrap">
                  Lokal
                </th>
                <th className="px-3 py-3 md:p-6 font-semibold whitespace-nowrap">
                  Powierzchnia
                </th>
                <th className="px-3 py-3 md:p-6 font-semibold whitespace-nowrap">
                  Układ
                </th>
                <th className="px-3 py-3 md:p-6 font-semibold text-right whitespace-nowrap">
                  Cena m²
                </th>
                <th className="px-3 py-3 md:p-6 font-semibold text-right whitespace-nowrap">
                  Cena
                </th>
                <th className="px-3 py-3 md:p-6 font-semibold text-center whitespace-nowrap">
                  Status
                </th>
                <th className="px-3 py-3 md:p-6 font-semibold text-center whitespace-nowrap">
                  Szczegóły
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredApartments.length > 0 ? (
                filteredApartments.map((apt) => (
                  <tr
                    key={apt.id}
                    className="hover:bg-slate-50 transition-colors group"
                  >
                    <td className="px-3 py-3 md:p-6 font-bold text-slate-700">
                      {apt.building}
                    </td>
                    <td className="px-3 py-3 md:p-6 text-slate-600 whitespace-nowrap">
                      {apt.floor === 0 ? "Parter" : apt.floor}
                    </td>
                    <td className="px-3 py-3 md:p-6">
                      <span className="font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded-md text-xs md:text-sm">
                        {apt.number}
                      </span>
                    </td>
                    <td className="px-3 py-3 md:p-6 text-slate-600 font-medium whitespace-nowrap">
                      {apt.area} m²
                    </td>
                    <td className="px-3 py-3 md:p-6 text-slate-500 text-xs uppercase tracking-wide font-semibold">
                      {apt.layout}
                    </td>

                    <td className="px-3 py-3 md:p-6 text-right text-slate-500 whitespace-nowrap text-xs">
                      {apt.priceM2.toLocaleString("pl-PL")} zł
                    </td>

                    <td className="px-3 py-3 md:p-6 text-right font-bold text-emerald-700 text-sm md:text-base whitespace-nowrap">
                      {Math.round(apt.area * apt.priceM2).toLocaleString(
                        "pl-PL",
                      )}{" "}
                      zł
                    </td>

                    <td className="px-3 py-3 md:p-6 text-center">
                      <span
                        className={`inline-block px-3 py-1.5 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-wide ${getStatusBadge(apt.status)}`}
                      >
                        {getStatusText(apt.status)}
                      </span>
                    </td>

                    <td className="px-3 py-3 md:p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          className="p-2 md:p-2.5 rounded-xl bg-slate-100 text-slate-600 hover:bg-emerald-500 hover:text-white transition-all shadow-sm hover:shadow-md"
                          title="Pobierz rzut"
                        >
                          <FiDownload className="w-4 h-4 md:w-4.5 md:h-4.5" />
                        </button>
                        <button
                          className="p-2 md:p-2.5 rounded-xl bg-slate-100 text-slate-600 hover:bg-blue-500 hover:text-white transition-all shadow-sm hover:shadow-md"
                          title="Zobacz lokal"
                          onClick={() =>
                            router.push(`/mieszkanie/${apt.number}`)
                          }
                        >
                          <FiEye className="w-4 h-4 md:w-4.5 md:h-4.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={9}
                    className="p-12 md:p-20 text-center text-slate-400"
                  >
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-50 rounded-full flex items-center justify-center ring-1 ring-slate-100">
                        <FiGrid className="w-6 h-6 md:w-8 md:h-8 text-slate-300" />
                      </div>
                      <p className="font-medium text-slate-500 text-base md:text-lg">
                        Brak mieszkań o takich parametrach.
                      </p>
                      <p className="text-sm">
                        Spróbuj zmienić filtry wyszukiwania.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isPlanOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-900/90 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsPlanOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50">
              <div className="flex items-center gap-2">
                <FiMapPin className="text-emerald-600" />
                <h3 className="font-heading font-bold text-slate-900 text-lg">
                  Plan sytuacyjny inwestycji
                </h3>
              </div>
              <button
                onClick={() => setIsPlanOpen(false)}
                className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            <div className="relative w-full h-[60vh] md:h-[70vh] bg-slate-100">
              <Image
                src="/plansyt.jpeg"
                alt="Plan sytuacyjny Osiedla Lipowa"
                fill
                className="object-contain p-4"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
