import React from "react";
import { FaFileAlt as DescriptionIcon, FaYoutube as YouTubeIcon } from "react-icons/fa";
import { motion } from "framer-motion";

// SAE Brand Colors
const SAE_RED = '#90191b';
const SAE_BLUE = '#203e91';

function ProjectCard({
  image_link,
  title,
  description,
  report_link,
  video_link,
}) {
  return (
    <motion.div 
      className="flex flex-col lg:flex-row bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
      style={{ 
        borderLeft: `6px solid ${SAE_BLUE}`,
        borderTop: `1px solid ${SAE_BLUE}20`
      }}
      whileHover={{ scale: 1.01 }}
    >
      {/* Project Image */}
      <div className="relative lg:w-2/5 h-64 sm:h-80 lg:h-auto overflow-hidden">
        <img
          src={image_link}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>

      {/* Project Content */}
      <div className="p-6 lg:w-3/5 flex flex-col">
        <h3 className="text-2xl font-bold mb-3" style={{ color: SAE_BLUE }}>{title}</h3>
        <p className="text-gray-700 mb-6 flex-grow">{description}</p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          {report_link && (
            <motion.button
              onClick={() => window.open(report_link, "_blank")}
              className="flex hover:cursor-pointer items-center gap-2 px-5 py-2.5 rounded-full text-white font-medium transition-all hover:shadow-md"
              style={{ backgroundColor: SAE_RED }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <DescriptionIcon className="text-lg" /> 
              <span>View Report</span>
            </motion.button>
          )}
          {video_link && (
            <motion.button
              onClick={() => window.open(video_link, "_blank")}
              className="flex hover:cursor-pointer items-center gap-2 px-5 py-2.5 rounded-full text-white font-medium transition-all hover:shadow-md"
              style={{ backgroundColor: SAE_BLUE }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <YouTubeIcon className="text-lg" /> 
              <span>Watch Video</span>
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;