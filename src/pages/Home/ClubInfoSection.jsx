import React from "react";

function ClubInfoSection() {
  // SAE Brand Colors
  const SAE_RED = "#90191b";
  const SAE_BLUE = "#203e91";

  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: SAE_BLUE }}
          >
            About SAE NITK
          </h2>
          <div
            className="h-1 w-20 mx-auto rounded-full mb-6"
            style={{
              background: `linear-gradient(90deg, ${SAE_BLUE}, ${SAE_RED})`,
            }}
          ></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Driving innovation in automotive and mobility engineering
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* First Paragraph Card */}
          <div
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform transition-all hover:shadow-xl hover:-translate-y-1"
            style={{ borderTop: `4px solid ${SAE_BLUE}` }}
          >
            <div className="flex items-center mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mr-4"
                style={{ backgroundColor: `${SAE_BLUE}20` }}
              >
                <svg
                  className="w-5 h-5"
                  style={{ color: SAE_BLUE }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold" style={{ color: SAE_BLUE }}>
                Our Mission
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              SAE-NITK is a technical club for automotive enthusiasts dedicated
              to automobile, aerospace, electric vehicles and mobility
              engineering concepts. We enhance technical knowledge and
              management skills through events ranging from knowledge exchange
              programs to keynote talks with industry professionals.
            </p>
          </div>

          {/* Second Paragraph Card */}
          <div
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform transition-all hover:shadow-xl hover:-translate-y-1"
            style={{ borderTop: `4px solid ${SAE_RED}` }}
          >
            <div className="flex items-center mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mr-4"
                style={{ backgroundColor: `${SAE_RED}20` }}
              >
                <svg
                  className="w-5 h-5"
                  style={{ color: SAE_RED }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold" style={{ color: SAE_RED }}>
                Student Benefits
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              SAE-NITK provides tangible contact with future engineering
              professions. As an SAEINDIA Collegiate Club, we offer special
              activities, discounts on technical resources, training programs,
              industry meetings, free industry visits, and scholarships. Our
              members gain practical experience that complements their academic
              learning.
            </p>
            {/* <div className="mt-6">
              <button 
                className="px-6 py-2 rounded-lg font-medium transition-all duration-300"
                style={{ 
                  backgroundColor: SAE_RED,
                  color: 'white',
                  boxShadow: `0 4px 6px ${SAE_RED}20`,
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 6px 8px ${SAE_RED}30`
                  }
                }}
              >
                Join SAE NITK
              </button>
            </div> */}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: "10+", label: "Years Active", color: SAE_BLUE },
            { value: "5+", label: "Events Yearly", color: SAE_RED },
            { value: "50+", label: "Active Members", color: SAE_BLUE },
            { value: "5+", label: "Industry Partners", color: SAE_RED },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center border-t-4"
              style={{ borderColor: stat.color }}
            >
              <div
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClubInfoSection;
