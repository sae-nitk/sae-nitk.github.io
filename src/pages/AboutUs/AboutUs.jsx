import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { aboutUsData } from "./AboutUsData";
import { motion } from "framer-motion";

// SAE Brand Colors
const SAE_RED = '#90191b';
const SAE_BLUE = '#203e91';

function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 md:mb-20" data-aos="fade-down">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span style={{ color: SAE_RED }}>{aboutUsData.title.split(" ")[0]}</span>{" "}
            <span style={{ color: SAE_BLUE }}>{aboutUsData.title.split(" ")[1]}</span>
          </motion.h1>
          
          <motion.div 
            className="w-24 h-1 mx-auto mb-8 rounded-full"
            style={{ background: `linear-gradient(90deg, ${SAE_BLUE}, ${SAE_RED})` }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {aboutUsData.description}
          </p>
        </div>

        {/* Quotes Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {aboutUsData.quotes.map((quote, index) => (
            <motion.div
              key={index}
              className="relative p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ 
                borderLeft: `6px solid ${index % 2 === 0 ? SAE_BLUE : SAE_RED}`,
                borderTop: `1px solid ${index % 2 === 0 ? SAE_BLUE + '20' : SAE_RED + '20'}`
              }}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              whileHover={{ y: -5 }}
            >
              <div 
                className="absolute top-0 left-0 text-7xl font-serif -mt-4 ml-2 opacity-20"
                style={{ color: index % 2 === 0 ? SAE_BLUE : SAE_RED }}
              >
                “
              </div>
              <p className="text-gray-700 text-lg leading-relaxed pl-6 mt-4">{quote.text}</p>
              <div className="mt-6 text-right">
                <p 
                  className="font-bold"
                  style={{ color: index % 2 === 0 ? SAE_BLUE : SAE_RED }}
                >
                  {quote.author}
                </p>
                <p className="text-gray-600">{quote.role}</p>
                <p className="text-gray-500 text-sm">{quote.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div 
          className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8"
          data-aos="fade-up"
        >
          {aboutUsData.stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-white p-6 rounded-lg text-center shadow-lg"
              style={{ 
                backgroundColor: index % 2 === 0 ? SAE_BLUE : SAE_RED,
                borderBottom: `4px solid ${index % 2 === 0 ? SAE_RED : SAE_BLUE}`
              }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-3">{stat.value}</h3>
              <p className="text-gray-100 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Content Section */}
        <motion.div 
          className="mt-20 bg-white rounded-xl shadow-lg p-8 md:p-10"
          data-aos="fade-up"
          style={{ borderTop: `4px solid ${SAE_BLUE}` }}
        >
          <h2 
            className="text-2xl md:text-3xl font-bold mb-6 text-center"
            style={{ color: SAE_BLUE }}
          >
            Our Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 
                className="text-xl font-semibold mb-4"
                style={{ color: SAE_RED }}
              >
                Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To cultivate automotive engineering excellence through hands-on learning, 
                innovation, and industry collaboration.
              </p>
            </div>
            <div>
              <h3 
                className="text-xl font-semibold mb-4"
                style={{ color: SAE_RED }}
              >
                Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To be the premier student organization developing future mobility 
                leaders through technical education and competitive experiences.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutUs;