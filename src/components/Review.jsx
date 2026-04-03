import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

import video1 from "/src/assets/video1.mp4";
import video2 from "/src/assets/video2.mp4";

const baseItems = [
  { id: 1, src: video1, title: "Protein Laddu", desc: "Fuel your day" },
  { id: 2, src: video2, title: "Protein Bites", desc: "Taste meets nutrition" },
  { id: 3, src: video1, title: "Protein Laddu", desc: "Real review" },
  { id: 4, src: video2, title: "Protein Bites", desc: "Customer story" },
  { id: 5, src: video1, title: "Protein Laddu", desc: "Energy boost" },
  { id: 6, src: video2, title: "Protein Bites", desc: "Delicious snack" },
  { id: 7, src: video1, title: "Protein Laddu", desc: "Daily habit" },
  { id: 8, src: video2, title: "Protein Bites", desc: "Quick snack" },
];

const videoItems = [...baseItems, ...baseItems, ...baseItems];

const Review = () => {
  const scrollRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const animationRef = useRef(null);
  const speed = 1;

  const autoScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container || !isAutoScrolling) return;

    let newScrollPos = container.scrollLeft + speed;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (newScrollPos >= maxScroll - 1) {
      const originalFirstItemWidth =
        document.querySelector(".video-item")?.offsetWidth || 200;
      const itemCount = baseItems.length;
      const resetPosition = originalFirstItemWidth * itemCount * 1;
      container.scrollLeft = resetPosition;
      newScrollPos = resetPosition;
    } else {
      container.scrollLeft = newScrollPos;
    }

    animationRef.current = requestAnimationFrame(autoScroll);
  }, [isAutoScrolling, speed]);

  useEffect(() => {
    if (isAutoScrolling) {
      const start = () => {
        animationRef.current = requestAnimationFrame(autoScroll);
      };
      start();
    } else {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    }
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isAutoScrolling, autoScroll]);

  const handleMouseEnter = () => setIsAutoScrolling(false);
  const handleMouseLeave = () => setIsAutoScrolling(true);

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden">
      {/* Decorative blobs – changed to dark orange */}
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
            Real{" "}
            <span className="bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent">
              Customer Videos
            </span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Scroll horizontally – our videos loop endlessly. Hover to pause and
            scroll manually.
          </p>
        </motion.div>

        <div
          ref={scrollRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="overflow-x-auto scrollbar-hide scroll-smooth cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex gap-4 pb-4">
            {videoItems.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="flex-shrink-0 w-40 sm:w-48 md:w-56 video-item"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl overflow-hidden border border-orange-200 transition-all group">
                  <div className="relative aspect-[4/5] bg-black/5">
                    <video
                      src={item.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-2 text-center">
                    <h3 className="font-semibold text-gray-800 text-sm truncate">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-gray-400 text-sm mt-6">
          👉 Hover to pause, drag to scroll manually 👈
        </p>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Review;
