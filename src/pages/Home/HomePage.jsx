import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import YouTubeSection from "./YouTubeSection";
import ClubInfoSection from "./ClubInfoSection";
import MessageSection from "./MessageSection";
import VisionSection from "./VisionSection";
import NewsTicker from "./NewsTicker";

// SAE Brand Colors
const SAE_RED = "#90191b";
const SAE_BLUE = "#203e91";

const images = [
  {
    src: "/images/Home/hp1.jpg",
    alt: "SAE NITK Team working on a vehicle prototype",
    title: "SAE NITK",
    subtitle: "Where Innovation Meets Engineering",
    cta: "See Our Projects",
    link: "/project-expo/2021-2022",
  },
  {
    src: "/images/Home/hp2.jpg",
    alt: "SAE NITK team at a national competition",
    title: "COMPETITIVE SPIRIT",
    subtitle: "Award-Winning Performance",
    cta: "View Our Achievements",
    link: "/magazine/2022-2023",
  },
  {
    src: "/images/Home/hp3.jpg",
    alt: "SAE NITK workshop in progress",
    title: "LEARN BY DOING",
    subtitle: "Hands-On Technical Training",
    cta: "Join Workshops",
    link: "/smp",
  },
  {
    src: "/images/Home/hp4.jpg",
    alt: "SAE NITK team celebration",
    title: "TEAMWORK",
    subtitle: "Collaborative Engineering Culture",
    cta: "Meet The Team",
    link: "/team",
  },
  {
    src: "/images/Home/hp5.jpg",
    alt: "SAE NITK vehicle testing",
    title: "PRECISION ENGINEERING",
    subtitle: "Rigorous Testing Protocols",
    cta: "Our Methodology",
    link: "/about",
  },
  {
    src: "/images/Home/hp6.jpg",
    alt: "SAE NITK technical discussion session",
    title: "KNOWLEDGE SHARING",
    subtitle: "Peer-to-Peer Learning",
    cta: "Upcoming Sessions",
    link: "/events",
  },
];

const delay = 4500; // Slightly faster transition for 6 images

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const timeoutRef = React.useRef(null);
  const [loadedImages, setLoadedImages] = useState([]);

  // Preload first 2 images on component mount
  useEffect(() => {
    [images[0].src, images[1].src].forEach((src) => {
      new Image().src = src;
    });

    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // Track loaded images for better transitions
  useEffect(() => {
    if (!loadedImages.includes(images[index].src)) {
      const img = new Image();
      img.src = images[index].src;
      img.onload = () => {
        setLoadedImages((prev) => [...prev, images[index].src]);
      };
    }
  }, [index, loadedImages]);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased">
      {/* Hero Slideshow */}
      <div className="relative w-full h-[95vh] max-h-screen overflow-hidden">
        <div
          className="flex w-full h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(${-index * 100}%)` }}
        >
          {images.map((image, idx) => (
            <div key={idx} className="min-w-full h-full relative">
              {/* Background image with loading state */}
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full object-cover object-center transition-opacity duration-500 ${
                  loadedImages.includes(image.src) ? "opacity-100" : "opacity-0"
                }`}
                loading={idx <= 1 ? "eager" : "lazy"}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70 flex items-center justify-center flex-col px-4 text-center">
                <div className="max-w-4xl mx-auto space-y-6">
                  <h1
                    className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight"
                    data-aos="fade-down"
                    style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
                  >
                    {image.title}
                  </h1>
                  <p
                    className="text-2xl sm:text-3xl md:text-4xl text-white font-medium"
                    data-aos="fade-up"
                    data-aos-delay="150"
                    style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
                  >
                    {image.subtitle}
                  </p>

                  <div className="mt-8" data-aos="fade-up" data-aos-delay="300">
                    <Link to={image.link}>
                      <button
                        className="px-8 py-3 hover:cursor-pointer text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 border-2 border-white/30"
                        style={{
                          backgroundColor: idx % 2 === 0 ? SAE_BLUE : SAE_RED,
                          "&:hover": {
                            backgroundColor: idx % 2 === 0 ? SAE_RED : SAE_BLUE,
                          },
                        }}
                      >
                        {image.cta}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slideshow Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === idx ? "bg-white" : "bg-white/50 hover:bg-white/80"
              }`}
              style={{
                width: index === idx ? "2rem" : "1rem",
                backgroundColor: index === idx ? "white" : "",
              }}
              onClick={() => setIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="sm:hidden absolute top-1/2 w-full flex justify-between px-4 transform -translate-y-1/2">
          <button
            onClick={() =>
              setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
            }
            className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all"
            aria-label="Previous slide"
            style={{ backgroundColor: SAE_BLUE }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() =>
              setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
            }
            className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all"
            aria-label="Next slide"
            style={{ backgroundColor: SAE_RED }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* News Ticker with SAE Colors */}
      <div
        className="bg-gray-900 py-3"
        style={{
          borderTop: `2px solid ${SAE_RED}`,
          borderBottom: `2px solid ${SAE_BLUE}`,
        }}
      >
        <NewsTicker />
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-20 space-y-20 md:space-y-28">
        <VisionSection />
        {/* <MessageSection /> */}
        <ClubInfoSection />
        <YouTubeSection />
      </div>

      {/* Mobile Floating CTA */}
      <div className="fixed sm:hidden bottom-6 right-6 z-30">
        <Link to="/events">
          <button
            className="p-4 text-white rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
            style={{ backgroundColor: SAE_BLUE }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <span className="sr-only">Register for Events</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
