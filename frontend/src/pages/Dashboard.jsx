import React, { useState } from 'react';
import SkillCard from '../components/SkillCard';

const Dashboard = () => {
  const [userSkill, setUserSkill] = useState({
    name: "Python",
    progress: 65
  });

  const handleViewCourse = () => {
    console.log(`Viewing course for ${userSkill.name}`);
    // This is where you'll later open the roadmap modal
  };

  return (
    // Set a consistent background color
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Responsive container padding: smaller on mobile, larger on desktops */}
      <div className="container mx-auto px-4 sm:px-6 py-8">
        {/* Responsive margin-bottom */}
        <div className="mb-10 md:mb-12">
          {/* Responsive heading font size */}
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            Good Evening Abrar
          </h1>
          {/* Responsive paragraph font size */}
          <p className="text-gray-400 text-base sm:text-lg">
            Continue your learning journey
          </p>
        </div>

        {/* Skills Grid with responsive gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <SkillCard
            skillName={userSkill.name}
            progress={userSkill.progress}
            onViewCourse={handleViewCourse}
          />
          
          {/* Placeholder for future skills - no changes needed here, it adapts with the grid */}
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700 border-dashed min-h-[300px] w-full max-w-sm flex items-center justify-center opacity-50 mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-gray-400">+</span>
              </div>
              <p className="text-gray-400">Add New Skill</p>
            </div>
          </div>
        </div>

        {/* Bottom Section with responsive margin-top */}
        <div className="mt-12 md:mt-16 p-6 bg-gray-800 rounded-xl border border-gray-700">
          <h3 className="text-xl font-semibold mb-4">Don't See Your Courses?</h3>
          <p className="text-gray-400 mb-4">
            Try refreshing the database. If you are still facing issues?{' '}
            <span className="text-blue-400 cursor-pointer hover:underline">
              Contact us
            </span>
          </p>
          <button className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
            Refresh Database
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;