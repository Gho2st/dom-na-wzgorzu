"use client";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { usePathname } from "next/navigation";
import HeroButton from "../Buttons/HeroButton";

export default function Hero() {
  const slides = useMemo(
    () => [
      {
        background: "/baner.jpg",
      },
      {
        background: "/basen/basen.jpg",
      },
      {
        background: "/grota-solna/grota-solna.jpg",
      },
      {
        background: "/silownia/silownia.jpeg",
      },
      {
        background: "/sauna/sauna.jpg",
      },
    ],
    []
  );

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.background;
    });
  }, [slides]);

  useEffect(() => {
    if (pathname === "/") {
      setCurrentSlide(0);
    }
  }, [pathname]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [currentSlide, slides, isPaused]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Subtle background fade transition
  const backgroundTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } },
    exit: { opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } },
  };

  // Subtle content animation with minimal movement
  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.6, ease: "easeIn" },
    },
  };

  // Subtle arrow animations
  const arrowVariants = {
    initial: { scale: 1, opacity: 0.8 },
    hover: {
      scale: 1.1,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    tap: { scale: 0.95, opacity: 0.9, transition: { duration: 0.2 } },
  };

  // Subtle social media icon animations
  const socialVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section className="flex justify-center items-center min-h-screen overflow-hidden relative">
      {/* Background */}
      <AnimatePresence>
        <motion.div
          key={slides[currentSlide].background}
          className="absolute inset-0 z-0"
          variants={backgroundTransition}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{
            backgroundImage: `url(${slides[currentSlide].background})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        />
      </AnimatePresence>

      {/* Desktop arrows (on sides) */}
      <motion.button
        onClick={prevSlide}
        className="hidden md:flex text-yellow-600 bg-white/70 rounded-2xl text-4xl p-2 cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 z-10"
        variants={arrowVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
      >
        <FaArrowLeft />
      </motion.button>

      <motion.button
        onClick={nextSlide}
        className="hidden md:flex text-yellow-600 bg-white/70 rounded-2xl text-4xl p-2 cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-10"
        variants={arrowVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
      >
        <FaArrowRight />
      </motion.button>

      {/* Content */}
      <div className="flex flex-col items-center gap-4 z-10">
        <div
          className="bg-black/60 text-center  text-white rounded-xl shadow-2xl p-6 md:p-10 max-w-[90vw] md:max-w-3xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-center mt-2 md:mt-0 mb-10">
            Dom Relaksu
            <span className="block md:inline font-light italic ml-1.5 md:ml-3">
              &quot;Na Wzgórzu&quot;
            </span>
          </h1>

          <span className="text-center text-xl md:text-3xl font-semibold">
            Relaks i wypoczynek w miejscowości uzdrowiskowej Muszyna
          </span>
          <HeroButton />
        </div>

        {/* Mobile arrows (below) */}
        <div className="flex md:hidden items-center gap-8 mt-8">
          <motion.button
            onClick={prevSlide}
            className="text-yellow-600 bg-white/80 rounded-2xl text-2xl p-2 cursor-pointer"
            variants={arrowVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <FaArrowLeft />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="text-yellow-600 bg-white/80 rounded-2xl text-2xl p-2 cursor-pointer"
            variants={arrowVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <FaArrowRight />
          </motion.button>
        </div>
      </div>

      {/* Social media icons */}
      <motion.div
        className="absolute text-3xl md:text-4xl bottom-0 left-0 flex gap-6 p-3 text-white bg-black/50 z-10"
        variants={socialVariants}
        initial="initial"
        animate="animate"
      >
        <motion.a
          className="cursor-pointer"
          whileHover={{
            scale: 1.2,
            opacity: 0.9,
            transition: { duration: 0.3 },
          }}
          href="https://www.facebook.com/profile.php?id=61569492813800"
          target="_blank"
        >
          <FaFacebook />
        </motion.a>
        <motion.a
          className="cursor-pointer"
          whileHover={{
            scale: 1.2,
            opacity: 0.9,
            transition: { duration: 0.3 },
          }}
          href="mailto:domnawzgorzu@m-decor.eu"
        >
          <IoMail />
        </motion.a>
      </motion.div>
    </section>
  );
}
