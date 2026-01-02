import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Preloader from '../../components/Preloader';
import Navbar from '../../components/Navbar';
import HeroSection from '../../components/ui/HeroSection';
import SectionWrapper from '../../components/ui/SectionWrapper';
import Button from '../../components/ui/Button';
import backgroundImage from '../../assets/images/home2.png';
import hero2 from '../../assets/images/home3.jpg';
import hero3 from '../../assets/images/home4.jpg';
import hero4 from '../../assets/images/dubai21.jpg';
import arrow from '../../assets/images/Arrow.png';
import image60 from '../../assets/images/image60.png';
import arrowright from '../../assets/images/ArrowRight.png';
import logo from '../../assets/images/logo10.png';
import FeaturedListings from './Featured listings/FeaturedListings';
import FeaturedOffPlan from './Featured listings/FeaturedOffPlan';
import CommunitiesSection from './Communitiessection';
import Footer from '../../components/Footer';
import FindNexthome from './FindNexthome';
import Testimonials from '../../components/Testimonials';
import WhyChoose from './WhyChoose';

const heroImages = [backgroundImage, hero2, hero3, hero4];

export default function Home() {
  const navigate = useNavigate();
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

  return (
    <>
      <Navbar />

      <HeroSection
        images={heroImages}
        logo={logo}
        title="Homes that fit your story."
        subtitle="Thoughtfully curated homes, elevated service, and a boutique real estate experience rooted in trust, taste, and timeless design."
        buttonText="Explore Properties"
        onButtonClick={() => navigate('/listings')}
        arrowIcon={arrow}
      />

      {/* Timeless Spaces Section */}
      <SectionWrapper className="text-sand bg-charcoalNoir">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="glass-panel overflow-hidden rounded-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 180, damping: 18 }}
          >
            <img
              src={image60}
              alt="Timeless spaces"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white">
                Timeless spaces.
                <br />
                <span className="text-warmSandstone italic font-cormorant">
                  Thoughtful guidance.
                </span>
              </h2>
              <div className="w-24 h-1 bg-warmSandstone rounded-full"></div>
            </div>

            <div className="space-y-4 text-manorIvory/90 font-lato">
              <p className="text-base leading-relaxed">
                At Main & Manor, we believe a home is more than walls and square footage—it's an
                atmosphere, a feeling, an invitation.
              </p>
              <p className="text-base leading-relaxed">
                We combine refined aesthetics with market expertise to help you find (or sell) a
                property that reflects who you are and how you want to live.
              </p>
              <p className="text-base leading-relaxed">
                Whether you're purchasing your first Dubai home, expanding your portfolio, or
                relocating internationally, our approach is grounded in:
              </p>
            </div>

            <div className="mt-6">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Elevated Service',
                  'Honest Guidance',
                  'Architectural Appreciation',
                  'Intelligent Investment Strategy',
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="h-2 w-2 rounded-full bg-warmSandstone flex-shrink-0" />
                    <span className="font-medium text-white font-lato">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Featured Listings Section */}
      <SectionWrapper className="bg-deepManorSlate text-sand rounded-[32px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <p className="tracking-[0.3em] text-xs uppercase text-warmSandstone font-montserrat font-semibold">
              Featured Properties
            </p>
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white">
              Featured Listings
            </h2>
            <div className="w-20 h-px bg-warmSandstone"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-row gap-3 items-center"
          >
            <Button
              onClick={() => navigate('/listings')}
              variant="outline"
              className="text-white border-warmSandstone hover:bg-warmSandstone hover:text-white flex items-center gap-2"
            >
              View All Listings
              <motion.img
                src={arrowright}
                alt="arrow"
                className="w-4 h-4"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
        </div>
        <FeaturedListings />
      </SectionWrapper>

      {/* Why Choose Us Section */}
      <SectionWrapper className="bg-charcoalNoir">
        <WhyChoose />
      </SectionWrapper>

      {/* Featured Off-Plan Section */}
      <SectionWrapper className="bg-manorIvory text-charcoalNoir rounded-[32px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <p className="tracking-[0.3em] text-xs uppercase text-urbanTaupe font-montserrat font-semibold">
              Off-Plan Properties
            </p>
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-charcoalNoir">
              Featured Off-Plan Listings
            </h2>
            <div className="w-20 h-px bg-warmSandstone"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-row gap-3 items-center"
          >
            <Button
              onClick={() => navigate('/listings')}
              variant="outline"
              className="text-charcoalNoir border-warmSandstone hover:bg-warmSandstone hover:text-white flex items-center gap-2"
            >
              View All Listings
              <motion.img
                src={arrowright}
                alt="arrow"
                className="w-4 h-4"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
        </div>
        <FeaturedOffPlan />
      </SectionWrapper>

      {/* The Main & Manor Experience Section */}
      <SectionWrapper className="bg-deepManorSlate text-sand rounded-[32px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.img
              src={image60}
              alt="Main & Manor Experience"
              className="w-full h-full object-cover rounded-2xl border border-warmSandstone/20 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 180, damping: 20 }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-warmSandstone font-montserrat font-semibold">
                The Main & Manor Experience
              </p>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white">
                A Modern, Elevated
                <br />
                <span className="text-warmSandstone italic font-cormorant">
                  Real Estate Experience
                </span>
              </h2>
              <div className="w-24 h-1 bg-warmSandstone rounded-full"></div>
            </div>

            <p className="text-base text-manorIvory/90 leading-relaxed font-lato">
              We merge design-forward presentation, strong negotiation, and professional
              storytelling to showcase every home in its best light.
            </p>

            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-wider text-white font-montserrat font-semibold">
                Our Clients Value:
              </h3>
              <ul className="space-y-3">
                {[
                  'Beautifully presented listings',
                  'Thoughtful market strategy',
                  'Intelligent investment guidance',
                  'Seamless communication',
                  'A pleasant, refined experience',
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="h-2 w-2 rounded-full bg-warmSandstone flex-shrink-0" />
                    <span className="text-base text-white font-lato">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Communities Section */}
      <SectionWrapper className="text-sand bg-charcoalNoir">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <p className="tracking-[0.3em] text-xs uppercase text-warmSandstone font-montserrat font-semibold">
              Explore Dubai
            </p>
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white">
              Communities
            </h2>
            <div className="w-20 h-px bg-warmSandstone"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button
              onClick={() => navigate('/neighborhoods')}
              variant="outline"
              className="text-white border-warmSandstone hover:bg-warmSandstone hover:text-white flex items-center gap-2"
            >
              Explore More
              <motion.img
                src={arrowright}
                alt="arrow"
                className="w-4 h-4"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
        </div>
        <CommunitiesSection />
      </SectionWrapper>

      {/* Testimonials Section */}
      <SectionWrapper className="bg-white text-charcoalNoir rounded-[32px]">
        <Testimonials />
      </SectionWrapper>

      {/* Find Next Home CTA */}
      <SectionWrapper className="bg-transparent py-0">
        <FindNexthome />
      </SectionWrapper>

      <Footer />
    </>
  );
}
