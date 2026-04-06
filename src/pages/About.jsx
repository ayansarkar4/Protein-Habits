import React from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  Heart,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

// Sample images (replace with your own assets)
const heroImage =
  "https://images.unsplash.com/photo-1565373676635-6c47efd5b6ef?w=1200&auto=format"; // healthy snacks assortment
const storyImage =
  "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=800&auto=format"; // protein laddus
const productImage1 =
  "https://images.unsplash.com/photo-1604079628040-94301d2e44c9?w=600&auto=format"; // nuts and seeds
const productImage2 =
  "https://images.unsplash.com/photo-1621447506855-9ea1c1f2d95e?w=600&auto=format"; // protein bar
const productImage3 =
  "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=600&auto=format"; // energy balls
const teamImage =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format"; // team of founders

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="pt-20 bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black text-white drop-shadow-lg"
          >
            About{" "}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
              Protein Habits
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-white/90 mt-4 max-w-2xl mx-auto"
          >
            Your daily dose of healthy, delicious, and affordable protein
            snacks.
          </motion.p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mt-2">
              Making Healthy Snacking a Daily Habit
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Protein Habits was born from a simple idea:{" "}
              <strong>healthy snacking shouldn't be boring or expensive</strong>
              . We wanted to create a range of protein-packed snacks that are
              not only nutritious but also delicious and affordable for
              everyone.
            </p>
            <p className="text-gray-600 mt-3 leading-relaxed">
              From our signature <strong>Protein Laddus</strong> to crunchy nut
              mixes and protein bars, every product is crafted with
              high-quality, natural ingredients. No artificial preservatives, no
              added sugars – just pure, wholesome energy.
            </p>
            <div className="mt-6 flex items-center gap-2 text-orange-600 font-semibold">
              <span>✨ Made with love in India</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={storyImage}
              alt="Protein Laddu"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-800">
              Our <span className="text-orange-500">Core Values</span>
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              What drives us every day.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Leaf className="w-10 h-10 text-orange-500" />,
                title: "100% Natural",
                desc: "Only real ingredients – no artificial colors, flavors, or preservatives.",
              },
              {
                icon: <Zap className="w-10 h-10 text-orange-500" />,
                title: "High Protein",
                desc: "Each snack is packed with plant-based protein to keep you energized.",
              },
              {
                icon: <Heart className="w-10 h-10 text-orange-500" />,
                title: "Made with Love",
                desc: "Small-batch crafted to ensure quality and taste in every bite.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all border border-orange-100"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-800">
            What We Offer
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Delicious, affordable, and protein‑rich snacks for every lifestyle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              img: productImage1,
              title: "Protein Laddus",
              desc: "Traditional Indian sweets reimagined with high protein, no added sugar.",
            },
            {
              img: productImage2,
              title: "Protein Bars",
              desc: "Crunchy, gluten‑free bars with 15g protein – perfect for on‑the‑go.",
            },
            {
              img: productImage3,
              title: "Nut & Seed Mixes",
              desc: "Roasted with Himalayan pink salt, packed with healthy fats and protein.",
            },
          ].map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-orange-100"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{product.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-green-600 text-sm">
                  <CheckCircle size={16} />
                  <span>Affordable price</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Affordability & Commitment */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-yellow-400 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-black">
              Quality That Doesn't Break the Bank
            </h2>
            <p className="text-white/90 text-lg mt-4 max-w-2xl mx-auto">
              We believe everyone deserves access to healthy, high‑protein
              snacks at fair prices. No compromises on quality, no hidden costs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Shield size={20} />
                <span>100% Natural</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Zap size={20} />
                <span>High Protein</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Heart size={20} />
                <span>No Added Sugar</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team / Founders (optional) */}
      <section className="py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-800">
            Meet the <span className="text-orange-500">People Behind</span>{" "}
            Protein Habits
          </h2>
          <p className="text-gray-600 mt-2">
            Passionate foodies on a mission to make healthy snacking enjoyable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={teamImage}
              alt="Our team"
              className="rounded-2xl shadow-xl w-full object-cover h-80"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-800">
              From Our Kitchen to Your Table
            </h3>
            <p className="text-gray-600 mt-3 leading-relaxed">
              We started Protein Habits because we were tired of boring,
              expensive health snacks. Our small team of nutritionists and food
              technologists works tirelessly to create recipes that are both
              nutritious and irresistible.
            </p>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Every product is tested, tasted, and approved by real people – not
              just machines. We're proud to bring you snacks that you can enjoy
              guilt‑free, every single day.
            </p>
            <div className="mt-6 flex items-center gap-2 text-orange-600 font-medium">
              <ArrowRight size={18} />
              <span>Join the Protein Habits family today!</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-100">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-800">
              Ready to Make Protein a Habit?
            </h2>
            <p className="text-gray-700 mt-3 text-lg">
              Explore our range of healthy, affordable protein snacks.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              Shop Now
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
