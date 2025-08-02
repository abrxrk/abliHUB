import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const SkillGeneratorModal = ({ isOpen, onClose, onSkillSelect }) => {
  const [careerGoal, setCareerGoal] = useState("");
  const [suggestedSkills, setSuggestedSkills] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setCareerGoal("");
      setSuggestedSkills([]);
      setIsLoading(false);
      setHasGenerated(false);
    }
  }, [isOpen]);

  const handleGenerateSkills = async () => {
    if (!careerGoal.trim()) return;

    setIsLoading(true);

    try {
      // TODO: Replace with actual API call to your FastAPI backend
      // For now, we'll simulate with dummy data
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API delay

      // Mock skill suggestions based on career goal
      const mockSkills = generateMockSkills(careerGoal);
      setSuggestedSkills(mockSkills);
      setHasGenerated(true);
    } catch (error) {
      console.error("Error generating skills:", error);
      // Handle error - you could show a toast notification here
    } finally {
      setIsLoading(false);
    }
  };

  const generateMockSkills = (goal) => {
    const goalLower = goal.toLowerCase();

    if (
      goalLower.includes("frontend") ||
      goalLower.includes("front-end") ||
      goalLower.includes("ui")
    ) {
      return [
        {
          id: 1,
          name: "HTML & CSS",
          description: "Foundation of web development",
        },
        {
          id: 2,
          name: "JavaScript",
          description: "Interactive web programming",
        },
        { id: 3, name: "React.js", description: "Modern UI framework" },
        {
          id: 4,
          name: "Tailwind CSS",
          description: "Utility-first CSS framework",
        },
        { id: 5, name: "TypeScript", description: "Type-safe JavaScript" },
      ];
    } else if (
      goalLower.includes("backend") ||
      goalLower.includes("back-end") ||
      goalLower.includes("server")
    ) {
      return [
        {
          id: 1,
          name: "Python",
          description: "Versatile programming language",
        },
        { id: 2, name: "FastAPI", description: "Modern Python web framework" },
        {
          id: 3,
          name: "Database Design",
          description: "SQL and NoSQL databases",
        },
        { id: 4, name: "REST APIs", description: "Web service architecture" },
        { id: 5, name: "Docker", description: "Containerization technology" },
      ];
    } else if (
      goalLower.includes("fullstack") ||
      goalLower.includes("full-stack") ||
      goalLower.includes("full stack")
    ) {
      return [
        {
          id: 1,
          name: "JavaScript",
          description: "Frontend and backend language",
        },
        { id: 2, name: "React.js", description: "Frontend framework" },
        { id: 3, name: "Node.js", description: "Backend JavaScript runtime" },
        { id: 4, name: "MongoDB", description: "NoSQL database" },
        { id: 5, name: "REST APIs", description: "Web service design" },
      ];
    } else if (
      goalLower.includes("data") ||
      goalLower.includes("analytics") ||
      goalLower.includes("science")
    ) {
      return [
        { id: 1, name: "Python", description: "Data science language" },
        { id: 2, name: "Pandas", description: "Data manipulation library" },
        { id: 3, name: "SQL", description: "Database querying" },
        { id: 4, name: "Data Visualization", description: "Charts and graphs" },
        { id: 5, name: "Machine Learning", description: "AI and ML basics" },
      ];
    } else {
      return [
        {
          id: 1,
          name: "Programming Fundamentals",
          description: "Core concepts",
        },
        { id: 2, name: "Problem Solving", description: "Algorithmic thinking" },
        { id: 3, name: "Git & GitHub", description: "Version control" },
        { id: 4, name: "Command Line", description: "Terminal basics" },
        {
          id: 5,
          name: "Project Management",
          description: "Planning and execution",
        },
      ];
    }
  };

  const handleSkillClick = (skill) => {
    onSkillSelect(skill);
    onClose();
  };

  if (!isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-white">
            🚀 What do you want to learn?
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-700 rounded-lg"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {!hasGenerated ? (
          /* Input Section */
          <div className="space-y-6">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-3">
                Describe your career goal or what you want to learn:
              </label>
              <textarea
                value={careerGoal}
                onChange={(e) => setCareerGoal(e.target.value)}
                placeholder="e.g., I want to be a frontend developer, I want to learn data science, I want to build mobile apps..."
                className="w-full h-32 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                disabled={isLoading}
              />
            </div>

            <button
              onClick={handleGenerateSkills}
              disabled={!careerGoal.trim() || isLoading}
              className={`
                w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300
                ${
                  careerGoal.trim() && !isLoading
                    ? "bg-gradient-to-r from-blue-600 to-slate-700 hover:from-blue-700 hover:to-slate-800 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                    : "bg-gray-600 cursor-not-allowed"
                }
              `}
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Generating Skills...</span>
                </div>
              ) : (
                "🧠 Generate Skills"
              )}
            </button>
          </div>
        ) : (
          /* Results Section */
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-gray-300 mb-6">
                Based on "
                <span className="text-blue-400 font-medium">{careerGoal}</span>
                ", here are some skills to get you started:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {suggestedSkills.map((skill) => (
                <div
                  key={skill.id}
                  onClick={() => handleSkillClick(skill)}
                  className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-4 border border-gray-600 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-gray-500 hover:shadow-blue-500/10"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                  <div className="mt-3 text-blue-400 text-sm font-medium">
                    Click to add →
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setHasGenerated(false)}
                className="flex-1 py-3 px-4 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
              >
                ← Try Different Goal
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 to-slate-700 hover:from-blue-700 hover:to-slate-800 text-white font-medium rounded-lg transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default SkillGeneratorModal;
