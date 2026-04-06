import React from "react";
import { motion } from "framer-motion";
import {
  Quote,
  Heart,
  Sparkles,
  MessageCircle,
  Coffee,
  Target,
} from "lucide-react";

// Safe icons (these exist in your lucide-react version)
// If any missing, they are replaced with inline SVGs or safe alternatives

const Ourstory = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="pt-20 bg-gradient-to-br from-orange-50 via-white to-amber-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
      <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700" />

      {/* Hero Section */}
      <section className="relative py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4"
        >
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
            Our Journey
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-gray-800">
            The Story of{" "}
            <span className="bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent">
              Protein Habits
            </span>
          </h1>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Two friends, a shared dream, and the courage to choose their own
            path.
          </p>
        </motion.div>
      </section>

      {/* The Beginning – Childhood friends */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="order-2 md:order-1"
          >
            <div className="flex items-center gap-2 mb-3">
              <Heart size={20} className="text-orange-500" />
              <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">
                Chapter 1
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-800">
              Two Friends, One Dream
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Ayan and Roni have been best friends since{" "}
              <strong>Class 5</strong>. They studied together, cracked
              engineering entrance exams together, and shared every dream and
              doubt along the way. While everyone around them was rushing toward
              the traditional "job" route, they often wondered – is there
              another way?
            </p>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Late nights in the hostel, endless cups of chai, and conversations
              about health, fitness, and the lack of tasty protein snacks in
              India sparked a tiny flame. What if they could build something of
              their own?
            </p>
            <div className="mt-6 flex items-center gap-2 text-orange-600 font-medium">
              <Coffee size={18} />
              <span>From hostel chai sessions to a brand idea</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 md:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format"
                alt="Two friends"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-orange-50/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format"
                alt="Job interview"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-3">
                <MessageCircle size={20} className="text-orange-500" />
                <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">
                  Chapter 2
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-800">
                The Crossroads
              </h2>
              <p className="text-gray-600 mt-4 leading-relaxed">
                One day, Ayan went for an interview at a top company. To his
                surprise, he got selected. But instead of feeling excited, he
                felt a strange emptiness. He immediately called Roni.
              </p>
              <div className="mt-4 p-4 bg-white rounded-xl border-l-4 border-orange-500 shadow-sm">
                <Quote size={20} className="text-orange-400 mb-2" />
                <p className="text-gray-700 italic">
                  "Bhai, select ho gaya. But I don't feel happy. Kya karu?"
                </p>
                <p className="text-gray-600 mt-2 text-sm">
                  – Ayan, trembling with doubt
                </p>
              </div>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Roni calmly replied:{" "}
                <strong>"Koi baat nahi. Ghar aa. Sab thik hoga."</strong>
                That night, they sat for hours, discussing their fears, their
                dreams, and the brand idea they had been pushing aside.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-2 mb-3">
              <Target size={20} className="text-orange-500" />
              <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">
                Chapter 3
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-800">
              Leaving the Rat Race
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Ayan saw a message from Roni the next morning:{" "}
              <strong>"Let's do this. Protein Habits."</strong>
              At first, doubt crept in – what if they fail? What will families
              say? But after many sleepless nights and honest conversations,
              they took the leap.
            </p>
            <p className="text-gray-600 mt-3 leading-relaxed">
              They decided to reject the traditional path and build something
              meaningful. No fancy office, no investors – just two friends, a
              small kitchen, and a big dream to make healthy snacking affordable
              and delicious for every Indian.
            </p>
            <div className="mt-6 flex gap-3">
              <div className="bg-orange-100 rounded-full px-4 py-2 text-orange-700 text-sm font-semibold">
                No regrets
              </div>
              <div className="bg-orange-100 rounded-full px-4 py-2 text-orange-700 text-sm font-semibold">
                Pure passion
              </div>
              <div className="bg-orange-100 rounded-full px-4 py-2 text-orange-700 text-sm font-semibold">
                Zero compromise
              </div>
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
              src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&auto=format"
              alt="Starting a business"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-orange-700 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Sparkles size={40} className="mx-auto mb-4 text-yellow-300" />
            <h2 className="text-3xl md:text-4xl font-black">
              "Follow your own path, even if it's scary"
            </h2>
            <p className="text-orange-100 text-lg mt-4 max-w-2xl mx-auto">
              – Ayan & Roni, founders of Protein Habits
            </p>
            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <p className="italic text-white/90">
                "We started with zero experience, zero funding, but infinite
                passion. Today, Protein Habits is loved by thousands. If you
                have a dream, don't let fear stop you. Take that first step – no
                matter how small."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Today – The Brand Today */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-800">
            Where We Are Today
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            From a small kitchen to a trusted brand – and we're just getting
            started.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { number: "10k+", label: "Happy Customers", desc: "Across India" },
            {
              number: "4",
              label: "Delicious Products",
              desc: "And more coming soon",
            },
            {
              number: "100%",
              label: "Natural Ingredients",
              desc: "No compromise on quality",
            },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all border border-orange-200"
            >
              <h3 className="text-4xl font-black text-orange-600">
                {stat.number}
              </h3>
              <p className="text-gray-800 font-semibold mt-2">{stat.label}</p>
              <p className="text-gray-500 text-sm mt-1">{stat.desc}</p>
            </motion.div>
          ))}
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
              Be Part of Our Story
            </h2>
            <p className="text-gray-700 mt-3 text-lg">
              Join the Protein Habits family and make healthy snacking a daily
              habit.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-gradient-to-r from-orange-700 to-orange-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Shop Now →
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Ourstory;
