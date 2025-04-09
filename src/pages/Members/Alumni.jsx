import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import AlumniCard from "../../components/AlumniCard";
import { alumniData } from "./AlumniData";

// SAE Brand Colors
const SAE_RED = "#90191b";
const SAE_BLUE = "#203e91";

function Alumni() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAlumni, setFilteredAlumni] = useState(alumniData);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    const results = alumniData.filter((alumni) => {
      return (
        alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.year.includes(searchTerm) ||
        alumni.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.message.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredAlumni(results);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span style={{ color: SAE_RED }}>Our</span>{" "}
            <span style={{ color: SAE_BLUE }}>Alumni</span>
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

          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            The brilliant minds who shaped SAE NITK and continue to inspire us
          </p>
        </div>


        {/* Search Bar */}
        <div className="mb-12 max-w-2xl mx-auto" data-aos="fade-up">
          <div className="relative">
            <input
              type="text"
              placeholder="Search alumni by name, year, or topics..."
              className="w-full text-black px-6 py-4 pr-12 text-lg border-2 border-gray-200 rounded-xl shadow-lg focus:outline-none focus:ring-4 focus:ring-opacity-50 transition-all"
              style={{
                backgroundColor: "#f8fafc",
                borderColor: SAE_BLUE,
                focusBorderColor: SAE_BLUE,
                focusRingColor: SAE_BLUE,
                boxShadow: "0 4px 6px rgba(32, 62, 145, 0.1)",
              }}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-600" data-aos="fade-up">
          Showing {filteredAlumni.length} of {alumniData.length} alumni
        </div>

        {/* Alumni Cards */}
        <div className="grid grid-cols-1 gap-8">
          {filteredAlumni.length > 0 ? (
            filteredAlumni.map((alumni, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <AlumniCard {...alumni} />
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500" data-aos="fade-up">
              No alumni found matching your search
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Alumni;
