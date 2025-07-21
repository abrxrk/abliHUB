import React, { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SkillCard = ({ skillName = "Python", progress = 0, onViewCourse }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`
        relative bg-gradient-to-br from-gray-800 to-gray-900 
        rounded-2xl p-6 shadow-2xl border border-gray-700
        transform transition-all duration-300 ease-in-out
        ${isHovered ? 'scale-105 shadow-3xl' : ''}
        hover:border-gray-600 cursor-pointer
        min-h-[300px] w-full max-w-sm mx-auto
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Progress Ring - Top Right with responsive sizing */}
      <div className="absolute top-4 right-4 w-14 h-14 sm:w-16 sm:h-16">
        <CircularProgressbar
          value={progress}
          text={`${progress}%`}
          styles={{
            root: {
              width: '100%',
              height: '100%',
            },
            path: {
              stroke: '#10B981',
              strokeWidth: 8,
              transition: 'stroke-dashoffset 0.5s ease 0s',
            },
            trail: {
              stroke: '#374151',
              strokeWidth: 8,
            },
            // Adjusted text size for better fit on small screens
            text: {
              fill: '#10B981',
              fontSize: '22px', // Slightly smaller to fit in the smaller ring
              fontWeight: 'bold',
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
          <p className="text-gray-400 text-sm">
            AI-Generated Learning Path
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="flex-1 flex items-center justify-center my-6">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-lg"></div>
        </div>

        {/* Action Button - No changes needed, already flexible */}
        <button
          onClick={onViewCourse}
          className={`
            w-full py-3 px-6 bg-white text-gray-900 font-semibold rounded-lg
            transition-all duration-200 ease-in-out
            ${isHovered ? 'bg-gray-100 shadow-lg' : 'bg-white'}
            hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50
          `}
        >
          View Course
        </button>
      </div>
    </div>
  );
};

export default SkillCard;