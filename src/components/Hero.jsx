import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import heroImage from "/src/assets/hero.jpeg";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: heroImage,
      titleLine1: "Super Healthy",
      titleLine2: "Protein-Packed Energy",
      subtitle: "Fuel your day with our healthy snacks",
      description:
        "Crafted with high-quality natural ingredients, our Protein Laddus balance taste and strength. A smart snack choice for fitness lovers, busy professionals, and anyone who wants healthy energy without compromising flavour.",
    },
    {
      id: 2,
      image: heroImage,
      titleLine1: "Protein Laddus",
      titleLine2: "Healthy & Delicious Energy Balls",
      subtitle: "High Protein • No Added Sugar • Natural Energy",
      description:
        "100% Pure & Natural Quality. Made with premium ingredients to give you sustained energy without guilt. Perfect for on‑the‑go snacking.",
    },
    {
      id: 3,
      image: heroImage,
      titleLine1: "Limited Offer",
      titleLine2: "Buy 3 Get 1 Free!",
      subtitle: "Stock up & save on your favourite snacks",
      description:
        "Make protein a daily habit. Grab this special deal and enjoy delicious, healthy protein bites anytime, anywhere.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? "100%" : "-100%" }),
    center: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30, mass: 0.8 },
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      transition: { duration: 0.4, ease: "easeInOut" },
    }),
  };

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const textItemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 200 },
    },
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-orange-900 to-orange-950 pt-16 md:pt-20">
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>

            <motion.div
              variants={textContainerVariants}
              initial="hidden"
              animate="visible"
              className="relative h-full flex flex-col items-center justify-center text-center px-4 z-10 max-w-4xl mx-auto"
            >
              <motion.h1
                variants={textItemVariants}
                className="text-4xl md:text-6xl lg:text-7xl font-black text-white drop-shadow-lg"
              >
                {slides[currentIndex].titleLine1} <br />
                <span className="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
                  {slides[currentIndex].titleLine2}
                </span>
              </motion.h1>

              <motion.p
                variants={textItemVariants}
                className="text-xl md:text-2xl text-white/90 mt-6"
              >
                {slides[currentIndex].subtitle}
              </motion.p>

              <motion.p
                variants={textItemVariants}
                className="text-base md:text-lg text-white/80 max-w-2xl mt-6 leading-relaxed"
              >
                {slides[currentIndex].description}
              </motion.p>

              <motion.button
                variants={textItemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 bg-gradient-to-r from-orange-700 to-orange-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 group"
              >
                Shop Now
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/40 transition-all z-20 hover:scale-110 border border-white/20"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/40 transition-all z-20 hover:scale-110 border border-white/20"
      >
        <ChevronRight size={28} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`transition-all rounded-full ${
              currentIndex === idx
                ? "w-3 h-3 bg-white shadow-lg"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
            whileHover={{ scale: 1.2 }}
            animate={currentIndex === idx ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 4 }}
          />
        ))}
      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-600 to-orange-400 z-20"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{
          duration: 5,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 0,
        }}
        style={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
      />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm z-20 flex items-center gap-1 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full"
      >
        <Sparkles size={12} className="text-orange-300" />
        <span>🍗 Protein Snacks Available</span>
      </motion.div>
    </section>
  );
};

export default Hero;
