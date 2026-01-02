import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  price?: string;
  location?: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  image,
  title,
  description,
  price,
  location,
  className = '',
}) => {
  return (
    <motion.div
      className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        {price && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold text-sm">
            {price}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 font-montserrat">{title}</h3>
        {location && (
          <p className="text-gray-600 text-sm mb-2">{location}</p>
        )}
        <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
