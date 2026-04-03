import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  Verified,
  Heart,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Fitness Enthusiast",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "Protein Laddu has become my daily go-to snack. It's delicious, keeps me full, and the quality is top-notch. Highly recommend!",
    verified: true,
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Yoga Instructor",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "I love that these snacks have no added sugar and are all-natural. Perfect for my post-workout energy boost. Taste is amazing!",
    verified: true,
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Amit Kumar",
    role: "Busy Professional",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 4,
    text: "Convenient, healthy, and actually tasty. The Protein Bites are my office desk essential. Will order again.",
    verified: false,
    date: "3 days ago",
  },
  {
    id: 4,
    name: "Neha Singh",
    role: "Mother & Nutritionist",
    avatar: "https://randomuser.me/api/portraits/women/89.jpg",
    rating: 5,
    text: "My kids love the Chocolate Protein Bites and I feel good giving them a healthy snack. Thank you Protein Habits!",
    verified: true,
    date: "1 week ago",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToTestimonial = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 25 },
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-orange-50 via-white to-amber-50 relative overflow-hidden">
      {/* ডেকোরেটিভ ব্লব – ডার্ক অরেঞ্জ */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* ব্যাজ – ডার্ক অরেঞ্জ */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 bg-orange-800 text-orange-200 text-sm font-bold px-4 py-1.5 rounded-full mb-4"
          >
            <Heart size={14} className="fill-orange-400" />
            Real Stories, Real Results
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-800">
            What Our{" "}
            <span className="bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Join thousands of happy customers who made protein a daily habit.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-orange-200 relative overflow-hidden"
            >
              {/* হোভার গ্রেডিয়েন্ট – ডার্ক অরেঞ্জ */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-800 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-10" />
              <div className="absolute inset-[1px] bg-white rounded-2xl -z-10" />
              <div className="absolute top-4 right-4">
                <div className="bg-orange-800 rounded-full p-2">
                  <Quote size={20} className="text-orange-300" />
                </div>
              </div>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < testimonial.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3 mt-4 pt-3 border-t border-gray-100">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-orange-600"
                  />
                  {testimonial.verified && (
                    <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5">
                      <Verified size={10} className="text-white" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {testimonial.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden px-2">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-orange-200 relative"
              >
                <div className="absolute top-4 right-4 bg-orange-800 rounded-full p-2">
                  <Quote size={20} className="text-orange-300" />
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < testimonials[currentIndex].rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-base leading-relaxed mb-5">
                  "{testimonials[currentIndex].text}"
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div className="relative">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-orange-600"
                    />
                    {testimonials[currentIndex].verified && (
                      <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5">
                        <Verified size={12} className="text-white" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-base">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {testimonials[currentIndex].date}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* নেভিগেশন এরো – ডার্ক অরেঞ্জ */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 bg-orange-800 shadow-lg rounded-full p-2 text-white hover:bg-orange-700 transition-all z-10"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 bg-orange-800 shadow-lg rounded-full p-2 text-white hover:bg-orange-700 transition-all z-10"
          >
            <ChevronRight size={20} />
          </button>

          {/* ডট ইন্ডিকেটর */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => goToTestimonial(idx)}
                className={`transition-all rounded-full ${
                  currentIndex === idx
                    ? "w-2.5 h-2.5 bg-orange-700"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
                whileHover={{ scale: 1.2 }}
                animate={currentIndex === idx ? { scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              />
            ))}
          </div>
        </div>

        {/* ট্রাস্ট ব্যাজ – ডার্ক অরেঞ্জ বর্ডার */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring" }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-4 md:gap-6 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-orange-300">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-lg">⭐</span>
              <span className="text-gray-700 text-sm font-semibold">4.9/5</span>
              <span className="text-gray-500 text-xs">(Average)</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-gray-300" />
            <div className="flex items-center gap-2">
              <span className="text-lg">💬</span>
              <span className="text-gray-700 text-sm font-semibold">
                500+ Reviews
              </span>
            </div>
            <div className="hidden md:block w-px h-4 bg-gray-300" />
            <div className="flex items-center gap-2">
              <span className="text-lg">🏆</span>
              <span className="text-gray-700 text-sm font-semibold">
                Trusted by 10k+ Customers
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
