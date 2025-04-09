import React from "react";
import { useParams } from "react-router-dom";
import { events_20, events_21, events_22 } from "./EventsData";
import AOS from "aos";
import "aos/dist/aos.css";

// SAE Brand Colors
const SAE_RED = "#90191b";
const SAE_BLUE = "#203e91";
const LIGHT_GRAY = "#f5f5f5";
const DARK_GRAY = "#2d2d2d";

const EventTemplate = () => {
  const { eventLink } = useParams();

  const allEvents = [...events_20, ...events_21, ...events_22];
  const event = allEvents.find((e) => e.link === eventLink);

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
    window.scrollTo(0, 0);
  }, []);

  if (!event)
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md mx-4">
          <h3 className="text-2xl font-bold mb-4" style={{ color: SAE_RED }}>
            Event Not Found
          </h3>
          <p className="text-gray-600 mb-6">
            The event you're looking for doesn't exist or has been removed.
          </p>
          <a
            href="/events"
            className="inline-block px-6 py-3 rounded-lg text-white font-medium"
            style={{ background: SAE_BLUE }}
          >
            Browse All Events
          </a>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Event Header */}
        <div
          className="relative rounded-xl overflow-hidden shadow-xl mb-8"
          data-aos="fade-down"
        >
          <img
            src={event.src}
            alt={event.title}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">
            <div className="flex flex-wrap gap-2 mb-3">
              <span
                className="px-3 py-1 rounded-full text-xs md:text-sm font-bold shadow-sm"
                style={{
                  backgroundColor:
                    event.type === "internal" ? SAE_RED : SAE_BLUE,
                  color: "white",
                }}
              >
                {event.type.toUpperCase()}
              </span>
              <span
                className="px-3 py-1 rounded-full text-xs md:text-sm font-medium"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  backdropFilter: "blur(4px)",
                }}
              >
                <svg
                  className="inline-block w-3 h-3 mr-1 -mt-0.5"
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
              </span>
            </div>
            <h1
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
              data-aos="fade-up"
            >
              {event.title}
            </h1>
          </div>
        </div>

        {/* Event Content */}
        <div
          className="bg-white rounded-xl shadow-lg overflow-hidden"
          data-aos="fade-up"
        >
          {/* About Section */}
          <div className="p-6 md:p-8 border-b border-gray-100">
            <h2
              className="text-xl md:text-2xl font-semibold mb-4"
              style={{ color: SAE_BLUE }}
            >
              About the Event
            </h2>
            <div className="prose max-w-none text-gray-700">{event.desc}</div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 md:p-8">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: SAE_BLUE }}
              >
                Date & Time
              </h3>
              <p className="text-gray-700">{event.date}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: SAE_BLUE }}
              >
                Location
              </h3>
              <p className="text-gray-700">{event.platform}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: SAE_BLUE }}
              >
                Speakers
              </h3>
              <p className="text-gray-700">{event.speakers}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: SAE_BLUE }}
              >
                Event Type
              </h3>
              <p className="text-gray-700 capitalize">{event.type}</p>
            </div>
          </div>

          {/* CTA Section */}
          {event.registration && (
            <div className="p-6 md:p-8 bg-gray-50 border-t border-gray-200 text-center">
              <a
                href={event.registration}
                className="inline-flex items-center px-6 py-3 rounded-lg font-medium text-white transition-all hover:shadow-md"
                style={{ background: SAE_RED }}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="zoom-in"
              >
                Register Now
                <svg
                  className="ml-2 w-4 h-4"
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
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventTemplate;
