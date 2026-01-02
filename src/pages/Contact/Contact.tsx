import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Preloader from '../../components/Preloader';

import arrowright from '../../assets/images/ArrowRight.png'
import download from '../../assets/images/download white.png'
import Map from '../../components/Map';


export default function Contact(){
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

        useEffect(() =>{
          const timer = setTimeout(() => {
            setLoading(false);
          }, 1500);

          return () => clearTimeout(timer);

        }, []);


       if (loading){
        return <Preloader/>
       }

    return(
        <>
        <Navbar/>

        {/* Hero Section */}
        <div className="relative bg-manorIvory pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm tracking-[0.3em] uppercase text-urbanTaupe font-montserrat font-semibold"
            >
              Main & Manor Property Group
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-charcoalNoir font-playfair"
            >
              Let's Connect
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-deepManorSlate font-lato max-w-2xl mx-auto leading-relaxed"
            >
              "Whether you're looking to buy, sell, invest, or learn more about Dubai's
              neighborhoods, our team is here to guide you with clarity, honesty, and care."
            </motion.p>
          </div>
        </div>

        {/* Contact Info & Form Section */}
        <div className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Contact Info */}
              <div className="space-y-8">
                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-charcoalNoir font-playfair">Email</h3>
                    <a href="mailto:info@mainandmanor.ae" className="text-base text-deepManorSlate hover:text-warmSandstone transition font-lato">
                      info@mainandmanor.ae
                    </a>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-charcoalNoir font-playfair">Phone</h3>
                    <p className="text-base text-deepManorSlate font-lato">Call or text us anytime.</p>
                    <a href="tel:+971501234567" className="text-sm text-urbanTaupe hover:text-warmSandstone transition font-lato">
                      +971 50 123 4567
                    </a>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="block w-full md:w-auto px-6 py-3 bg-[#128C7E] text-white rounded-full hover:bg-[#0e7a6a] transition font-montserrat font-semibold text-sm tracking-wider mt-3"
                    >
                      Chat on WhatsApp
                    </motion.button>
                  </div>
                </div>

                {/* Location & Map */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-charcoalNoir font-playfair">Our Headquarters</h3>
                  <p className="text-base text-deepManorSlate font-lato">Dubai, United Arab Emirates</p>

                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <Map/>
                  </div>
                </div>

                <div className="w-full h-px bg-warmSandstone"></div>

                {/* Quick Links */}
                <div className="space-y-4">
                  <h3 className="text-lg uppercase text-urbanTaupe font-montserrat font-semibold tracking-wider">
                    Quick Links
                  </h3>
                  <div className="space-y-3">
                    {[
                      'For Off-Market Homes',
                      'For Investors',
                      'For Relocation Clients'
                    ].map((link, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 5 }}
                        className="bg-manorIvory p-4 rounded-lg cursor-pointer group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm uppercase text-charcoalNoir font-montserrat group-hover:text-warmSandstone transition">
                            {link}
                          </span>
                          <motion.img
                            src={arrowright}
                            alt="arrow"
                            className="w-5 h-5"
                            whileHover={{ x: 3 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="space-y-6">
                <div className="bg-white border-2 border-manorIvory rounded-2xl p-8">
                  <h3 className="text-2xl font-semibold text-charcoalNoir font-playfair mb-2">
                    Send Us a Message
                  </h3>
                  <p className="text-sm text-urbanTaupe mb-6 font-lato">
                    Our team will get back to you shortly.
                  </p>

                  <form className="space-y-6">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="FULL NAME"
                        className="w-full border-b-2 border-warmSandstone/30 focus:border-warmSandstone focus:outline-none py-3 text-sm font-lato placeholder:text-urbanTaupe/60 transition"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
                        type="email"
                        required
                        placeholder="EMAIL"
                        className="w-full border-b-2 border-warmSandstone/30 focus:border-warmSandstone focus:outline-none py-3 text-sm font-lato placeholder:text-urbanTaupe/60 transition"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="PHONE NUMBER"
                        className="w-full border-b-2 border-warmSandstone/30 focus:border-warmSandstone focus:outline-none py-3 text-sm font-lato placeholder:text-urbanTaupe/60 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase text-urbanTaupe mb-3 font-lato tracking-wider">
                        How can we help you?
                      </label>
                      <select
                        required
                        className="w-full border-b-2 border-warmSandstone/30 focus:border-warmSandstone focus:outline-none py-3 text-sm font-lato text-deepManorSlate transition"
                      >
                        <option value="">Select an option</option>
                        <option value="buyer">Buyer Representation</option>
                        <option value="seller">Seller Representation</option>
                        <option value="investment">Investment Guidance</option>
                        <option value="relocation">Relocation Services</option>
                      </select>
                    </div>

                    <div>
                      <textarea
                        rows={4}
                        placeholder="MESSAGE"
                        required
                        className="w-full border-b-2 border-warmSandstone/30 focus:border-warmSandstone focus:outline-none py-3 font-lato placeholder:text-urbanTaupe/60 transition resize-none"
                      ></textarea>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full px-8 py-4 bg-warmSandstone text-white rounded-full hover:bg-urbanTaupe transition font-montserrat font-semibold uppercase text-sm tracking-wider"
                    >
                      Send Inquiry
                    </motion.button>
                  </form>
                </div>

                {/* Download CTA */}
                <div className="bg-charcoalNoir p-6 rounded-2xl text-center">
                  <p className="italic text-sm text-white font-cormorant mb-4">
                    "Want to understand how we work?"
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 rounded-full hover:bg-white/10 transition group"
                  >
                    <img src={download} alt="download" className="w-5 h-5 group-hover:scale-110 transition"/>
                    <span className="text-sm text-white uppercase font-montserrat font-semibold tracking-wider">
                      Download Buyer Guide
                    </span>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-manorIvory py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoalNoir uppercase tracking-wider mb-6 font-playfair">
              We're here to help
            </h2>
            <p className="text-lg text-urbanTaupe mb-10 font-spectral italic">
              "Every home search begins with a conversation. Tell us what you're looking for—we'll take care of the rest."
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="text-center group cursor-pointer">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="text-sm text-charcoalNoir uppercase font-montserrat font-semibold tracking-wider hover:text-warmSandstone transition"
                >
                  Contact Us →
                </motion.span>
                <div className="w-full h-px bg-warmSandstone mt-2"></div>
              </div>

              <div className="text-center group cursor-pointer">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="text-sm text-charcoalNoir uppercase font-montserrat font-semibold tracking-wider hover:text-warmSandstone transition"
                >
                  WhatsApp →
                </motion.span>
                <div className="w-full h-px bg-warmSandstone mt-2"></div>
              </div>

              <div className="text-center group cursor-pointer" onClick={() => navigate('/Listings')}>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="text-sm text-charcoalNoir uppercase font-montserrat font-semibold tracking-wider hover:text-warmSandstone transition"
                >
                  Browse Listings →
                </motion.span>
                <div className="w-full h-px bg-warmSandstone mt-2"></div>
              </div>
            </div>
          </div>
        </div>

        <Footer/>
        </>
    )
}
