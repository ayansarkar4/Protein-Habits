import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import heroImage from "/src/assets/hero.jpeg";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Animated Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
        >
          <span className="text-orange-200 text-xs font-semibold tracking-wide">
            ✨ Premium Protein Snacks
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-3xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-2xl leading-tight"
        >
          Super Healthy <br />
          <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
            Protein-Packed Energy
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg md:text-xl text-white/95 mt-4 font-medium"
        >
          Fuel your day with our healthy snacks
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-sm md:text-base text-white/80 max-w-2xl mx-auto mt-4 leading-relaxed"
        >
          Crafted with high-quality natural ingredients, our Protein Laddus
          balance taste and strength. A smart snack choice for fitness lovers,
          busy professionals, and anyone who wants healthy energy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
          className="mt-6 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 text-sm md:text-base"
          >
            Shop Now
            <ArrowRight size={16} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-2 rounded-full font-medium hover:bg-white/20 transition-all inline-flex items-center gap-2 text-sm md:text-base"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Badge */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-xs z-20 flex items-center gap-2 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20"
      >
        <Sparkles size={12} className="text-yellow-300" />
        <span>🍗 Protein Snacks Available</span>
      </motion.div>
    </section>
  );
};

export default Hero;
