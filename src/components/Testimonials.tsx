import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import arrowright from "../assets/images/arrow right.png";
import arrowleft from "../assets/images/arrow left.png";

type Testimonial = {
  id: number;
  quote: string;
  author: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "A rare blend of warmth, honesty, and professionalism. They made the entire process feel effortless.",
    author: "Aaron Camp",
  },
  {
    id: 2,
    quote: "Exceptional market knowledge and even better service.",
    author: " Lorraine Vargis",
  },
  {
    id: 3,
    quote:
      "A rare blend of warmth, honesty, and professionalism. They made the entire process feel effortless.",
    author: "Aaron Camp",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prev = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const next = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const { quote, author } = testimonials[activeIndex];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="tracking-[0.3em] text-xs uppercase text-warmSandstone mb-3 font-semibold font-montserrat">
            TESTIMONIAL TEASER
          </p>
          <h3 className="text-[22px] font-semibold text-onyx">What Clients Say</h3>
        </div>

        <div className="glass-panel px-6 md:px-10 py-10">
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 items-center">
            <div className="flex items-center justify-center">
              <button
                onClick={prev}
                className="h-12 w-12 rounded-full border border-onyx/10 flex items-center justify-center text-onyx hover:border-warmSandstone transition"
              >
                <img src={arrowleft} alt="arrow left" className="w-6 h-6" />
              </button>
            </div>

            <div className="text-center min-h-[140px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={quote}
                  className="text-[15px] leading-relaxed text-onyx/80 italic mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  {quote}
                </motion.p>
              </AnimatePresence>

              <p className="text-[11px] tracking-[0.2em] text-warmSandstone uppercase">
                {author}
              </p>
            </div>

            <div className="flex items-center justify-center">
              <button
                onClick={next}
                className="h-12 w-12 rounded-full border border-onyx/10 flex items-center justify-center text-onyx hover:border-warmSandstone transition"
              >
                <img src={arrowright} alt="arrowright" className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((item, index) => (
              <span
                key={item.id}
                className={`w-1.5 h-1.5 rounded-full transition ${
                  index === activeIndex ? "bg-warmSandstone" : "bg-onyx/20"
                }`}
              />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <div className="inline-flex flex-col items-center gap-2 w-full">
              <a
                href="#"
                className="text-[11px] tracking-[0.2em] uppercase text-onyx/70 hover:text-warmSandstone transition"
              >
                Read more reviews
              </a>
              <div className="w-24 border-t border-onyx/15"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
