import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";

// SAE Brand Colors
const SAE_RED = "#90191b";
const SAE_BLUE = "#203e91";
const IMAGE_SIZE = "180px";

const AlumniCard = ({ img, name, year, role, email, message, lin }) => {
  return (
    <motion.div
      className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Image Section with Perfect Centering */}
      <div className="lg:w-1/3 flex justify-center items-center p-6 lg:p-8">
        <div
          className="relative overflow-hidden rounded-full border-[6px] shadow-lg"
          style={{
            width: IMAGE_SIZE,
            height: IMAGE_SIZE,
            borderColor: SAE_BLUE,
            minWidth: IMAGE_SIZE,
            minHeight: IMAGE_SIZE,
          }}
        >
          <LazyLoadImage
            src={img}
            alt={name}
            effect="blur"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              objectPosition: "center top", // Ensures faces are always visible
            }}
            wrapperClassName="absolute inset-0"
          />
        </div>
      </div>

      {/* Info Section */}
      <div className="lg:w-2/3 p-6 lg:p-8 flex flex-col justify-between">
        <div>
          <div className="mb-4">
            <h3
              className="text-2xl md:text-3xl font-bold mb-1"
              style={{ color: SAE_BLUE }}
            >
              {name}
            </h3>
            <p
              className="text-lg md:text-xl font-semibold mb-2"
              style={{ color: SAE_RED }}
            >
              {role}
            </p>
            <p className="text-gray-600 font-medium">Batch of {year}</p>
          </div>

          <div className="relative my-6">
            <div
              className="absolute -top-4 -left-4 text-7xl opacity-10"
              style={{ color: SAE_BLUE }}
            >
              "
            </div>
            <p
              className="relative z-10 text-gray-700 text-lg pl-6 border-l-4 italic leading-relaxed"
              style={{ borderColor: SAE_RED }}
            >
              {message}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-4">
          {lin && (
            <motion.button
              onClick={() => window.open(lin, "_blank")}
              className="flex hover:cursor-pointer items-center gap-3 px-6 py-3 rounded-xl text-white font-semibold transition-all"
              style={{ backgroundColor: SAE_BLUE }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <AiFillLinkedin className="text-xl" />
              <span>Connect</span>
            </motion.button>
          )}

          {email && (
            <motion.a
              href={`mailto:${email}`}
              className="flex items-center gap-3 px-6 py-3 rounded-xl text-white font-semibold transition-all"
              style={{ backgroundColor: SAE_RED }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <HiOutlineMail className="text-xl" />
              <span>Email</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AlumniCard;
