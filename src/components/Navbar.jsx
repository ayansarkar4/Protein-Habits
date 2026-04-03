import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, type: "spring", stiffness: 200 },
    }),
  };

  const mobileMenuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", damping: 25, stiffness: 200 },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const navLinks = ["Home", "Products", "About", "Contact"];

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-orange-950/90 backdrop-blur-xl shadow-2xl border-b border-orange-800/50"
            : "bg-orange-900/70 backdrop-blur-md border-b border-orange-800/30"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <Sparkles className="w-5 h-5 text-orange-400 absolute -top-2 -left-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="w-8 h-8 bg-gradient-to-br from-orange-700 to-orange-500 rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-white font-black text-sm">P</span>
                </div>
              </motion.div>
              <h1 className="text-xl md:text-2xl font-black bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent tracking-tight">
                Protein Habits
              </h1>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2 lg:gap-8">
              {navLinks.map((item, i) => (
                <motion.a
                  key={item}
                  href="#"
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  className="relative group px-2 py-1 text-gray-200 font-medium text-sm lg:text-base transition-colors hover:text-orange-300"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <motion.span
                    className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full"
                    whileHover={{ width: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(249,115,22,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-orange-700 to-orange-500 text-white px-5 py-2 rounded-xl font-semibold shadow-md transition-all duration-300 relative overflow-hidden group"
            >
              <ShoppingBag className="w-4 h-4 transition-transform group-hover:rotate-12" />
              Shop Now
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
                className="inline-block"
              >
                →
              </motion.span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-orange-800/50 text-orange-300"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-full w-64 bg-orange-950/95 backdrop-blur-xl shadow-2xl z-50 md:hidden flex flex-col p-6 border-l border-orange-800"
            >
              <div className="flex justify-end mb-8">
                <motion.button
                  whileHover={{ rotate: 90 }}
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-300"
                >
                  <X />
                </motion.button>
              </div>
              <div className="flex flex-col gap-4">
                {navLinks.map((item, i) => (
                  <motion.a
                    key={item}
                    href="#"
                    custom={i}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="text-gray-200 font-semibold text-lg py-2 border-b border-orange-800 flex justify-between items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                    <span className="text-orange-400">→</span>
                  </motion.a>
                ))}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-6 bg-gradient-to-r from-orange-700 to-orange-500 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Shop Now
                </motion.button>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{
                  delay: 0.6,
                  repeat: Infinity,
                  duration: 1.5,
                  repeatType: "reverse",
                }}
                className="absolute bottom-6 left-0 right-0 text-center text-xs text-orange-400"
              >
                🍗 Protein Snacks Available
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
