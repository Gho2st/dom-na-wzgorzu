import Link from "next/link";

export default function HeroButton() {
  return (
    <div className="flex justify-center mt-10">
      <Link
        href={"tel:48573850203"}
        className="border-2 inline-block border-yellow-600 bg-yellow-500/30 text-2xl rounded-lg p-3 px-6 text-white font-bold cursor-pointer"
      >
        Zadzwoń
      </Link>
    </div>
  );
}
