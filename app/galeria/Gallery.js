"use client";
import { useState } from "react";
import Image from "next/image";

export default function Gallery() {
  const galleryData = {
    Sauna: [
      {
        src: "/sauna/sauna.webp",
        alt: "Sauna - wnętrze z drewnem i światłem",
      },
    ],
    "Siłownia i SPA": [
      {
        src: "/silownia/silownia.webp",
        alt: "Siłownia z profesjonalnym sprzętem",
      },
      {
        src: "/silownia/silownia2.webp",
        alt: "Kolejna strefa siłowni z nowoczesnym wyposażeniem",
      },
      {
        src: "/silownia/silownia3.webp",
        alt: "Strefa relaksu w SPA",
      },
    ],
    "Grota Solna": [
      {
        src: "/grota-solna/grota-solna.webp",
        alt: "Grota solna z klimatycznym oświetleniem",
      },
    ],
    Basen: [
      {
        src: "/basen/basen.webp",
        alt: "Basen z widokiem na zewnątrz",
      },
    ],
  };

  const [activeCategory, setActiveCategory] = useState("Sauna");
  const images = galleryData[activeCategory] ?? [];
  return (
    <>
      {/* Kategorie */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.keys(galleryData).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 text-xl cursor-pointer rounded-full border font-semibold transition-colors ${
              activeCategory === category
                ? "bg-yellow-500 text-white border-yellow-500"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
            aria-label={`Pokaż zdjęcia kategorii ${category}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Galeria – prosty, responsywny grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img.src}
            alt={img.alt}
            width={800}
            height={600}
            className="w-full h-auto object-cover rounded-xl shadow-md"
          />
        ))}
      </div>
    </>
  );
}
