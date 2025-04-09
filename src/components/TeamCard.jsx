import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { HiMail } from 'react-icons/hi';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from 'framer-motion';

// SAE Brand Colors
const SAE_RED = '#90191b';
const SAE_BLUE = '#203e91';

const TeamCard = ({ src, name, role, mail, lin }) => {
  return (
    <motion.div 
      className="flex flex-col items-center p-4 w-full max-w-[280px]"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Image Container with Fixed Aspect Ratio */}
      <div className="relative mb-4 w-36 h-36 group rounded-full overflow-hidden border-4 shadow-md"
           style={{ borderColor: SAE_BLUE }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <LazyLoadImage
            src={src}
            alt={name}
            effect="blur"
            className="min-w-full min-h-full object-cover"
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top' // Ensures faces are always visible
            }}
          />
        </div>
        
        {/* Social Links */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
          {mail && (
            <motion.a
              href={`mailto:${mail}`}
              className="bg-white p-2.5 rounded-full shadow-md flex items-center justify-center"
              whileHover={{ scale: 1.1, backgroundColor: SAE_RED, color: 'white' }}
              whileTap={{ scale: 0.95 }}
              style={{ color: SAE_RED }}
            >
              <HiMail className="text-lg" />
            </motion.a>
          )}
          {lin && (
            <motion.a
              onClick={() => window.open(lin, "_blank")}
              className="bg-white p-2.5 rounded-full shadow-md flex items-center justify-center"
              whileHover={{ scale: 1.1, backgroundColor: SAE_BLUE, color: 'white' }}
              whileTap={{ scale: 0.95 }}
              style={{ color: SAE_BLUE }}
            >
              <AiFillLinkedin className="text-lg" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center w-full">
        <h3 
          className="text-xl font-bold mb-1 px-2 line-clamp-1" 
          style={{ color: SAE_BLUE }}
          title={name}
        >
          {name}
        </h3>
        <p 
          className="text-gray-700 text-sm md:text-base h-12 flex items-center justify-center px-2 line-clamp-2"
          style={{ lineHeight: '1.2' }}
          title={role}
        >
          {role}
        </p>
      </div>

      {/* SAE Accent Line */}
      <div className="w-16 h-1 mt-3 rounded-full" style={{ background: SAE_RED }}></div>
    </motion.div>
  );
};

export default TeamCard;