import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import * as FaIcons from "react-icons/fa";
import { motion } from 'framer-motion';

// SAE Brand Colors
const SAE_RED = '#90191b';
const SAE_BLUE = '#203e91';

const Video = "/images/video-edited.mp4";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const socialLinks = [
    { icon: <FaIcons.FaFacebookF />, link: "https://www.facebook.com/saenitk/" },
    { icon: <FaIcons.FaYoutube />, link: "https://www.youtube.com/channel/UCPiCkG64oF7KKec7tEhquyw" },
    { icon: <FaIcons.FaLinkedinIn />, link: "https://www.linkedin.com/company/sae-nitk-chapter/mycompany/" },
    { icon: <FaIcons.FaInstagram />, link: "https://www.instagram.com/sae_nitk/?hl=en" },
    { icon: <FaIcons.FaWordpressSimple />, link: "https://saenitk.wordpress.com/" }
  ];

  const mainLinks = [
    { name: "HOME", path: "/" },
    { name: "SMP", path: "/smp" },
    { name: "ABOUT", path: "/about" },
    { name: "BLOGS", path: "/blog" },
    { name: "EVENTS", path: "/events" }
  ];

  const dropdownLinks = [
    {
      name: "MAGAZINE",
      subLinks: [
        { name: "2022-2023", path: "/magazine/2022-2023" },
        { name: "2021-2022", path: "/magazine/2021-2022" }
      ]
    },
    {
      name: "PROJECTS",
      subLinks: [
        { name: "2021-2022", path: "/project-expo/2021-2022" },
        { name: "2020-2021", path: "/project-expo/2020-2021" }
      ]
    },
    {
      name: "TEAM",
      subLinks: [
        { name: "Current Team", path: "/team" },
        { name: "Alumni", path: "/alumni" }
      ]
    }
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <>
      {/* Top Bar with Logo */}
      <div className="bg-white w-full border-b border-gray-100">
        <div className="mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex-shrink-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              src={Video}
              type="video/mp4"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Social Links */}
          <div className="hidden md:flex space-x-2">
            {socialLinks.map(({ icon, link }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full flex items-center justify-center text-white transition-colors"
                style={{ backgroundColor: SAE_BLUE }}
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <FaIcons.FaTimes className="h-5 w-5" />
            ) : (
              <FaIcons.FaBars className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`${scrolled ? "fixed top-0 z-50 shadow-md" : ""} w-full bg-[#203e91] transition-all duration-200`}>
        <div className="mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between h-14">
  {/* Main Links - Takes 2/3 width */}
  <div className="flex space-x-1 w-2/3">
    {mainLinks.map(({ name, path }, index) => (
      <Link
        key={index}
        to={path}
        onClick={scrollToTop}
        className="px-3 py-2 text-white text-sm font-medium hover:bg-[#90191b] rounded transition flex-1 text-center"
      >
        {name}
      </Link>
    ))}
  </div>
  
  {/* Dropdown Links - Takes 1/3 width */}
  <div className="flex space-x-3 w-1/3 justify-around">
    {dropdownLinks.map(({ name, subLinks }, index) => (
      <div key={index} className="relative">
        <button
          onClick={() => toggleDropdown(index)}
          className="px-3 py-2 text-white text-sm font-medium hover:bg-[#90191b] rounded flex items-center transition w-full justify-center"
        >
          {name} <FaIcons.FaChevronDown className={`ml-1 text-xs transition-transform ${openDropdown === index ? 'rotate-180' : ''}`} />
        </button>
        
        {openDropdown === index && (
          <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200">
            {subLinks.map(({ name, path }, idx) => (
              <Link
                key={idx}
                to={path}
                onClick={scrollToTop}
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition"
              >
                {name}
              </Link>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
</div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white shadow-lg rounded-b-lg overflow-hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {mainLinks.map(({ name, path }, index) => (
                  <Link
                    key={index}
                    to={path}
                    onClick={scrollToTop}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
                  >
                    {name}
                  </Link>
                ))}

                {dropdownLinks.map(({ name, subLinks }, index) => (
                  <div key={index} className="mt-1">
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100"
                    >
                      {name}
                      <FaIcons.FaChevronDown className={`text-xs transition-transform ${openDropdown === index ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {openDropdown === index && (
                      <div className="pl-4 mt-1 space-y-1">
                        {subLinks.map(({ name, path }, idx) => (
                          <Link
                            key={idx}
                            to={path}
                            onClick={scrollToTop}
                            className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100"
                          >
                            {name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="flex justify-center space-x-3 pt-3 pb-2 border-t border-gray-200">
                  {socialLinks.map(({ icon, link }, index) => (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded-full flex items-center justify-center text-white"
                      style={{ backgroundColor: SAE_BLUE }}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Back to Top Button */}
      {scrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 h-10 w-10 rounded-full flex items-center justify-center shadow-md transition-all"
          style={{ backgroundColor: SAE_BLUE, color: 'white' }}
          aria-label="Back to top"
        >
          <FaIcons.FaArrowUp className="text-sm" />
        </button>
      )}
    </>
  );
}