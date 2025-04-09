import React from "react";
import { AiOutlineArrowRight, AiFillYoutube } from "react-icons/ai";

function YouTubeSection() {
  // SAE Brand Colors
  const SAE_RED = "#90191b";
  const SAE_BLUE = "#203e91";

  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
      data-aos="fade-up"
      data-aos-delay="250"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: SAE_BLUE }}
          >
            SAE NITK on YouTube
          </h2>
          <div
            className="h-1 w-20 mx-auto rounded-full mb-6"
            style={{
              background: `linear-gradient(90deg, ${SAE_BLUE}, ${SAE_RED})`,
            }}
          ></div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <p
              className="text-lg md:text-xl text-gray-700"
              style={{ maxWidth: "600px" }}
            >
              Explore our coverage of events, projects, and technical insights.
            </p>
            <button
              onClick={() =>
                window.open(
                  "https://www.youtube.com/channel/UCPiCkG64oF7KKec7tEhquyw",
                  "_blank"
                )
              }
              className="flex hover:cursor-pointer items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 group"
              style={{
                backgroundColor: SAE_RED,
                color: "white",
                boxShadow: `0 4px 6px ${SAE_RED}20`,
              }}
              aria-label="Visit SAE NITK YouTube Channel"
            >
              <span className="mr-2 ">Visit Channel</span>
              <AiFillYoutube className="text-xl transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              id: "H_aWN_9bUgM",
              title: "SAE NITK Workshop Highlights",
              desc: "Recap of our latest hands-on workshop.",
            },
            {
              id: "mK-BilUa32o",
              title: "Simulink Model Of Antilock Braking System",
              desc: "SAE NITK Project Expo 2021",
            },
            {
              id: "Xz8dZqwW7bM",
              title: "Introduction To Computer Vision",
              desc: "A look into what is Computer Vision and its applications.",
            },
          ].map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transform transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="aspect-video w-full relative">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={`YouTube: ${video.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2" style={{ color: SAE_BLUE }}>
                  {video.title}
                </h3>
                <p className="text-gray-600">{video.desc}</p>
                <button
                  onClick={() =>
                    window.open(`https://www.youtube.com/watch?v=${video.id}`, "_blank")
                  }
                  className="mt-4 flex items-center text-sm font-medium group"
                  style={{ color: SAE_RED }}
                >
                  Watch Video
                  <AiOutlineArrowRight className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Channel Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { value: "50+", label: "Subscribers", color: SAE_BLUE },
            { value: "34", label: "Videos", color: SAE_RED },
            { value: "1K+", label: "Top Video Views", color: SAE_BLUE },
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
              <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default YouTubeSection;
