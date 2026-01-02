import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Preloader from '../../components/Preloader';

import backgroundImage from '../../assets/images/listings2.png';
import Pagination from '../../components/Pagination';

import image30 from '../../assets/images/image30.png';
import image31 from '../../assets/images/image31.png';
import image32 from '../../assets/images/image32.png';
import image33 from '../../assets/images/image33.png';
import image34 from '../../assets/images/image34.png';
import image35 from '../../assets/images/image35.png';

import image36 from '../../assets/images/image36.png';
import image37 from '../../assets/images/image37.png';
import image38 from '../../assets/images/image38.png';
import image39 from '../../assets/images/image39.png';
import image40 from '../../assets/images/image40.png';
import image41 from '../../assets/images/image41.png';
import arrowright from '../../assets/images/ArrowRight.png';

import caretdown from '../../assets/images/CaretDown.png';

import phonecall from '../../assets/images/PhoneCall2.png';
import whatsapplogo from '../../assets/images/Whatsapp.png';
import envelope from '../../assets/images/Envelope.png';
import Offmarket from './Offmarket';
import CommunitiesSection from '../Home/Communitiessection';

interface PropertyItem {
  id: number;
  type: string;
  status: string;
  image: string;
  location: string;
  title: string;
  price: string;
  beds: number;
  baths: number;
  size: string;
}

const sectionOneProperties: PropertyItem[] = [
  {
    id: 1,
    type: 'PENTHOUSE',
    status: 'FOR SELL',
    image: image30,
    location: 'PALM JUMEIRAH',
    title: 'The Royal Penthouse',
    price: 'AED 42,500,000',
    beds: 4,
    baths: 6,
    size: '5200 sqft',
  },
  {
    id: 2,
    type: 'VILLA',
    status: 'FOR SELL',
    image: image31,
    location: 'PALM JUMEIRAH',
    title: 'Frond G Signature Villa',
    price: 'AED 85,000,000',
    beds: 6,
    baths: 7,
    size: '9500 sqft',
  },
  {
    id: 3,
    type: 'VILLA',
    status: 'FOR SELL',
    image: image32,
    location: 'DUBAI HILLS',
    title: 'Golf Course Mansion',
    price: 'AED 32,000,000',
    beds: 7,
    baths: 8,
    size: '11000 sqft',
  },

  {
    id: 4,
    type: 'PENTHOUSE',
    status: 'FOR SELL',
    image: image33,
    location: 'PALM JUMEIRAH',
    title: 'The Royal Penthouse',
    price: 'AED 42,500,000',
    beds: 4,
    baths: 6,
    size: '5200 sqft',
  },
  {
    id: 5,
    type: 'VILLA',
    status: 'FOR SELL',
    image: image34,
    location: 'PALM JUMEIRAH',
    title: 'Frond G Signature Villa',
    price: 'AED 85,000,000',
    beds: 6,
    baths: 7,
    size: '9500 sqft',
  },
  {
    id: 6,
    type: 'VILLA',
    status: 'FOR SELL',
    image: image35,
    location: 'DUBAI HILLS',
    title: 'Golf Course Mansion',
    price: 'AED 32,000,000',
    beds: 7,
    baths: 8,
    size: '11000 sqft',
  },
];

{
  /* ==== for section 2 === */
}
const sectionTwoProperties: PropertyItem[] = [
  {
    id: 7,
    type: 'PENTHOUSE',
    status: 'FOR SELL',
    image: image36,
    location: 'PALM JUMEIRAH',
    title: 'The Royal Penthouse',
    price: 'AED 42,500,000',
    beds: 4,
    baths: 6,
    size: '5200 sqft',
  },
  {
    id: 8,
    type: 'VILLA',
    status: 'FOR RENT',
    image: image37,
    location: 'PALM JUMEIRAH',
    title: 'Frond G Signature Villa',
    price: 'AED 85,000,000',
    beds: 6,
    baths: 7,
    size: '9500 sqft',
  },
  {
    id: 9,
    type: 'VILLA',
    status: 'FOR RENT',
    image: image38,
    location: 'DUBAI HILLS',
    title: 'Golf Course Mansion',
    price: 'AED 32,000,000',
    beds: 7,
    baths: 8,
    size: '11000 sqft',
  },

  {
    id: 10,
    type: 'PENTHOUSE',
    status: 'FOR SELL',
    image: image39,
    location: 'PALM JUMEIRAH',
    title: 'The Royal Penthouse',
    price: 'AED 42,500,000',
    beds: 4,
    baths: 6,
    size: '5200 sqft',
  },
  {
    id: 11,
    type: 'VILLA',
    status: 'FOR RENT',
    image: image40,
    location: 'PALM JUMEIRAH',
    title: 'Frond G Signature Villa',
    price: 'AED 85,000,000',
    beds: 6,
    baths: 7,
    size: '9500 sqft',
  },
  {
    id: 12,
    type: 'VILLA',
    status: 'FOR RENT',
    image: image41,
    location: 'DUBAI HILLS',
    title: 'Golf Course Mansion',
    price: 'AED 32,000,000',
    beds: 7,
    baths: 8,
    size: '11000 sqft',
  },
];

export default function Listings() {
  const [loading, setLoading] = useState(true);

  const [openMenu1, setOpenMenu1] = useState<number | null>(null);
  const [openMenu2, setOpenMenu2] = useState<number | null>(null);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const pageSize = 6;
  const totalPages1 = Math.ceil(sectionOneProperties.length / pageSize);
  const totalPages2 = Math.ceil(sectionTwoProperties.length / pageSize);

  const navigate = useNavigate();

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

      <div className="bg-white">
        {/* Hero Section */}
        <div
          className="relative flex flex-col items-center justify-center text-white px-4 h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-charcoalNoir/60"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-center space-y-6 max-w-3xl"
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm tracking-[0.3em] uppercase text-warmSandstone font-montserrat font-semibold"
            >
              Our Portfolio
            </motion.h3>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-6xl font-playfair font-bold"
            >
              Homes that fit
              <br />
              your story.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-32 h-px bg-warmSandstone mx-auto"
            ></motion.div>
          </motion.div>
        </div>

        {/* Featured Ticker Banner */}
        <div className="bg-charcoalNoir overflow-hidden">
          <div className="flex items-center py-4 px-6 gap-8 text-white">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-warmSandstone"></span>
              <span className="text-xs md:text-sm font-montserrat tracking-wider">
                New to Market
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs md:text-sm text-manorIvory/80 font-lato whitespace-nowrap"
            >
              Golf Course Mansion Dubai Hills
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs md:text-sm text-manorIvory/80 font-lato whitespace-nowrap"
            >
              Marina Gate Penthouse Dubai Marina
            </motion.div>
          </div>
        </div>

        {/* Featured Properties Section */}
        <div className="py-16 md:py-24 px-6 md:px-16 lg:px-32 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl text-charcoalNoir font-playfair font-bold mb-4">
              Featured Properties
            </h2>
            <div className="w-24 h-1 bg-warmSandstone rounded-full mb-6"></div>
            <p className="text-base text-deepManorSlate font-lato leading-relaxed max-w-3xl">
              A curated selection of homes chosen for their design, value, and lifestyle appeal.
              This section highlights properties that embody our brand: architecture, light, flow,
              quality, and story.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectionOneProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-shadow duration-500"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover"
                  />

                  <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-montserrat font-semibold tracking-wider">
                    {property.type}
                  </span>

                  <span className="absolute top-4 right-4 bg-warmSandstone text-white text-xs px-3 py-1.5 rounded-full font-montserrat font-semibold tracking-wider">
                    {property.status}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-sm uppercase tracking-wider text-urbanTaupe font-montserrat font-semibold">
                      {property.location}
                    </h3>

                    <div className="relative">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() =>
                          setOpenMenu1(openMenu1 === property.id ? null : property.id)
                        }
                        className="text-urbanTaupe hover:text-warmSandstone transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 2a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
                        </svg>
                      </motion.button>

                      {openMenu1 === property.id && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="absolute right-0 top-8 w-32 bg-white rounded-lg shadow-xl border border-warmSandstone/20 z-50 overflow-hidden"
                        >
                          <button className="flex items-center gap-2 w-full px-4 py-3 text-xs text-charcoalNoir hover:bg-manorIvory transition font-montserrat">
                            <img src={envelope} className="w-4 h-4" alt="email" />
                            Email
                          </button>
                          <button className="flex items-center gap-2 w-full px-4 py-3 text-xs text-charcoalNoir hover:bg-manorIvory transition font-montserrat">
                            <img src={phonecall} className="w-4 h-4" alt="call" />
                            Call
                          </button>
                          <button className="flex items-center gap-2 w-full px-4 py-3 text-xs text-charcoalNoir hover:bg-manorIvory transition font-montserrat">
                            <img src={whatsapplogo} className="w-4 h-4" alt="whatsapp" />
                            WhatsApp
                          </button>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  <h4 className="text-lg font-playfair font-semibold text-charcoalNoir mb-2">
                    {property.title}
                  </h4>

                  <p className="text-xl text-warmSandstone font-playfair font-bold mb-4">
                    {property.price}
                  </p>

                  <div className="flex justify-between items-center text-sm text-deepManorSlate mb-6 font-lato">
                    <span>{property.beds} Beds</span>
                    <span className="w-px h-4 bg-warmSandstone/30"></span>
                    <span>{property.baths} Baths</span>
                    <span className="w-px h-4 bg-warmSandstone/30"></span>
                    <span>{property.size}</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate(`/listings/viewproperty/${property.id}`)}
                    className="w-full px-6 py-3 border-2 border-warmSandstone text-warmSandstone rounded-full hover:bg-warmSandstone hover:text-white transition font-montserrat font-semibold text-sm uppercase tracking-wider"
                  >
                    View Property
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pagination Section 1 */}
        <div className="py-8 px-6 md:px-16 lg:px-32 bg-manorIvory">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-deepManorSlate font-lato">
              Showing {sectionOneProperties.length} of {sectionOneProperties.length} properties
            </p>

            <div className="flex items-center gap-4">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages1}
                onPageChange={(page) => setCurrentPage(page)}
              />

              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 bg-urbanTaupe text-white rounded-full hover:bg-deepManorSlate transition font-montserrat text-sm font-semibold"
                >
                  Previous
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 border-2 border-urbanTaupe text-urbanTaupe rounded-full hover:bg-urbanTaupe hover:text-white transition font-montserrat text-sm font-semibold"
                >
                  Next
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Off-plan Listings */}
        <div className="py-16 md:py-24 px-6 md:px-16 lg:px-32 bg-manorIvory">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl text-charcoalNoir font-playfair font-bold mb-4">
              Featured Off-Plan Listings
            </h2>
            <div className="w-24 h-1 bg-warmSandstone rounded-full mb-6"></div>
            <p className="text-base text-deepManorSlate font-lato">
              Explore homes available across Dubai's most sought-after communities.
            </p>
          </motion.div>

          {/* Filters Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 mb-12 shadow-lg"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                'PRICE RANGE',
                'BEDROOMS',
                'COMMUNITY',
                'PROPERTY TYPE',
                'READY / OFF-PLAN',
              ].map((filter) => (
                <motion.button
                  key={filter}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-between p-4 border border-warmSandstone/20 rounded-lg hover:border-warmSandstone hover:bg-manorIvory/50 transition"
                >
                  <span className="text-xs text-charcoalNoir font-montserrat font-semibold tracking-wider">
                    {filter}
                  </span>
                  <img src={caretdown} alt="dropdown" className="w-4 h-4" />
                </motion.button>
              ))}

              <div className="flex items-center gap-3 p-4">
                <div className="w-px h-6 bg-warmSandstone/30"></div>
                <span className="text-xs text-urbanTaupe font-lato">Sort by:</span>
                <span className="text-sm text-charcoalNoir font-montserrat font-semibold">
                  Newest
                </span>
              </div>
            </div>
          </motion.div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectionTwoProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-shadow duration-500"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover"
                  />

                  <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-montserrat font-semibold tracking-wider">
                    {property.type}
                  </span>

                  <span className="absolute top-4 right-4 bg-warmSandstone text-white text-xs px-3 py-1.5 rounded-full font-montserrat font-semibold tracking-wider">
                    {property.status}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-sm uppercase tracking-wider text-urbanTaupe font-montserrat font-semibold">
                      {property.location}
                    </h3>

                    <div className="relative">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() =>
                          setOpenMenu2(openMenu2 === property.id ? null : property.id)
                        }
                        className="text-urbanTaupe hover:text-warmSandstone transition"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 2a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
                        </svg>
                      </motion.button>

                      {openMenu2 === property.id && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="absolute right-0 top-8 w-32 bg-white rounded-lg shadow-xl border border-warmSandstone/20 z-50 overflow-hidden"
                        >
                          <button className="flex items-center gap-2 w-full px-4 py-3 text-xs text-charcoalNoir hover:bg-manorIvory transition font-montserrat">
                            <img src={envelope} className="w-4 h-4" alt="email" />
                            Email
                          </button>
                          <button className="flex items-center gap-2 w-full px-4 py-3 text-xs text-charcoalNoir hover:bg-manorIvory transition font-montserrat">
                            <img src={phonecall} className="w-4 h-4" alt="call" />
                            Call
                          </button>
                          <button className="flex items-center gap-2 w-full px-4 py-3 text-xs text-charcoalNoir hover:bg-manorIvory transition font-montserrat">
                            <img src={whatsapplogo} className="w-4 h-4" alt="whatsapp" />
                            WhatsApp
                          </button>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  <h4 className="text-lg font-playfair font-semibold text-charcoalNoir mb-2">
                    {property.title}
                  </h4>

                  <p className="text-xl text-warmSandstone font-playfair font-bold mb-4">
                    {property.price}
                  </p>

                  <div className="flex justify-between items-center text-sm text-deepManorSlate mb-6 font-lato">
                    <span>{property.beds} Beds</span>
                    <span className="w-px h-4 bg-warmSandstone/30"></span>
                    <span>{property.baths} Baths</span>
                    <span className="w-px h-4 bg-warmSandstone/30"></span>
                    <span>{property.size}</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate(`/listings/viewproperty/${property.id}`)}
                    className="w-full px-6 py-3 border-2 border-warmSandstone text-warmSandstone rounded-full hover:bg-warmSandstone hover:text-white transition font-montserrat font-semibold text-sm uppercase tracking-wider"
                  >
                    View Property
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pagination Section 2 */}
        <div className="py-8 px-6 md:px-16 lg:px-32 bg-white">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-deepManorSlate font-lato">
              Showing {sectionTwoProperties.length} of {sectionTwoProperties.length} properties
            </p>

            <div className="flex items-center gap-4">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages2}
                onPageChange={(page) => setCurrentPage(page)}
              />

              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 bg-urbanTaupe text-white rounded-full hover:bg-deepManorSlate transition font-montserrat text-sm font-semibold"
                >
                  Previous
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 border-2 border-urbanTaupe text-urbanTaupe rounded-full hover:bg-urbanTaupe hover:text-white transition font-montserrat text-sm font-semibold"
                >
                  Next
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Off Market Opportunities */}
        <div>
          <Offmarket />
        </div>

        {/* Explore More Communities */}
        <div className="py-16 px-6 md:px-16 lg:px-32 bg-white">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-charcoalNoir">
              Communities
            </h2>

            <motion.button
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-warmSandstone hover:text-urbanTaupe transition"
            >
              <span className="text-base font-montserrat font-semibold tracking-wider">
                Explore More
              </span>
              <img src={arrowright} alt="arrow" className="w-5 h-5" />
            </motion.button>
          </div>

          <CommunitiesSection />
        </div>

        {/* Find Next Home CTA */}
        <div className="relative py-20 md:py-28 bg-deepManorSlate">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center px-6 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl text-white font-playfair font-semibold">
              Let's find a home that fits your story.
            </h2>

            <p className="text-base text-warmSandstone font-lato max-w-2xl mx-auto leading-relaxed">
              Whether you're beginning your search, relocating to Dubai, or looking for an
              investment opportunity, our team is here to guide you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact-us')}
                className="px-8 py-4 bg-warmSandstone text-white rounded-full hover:bg-urbanTaupe transition font-montserrat font-semibold text-sm uppercase tracking-wider flex items-center gap-3 shadow-lg"
              >
                <img src={phonecall} alt="call" className="w-5 h-5" />
                Contact Us
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-manorIvory text-manorIvory rounded-full hover:bg-manorIvory/10 transition font-montserrat font-semibold text-sm uppercase tracking-wider flex items-center gap-3"
              >
                <img src={whatsapplogo} alt="whatsapp" className="w-5 h-5" />
                WhatsApp
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
