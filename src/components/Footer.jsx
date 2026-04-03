import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = ["Home", "Products", "About", "Contact"];
  const productLinks = [
    "Protein Laddu",
    "Protein Bar",
    "Almond Mix",
    "Chocolate Bites",
  ];

  return (
    <footer className="bg-gradient-to-b from-orange-900 to-orange-950 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-black text-sm">P</span>
              </div>
              <h2 className="text-xl font-black bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                Protein Habits
              </h2>
            </div>
            <p className="text-orange-200/80 text-sm leading-relaxed">
              Make protein a daily habit with our delicious, all‑natural snacks.
              Fuel your body, enjoy the taste.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-orange-200/80 hover:text-orange-300 transition text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">
              Our Products
            </h3>
            <ul className="space-y-2">
              {productLinks.map((product) => (
                <li key={product}>
                  <a
                    href="#"
                    className="text-orange-200/80 hover:text-orange-300 transition text-sm"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-orange-200/80 text-sm">
                <MapPin size={16} className="text-orange-400" />
                <span>123 Health Street, Wellness City</span>
              </li>
              <li className="flex items-center gap-2 text-orange-200/80 text-sm">
                <Phone size={16} className="text-orange-400" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2 text-orange-200/80 text-sm">
                <Mail size={16} className="text-orange-400" />
                <span>hello@proteinhabits.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/20 text-center text-orange-200/60 text-sm flex flex-col md:flex-row justify-between items-center gap-2">
          <p>&copy; {currentYear} Protein Habits. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={12} className="text-red-400 fill-red-400" />{" "}
            for a healthier you
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
