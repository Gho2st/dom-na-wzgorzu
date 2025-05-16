import { MdErrorOutline } from "react-icons/md";
import Link from "next/link";
import Button from "./UI/Buttons/Button";

export default function NotFoundPage() {
  return (
    <>
      <div className="p-6 lg:px-24 2xl:px-44 min-h-[70vh] mt-32 text-2xl border-b-2 border-gray-200">
        <div className="bg-white p-3 mt-6 rounded-xl text-center">
          <MdErrorOutline className="text-6xl mx-auto text-red-500" />
          <h1 className="my-5 text-5xl text-red-500 font-semibold">
            404 - Strona nie znaleziona
          </h1>
          <p className="text-neutral-900 font-light mb-5">
            PS: Często dzieje się tak przy literówce w adresie URL lub w
            przypadku gdy strona zmieniła adres na troszkę inny...
          </p>
          <Button button="Przejdź do strony głównej" link="/" />
        </div>
      </div>
    </>
  );
}
