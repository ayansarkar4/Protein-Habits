import React, { useState } from "react";
import { motion } from "framer-motion";

// Custom SVG Icons (no external dependencies)
const MapPinIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const PhoneIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const MailIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const ClockIcon = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const SendIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
    />
  </svg>
);

const CheckCircleIcon = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const ShareIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
    />
  </svg>
);

const TwitterIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
    />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
    />
    <circle
      cx="4"
      cy="4"
      r="2"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="5"
      ry="5"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <line
      x1="17.5"
      y1="6.5"
      x2="17.51"
      y2="6.5"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const ChevronDownIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const faqs = [
    {
      question: "Where can I buy Protein Habits products?",
      answer:
        "You can shop directly from our website, or find us on Amazon, Flipkart, and leading health stores across India.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Currently, we ship only within India. We're working on expanding to international markets soon.",
    },
    {
      question: "Are your products suitable for vegans?",
      answer: "Yes! All our snacks are 100% plant‑based and vegan‑friendly.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Orders are typically delivered within 3‑5 business days, depending on your location.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="pt-20 bg-gradient-to-br from-orange-50 via-white to-amber-50 relative overflow-hidden">
      {/* Decorative blobs – matching other sections */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-800 to-orange-950" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-white drop-shadow-lg"
          >
            Get in <span className="text-yellow-300">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 mt-3 max-w-2xl mx-auto"
          >
            Have questions, feedback, or just want to say hello? We'd love to
            hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: <MapPinIcon />,
              title: "Visit Us",
              detail: "123 Health Street, Wellness City, India - 560001",
            },
            {
              icon: <PhoneIcon />,
              title: "Call Us",
              detail: "+91 98765 43210",
            },
            {
              icon: <MailIcon />,
              title: "Email Us",
              detail: "hello@proteinhabits.com",
            },
            {
              icon: <ClockIcon />,
              title: "Working Hours",
              detail: "Mon - Sat: 9AM - 6PM",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all border border-orange-200"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full text-orange-600 mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{item.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-orange-200"
          >
            <h2 className="text-2xl md:text-3xl font-black text-gray-800">
              Send us a Message
            </h2>
            <p className="text-gray-500 mt-1">
              We'll get back to you within 24 hours.
            </p>
            {isSubmitted && (
              <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg flex items-center gap-2 text-sm">
                <CheckCircleIcon /> Thank you! Your message has been sent.
              </div>
            )}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-orange-700 to-orange-500 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg"
              >
                Send Message <SendIcon />
              </motion.button>
            </form>
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-gray-600 text-sm text-center mb-3">
                Follow us on social media
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-orange-500 hover:text-white transition-all"
                >
                  <ShareIcon />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-orange-500 hover:text-white transition-all"
                >
                  <TwitterIcon />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-orange-500 hover:text-white transition-all"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-orange-500 hover:text-white transition-all"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map & Location */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-200 h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.846570370756!2d77.5942579148225!3d12.914553590883507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c8b7e9f9f9%3A0x7f5c8c5f5c5f5c5f!2sBangalore!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Protein Habits Location"
              ></iframe>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-200">
              <h3 className="text-xl font-bold text-gray-800">
                Need immediate help?
              </h3>
              <p className="text-gray-600 mt-2">
                Call our customer support hotline:
              </p>
              <p className="text-2xl font-bold text-orange-600 mt-2">
                +91 98765 43210
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Available Mon-Sat, 9AM - 6PM
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-800">
            Frequently Asked <span className="text-orange-600">Questions</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Find quick answers to common queries.
          </p>
        </motion.div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-orange-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-800 hover:bg-orange-50 transition"
              >
                <span>{faq.question}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-orange-500 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`px-5 pb-5 text-gray-600 transition-all duration-300 ${openFaq === idx ? "block" : "hidden"}`}
              >
                {faq.answer}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action – dark orange gradient */}
      <section className="py-16 bg-gradient-to-r from-orange-700 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black">
              Ready to start your healthy journey?
            </h2>
            <p className="text-white/90 mt-3 text-lg">
              Explore our range of protein snacks today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-white text-orange-700 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Shop Now →
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
