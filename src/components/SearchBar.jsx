import React from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

// SAE Brand Colors
const SAE_RED = '#90191b';
const SAE_BLUE = '#203e91';
const LIGHT_GRAY = '#f5f5f5';
const DARK_GRAY = '#2d2d2d';

const SearchBar = ({ onChange, placeholder, value }) => {
  return (
    <motion.div 
      className="relative max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <input
        type="text"
        className="w-full px-5 py-3 rounded-xl shadow-sm focus:outline-none transition-all text-lg"
        style={{
          backgroundColor: LIGHT_GRAY,
          color: DARK_GRAY,
          border: `2px solid ${SAE_BLUE}`,
          paddingRight: '3rem',
          boxShadow: `0 2px 4px rgba(0, 0, 0, 0.1)`,
        }}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <div 
        className="absolute right-4 top-1/2 transform -translate-y-1/2"
        style={{ color: SAE_RED }}
      >
        <FaSearch className="text-xl" />
      </div>
    </motion.div>
  );
};

export default SearchBar;