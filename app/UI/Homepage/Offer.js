import {
  FaSwimmingPool,
  FaParking,
  FaSpa,
  FaLeaf,
  FaUserTie,
  FaHotTub,
} from "react-icons/fa";

export default function Offer() {
  return (
    <section className="px-6 text-center py-20 mt-10 bg-neutral-100">
      <h2 className="text-4xl lg:text-5xl font-bold mb-16 max-w-4xl mx-auto">
        Odkryj, co oferujemy - relaks, wygoda i piękne widoki
      </h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-24 max-w-5xl mx-auto text-left">
        <OfferItem icon={<FaLeaf />} text="Malownicze okolice" />
        <OfferItem icon={<FaSwimmingPool />} text="Kryty basen" />
        <OfferItem icon={<FaParking />} text="Bezpłatny parking" />
        <OfferItem icon={<FaHotTub />} text="Sauna fińska" />
        <OfferItem icon={<FaUserTie />} text="Profesjonalna obsługa" />
        <OfferItem icon={<FaSpa />} text="Grota solna" />
      </ul>
    </section>
  );
}

function OfferItem({ icon, text }) {
  return (
    <li className="flex border-2 items-center justify-center py-4 lg:py-6 flex-row-reverse text-2xl shadow-xl rounded-xl gap-8">
      <span className="text-2xl lg:text-4xl text-primary text-yellow-600">{icon}</span>
      <span>{text}</span>
    </li>
  );
}
