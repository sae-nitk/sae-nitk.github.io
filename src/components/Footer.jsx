import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaChevronRight,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  // SAE Brand Colors
  const SAE_RED = "#90191b";
  const SAE_BLUE = "#203e91";
  const SAELogo = "/images/saelogo.jpg";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: <FaFacebook />,
      url: "https://facebook.com/saenitk",
      name: "Facebook",
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/sae_nitk",
      name: "Instagram",
    },
    {
      icon: <FaYoutube />,
      url: "https://youtube.com/saenitk",
      name: "YouTube",
    },
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/company/saenitk",
      name: "LinkedIn",
    },
  ];

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Our Team", path: "/team" },
        { name: "Events", path: "/events" },
        { name: "Projects", path: "/project-expo/2021-2022" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Magazine", path: "/magazine/2022-2023" },
        { name: "Blogs", path: "/blog" },
        { name: "Alumni", path: "/alumni" },
        { name: "SMP", path: "/smp" },
      ],
    },
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: "SAE NITK, NIT Karnataka, Surathkal" },
    {
      icon: <FaEnvelope />,
      text: "saeindia@nitk.edu.in",
      link: "mailto:saeindia@nitk.edu.in",
    },
    { icon: <FaPhoneAlt />, text: "+91 8618891003", link: "tel:+918618891003" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 w-full">
      <div className="w-full">
        <div
          className="mx-auto px-4 sm:px-6 py-8 lg:px-8 lg:py-12"
          style={{ maxWidth: "90rem" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {/* Brand Column with Logo */}
            <div className="space-y-6">
              <Link to="/" className="inline-block">
                <img
                  src={SAELogo}
                  alt="SAE NITK Logo"
                  className="h-20 w-auto md:h-1/3" // Adjust height as needed
                />
              </Link>

              <p className="text-gray-400 text-sm leading-relaxed">
                Advancing mobility engineering through innovation and excellence
                since 2005.
              </p>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-8 w-8 md:h-9 md:w-9 rounded-full flex items-center justify-center transition-colors"
                    style={{ backgroundColor: SAE_BLUE, color: "white" }}
                    whileHover={{
                      backgroundColor: SAE_RED,
                      y: -3,
                    }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link
                        to={link.path}
                        onClick={scrollToTop}
                        className="text-gray-400 hover:text-white text-sm flex items-center transition-colors"
                      >
                        <FaChevronRight
                          className="mr-2 text-xs"
                          style={{ color: SAE_RED }}
                        />
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider">
                Contact Us
              </h3>
              <ul className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-start"
                  >
                    <div
                      className="flex-shrink-0 mt-1 mr-3"
                      style={{ color: index % 2 === 0 ? SAE_BLUE : SAE_RED }}
                    >
                      {info.icon}
                    </div>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-400 hover:text-white text-sm transition-colors"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-gray-400 text-sm">{info.text}</span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Full-width Divider */}
          <div
            className="my-10 h-px w-full"
            style={{
              background: `linear-gradient(90deg, ${SAE_BLUE}, ${SAE_RED})`,
            }}
          ></div>

          {/* Copyright */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-500 text-center md:text-left">
            <p className="mb-3 md:mb-0">
              &copy; {new Date().getFullYear()} SAE NITK. All rights reserved.
            </p>
            <div className="flex items-center">
              <span className="mr-1">Designed with</span>
              <span className="mx-1" style={{ color: SAE_RED }}>
                ❤
              </span>
              <span className="ml-1">by SAE NITK Web Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
