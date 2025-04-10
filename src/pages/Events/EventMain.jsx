import React, { useState } from "react";
import { events_20, events_21, events_22, events_upcoming } from "./EventsData";
import AOS from "aos";
import "aos/dist/aos.css";
import EventCard from "../../components/EventCard";

// SAE Brand Colors
const SAE_RED = "#90191b";
const SAE_BLUE = "#203e91";
const LIGHT_GRAY = "#f5f5f5";
const DARK_GRAY = "#2d2d2d";

const EventMain = () => {
  const [filter, setFilter] = useState("all");
  const [activeYear, setActiveYear] = useState("upcoming");

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const filteredEvents = (events) => {
    if (filter === "all") return events;
    return events.filter((event) => event.type === filter);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: SAE_BLUE }}
          >
            SAE Events
          </h1>
          <div
            className="w-20 h-1 mx-auto rounded-full mb-6"
            style={{
              background: `linear-gradient(90deg, ${SAE_BLUE}, ${SAE_RED})`,
            }}
          ></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our technical workshops, competitions, and networking events
          </p>
        </div>

        {/* Filter Controls */}
        <div
          className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6"
          data-aos="fade-up"
        >
          <div className="flex items-center space-x-4 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
            <span className="text-gray-700 font-medium hidden sm:block">
              Filter:
            </span>
            <select
              id="eventFilter"
              name="eventFilter"
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              style={{ color: DARK_GRAY }}
            >
              <option value="all">All Events</option>
              <option value="internal">Internal</option>
              <option value="external">External</option>
            </select>
          </div>

          <div className="flex space-x-2 overflow-x-auto w-full md:w-auto py-2 px-1">
            {["upcoming", "2022", "2021", "2020"].map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium whitespace-nowrap transition-colors ${
                  activeYear === year
                    ? `text-white ${
                        year === "upcoming"
                          ? "bg-gradient-to-r from-red-700 to-red-600"
                          : "bg-gradient-to-r from-blue-700 to-blue-600"
                      } shadow-md`
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm border border-gray-200"
                }`}
              >
                {year === "upcoming" ? "Upcoming Events" : `Events ${year}`}
              </button>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        {activeYear === "upcoming" && (
          <div className="mb-16" data-aos="fade-up">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 pb-2 relative inline-block">
              <span style={{ color: SAE_BLUE }}>Upcoming Events</span>
              <span
                className="absolute bottom-0 left-0 w-full h-1 rounded-full"
                style={{ background: SAE_RED }}
              ></span>
            </h2>
            {events_upcoming.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events_upcoming.map((event, index) => (
                  <EventCard key={index} event={event} isUpcoming={true} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <p className="text-gray-500">
                  No upcoming events scheduled. Check back soon!
                </p>
              </div>
            )}
          </div>
        )}

        {/* Past Events by Year */}
        {activeYear !== "upcoming" && (
          <div className="space-y-16">
            {[
              { year: "2022", events: events_22 },
              { year: "2021", events: events_21 },
              { year: "2020", events: events_20 },
            ].map(
              (group) =>
                group.year === activeYear && (
                  <div key={group.year} data-aos="fade-up">
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-6 pb-2 relative inline-block">
                      <span style={{ color: SAE_BLUE }}>
                        {group.year} Events
                      </span>
                      <span
                        className="absolute bottom-0 left-0 w-full h-1 rounded-full"
                        style={{ background: SAE_RED }}
                      ></span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {filteredEvents(group.events).length > 0 ? (
                        filteredEvents(group.events).map((event, index) => (
                          <EventCard key={index} event={event} />
                        ))
                      ) : (
                        <div className="col-span-full bg-white rounded-xl shadow-sm p-8 text-center">
                          <p className="text-gray-500">
                            No {filter === "all" ? "" : filter + " "}events
                            found for {group.year}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventMain;
