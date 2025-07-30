import React, { useState, useEffect } from "react";
import roadmaps from "../data/dummyRoadmaps";

const RoadmapModal = ({ isOpen, onClose, skillName }) => {
  const [expandedLevel, setExpandedLevel] = useState(null);
  const [roadmapData, setRoadmapData] = useState(null);

  useEffect(() => {
    if (skillName && roadmaps[skillName]) {
      setRoadmapData(roadmaps[skillName]);
      // Auto-expand the first incomplete level
      const firstIncompleteLevel = roadmaps[skillName].levels.find((level) =>
        level.steps.some((step) => !step.completed)
      );
      if (firstIncompleteLevel) {
        setExpandedLevel(firstIncompleteLevel.id);
      }
    } else if (skillName) {
      // Set placeholder data for skills that don't have roadmaps yet
      setRoadmapData(null);
    }
  }, [skillName]);

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

  const toggleLevel = (levelId) => {
    setExpandedLevel(expandedLevel === levelId ? null : levelId);
  };

  const toggleStepCompletion = (levelIndex, stepIndex) => {
    setRoadmapData((prevData) => {
      const newData = { ...prevData };
      newData.levels = [...prevData.levels];
      newData.levels[levelIndex] = { ...prevData.levels[levelIndex] };
      newData.levels[levelIndex].steps = [...prevData.levels[levelIndex].steps];
      newData.levels[levelIndex].steps[stepIndex] = {
        ...prevData.levels[levelIndex].steps[stepIndex],
        completed: !prevData.levels[levelIndex].steps[stepIndex].completed,
      };
      return newData;
    });
  };

  const calculateLevelProgress = (steps) => {
    const completedSteps = steps.filter((step) => step.completed).length;
    return Math.round((completedSteps / steps.length) * 100);
  };

  const getOverallProgress = () => {
    if (!roadmapData) return 0;

    let totalSteps = 0;
    let completedSteps = 0;

    roadmapData.levels.forEach((level) => {
      totalSteps += level.steps.length;
      completedSteps += level.steps.filter((step) => step.completed).length;
    });

    return totalSteps > 0 ? Math.round((completedSteps / totalSteps) * 100) : 0;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] border border-slate-800 w-full max-w-4xl max-h-[90vh] overflow-hidden transform transition-all duration-300 scale-100">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-slate-900 to-slate-950 border-b border-slate-800 p-6 z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                {roadmapData
                  ? `${roadmapData.title} Roadmap`
                  : `${skillName} Roadmap`}
              </h2>
              <p className="text-slate-400">
                {roadmapData ? roadmapData.description : "Coming soon..."}
              </p>
              {roadmapData && (
                <div className="mt-3">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                      <span className="text-sm text-slate-300">
                        Overall Progress: {getOverallProgress()}%
                      </span>
                    </div>
                    <div className="w-32 bg-slate-800 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${getOverallProgress()}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg"
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
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-200px)] p-6">
          {roadmapData ? (
            <div className="space-y-6">
              {roadmapData.levels.map((level, levelIndex) => {
                const levelProgress = calculateLevelProgress(level.steps);
                const isExpanded = expandedLevel === level.id;

                return (
                  <div
                    key={level.id}
                    className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 overflow-hidden transition-all duration-300 hover:border-slate-600"
                  >
                    {/* Level Header */}
                    <button
                      onClick={() => toggleLevel(level.id)}
                      className="w-full p-6 text-left hover:bg-slate-800 transition-colors duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full text-white font-bold">
                            {levelIndex + 1}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white">
                              {level.title}
                            </h3>
                            <p className="text-sm text-slate-400 mt-1">
                              {
                                level.steps.filter((step) => step.completed)
                                  .length
                              }{" "}
                              of {level.steps.length} completed
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          {/* Progress Circle */}
                          <div className="relative w-12 h-12">
                            <svg
                              className="w-12 h-12 transform -rotate-90"
                              viewBox="0 0 36 36"
                            >
                              <path
                                d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                                fill="none"
                                stroke="#475569"
                                strokeWidth="3"
                              />
                              <path
                                d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                                fill="none"
                                stroke="#10B981"
                                strokeWidth="3"
                                strokeDasharray={`${levelProgress}, 100`}
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-xs font-bold text-emerald-400">
                                {levelProgress}%
                              </span>
                            </div>
                          </div>

                          {/* Expand Icon */}
                          <svg
                            className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </button>

                    {/* Level Content */}
                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        isExpanded
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      } overflow-hidden`}
                    >
                      <div className="px-6 pb-6">
                        <div className="space-y-3">
                          {level.steps.map((step, stepIndex) => (
                            <div
                              key={stepIndex}
                              onClick={() =>
                                toggleStepCompletion(levelIndex, stepIndex)
                              }
                              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 cursor-pointer ${
                                step.completed
                                  ? "bg-emerald-900 bg-opacity-20 border border-emerald-700 hover:bg-emerald-900 hover:bg-opacity-30"
                                  : "bg-slate-800 border border-slate-700 hover:border-slate-600 hover:bg-slate-700"
                              }`}
                            >
                              {/* Checkbox */}
                              <div
                                className={`flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                                  step.completed
                                    ? "bg-emerald-500 border-emerald-500 scale-110"
                                    : "border-slate-500 hover:border-slate-400 hover:scale-105"
                                }`}
                              >
                                {step.completed && (
                                  <svg
                                    className="w-3 h-3 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                )}
                              </div>

                              {/* Step Content */}
                              <div className="flex-1">
                                <p
                                  className={`font-medium transition-colors ${
                                    step.completed
                                      ? "text-emerald-300"
                                      : "text-white"
                                  }`}
                                >
                                  {step.title}
                                </p>
                                {step.title.includes("Mini-Project") && (
                                  <span className="inline-block mt-1 px-2 py-1 text-xs bg-slate-600 text-slate-100 rounded-full">
                                    Project
                                  </span>
                                )}
                              </div>

                              {/* Status Icon */}
                              {step.completed && (
                                <div className="flex-shrink-0">
                                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            // Coming Soon Content
            <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {skillName} Roadmap Coming Soon! 🚀
              </h3>

              <p className="text-slate-400 text-lg mb-6 max-w-md">
                We're currently working on creating an amazing learning path for{" "}
                {skillName}. This roadmap is in progress and will be available
                soon.
              </p>

              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 max-w-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-slate-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-slate-300">In Development</span>
                </div>

                <p className="text-sm text-slate-400 mb-4">
                  Our AI-powered system is generating personalized learning
                  steps, mini-projects, and skill assessments for this course.
                </p>

                <div className="text-xs text-slate-500">
                  Expected: Coming Soon ⏰
                </div>
              </div>

              <p className="text-sm text-slate-500 mt-8">
                Meanwhile, check out our React.js roadmap to see what's coming
                for {skillName}!
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gradient-to-r from-slate-900 to-slate-950 border-t border-slate-800 p-6">
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-400">
              {roadmapData
                ? "Keep going! You're making great progress 🚀"
                : `${skillName} roadmap will be available soon!`}
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gradient-to-r from-slate-700 to-slate-800 text-white font-semibold rounded-lg hover:from-slate-600 hover:to-slate-700 transition-all duration-200 transform hover:scale-105 border border-slate-600"
            >
              {roadmapData ? "Continue Learning" : "Got It"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapModal;
