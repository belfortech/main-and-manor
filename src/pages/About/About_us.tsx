import {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Preloader from '../../components/Preloader'

import aboutImg from '../../assets/images/about.png'

export default function About_us(){

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
        <div className="relative bg-deepManorSlate pt-32 pb-24 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm tracking-[0.3em] uppercase text-warmSandstone font-montserrat font-semibold"
            >
              OUR STORY
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white font-playfair leading-tight"
            >
              Main & Manor was built on a simple belief:
              <span className="block italic text-warmSandstone font-cormorant mt-4">
                a home should feel like a perfect fit
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-white/80 font-lato max-w-3xl mx-auto leading-relaxed"
            >
              — for your lifestyle, your vision, and your story.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 text-white/70 font-lato max-w-3xl mx-auto"
            >
              <p>
                With roots in both Toronto and Dubai, our team brings together over
                20 years of combined real estate, investment, and business experience.
                What began as a small collaboration between industry professionals
                evolved into a boutique firm grounded in design, trust, and a
                higher standard of service.
              </p>

              <p>
                We created Main & Manor to bring intention back into real estate.
                To slow down the process, elevate the experience, and place people -
                not transactions - at the centre.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Why We Started Section */}
        <div className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src={aboutImg}
                  alt="about"
                  className="w-full h-auto object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-manorIvory p-6 rounded-xl shadow-lg max-w-xs">
                  <p className="italic text-sm text-charcoalNoir font-cormorant">
                    "We don't chase volume.<br/>
                    We focus on the people we serve."
                  </p>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <div className="w-24 h-1 bg-warmSandstone mb-6"></div>
                  <h2 className="text-3xl md:text-4xl font-semibold text-charcoalNoir font-playfair mb-3">
                    Why We Started
                  </h2>
                  <span className="text-xl text-urbanTaupe font-spectral">Main & Manor</span>
                </div>

                <p className="text-base text-deepManorSlate font-lato leading-relaxed">
                  In a fast-paced market like Dubai, real estate often feels
                  rushed and transactional. Our team saw the need for something more thoughtful
                  - a firm where clients receive curated guidance,
                  architectural insight, and confidence at every step.
                </p>

                <div>
                  <h3 className="text-sm font-semibold tracking-wider text-charcoalNoir uppercase mb-4 font-montserrat">
                    We were created to offer:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'A calmer, more refined real estate experience',
                      'Honest advice backed by global market understanding',
                      'Homes selected for their architecture, flow, and long-term value',
                      'A team dedicated to personal, boutique service'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-warmSandstone mt-1">✦</span>
                        <span className="text-deepManorSlate font-lato">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-manorIvory py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-sm tracking-[0.3em] uppercase text-urbanTaupe font-montserrat font-semibold">
                OUR MISSION
              </p>
              <h2 className="text-2xl md:text-3xl text-charcoalNoir font-spectral italic leading-relaxed">
                "To help clients find homes that reflect who they are through curated representation,
                design-led insight, and a boutique level of care."
              </h2>
              <p className="text-xs uppercase tracking-wider text-deepManorSlate font-montserrat">
                We aim for clarity, simplicity, and excellence in everything we do.
              </p>
            </motion.div>
          </div>
        </div>

        {/* What Makes Us Boutique */}
        <div className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-charcoalNoir font-cormorant italic">
                What Makes Us Boutique
              </h2>
              <span className="text-lg text-urbanTaupe italic font-spectral mt-2 md:mt-0">
                Design-led. Personal. Global.
              </span>
            </div>

            <div className="w-full h-px bg-warmSandstone mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: '01',
                  title: 'Design-Led Representation',
                  description: 'We see homes the way architects do through structure, light, materials, and lifestyle.'
                },
                {
                  number: '02',
                  title: 'Low Volume, High Attention',
                  description: 'We intentionally work with a limited number of clients to ensure a refined, personal experience.'
                },
                {
                  number: '03',
                  title: 'Global Perspective',
                  description: 'With experience across Canada and the UAE, our team understands the needs of both local and international buyers, sellers, and investors.'
                },
                {
                  number: '04',
                  title: 'Collaborative Expertise',
                  description: 'Main & Manor isn\'t defined by one founder. It is shaped by a collective of people who value integrity, expertise, and beautiful living.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <span className="text-sm font-semibold text-urbanTaupe font-montserrat">{item.number}</span>
                  <h3 className="text-lg font-semibold text-charcoalNoir font-playfair">
                    {item.title}
                  </h3>
                  <p className="text-sm text-deepManorSlate font-lato leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* International Reach */}
        <div className="bg-manorIvory py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-semibold text-charcoalNoir uppercase font-playfair">
                  International Reach
                </h2>
                <h3 className="text-xl font-bold italic text-charcoalNoir font-spectral">
                  The Toronto-to-Dubai Journey
                </h3>
                <p className="text-base text-deepManorSlate font-lato leading-relaxed">
                  Our team carries a unique perspective shaped by international experience.
                  Having lived and worked in Toronto, and now based in Dubai,
                  we understand the nuances of global relocation and investment.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    'Families relocating',
                    'Clients seeking lifestyle upgrades',
                    'Investors expanding globally',
                    'Buyers who value design'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-warmSandstone">•</span>
                      <span className="text-sm text-deepManorSlate font-lato">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg flex items-center justify-center min-h-[300px]">
                <p className="text-lg md:text-xl text-center text-deepManorSlate font-cormorant italic leading-relaxed">
                  "This dual-market expertise allows us to bridge cultures,
                  expectations, and investment mindsets."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What You Can Expect */}
        <div className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-charcoalNoir font-playfair mb-3">
                What You Can Expect
              </h2>
              <span className="text-xl italic text-urbanTaupe font-spectral">
                The Main & Manor Standard
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Honest, clear guidance',
                  description: 'We communicate openly, simply, and with your best interests in mind.'
                },
                {
                  title: 'Tailored recommendations',
                  description: 'Properties curated based on architecture, lifestyle, and future value not just price.'
                },
                {
                  title: 'Direct access to your agents',
                  description: 'No hand-offs. No layers. Boutique means personal.'
                },
                {
                  title: 'Market expertise made simple',
                  description: 'We break down trends and numbers so you can make confident decisions.'
                },
                {
                  title: 'A relationship built on trust',
                  description: 'We focus on long-term partnerships, not one-time transactions.'
                },
                {
                  title: 'A calm, elevated experience',
                  description: 'Real estate should feel inspiring - never rushed or stressful.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <div className="w-16 h-px bg-warmSandstone"></div>
                  <h3 className="text-lg font-semibold text-charcoalNoir font-playfair">
                    {item.title}
                  </h3>
                  <p className="text-sm text-deepManorSlate font-lato leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-manorIvory py-20">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-warmSandstone text-white rounded-full hover:bg-urbanTaupe transition font-montserrat font-semibold uppercase text-sm tracking-wider shadow-lg"
            >
              Start Your Journey
            </motion.button>
          </div>
        </div>

        <Footer/>
        </>
    )
}
