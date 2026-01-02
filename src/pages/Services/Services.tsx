import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import backgroundImage from '../../assets/images/image67.png';
import downloadwhiteIcon from '../../assets/images/download white.png';
import globe from '../../assets/images/globe4.png';
import buyerImg from '../../assets/images/buyer.png';
import sellerImg from '../../assets/images/seller.png';
import services1 from '../../assets/images/services1.png';
import services2 from '../../assets/images/services2.png';
import trendup2 from '../../assets/images/TrendUp2.png';
import globe3 from '../../assets/images/globe3.png';
import services3 from '../../assets/images/services3.png';
import services4 from '../../assets/images/services4.png';
import key from '../../assets/images/Key4.png';
import penNib from '../../assets/images/PenNib.png';
import bgImage from '../../assets/images/canada bg.png';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Preloader from '../../components/Preloader';

export default function Services() {
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

  const buyerFeatures = [
    'A curated selection of homes matching your style and story',
    'Architectural and layout analysis',
    'Full market insight and price guidance',
    'Negotiation with clarity and confidence',
    'Seamless coordination from search to handover',
  ];

  const sellerFeatures = [
    'Professional staging & styling guidance',
    'Architectural-led photography and video',
    'Premium digital and international marketing',
    'Accurate valuation and pricing strategy',
    'Private showings curated for qualified buyers',
  ];

  const investorFeatures = [
    'ROI calculations & long-term projections',
    'Portfolio planning (entry, growth, exit)',
    'Off-plan advisory & launch access',
    'Rental yield analysis',
    'Market cycles explained simply',
  ];

  const relocationFeatures = [
    'Neighborhood selection based on lifestyle',
    'School and community guidance',
    'Rental vs. purchase strategy',
    'Orientation tours',
    'Settling-in support & trusted local partners',
  ];

  const propertyMgmtFeatures = [
    'Tenant sourcing & screening',
    'Contracts and renewals',
    'Maintenance coordination',
    'Financial reporting',
    'Regular inspections',
  ];

  const developmentFeatures = [
    'Concept & positioning strategy',
    'Architectural and layout consultation',
    'Pricing, launch, and market analysis',
    'Buyer psychology insights',
    'Branding direction for elevated communities',
  ];

  const dualMarketFeatures = [
    'Cross-border buying & selling guidance',
    'Investment strategy across both regions',
    'Comparative market insights',
    'Relocation support between Canada & UAE',
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white text-charcoalNoir">
        {/* Hero Section */}
        <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
          {/* Left side - Deep Manor Slate */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute left-0 top-0 w-full md:w-1/2 h-full bg-deepManorSlate flex flex-col justify-center px-8 md:px-16 z-10"
          >
            <div className="w-20 h-px bg-manorIvory/40 mb-6"></div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="uppercase tracking-[0.3em] text-sm text-manorIvory/80 mb-4 font-montserrat font-semibold"
            >
              Our Expertise
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-5xl text-white font-playfair leading-tight"
            >
              Curated services for
              <br />
              <span className="italic text-warmSandstone font-cormorant">every chapter</span> of your
              <br />
              story.
            </motion.h1>
          </motion.div>

          {/* Right side - Background Image */}
          <div
            className="absolute right-0 top-0 w-full md:w-1/2 h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            {/* Gradient overlay for smooth transition */}
            <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-deepManorSlate via-deepManorSlate/50 to-transparent"></div>
          </div>
        </div>

        {/* Buyer Representation Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="py-20 md:py-28 px-6 md:px-16 lg:px-32 bg-manorIvory"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={buyerImg}
                alt="Buyer Representation"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-urbanTaupe font-montserrat font-semibold">
                Guided, curated, and design-led.
              </p>

              <div className="relative">
                <h2 className="absolute -top-4 -left-2 text-7xl md:text-8xl text-warmSandstone/10 font-playfair italic font-bold">
                  01
                </h2>
                <h3 className="relative text-3xl md:text-4xl text-charcoalNoir font-playfair font-semibold">
                  Buyer Representation
                </h3>
              </div>

              <div className="w-24 h-px bg-warmSandstone"></div>

              <p className="text-base md:text-lg text-deepManorSlate leading-relaxed font-lato">
                "Buying a home in Dubai should feel intentional—not overwhelming. We focus on
                understanding your lifestyle, architectural preferences, and long-term goals to help
                you find a home that fits."
              </p>

              <div className="space-y-4 pt-4">
                <h4 className="text-sm uppercase tracking-wider text-urbanTaupe font-montserrat font-semibold">
                  What Clients Receive
                </h4>

                {buyerFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`${
                      index === 0
                        ? 'bg-warmSandstone/10 p-4 rounded-lg'
                        : 'border-b border-warmSandstone/20 pb-3'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-warmSandstone font-playfair italic text-sm mt-1">
                        0{index + 1}
                      </span>
                      <span className="text-sm text-deepManorSlate font-lato">{feature}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="text-base italic text-urbanTaupe text-center pt-6 font-spectral">
                "We don't show you everything. We show you the right things."
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto px-6 py-4 bg-charcoalNoir text-white rounded-full flex items-center gap-3 hover:bg-deepManorSlate transition font-montserrat font-semibold text-sm uppercase tracking-wider"
              >
                <img src={downloadwhiteIcon} alt="download" className="w-5 h-5" />
                Download Full Buyer Guide
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Seller Representation Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="py-20 md:py-28 px-6 md:px-16 lg:px-32 bg-white"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 order-2 lg:order-1"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-urbanTaupe font-montserrat font-semibold">
                Marketing that elevates your property.
              </p>

              <div className="relative">
                <h2 className="absolute -top-4 -left-2 text-7xl md:text-8xl text-warmSandstone/10 font-playfair italic font-bold">
                  02
                </h2>
                <h3 className="relative text-3xl md:text-4xl text-charcoalNoir font-playfair font-semibold">
                  Seller Representation
                </h3>
              </div>

              <div className="w-24 h-px bg-warmSandstone"></div>

              <p className="text-base md:text-lg text-deepManorSlate leading-relaxed font-lato">
                "Your home is presented with the same care and detail as a luxury brand. We highlight
                its architecture, lifestyle flow, and value through refined marketing and strategic
                positioning."
              </p>

              <div className="space-y-4 pt-4">
                <h4 className="text-sm uppercase tracking-wider text-urbanTaupe font-montserrat font-semibold">
                  What Clients Receive
                </h4>

                {sellerFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`${
                      index === 0
                        ? 'bg-warmSandstone/10 p-4 rounded-lg'
                        : 'border-b border-warmSandstone/20 pb-3'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-warmSandstone font-playfair italic text-sm mt-1">
                        0{index + 1}
                      </span>
                      <span className="text-sm text-deepManorSlate font-lato">{feature}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="text-base italic text-urbanTaupe text-center pt-6 font-spectral">
                "We don't just list properties. We showcase them."
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto px-6 py-4 bg-charcoalNoir text-white rounded-full flex items-center gap-3 hover:bg-deepManorSlate transition font-montserrat font-semibold text-sm uppercase tracking-wider"
              >
                <img src={downloadwhiteIcon} alt="download" className="w-5 h-5" />
                Download Full Seller Guide
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <img
                src={sellerImg}
                alt="Seller Representation"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Specialized Services Section */}
        <div className="py-20 md:py-28 px-6 md:px-16 bg-charcoalNoir">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl text-white font-playfair font-semibold mb-4">
                Specialized Services
              </h2>
              <div className="w-24 h-px bg-warmSandstone mx-auto mb-6"></div>
              <p className="text-base text-manorIvory/70 max-w-2xl mx-auto font-lato">
                Tailored expertise for investors, developers, and international clients seeking
                distinct advantages in the Dubai market.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Investor Services Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={services1}
                    alt="Investor Services"
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-lg">
                      <img src={trendup2} alt="trend" className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl text-white font-playfair font-semibold">
                      Investor Services
                    </h3>
                  </div>
                </div>

                <div className="bg-white rounded-b-2xl p-6 -mt-4 relative z-10 shadow-xl">
                  <p className="text-sm italic text-urbanTaupe mb-3 font-spectral">
                    Data-driven strategy, long-term value.
                  </p>
                  <p className="text-sm text-deepManorSlate mb-6 font-lato">
                    Dubai is one of the world's strongest investment markets—but success requires
                    clarity and expertise.
                  </p>
                  <div className="w-full h-px bg-warmSandstone/30 mb-4"></div>
                  <ul className="grid grid-cols-1 gap-3 mb-6">
                    {investorFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-warmSandstone text-sm mt-1">✦</span>
                        <span className="text-sm text-deepManorSlate font-lato">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="w-full h-px bg-warmSandstone/30 mb-4"></div>
                  <p className="text-sm italic text-urbanTaupe font-spectral">
                    "We help you invest with strategy, not guesswork."
                  </p>
                </div>
              </motion.div>

              {/* Relocation Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={services2}
                    alt="Relocation Services"
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-lg">
                      <img src={globe3} alt="globe" className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl text-white font-playfair font-semibold">
                      Relocation to Dubai
                    </h3>
                  </div>
                </div>

                <div className="bg-white rounded-b-2xl p-6 -mt-4 relative z-10 shadow-xl">
                  <p className="text-sm italic text-urbanTaupe mb-3 font-spectral">
                    A guided transition, built around your lifestyle.
                  </p>
                  <p className="text-sm text-deepManorSlate mb-6 font-lato">
                    Moving to Dubai is exciting and overwhelming. We simplify the process through
                    personalized support tailored to individuals, couples, and families.
                  </p>
                  <div className="w-full h-px bg-warmSandstone/30 mb-4"></div>
                  <ul className="grid grid-cols-1 gap-3 mb-6">
                    {relocationFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-warmSandstone text-sm mt-1">✦</span>
                        <span className="text-sm text-deepManorSlate font-lato">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="w-full h-px bg-warmSandstone/30 mb-4"></div>
                  <p className="text-sm italic text-urbanTaupe font-spectral">
                    "Our goal is for Dubai to feel like home from the moment you arrive."
                  </p>
                </div>
              </motion.div>

              {/* Property Management Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={services3}
                    alt="Property Management"
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-lg">
                      <img src={key} alt="key" className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl text-white font-playfair font-semibold">
                      Property Management
                    </h3>
                  </div>
                </div>

                <div className="bg-white rounded-b-2xl p-6 -mt-4 relative z-10 shadow-xl">
                  <p className="text-sm italic text-urbanTaupe mb-3 font-spectral">
                    Your property, professionally cared for.
                  </p>
                  <p className="text-sm text-deepManorSlate mb-6 font-lato">
                    For investors and homeowners who want hands-off ownership, we provide:
                  </p>
                  <div className="w-full h-px bg-warmSandstone/30 mb-4"></div>
                  <ul className="grid grid-cols-1 gap-3 mb-6">
                    {propertyMgmtFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-warmSandstone text-sm mt-1">✦</span>
                        <span className="text-sm text-deepManorSlate font-lato">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="w-full h-px bg-warmSandstone/30 mb-4"></div>
                  <p className="text-sm italic text-urbanTaupe font-spectral">
                    "A seamless experience even when you're abroad."
                  </p>
                </div>
              </motion.div>

              {/* Development Consulting Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={services4}
                    alt="Development Consulting"
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-lg">
                      <img src={penNib} alt="pen" className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl text-white font-playfair font-semibold">
                      Development Consulting
                    </h3>
                  </div>
                </div>

                <div className="bg-white rounded-b-2xl p-6 -mt-4 relative z-10 shadow-xl">
                  <p className="text-sm italic text-urbanTaupe mb-3 font-spectral">
                    Insight for developers who value design and market clarity.
                  </p>
                  <p className="text-sm text-deepManorSlate mb-6 font-lato">
                    We partner with developers seeking a boutique, design-focused edge in Dubai's
                    competitive market. Advisory support includes:
                  </p>
                  <div className="w-full h-px bg-warmSandstone/30 mb-4"></div>
                  <ul className="grid grid-cols-1 gap-3 mb-6">
                    {developmentFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-warmSandstone text-sm mt-1">✦</span>
                        <span className="text-sm text-deepManorSlate font-lato">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="w-full h-px bg-warmSandstone/30 mb-4"></div>
                  <p className="text-sm italic text-urbanTaupe font-spectral">
                    "We help shape projects that resonate with today's buyers."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Canada ↔ Dubai Dual Market Section */}
        <div
          className="relative py-24 md:py-32 px-6 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-charcoalNoir/60"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative max-w-4xl mx-auto text-center space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="inline-block border-2 border-warmSandstone/40 rounded-full p-4 bg-white/5 backdrop-blur-sm"
            >
              <img src={globe} alt="globe" className="w-8 h-8" />
            </motion.div>

            <h2 className="text-2xl md:text-4xl text-white font-playfair font-semibold">
              Canada ↔ Dubai Dual
              <br />
              Market Expertise
            </h2>

            <div className="space-y-4">
              <p className="text-lg text-warmSandstone italic font-spectral">
                A global perspective, a boutique experience.
              </p>
              <p className="text-base text-manorIvory/90 max-w-2xl mx-auto font-lato leading-relaxed">
                With lived experience and professional roots in both Toronto and Dubai, our team
                provides a rare dual-market advantage. For international clients:
              </p>
            </div>

            <div className="w-48 h-px bg-warmSandstone/40 mx-auto my-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {dualMarketFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 text-left"
                >
                  <span className="text-warmSandstone text-lg mt-1">✦</span>
                  <span className="text-base text-white font-lato">{feature}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-base italic text-manorIvory/80 pt-6 font-spectral">
              "We bridge cultures, markets, and expectations."
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-manorIvory text-charcoalNoir rounded-full font-montserrat font-semibold text-sm uppercase tracking-wider hover:bg-warmSandstone transition mt-8"
            >
              Schedule Consultation
            </motion.button>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
