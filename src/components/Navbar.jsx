import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Sparkles } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Testimonial", path: "/testimonial" },
  ];

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-orange-950/90 shadow-lg" : "bg-orange-900/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2 text-white font-bold">
              <Sparkles className="text-orange-400" />
              Protein Habits
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6">
              {navLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative text-sm font-medium transition ${
                      isActive
                        ? "text-orange-400"
                        : "text-gray-200 hover:text-orange-300"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* CTA */}
            <button className="hidden md:flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg">
              <ShoppingBag size={16} />
              Shop
            </button>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed top-0 right-0 w-64 h-full bg-orange-950 p-6 z-50"
          >
            <div className="flex justify-end mb-6">
              <button onClick={() => setIsOpen(false)}>
                <X className="text-white" />
              </button>
            </div>

            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-white border-b"
              >
                {item.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
