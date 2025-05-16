import Link from "next/link";

export default function ContactButton() {
  return (
    <Link
      href={"tel:48573850203"}
      className="border-2 border-yellow-600 bg-yellow-600/10 hover:bg-yellow-600 hover:text-white transition-all duration-300 rounded-lg p-3 text-yellow-600 font-bold cursor-pointer"
    >
      Zadzwoń
    </Link>
  );
}
