import React from "react";
import { BiCalendar, BiUser } from "react-icons/bi";
import { motion } from "framer-motion";

// SAE Brand Colors
const SAE_RED = "#90191b";
const SAE_BLUE = "#203e91";

function BlogCard({ image, title, desc, link, date, author }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
      data-aos="fade-up"
    >
      {/* Image with overlay */}
      <div className="relative h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          src={image}
          alt={title}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <p className="text-white text-sm">{desc.substring(0, 100)}...</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h3
          className="text-lg md:text-xl font-bold mb-2"
          style={{ color: SAE_BLUE }}
        >
          {title}
        </h3>

        <div className="flex items-center text-sm text-gray-500 mb-3">
          <BiUser className="mr-1" />
          <span className="mr-4">{author}</span>
          <BiCalendar className="mr-1" />
          <span>{date}</span>
        </div>

        <p className="text-gray-600 mb-4 text-sm flex-grow">
          {desc.substring(0, 120)}...
        </p>

        <a
          href={link}
          className="mt-auto inline-block px-4 py-2 rounded-lg font-medium text-white transition-colors duration-300 text-center"
          style={{ backgroundColor: SAE_RED }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read Full Article
        </a>
      </div>
    </motion.div>
  );
}

export default BlogCard;
