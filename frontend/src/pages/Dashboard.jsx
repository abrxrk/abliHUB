import React, { useState } from "react";
import { Link } from "react-router-dom";
import SkillCard from "../components/SkillCard";
import RoadmapModal from "../components/RoadmapModal";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const userSkill = [
    {
      id: 1,
      name: "Python",
      progress: 65,
      description: "AI-Generated Learning Path",
    },
    {
      id: 2,
      name: "React.js",
      progress: 40,
      description: "Build modern user interfaces",
    },
    {
      id: 3,
      name: "Data Structures",
      progress: 80,
      description: "Core computer science concepts",
    },
  ];

  const handleViewCourse = (skillName) => {
    setSelectedSkill(skillName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSkill(null);
  };

  return (
    // Set a consistent background color with initial animation
    <div
      className="min-h-screen bg-gray-900 text-white animate-fadeInUp"
      style={{ animationDuration: "0.6s" }}
    >
      {/* Responsive container padding: smaller on mobile, larger on desktops */}
      <div className="container mx-auto px-4 sm:px-6 py-8">
        {/* Header Section with animation */}
        <div
          className="mb-10 md:mb-12 opacity-0 animate-fadeInUp"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <div>
              {/* Responsive heading font size */}
              <h1 className="text-3xl sm:text-4xl font-bold mb-2 drop-shadow-lg">
                Good Evening{" "}
                <span className="bg-gradient-to-r from-blue-400 to-slate-400 bg-clip-text text-transparent">
                  Abrar
                </span>
              </h1>
              {/* Responsive paragraph font size */}
              <p className="text-gray-300 text-base sm:text-lg drop-shadow-sm">
                Continue your learning journey
              </p>
            </div>

            {/* Back to Home Button */}
            <div className="mt-4 sm:mt-0">
              <Link
                to="/"
                className="bg-gradient-to-r from-blue-600 to-slate-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:from-blue-700 hover:to-slate-800 transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/25 inline-flex items-center space-x-2"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Skills Grid with staggered animations */}
        <section className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {userSkill.map((skill, index) => (
              <div
                key={skill.id}
                className="opacity-0 animate-fadeInUp"
                style={{
                  animationDelay: `${0.3 + index * 0.2}s`,
                  animationFillMode: "forwards",
                }}
              >
                <SkillCard
                  skillName={skill.name}
                  progress={skill.progress}
                  description={skill.description}
                  onViewCourse={() => handleViewCourse(skill.name)}
                />
              </div>
            ))}

            {/* Placeholder for future skills with animation */}
            <div
              className="opacity-0 animate-fadeInUp"
              style={{
                animationDelay: `${0.3 + userSkill.length * 0.2}s`,
                animationFillMode: "forwards",
              }}
            >
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700 border-dashed min-h-[300px] w-full max-w-sm flex items-center justify-center opacity-50 mx-auto hover:shadow-3xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl text-gray-400">+</span>
                  </div>
                  <p className="text-gray-400">Add New Skill</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Roadmap Modal - Rendered as Portal at document.body level */}
      <RoadmapModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        skillName={selectedSkill}
      />
    </div>
  );
};

export default Dashboard;
