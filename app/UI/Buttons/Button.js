import Link from "next/link";

export default function Button({ link, button }) {
  return (
    <div className="flex justify-center mt-10">
      <Link
        href={link}
        className="border-2 inline-block border-yellow-600 hover:bg-yellow-500/30 duration-300 transition-all bg-yellow-500/10 text-2xl rounded-lg p-3 px-6 text-yellow-600 font-extrabold cursor-pointer"
      >
        {button}
      </Link>
    </div>
  );
}
