import React from "react";
import { motion } from "framer-motion";

// SAE Brand Colors
const SAE_RED = "#90191b";
const SAE_RED_DISABLED = "#c7a9a9";
const SAE_BLUE = "#203e91";
const TEXT_GRAY = "#6b7280"; // Tailwind's gray-600

function SMPCard({ image_link, description, title, reg_link, ongoing }) {
  return (
    <motion.div
      className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full"
      whileHover={{ y: -5 }}
      data-aos="fade-up"
    >
      {/* Image */}
      <div className="h-48 overflow-hidden relative">
        <img
          src={image_link}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h1
          className="text-xl md:text-2xl font-bold mb-3"
          style={{ color: SAE_BLUE }}
        >
          {title}
        </h1>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>

        <motion.button
          onClick={() => ongoing && window.open(reg_link, "_blank")}
          className={`w-full font-bold py-2 px-4 rounded-lg transition-colors duration-300 ${
            ongoing
              ? "text-white hover:cursor-pointer"
              : "text-gray-500 cursor-not-allowed"
          }`}
          style={{
            backgroundColor: ongoing ? SAE_RED : SAE_RED_DISABLED,
          }}
          whileHover={
            ongoing ? { backgroundColor: "#7a1616", scale: 1.02 } : {}
          }
          whileTap={ongoing ? { scale: 0.98 } : {}}
          disabled={!ongoing}
        >
          {ongoing ? "REGISTER NOW" : "REGISTRATION CLOSED"}
        </motion.button>
      </div>
    </motion.div>
  );
}

export default SMPCard;
