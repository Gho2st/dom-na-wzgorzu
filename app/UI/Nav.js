"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ContactButton from "./Buttons/ContactButton";
import Button from "./Buttons/Button";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollThreshold = 95;
  const hideDelay = 5;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < scrollThreshold) {
        setIsVisible(true);
      } else if (scrollY > lastScrollY + hideDelay) {
        setIsVisible(false);
      } else if (scrollY < lastScrollY - hideDelay) {
        setIsVisible(true);
      }
      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleMenuToggle = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    closed: {
      opacity: 0,
      x: "-100%",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <nav className="relative">
      {/* Top Bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 mx-auto flex w-full items-center justify-between px-6 xl:py-1 2xl:py-4 xl:px-16 bg-black transition-transform duration-500 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Lewa strona: logo */}
        <div className="flex items-center">
          <Link href="/" className="relative h-24 w-24 cursor-pointer">
            <Image
              src="/logo.png"
              fill
              alt="Dom Relaks na Wzgórzu logo"
              className="object-contain"
              sizes="(max-width: 768px) 100px, 150px"
              priority
            />
          </Link>
          <div className="hidden xl:block relative h-12 w-24 ml-8">
            <Image
              src="/unia.webp"
              fill
              alt="Unia europejska logo"
              className="object-contain"
            />
          </div>
        </div>

        {/* Prawa strona: Hamburger */}
        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <div className="hidden items-center font-light text-white text-xl xl:flex xl:gap-8">
            <NavLink href="/o-nas">O Nas</NavLink>
            <NavLink href="/galeria">Galeria</NavLink>
            <NavLink href="/cennik">Cennik</NavLink>
            <NavLink href="/kontakt">Kontakt</NavLink>
            <ContactButton />
          </div>

          {/* Hamburger Button (Mobile) */}
          <div
            className={`flex items-center gap-5 xl:hidden ${
              isOpen ? "open" : ""
            }`}
          >
            <button
              className="hamburger"
              onClick={handleMenuToggle}
              aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
              aria-expanded={isOpen}
            >
              <span className="hamburger-top" />
              <span className="hamburger-middle" />
              <span className="hamburger-bottom" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-white text-black overflow-y-auto mt-16"
          >
            <div className="pt-20 px-10 pb-6 flex flex-col text-lg font-medium min-h-screen">
              <Link
                href="/o-nas"
                className="border-b border-gray-300 py-3"
                onClick={handleMenuToggle}
              >
                O Nas
              </Link>

              <Link
                className="border-b border-gray-300 py-3"
                href="/galeria"
                onClick={handleMenuToggle}
              >
                Galeria
              </Link>
              <Link
                className="border-b border-gray-300 py-3"
                href="/cennik"
                onClick={handleMenuToggle}
              >
                Cennik
              </Link>
              <Link
                className="border-b border-gray-300 py-3"
                href="/kontakt"
                onClick={handleMenuToggle}
              >
                Kontakt
              </Link>
              <Button button="Zadzwoń" link="tel:48573850203" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="whitespace-nowrap transition-colors duration-300 hover:text-[#C4966C]"
    >
      {children}
    </Link>
  );
}
