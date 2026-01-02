import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/images/logo10.png';
import instagramlogo from '../assets/images/InstagramLogo.png';
import facebooklogo from '../assets/images/FacebookLogo.png';
import linkedinlogo from '../assets/images/LinkedinLogo.png';

const socialIcons = [
  { alt: 'LinkedIn', src: linkedinlogo, href: '#' },
  { alt: 'Instagram', src: instagramlogo, href: '#' },
  { alt: 'Facebook', src: facebooklogo, href: '#' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-charcoalNoir border-t border-warmSandstone/20 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <img src={logo} alt="Main & Manor Logo" className="h-24 w-auto drop-shadow-2xl" />
            <p className="text-base text-manorIvory/90 italic font-spectral leading-relaxed">
              "Homes that fit your story."
            </p>
            <div className="flex items-center gap-3">
              {socialIcons.map((icon, idx) => (
                <motion.a
                  key={icon.alt}
                  href={icon.href}
                  className="h-11 w-11 rounded-full bg-deepManorSlate border-2 border-warmSandstone/20 flex items-center justify-center hover:border-warmSandstone hover:bg-warmSandstone/10 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18, delay: idx * 0.02 }}
                >
                  <img src={icon.src} alt={icon.alt} className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Menu Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-lg font-playfair font-semibold tracking-wider text-warmSandstone mb-2">
              Menu
            </h3>
            <Link
              to="/about-us"
              className="text-sm text-manorIvory/80 hover:text-warmSandstone transition-colors duration-300 font-lato"
            >
              Our Story
            </Link>
            <Link
              to="/listings"
              className="text-sm text-manorIvory/80 hover:text-warmSandstone transition-colors duration-300 font-lato"
            >
              Properties
            </Link>
            <Link
              to="/services"
              className="text-sm text-manorIvory/80 hover:text-warmSandstone transition-colors duration-300 font-lato"
            >
              Services
            </Link>
            <Link
              to="/journal"
              className="text-sm text-manorIvory/80 hover:text-warmSandstone transition-colors duration-300 font-lato"
            >
              Journal
            </Link>
          </motion.div>

          {/* Neighborhoods Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-lg font-playfair font-semibold tracking-wider text-warmSandstone mb-2">
              Neighborhoods
            </h3>
            <Link
              to="/neighborhoods"
              className="text-sm text-manorIvory/80 hover:text-warmSandstone transition-colors duration-300 font-lato"
            >
              Dubai Marina
            </Link>
            <Link
              to="/neighborhoods"
              className="text-sm text-manorIvory/80 hover:text-warmSandstone transition-colors duration-300 font-lato"
            >
              Palm Jumeirah
            </Link>
            <Link
              to="/neighborhoods"
              className="text-sm text-manorIvory/80 hover:text-warmSandstone transition-colors duration-300 font-lato"
            >
              Downtown Dubai
            </Link>
            <Link
              to="/neighborhoods"
              className="text-sm text-manorIvory/80 hover:text-warmSandstone transition-colors duration-300 font-lato"
            >
              Dubai Hills
            </Link>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-5"
          >
            <h3 className="text-lg font-playfair font-semibold tracking-wider text-warmSandstone mb-2">
              Contact
            </h3>
            <div className="space-y-4 text-sm font-lato">
              <div>
                <p className="text-xs uppercase tracking-wider text-urbanTaupe mb-1 font-montserrat">
                  Email
                </p>
                <a
                  href="mailto:info@mainandmanor.ae"
                  className="text-manorIvory/90 hover:text-warmSandstone transition-colors duration-300"
                >
                  info@mainandmanor.ae
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-urbanTaupe mb-1 font-montserrat">
                  Phone
                </p>
                <a
                  href="tel:+971501234567"
                  className="text-manorIvory/90 hover:text-warmSandstone transition-colors duration-300"
                >
                  +971 50 123 4567
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-urbanTaupe mb-1 font-montserrat">
                  Office
                </p>
                <p className="text-manorIvory/90 leading-relaxed">
                  Emaar Square, Building 4
                  <br />
                  Downtown Dubai, UAE
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-warmSandstone/30 to-transparent"></div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8"
        >
          <p className="text-sm text-manorIvory/60 font-lato">
            © 2025 Main & Manor Property Group. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-sm text-manorIvory/60 hover:text-warmSandstone transition-colors duration-300 font-lato"
            >
              Privacy Policy
            </Link>
            <span className="text-warmSandstone/30">•</span>
            <Link
              to="/terms"
              className="text-sm text-manorIvory/60 hover:text-warmSandstone transition-colors duration-300 font-lato"
            >
              Terms of Use
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
