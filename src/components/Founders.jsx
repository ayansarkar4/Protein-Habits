import React from "react";
import { motion } from "framer-motion";

const Founders = () => {
  const founders = [
    {
      name: "Ayan Sarkar",
      role: "Co-Founder & CEO",
      description:
        "Passionate about health and nutrition, Ayan leads the vision of making protein snacks accessible and delicious for everyone.",
      avatar: "src/assets/image.png",
      social: {
        linkedin: "https://linkedin.com/in/ayan",
        twitter: "https://twitter.com/ayan",
        instagram: "https://instagram.com/ayan",
      },
    },
    {
      name: "Roni Shil",
      role: "Co-Founder & CEO",
      description:
        "Passionate about health and nutrition, Roni drives innovation and ensures every product meets the highest quality standards.",
      avatar: "src/assets/img.jpeg",
      social: {
        linkedin: "https://linkedin.com/in/roni",
        twitter: "https://twitter.com/roni",
        instagram: "https://instagram.com/roni",
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-orange-50 via-white to-amber-50 relative overflow-hidden">
      {/* Decorative blobs – dark orange (same as testimonial & review) */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black text-gray-800">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent">
              Founders
            </span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            The passionate minds behind Protein Habits, dedicated to redefining
            healthy snacking.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {founders.map((founder, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 md:p-8 border border-orange-200 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  {/* Avatar hover ring – dark orange gradient */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-700 to-orange-500 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={founder.avatar}
                    alt={founder.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-orange-200 group-hover:border-orange-500 transition-all duration-300 relative z-10"
                  />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-gray-800">
                  {founder.name}
                </h3>
                <p className="text-orange-600 font-semibold">{founder.role}</p>
                <p className="text-gray-600 mt-4 max-w-md">
                  {founder.description}
                </p>

                {/* Social links – dark orange text */}
                <div className="flex gap-4 mt-6">
                  <a
                    href={founder.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-700 font-medium hover:text-orange-800 transition-colors"
                  >
                    LinkedIn
                  </a>
                  <span className="text-gray-300">•</span>
                  <a
                    href={founder.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-700 font-medium hover:text-orange-800 transition-colors"
                  >
                    Twitter
                  </a>
                  <span className="text-gray-300">•</span>
                  <a
                    href={founder.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-700 font-medium hover:text-orange-800 transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Our Story Button – dark orange gradient */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-3 bg-gradient-to-r from-orange-700 to-orange-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Our Story
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Founders;
