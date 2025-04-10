import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { allMagazines } from "./MagazineData";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

// SAE Brand Colors
const SAE_RED = "#90191b";
const SAE_BLUE = "#203e91";

const MagazineViewer = () => {
  const { magazinePeriod } = useParams();
  const magazine = allMagazines.find((e) => e.period === magazinePeriod);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  if (!magazine)
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4">
        <motion.div
          className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block p-4 bg-red-100 rounded-full mb-4">
            <svg
              className="w-10 h-10"
              style={{ color: SAE_RED }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-3" style={{ color: SAE_BLUE }}>
            Magazine Not Found
          </h3>
          <p className="text-gray-600 mb-6">
            The requested magazine edition doesn't exist or has been removed.
          </p>
          <a
            href="/magazines"
            className="inline-block px-6 py-3 rounded-lg font-medium text-white transition-all hover:shadow-md"
            style={{ backgroundColor: SAE_BLUE }}
          >
            Browse All Magazines
          </a>
        </motion.div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Magazine Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-down">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span style={{ color: SAE_RED }}>SAE NITK</span>{" "}
            <span style={{ color: SAE_BLUE }}>Magazine</span>
          </motion.h1>

          <motion.div
            className="w-24 h-1 mx-auto mb-8 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${SAE_BLUE}, ${SAE_RED})`,
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold"
            style={{ color: SAE_BLUE }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {magazine.period}
          </motion.h2>
          {magazine.title && (
            <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto leading-relaxed">
              {magazine.title}
            </p>
          )}
        </div>

        {/* Magazine Viewer */}
        <motion.div
          className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-1"
          style={{ borderLeft: `6px solid ${SAE_BLUE}` }}
          data-aos="zoom-in"
          whileHover={{ y: -5 }}
        >
          <iframe
            src={`${magazine.src}#toolbar=0`}
            className="w-full h-[70vh] min-h-[500px]"
            title={`SAE-NITK Magazine ${magazine.period}`}
          ></iframe>
        </motion.div>

        {/* Download Section */}
        <motion.div
          className="mt-8 bg-white rounded-xl shadow-lg p-6 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: `4px solid ${SAE_RED}` }}
          data-aos="fade-up"
        >
          <div className="text-gray-700">
            <span className="font-medium">Published:</span>{" "}
            {magazine.period || "N/A"}
          </div>
          <a
            href={magazine.src}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg font-medium text-white transition-all hover:shadow-md"
            style={{ backgroundColor: SAE_RED }}
          >
            Download PDF
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default MagazineViewer;
