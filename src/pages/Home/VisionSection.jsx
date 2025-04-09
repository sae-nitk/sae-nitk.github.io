import React from 'react';
import { Link } from "react-router-dom";
function VisionSection() {
    // SAE Brand Colors
    const SAE_RED = '#90191b';
    const SAE_BLUE = '#203e91';
    
    return (
      <section
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="max-w-5xl mx-auto">
          <div 
            className="relative bg-white p-10 md:p-12 rounded-2xl shadow-xl border border-gray-100 overflow-hidden transform transition-all hover:shadow-2xl hover:-translate-y-1"
            style={{
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 5px 10px -5px rgba(0, 0, 0, 0.04)'
            }}
          >
            {/* Decorative elements */}
            <div 
              className="absolute -right-24 -top-24 w-64 h-64 rounded-full opacity-5"
              style={{ backgroundColor: SAE_BLUE }}
            ></div>
            <div 
              className="absolute -left-24 -bottom-24 w-64 h-64 rounded-full opacity-5"
              style={{ backgroundColor: SAE_RED }}
            ></div>
            
            {/* Geometric accents */}
            <div 
              className="absolute right-12 top-12 w-12 h-12 rounded-lg opacity-10 rotate-45"
              style={{ backgroundColor: SAE_BLUE }}
            ></div>
            <div 
              className="absolute left-12 bottom-12 w-12 h-12 rounded-lg opacity-10 -rotate-45"
              style={{ backgroundColor: SAE_RED }}
            ></div>
            
            <div className="relative z-10">
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 uppercase tracking-tight"
                style={{ color: SAE_BLUE }}
              >
                Our Vision
              </h2>
              
              {/* Gradient divider */}
              <div 
                className="h-1 w-24 mx-auto mb-8 rounded-full"
                style={{ 
                  background: `linear-gradient(90deg, ${SAE_BLUE}, ${SAE_RED})`
                }}
              ></div>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 text-center leading-relaxed md:leading-loose max-w-3xl mx-auto">
                To forge the next generation of automotive engineers through {' '}
                <span className="font-semibold" style={{ color: SAE_BLUE }}>innovation</span>, {' '}
                <span className="font-semibold" style={{ color: SAE_RED }}>hands-on experience</span>, {' '}
                and <span className="font-semibold" style={{ color: SAE_BLUE }}>technical excellence</span>, {' '}
                advancing sustainable mobility solutions.
              </p>
              
              <div className="mt-10 flex justify-center">
              <Link to="/smp">
                <button 
                  className="px-8 py-3 hover:cursor-pointer text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{
                    background: `linear-gradient(135deg, ${SAE_BLUE}, ${SAE_RED})`,
                    boxShadow: `0 4px 6px -1px rgba(32, 62, 145, 0.2), 0 2px 4px -1px rgba(144, 25, 27, 0.12)`,
                    focusRingColor: SAE_BLUE
                  }}
                >
                  Join Our Mission →
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default VisionSection;