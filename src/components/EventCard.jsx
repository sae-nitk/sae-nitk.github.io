import React from "react";
import { Link } from "react-router-dom";

// Premium SAE Palette
const SAE_RED = "#C8102E";
const SAE_BLUE = "#0033A0";
const SAE_GOLD = "#FFC72C";

function EventCard({ event, isUpcoming = false }) {
  return (
    <div
      className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 hover:border-sae-blue/20"
      data-aos="fade-up"
    >
      {/* Premium Tag */}
      <div
        className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center"
        style={{
          backgroundColor: event.type === "internal" ? SAE_RED : SAE_BLUE,
          color: "white",
        }}
      >
        {event.type === "internal" ? (
          <svg
            className="w-3 h-3 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        ) : (
          <svg
            className="w-3 h-3 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        )}
        {event.type.toUpperCase()}
      </div>

      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.src}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </div>

      {/* Event Content */}
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex-grow">
          {/* Date Badge */}
          {!isUpcoming && (
            <div className="flex items-center text-xs text-gray-500 mb-2">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {event.date}
            </div>
          )}

          <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-sae-blue transition-colors">
            {event.title}
          </h3>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {event.text}
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
          <Link
            to={`/events/${event.link}`}
            className="text-sm font-semibold flex items-center group"
            style={{ color: SAE_BLUE }}
          >
            View Details
            <svg
              className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>

          {isUpcoming && event.registration && (
            <a
              href={event.registration}
              className="text-xs px-3 py-1.5 rounded-md font-bold transition-all transform hover:scale-105 shadow-xs"
              style={{
                backgroundColor: SAE_RED,
                color: "white",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </a>
          )}
        </div>
      </div>

      {/* Hover Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-gradient-to-r from-sae-blue via-sae-gold to-sae-red transition-all duration-300"></div>
    </div>
  );
}

export default EventCard;
