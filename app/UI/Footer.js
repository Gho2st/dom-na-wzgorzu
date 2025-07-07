"use client";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { useState, useEffect } from "react";
import Link from "next/link";
import Cta from "./Homepage/Cta";

export default function Footer() {
  const [showArrow, setShowArrow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Sprawdzamy, czy jesteśmy na dole strony
      const isAtBottom = currentScrollY + windowHeight >= documentHeight - 10; // -10 dla marginesu błędu

      // Pokazuj strzałkę, gdy przewijamy w górę lub jesteśmy na dole
      if ((currentScrollY < lastScrollY && currentScrollY > 50) || isAtBottom) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Czyszczenie listenera przy odmontowaniu komponentu
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <Cta />
      <footer className="px-6 md:px-20 xl:px-32 2xl:px-44 py-16 md:py-20 2xl:py-24 bg-black/90 text-white overflow-hidden ">
        <div className="flex flex-col gap-16 xl:flex-row justify-between ">
          <div className="text-lg md:text-xl xl:w-96 text-center xl:text-right pr-0 xl:pr-10 xl:border-r-2 border-r-gray-200">
            <h3 className="text-2xl md:text-3xl mb-10 xl:mb-16">Informacje</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href={"/o-nas"}>O Nas</Link>
              </li>
              <li>
                <Link href={"/o-nas"}>Cennik</Link>
              </li>
              <li>
                <Link href={"/o-nas"}>Kontakt</Link>
              </li>
              <li>
                <Link href={"/polityka-prywatnosci"}>Polityka prywatności</Link>
              </li>
              <li>
                <Link href={"/dofinansowanie"}>Dofinansowanie</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex justify-center  w-1/2 sm:w-1/3  xl:w-2/5 2xl:w-2/5 mx-auto">
              <Image
                alt="logo"
                src={"/logo.webp"}
                width={330}
                height={330}
                layout="responsive"
              />
            </div>
            <div className="flex mt-10 text-2xl md:text-3xl xl:text-4xl justify-center gap-16">
              <Link
                href={"https://www.facebook.com/profile.php?id=61569492813800"}
                className=" transition-all duration-200 hover:scale-110 rounded-2xl"
              >
                <FaFacebook className="" />
              </Link>

              <Link
                href={"mailto:domnawzgorzu@m-decor.eu"}
                className=" transition-all duration-200 hover:scale-110 rounded-2xl"
              >
                <IoMail className="" />
              </Link>
            </div>
          </div>
          <div className="text-lg md:text-xl xl:w-96 text-center xl:text-left pl-0 xl:pl-10 xl:border-l-2 border-l-gray-200 ">
            <h3 className="text-2xl md:text-3xl mb-10 xl:mb-16">Kontakt</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex justify-center xl:justify-start gap-2 md:gap-4 items-center">
                <FaPhoneAlt className="text-2xl text-yellow-600" />
                <Link className="underline" href={"tel:48573850203"}>
                  +48 573 850 203
                </Link>
              </li>
              <li className="flex justify-center xl:justify-start gap-2 md:gap-4 items-center">
                <IoMail className="text-2xl text-yellow-600" />
                <Link
                  className="underline"
                  href={"mailto:domnawzgorzu@m-decor.eu"}
                >
                  domnawzgorzu@m-decor.eu
                </Link>
              </li>
              <li className="flex justify-center xl:justify-start gap-2 md:gap-4 items-center break-words">
                <FaLocationDot className="text-2xl text-yellow-600" />
                Złockie 172, 33-370 Muszyna
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link href="/dofinansowanie" className="flex justify-center mb-10 cursor-pointer">
            <Image
              src={"/unia.webp"}
              width={120}
              height={120}
              className="rounded-xl"
              alt="Logo - Unia Europejska"
            />
          </Link>
          <p className="text-xl">
            © Dom Relaksu{" "}
            <span className="italic font-light"> &quot;Na Wzgórzu&quot; </span>
          </p>
        </div>
        {showArrow && (
          <span className="fixed bg-customBlue shadow-2xl rounded-lg p-1 text-4xl text-yellow-600 bottom-6 right-6 xl:bottom-16 xl:right-10 z-10">
            <IoIosArrowUp onClick={scrollToTop} className="cursor-pointer" />
          </span>
        )}
      </footer>
    </>
  );
}
