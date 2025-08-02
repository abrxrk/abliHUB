import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser, useClerk } from "@clerk/clerk-react";
import SkillCard from "../components/SkillCard";
import RoadmapModal from "../components/RoadmapModal";
import SkillGeneratorModal from "../components/SkillGeneratorModal";
import BlurFade from "../components/blur-fade";
import BlurFadeText from "../components/blur-fade-text";

const Dashboard = () => {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isSkillGeneratorOpen, setIsSkillGeneratorOpen] = useState(false);
  const [userSkills, setUserSkills] = useState([
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
  ]);

  const handleViewCourse = (skillName) => {
    setSelectedSkill(skillName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSkill(null);
  };

  const handleOpenSkillGenerator = () => {
    setIsSkillGeneratorOpen(true);
  };

  const handleCloseSkillGenerator = () => {
    setIsSkillGeneratorOpen(false);
  };

  const handleSkillSelect = (selectedSkill) => {
    // Create new skill with default progress
    const newSkill = {
      id: Date.now(), // Simple ID generation - you might want to use a proper ID generator
      name: selectedSkill.name,
      progress: 0, // New skills start with 0% progress
      description: selectedSkill.description,
    };

    // Add the new skill to the user's skills
    setUserSkills((prevSkills) => [...prevSkills, newSkill]);
  };

  const handleDeleteSkill = (skillToDelete) => {
    // Add a confirmation dialog for better UX
    if (
      window.confirm(
        `Are you sure you want to remove "${skillToDelete.name}" from your learning path?`
      )
    ) {
      setUserSkills((prevSkills) =>
        prevSkills.filter((skill) => skill.id !== skillToDelete.id)
      );
    }
  };

  const handleLogout = async () => {
    // Clear remember me data on explicit logout
    localStorage.removeItem("rememberMe");
    localStorage.removeItem("rememberedEmail");

    await signOut();
    // User will be automatically redirected to home/login page
  };

  // Show loading spinner while user data loads
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  // Get user's first name or fallback to email
  const getUserName = () => {
    if (user?.firstName) {
      return user.firstName;
    }
    if (user?.emailAddresses?.[0]?.emailAddress) {
      return user.emailAddresses[0].emailAddress.split("@")[0];
    }
    return "User";
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        {/* Header Section with BlurFade animation */}
        <div className="mb-10 md:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <div>
              <BlurFade delay={0.1} duration={0.6}>
                <h1 className="text-3xl sm:text-4xl font-bold mb-2 drop-shadow-lg">
                  Good Evening{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-slate-400 bg-clip-text text-transparent">
                    {getUserName()}
                  </span>
                </h1>
              </BlurFade>
              <BlurFade delay={0.3} duration={0.6}>
                <p className="text-gray-300 text-base sm:text-lg drop-shadow-sm">
                  Continue your learning journey
                </p>
              </BlurFade>
            </div>

            {/* User Actions */}
            <BlurFade delay={0.5} duration={0.6}>
              <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row gap-3">
                {/* User Profile Info */}
                {user?.imageUrl && (
                  <div className="flex items-center space-x-2 text-gray-300">
                    <img
                      src={user.imageUrl}
                      alt="Profile"
                      className="w-8 h-8 rounded-full border-2 border-gray-600"
                    />
                    <span className="text-sm">
                      {user.emailAddresses?.[0]?.emailAddress}
                    </span>
                  </div>
                )}

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 hover:shadow-red-500/25 inline-flex items-center space-x-2"
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
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  <span>Logout</span>
                </button>

                {/* Back to Home Button */}
                <Link
                  to="/"
                  className="bg-gradient-to-r from-blue-600 to-slate-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:from-blue-700 hover:to-slate-800 transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/25 inline-flex items-center space-x-2"
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
                  <span>Home</span>
                </Link>
              </div>
            </BlurFade>
          </div>
        </div>

        {/* Skills Grid with staggered BlurFade animations */}
        <section className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {userSkills.map((skill, index) => (
              <BlurFade key={skill.id} delay={1.0 + index * 0.2} duration={0.6}>
                <SkillCard
                  skillName={skill.name}
                  progress={skill.progress}
                  description={skill.description}
                  onViewCourse={() => handleViewCourse(skill.name)}
                  onDelete={() => handleDeleteSkill(skill)}
                />
              </BlurFade>
            ))}

            {/* Learn a New Skill Card */}
            <BlurFade delay={1.0 + userSkills.length * 0.2} duration={0.6}>
              <div
                onClick={handleOpenSkillGenerator}
                className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700 border-dashed min-h-[300px] w-full max-w-sm flex items-center justify-center mx-auto hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:border-gray-600 cursor-pointer hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)]"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-slate-700 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Learn a Skill
                  </h3>
                  <p className="text-gray-400 text-sm">
                    AI-powered learning paths
                  </p>
                </div>
              </div>
            </BlurFade>
          </div>
        </section>
      </div>

      {/* Roadmap Modal */}
      <RoadmapModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        skillName={selectedSkill}
      />

      {/* Skill Generator Modal */}
      <SkillGeneratorModal
        isOpen={isSkillGeneratorOpen}
        onClose={handleCloseSkillGenerator}
        onSkillSelect={handleSkillSelect}
      />
    </div>
  );
};

export default Dashboard;
