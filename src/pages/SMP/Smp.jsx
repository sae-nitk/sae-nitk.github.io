import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import SMPCard from "../../components/SMPCard";

// Images
const rm_cv = "/images/smps/Computer_vision_sae.jpg";
const rm_an_fl = "/images/smps/Ansys fluent sae.jpeg";
const rm_mach_lear = "/images/smps/machine learning sae.jpg";
const rm_web_dev = "/images/smps/web development sae.jpeg";

// SAE Brand Colors
const SAE_RED = '#90191b';
const SAE_BLUE = '#203e91';

function Smp() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  const programs = [
    {
      image_link: rm_cv,
      title: "COMPUTER VISION",
      description: "Is it possible to drive a car without a driver? The answer is yes. Let's explore autonomous vehicle concepts.",
      reg_link: "https://docs.google.com/forms/d/e/1FAIpQLSfhksxra28Vyicwf6Jn8jYHNM4xPnao70KfjseRza8ma530vQ/viewform"
    },
    {
      image_link: rm_an_fl,
      title: "ANSYS FLUENT",
      description: "Dive into simulation environments using Ansys software to learn computational fluid dynamics.",
      reg_link: "https://docs.google.com/forms/d/e/1FAIpQLSfhksxra28Vyicwf6Jn8jYHNM4xPnao70KfjseRza8ma530vQ/viewform"
    },
    {
      image_link: rm_web_dev,
      title: "WEB DEVELOPMENT",
      description: "Embark on a journey into web development where creativity meets innovation.",
      reg_link: "https://docs.google.com/forms/d/e/1FAIpQLSfhksxra28Vyicwf6Jn8jYHNM4xPnao70KfjseRza8ma530vQ/viewform"
    },
    {
      image_link: rm_mach_lear,
      title: "MACHINE LEARNING",
      description: "Explore how algorithms unlock data's potential for intelligent decision-making in automotive systems.",
      reg_link: "https://docs.google.com/forms/d/e/1FAIpQLSfhksxra28Vyicwf6Jn8jYHNM4xPnao70KfjseRza8ma530vQ/viewform"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-down">
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: SAE_BLUE }}
          >
            Summer Mentorship Program
          </h1>
          <div 
            className="w-20 h-1 mx-auto mb-4 rounded-full"
            style={{ background: `linear-gradient(90deg, ${SAE_BLUE}, ${SAE_RED})` }}
          ></div>
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-semibold"
            style={{ color: SAE_RED }}
          >
            2023
          </h2>
        </div>

        {/* Programs Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          data-aos="fade-up"
        >
          {programs.map((program, index) => (
            <SMPCard key={index} {...program} />
          ))}
        </div>

        {/* Additional Info */}
        <div 
          className="mt-16 bg-white rounded-xl shadow-lg p-6 md:p-8" 
          data-aos="fade-up"
          style={{ borderTop: `4px solid ${SAE_BLUE}` }}
        >
          <h2 
            className="text-xl md:text-2xl font-bold mb-4"
            style={{ color: SAE_BLUE }}
          >
            About the Program
          </h2>
          <p className="text-gray-600 mb-6">
            Our Summer Mentorship Program offers hands-on learning experiences in cutting-edge technologies.
            Each program is led by experienced mentors and includes practical projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 
                className="text-lg font-semibold mb-2"
                style={{ color: SAE_BLUE }}
              >
                Duration
              </h3>
              <p className="text-gray-600">4 weeks (June - July 2023)</p>
            </div>
            <div>
              <h3 
                className="text-lg font-semibold mb-2"
                style={{ color: SAE_BLUE }}
              >
                Eligibility
              </h3>
              <p className="text-gray-600">Open to all NITK students</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Smp;