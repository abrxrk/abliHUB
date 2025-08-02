import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SkillCard = ({
  skillName = "Skill",
  progress = 0,
  description = "No description available",
  onViewCourse,
  onDelete,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        group relative bg-gradient-to-br from-gray-800 to-gray-900 
        rounded-2xl p-6 shadow-2xl border border-gray-700
        transform transition-all duration-500 ease-in-out
        ${isHovered ? "scale-105 shadow-3xl -translate-y-2" : "shadow-2xl"}
        hover:border-gray-600 cursor-pointer
        min-h-[300px] w-full max-w-sm mx-auto
        hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)]
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Delete Button - Top Left */}
      {onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering card hover/click
            onDelete();
          }}
          className="absolute top-4 left-4 w-8 h-8 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 z-10 opacity-0 group-hover:opacity-100"
          title="Delete skill"
        >
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      )}

      {/* Progress Ring - Top Right with responsive sizing */}
      <div className="absolute top-4 right-4 w-14 h-14 sm:w-16 sm:h-16">
        <CircularProgressbar
          value={progress}
          text={`${progress}%`}
          styles={{
            root: {
              width: "100%",
              height: "100%",
            },
            path: {
              stroke: "#F8FAFC", // Light white (slate-50)
              strokeWidth: 8,
              transition: "stroke-dashoffset 0.5s ease 0s",
            },
            trail: {
              stroke: "#374151",
              strokeWidth: 8,
            },
            // Adjusted text size for better fit on small screens
            text: {
              fill: "#F8FAFC", // Light white (slate-50)
              fontSize: "22px", // Slightly smaller to fit in the smaller ring
              fontWeight: "bold",
            },
          }}
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-col h-full justify-between">
        {/* Skill Name with responsive font size */}
        <div className="mt-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {skillName}
          </h2>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>

        {/* Decorative Elements */}
        <div className="flex-1 flex items-center justify-center my-6">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-slate-700 rounded-full opacity-20 blur-lg"></div>
        </div>

        {/* Action Button */}
        <button
          onClick={onViewCourse}
          className={`
            w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-slate-700 text-white font-semibold rounded-lg
            transition-all duration-300 ease-in-out cursor-pointer
            ${
              isHovered
                ? "from-blue-700 to-slate-800 shadow-lg shadow-blue-500/25"
                : ""
            }
            hover:from-blue-700 hover:to-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
            transform hover:scale-105
          `}
        >
          View Course
        </button>
      </div>
    </div>
  );
};

export default SkillCard;
