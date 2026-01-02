import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import AnimatedText from './AnimatedText';

interface HeroSectionProps {
  images: string[];
  logo: string;
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick: () => void;
  arrowIcon: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  images,
  logo,
  title,
  subtitle,
  buttonText,
  onButtonClick,
  arrowIcon,
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative flex flex-col items-center justify-center text-white px-4 h-screen bg-cover bg-center overflow-hidden">
      {images.map((img, index) => {
        const isActive = index === currentImage;
        return (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        );
      })}

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>

      <div className="relative text-center space-y-6 z-10">
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        >
          <img src={logo} alt="Main & Manor Logo" className="h-[220px] w-auto" />
        </motion.div>

        <AnimatedText
          text={title}
          className="block text-3xl md:text-5xl lg:text-6xl font-semibold text-center font-montserrat"
          delay={1}
        />

        <motion.p
          className="text-white text-center text-md max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <Button
            onClick={onButtonClick}
            className="backdrop-blur-md border border-white/20 flex items-center gap-2"
          >
            {buttonText}
            <img src={arrowIcon} alt="arrow" className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
