import React from "react";
import { motion } from "framer-motion";
import { Bell, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Protein Laddu",
    description: "High protein, no added sugar, natural energy balls",
    image: "/src/assets/product.jpeg",
  },
  {
    id: 2,
    name: "Peanut Butter Protein Bar",
    description: "Crunchy, gluten-free, 15g protein per bar",
    image: "/src/assets/product.jpeg",
  },
  {
    id: 3,
    name: "Almond & Seeds Mix",
    description: "Roasted with Himalayan pink salt",
    image: "/src/assets/product.jpeg",
  },
  {
    id: 4,
    name: "Chocolate Protein Bites",
    description: "Rich cocoa, 10g protein, guilt-free snack",
    image: "/src/assets/product.jpeg",
  },
];

const Ourproduct = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black text-gray-800">
            Our{" "}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Protein-Packed
            </span>{" "}
            Products
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Crafted with love and natural ingredients to fuel your daily protein
            habits.
          </p>
        </motion.div>

        {/* Product Grid – all cards show "Coming Soon" */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-orange-100"
            >
              {/* Image Container – enlarged height */}
              <div className="relative h-64 bg-gradient-to-br from-orange-100 to-amber-100 overflow-hidden">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl">
                    🍪
                  </div>
                )}
                {/* "Coming Soon" badge */}
                <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md z-10">
                  Coming Soon
                </span>
              </div>

              {/* Product Info – no price, no old price, no review stars */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
                {/* Notify Me button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold py-2 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-md group"
                >
                  <Bell
                    size={18}
                    className="transition-transform group-hover:-translate-y-0.5"
                  />
                  Notify Me
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Buy 3 Get 1 Free Banner – unchanged */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring" }}
          className="mt-16 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-2xl p-6 md:p-8 text-center text-white shadow-xl"
        >
          <h3 className="text-2xl md:text-4xl font-black">
            Buy 3 Get 1 Free! 🎉
          </h3>
          <p className="mt-2 text-white/90">
            Stock up on your favourite protein snacks – limited period offer.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 bg-white text-orange-500 font-bold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            Grab the Deal →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Ourproduct;
