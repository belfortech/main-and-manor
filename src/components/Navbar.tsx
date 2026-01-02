import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/logo10.png';
import whiteGlobe from '../assets/images/GlobeSimple.png';
import blackGlobe from '../assets/images/globe2.png';
import Button from './ui/Button';

const navLinks = [
  { label: 'HOME', path: '/' },
  { label: 'LISTINGS', path: '/listings' },
  { label: 'SERVICES', path: '/services' },
  { label: 'NEIGHBORHOODS', path: '/neighborhoods' },
  { label: 'JOURNAL', path: '/journal' },
  { label: 'ABOUT US', path: '/about-us' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/' || location.pathname === '/home';
  const textTone = isHome && !scrolled ? 'text-sand' : 'text-white';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `tracking-[0.18em] text-xs font-semibold transition-all duration-300 ${
      isActive ? 'text-warmSandstone' : `${textTone} hover:text-warmSandstone`
    }`;

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl transition-colors duration-300 ${
        scrolled || !isHome
          ? 'bg-ebony/90 shadow-glow border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none" />
      <div className="section-grid">
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between gap-6">
          <div className="flex items-center gap-10">
            <NavLink to="/" className="flex items-center gap-3">
              <motion.img
                src={logo}
                alt="Main & Manor logo"
                className="h-14 w-auto drop-shadow-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              />
            </NavLink>

            <div className="hidden lg:flex items-center gap-6">
              {navLinks.slice(0, 4).map((link) => (
                <NavLink key={link.path} to={link.path} className={linkClass}>
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.slice(4).map((link) => (
              <NavLink key={link.path} to={link.path} className={linkClass}>
                {link.label}
              </NavLink>
            ))}

            <div className="relative flex items-center">
              <img
                src={isHome && !scrolled ? whiteGlobe : blackGlobe}
                alt="globe"
                className="h-7 w-7"
              />
              <span className="absolute -top-1 -left-2 text-[9px] text-warmSandstone">US</span>
            </div>

            <Button
              size="sm"
              variant="outline"
              className="border-white/30 text-sand hover:bg-warmSandstone hover:text-charcoalNoir"
              onClick={() => navigate('/contact-us')}
            >
              CONTACT US
            </Button>
          </div>

          {/* Mobile trigger */}
          <button
            className="lg:hidden relative w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-sand hover:border-warmSandstone transition"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <motion.span
              className={`block h-0.5 w-6 bg-current ${textTone}`}
              animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className={`block h-0.5 w-6 bg-current absolute ${textTone}`}
              animate={{ opacity: open ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className={`block h-0.5 w-6 bg-current ${textTone}`}
              animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="lg:hidden section-grid"
          >
            <div className="max-w-7xl mx-auto bg-ebony/95 border border-white/10 rounded-2xl shadow-glow overflow-hidden">
              <div className="flex flex-col gap-4 py-6 px-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `text-sm font-semibold tracking-[0.12em] ${
                        isActive ? 'text-warmSandstone' : 'text-sand hover:text-warmSandstone'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => {
                    setOpen(false);
                    navigate('/contact-us');
                  }}
                >
                  CONTACT US
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
