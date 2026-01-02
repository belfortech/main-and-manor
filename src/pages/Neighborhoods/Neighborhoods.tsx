import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Preloader from '../../components/Preloader';

import image50 from '../../assets/images/image50.png';
import image51 from '../../assets/images/image51.png';
import image52 from '../../assets/images/image52.png';
import image53 from '../../assets/images/image53.png';
import image54 from '../../assets/images/image54.png';
import image55 from '../../assets/images/image55.png';
import image56 from '../../assets/images/image56.png';
import image57 from '../../assets/images/image57.png';
import image58 from '../../assets/images/image58.png';

import arrowright from '../../assets/images/ArrowRight2.png';

export default function Neighborhoods() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  const neighborhoods = [
    {
      id: 1,
      name: 'DUBAI MARINA',
      description: 'Waterfront living with energy, lifestyle, and skyline views.',
      image: image50,
      hasFullDetails: true,
    },
    {
      id: 2,
      name: 'PALM JUMEIRAH',
      description: 'Iconic island living with luxury resorts and beachfront villas.',
      image: image58,
      hasFullDetails: false,
    },
    {
      id: 3,
      name: 'DOWNTOWN DUBAI',
      description: 'The heart of the city with world-class dining and culture.',
      image: image53,
      hasFullDetails: false,
    },
    {
      id: 4,
      name: 'BUSINESS BAY',
      description: 'Dynamic urban living with stunning canal and skyline views.',
      image: image57,
      hasFullDetails: false,
    },
    {
      id: 5,
      name: 'JUMEIRAH HEIGHTS',
      description: 'Tranquil residential community with lush greenery.',
      image: image52,
      hasFullDetails: false,
    },
    {
      id: 6,
      name: 'SOBHA HARTLAND',
      description: 'Family-oriented green community with modern amenities.',
      image: image55,
      hasFullDetails: false,
    },
    {
      id: 7,
      name: 'JVC',
      description: 'Jumeirah Village Circle - affordable family living.',
      image: image56,
      hasFullDetails: false,
    },
    {
      id: 8,
      name: 'DUBAI HILLS',
      description: 'Golf course living with panoramic views and premium lifestyle.',
      image: image51,
      hasFullDetails: false,
    },
    {
      id: 9,
      name: 'ARABIAN RANCHES',
      description: 'Exclusive villa community with championship golf course.',
      image: image54,
      hasFullDetails: false,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-manorIvory pt-32 pb-24 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm tracking-[0.3em] uppercase text-urbanTaupe font-montserrat font-semibold"
            >
              Discover Dubai
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-deepManorSlate font-playfair relative inline-block"
            >
              Neighborhood Guides
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-warmSandstone rounded-full"></div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-deepManorSlate font-lato max-w-2xl mx-auto leading-relaxed italic pt-4"
            >
              "Finding the right home starts with choosing the right community. Discover the places
              that feel like home."
            </motion.p>
          </div>
        </div>

        {/* Neighborhoods Grid */}
        <div className="bg-white py-16 md:py-24 px-6 md:px-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {neighborhoods.map((neighborhood, index) => (
              <motion.div
                key={neighborhood.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-96 overflow-hidden">
                  <motion.img
                    src={neighborhood.image}
                    alt={neighborhood.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoalNoir via-charcoalNoir/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                  {/* Content Overlay - Always visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500">
                    <motion.h3
                      className="text-xl md:text-2xl text-white font-playfair font-semibold mb-2"
                      initial={{ y: 0 }}
                      whileHover={{ y: -5 }}
                    >
                      {neighborhood.name}
                    </motion.h3>

                    {/* Divider */}
                    <motion.div
                      className="w-16 h-px bg-warmSandstone mb-3"
                      initial={{ width: '4rem' }}
                      whileHover={{ width: '6rem' }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>

                    {/* Description - Shows on hover */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="text-sm text-manorIvory/90 mb-4 font-lato leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    >
                      {neighborhood.description}
                    </motion.p>

                    {/* Read Guide Button - Shows on hover for featured neighborhoods */}
                    {neighborhood.hasFullDetails && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      >
                        <span className="text-sm text-warmSandstone uppercase font-montserrat font-semibold tracking-wider">
                          Read Guide
                        </span>
                        <motion.img
                          src={arrowright}
                          alt="arrow"
                          className="w-5 h-5"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    )}
                  </div>

                  {/* Corner Accent - Decorative element */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-warmSandstone/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-deepManorSlate py-20 md:py-28 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl text-white font-playfair font-semibold">
              Not Sure Where to Start?
            </h2>

            <div className="w-24 h-px bg-warmSandstone mx-auto"></div>

            <p className="text-base md:text-lg text-manorIvory/80 max-w-2xl mx-auto font-lato leading-relaxed">
              Every neighborhood in Dubai has its own personality. Let us help you find the one that
              matches your lifestyle, priorities, and long-term goals.
            </p>

            <p className="text-lg text-warmSandstone italic font-spectral pt-4">
              "The right neighborhood makes all the difference."
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-warmSandstone text-white rounded-full font-montserrat font-semibold text-sm uppercase tracking-wider hover:bg-urbanTaupe transition shadow-lg"
              >
                Schedule a Consultation
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-manorIvory text-manorIvory rounded-full font-montserrat font-semibold text-sm uppercase tracking-wider hover:bg-manorIvory/10 transition"
              >
                Download Area Guide
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="bg-manorIvory py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-3"
              >
                <h3 className="text-5xl md:text-6xl font-playfair font-bold text-warmSandstone">
                  50+
                </h3>
                <p className="text-sm uppercase tracking-wider text-urbanTaupe font-montserrat font-semibold">
                  Neighborhoods Covered
                </p>
                <div className="w-16 h-px bg-warmSandstone mx-auto"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-3"
              >
                <h3 className="text-5xl md:text-6xl font-playfair font-bold text-warmSandstone">
                  15+
                </h3>
                <p className="text-sm uppercase tracking-wider text-urbanTaupe font-montserrat font-semibold">
                  Years Local Expertise
                </p>
                <div className="w-16 h-px bg-warmSandstone mx-auto"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-3"
              >
                <h3 className="text-5xl md:text-6xl font-playfair font-bold text-warmSandstone">
                  100%
                </h3>
                <p className="text-sm uppercase tracking-wider text-urbanTaupe font-montserrat font-semibold">
                  Personalized Service
                </p>
                <div className="w-16 h-px bg-warmSandstone mx-auto"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
