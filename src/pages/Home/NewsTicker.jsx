import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NewsTicker() {
  // SAE Brand Colors
  const SAE_RED = "#90191b";
  const SAE_BLUE = "#203e91";

  const newsItems = [
    {
      id: 1,
      text: "TechBuzz Volume 4 is out now!",
      link: "/magazine/2022-2023",
      isNew: true,
    },
    {
      id: 2,
      text: "Register for our upcoming webinar on automotive innovations",
      link: "/events",
      isNew: false,
    },
    {
      id: 3,
      text: "Check out our latest technical blogs and tutorials",
      link: "/blog",
      isNew: true,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prev) => (prev + 1) % newsItems.length);
      }
    }, 4000); // Slightly faster rotation

    return () => clearInterval(interval);
  }, [isPaused, newsItems.length]);

  return (
    <div
      className="bg-white py-2 px-4 border-t-2 border-b-2"
      style={{
        borderColor: SAE_BLUE,
        boxShadow: "0 2px 12px rgba(32, 62, 145, 0.08)",
      }}
      role="region"
      aria-live="polite"
    >
      <div className="max-w-7xl mx-auto flex items-center">
        {/* Live indicator */}
        <div className="flex items-center mr-4" style={{ color: SAE_RED }}>
          <span className="flex h-3 w-3 mr-2 relative">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ backgroundColor: SAE_RED }}
            ></span>
            <span
              className="relative inline-flex rounded-full h-3 w-3"
              style={{ backgroundColor: SAE_RED }}
            ></span>
          </span>
          <span className="font-bold text-xs uppercase tracking-wider">
            LATEST
          </span>
        </div>

        {/* News items */}
        <div
          className="flex-1 overflow-hidden relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {newsItems.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-full px-2">
                <Link
                  to={item.link}
                  className="flex items-center group transition-all duration-200"
                >
                  {item.isNew && (
                    <span
                      className="px-2 py-0.5 rounded-md text-xs font-bold mr-3 uppercase tracking-wide"
                      style={{
                        backgroundColor: SAE_RED + "20", // 20% opacity
                        color: SAE_RED,
                      }}
                    >
                      New
                    </span>
                  )}
                  <span
                    className="text-sm sm:text-base font-medium truncate"
                    style={{ color: SAE_BLUE }}
                  >
                    {item.text}
                  </span>
                  <span
                    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: SAE_RED }}
                  >
                    →
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="hidden sm:flex ml-4 space-x-2">
          {newsItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? "scale-125" : "opacity-50"
              }`}
              style={{
                backgroundColor: currentIndex === index ? SAE_BLUE : SAE_RED,
              }}
              aria-label={`View news ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsTicker;
