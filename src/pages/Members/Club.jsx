import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import TeamCard from "../../components/TeamCard";
import { memberGroups } from "./MembersData";

// SAE Brand Colors
const SAE_RED = "#90191b";
const SAE_BLUE = "#203e91";

export default function Club() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

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
            <span style={{ color: SAE_BLUE }}>Team</span>
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
            Meet the talented individuals driving innovation at SAE NITK
          </p>
        </div>

        {/* Member Groups */}
        <div className="space-y-20">
          {memberGroups.map((group, index) => (
            <motion.div
              key={index}
              className="mb-12"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h2
                className="text-2xl sm:text-3xl font-semibold mb-8 text-center relative inline-block"
                style={{ color: SAE_BLUE }}
              >
                {group.title}
                <span
                  className="absolute -bottom-1 left-0 w-full h-1 rounded-full"
                  style={{ background: SAE_RED }}
                ></span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                {group.members.map((member, idx) => (
                  <TeamCard key={idx} {...member} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
