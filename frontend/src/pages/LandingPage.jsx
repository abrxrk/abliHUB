import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Navbar from "../components/Navbar";
import BlurFade from "../components/blur-fade";
import BlurFadeText from "../components/blur-fade-text";

// --- ICONS (using inline SVGs for simplicity) ---
const BrainCircuit = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 5a3 3 0 1 0-5.993.142" />
    <path d="M18 5a3 3 0 1 0-5.993.142" />
    <path d="M12 12a3 3 0 1 0-5.993.142" />
    <path d="M18 12a3 3 0 1 0-5.993.142" />
    <path d="M12 19a3 3 0 1 0-5.993.142" />
    <path d="M18 19a3 3 0 1 0-5.993.142" />
    <path d="M12 5v7" />
    <path d="M12 12v7" />
    <path d="M6.007 5.142A3 3 0 0 0 6 5a3 3 0 0 0 0 6a3 3 0 0 0 0 6" />
    <path d="M18.007 5.142A3 3 0 0 0 18 5a3 3 0 0 0 0 6a3 3 0 0 0 0 6" />
  </svg>
);

const Zap = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const Target = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const LandingPage = () => {
  const { isSignedIn } = useUser();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <div className="pt-16">
        {" "}
        {/* Padding top to avoid content being hidden by fixed navbar */}
        {/* Hero Section */}
        <header className="text-center py-20 sm:py-32 px-4">
          <BlurFadeText
            text="Learn Software Development,"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-2"
            delay={0.1}
            duration={0.6}
          />
          <BlurFadeText
            text="by Doing, Not Watching."
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-400 tracking-tight mb-6"
            delay={0.3}
            duration={0.6}
          />
          <BlurFade delay={0.5} duration={0.6}>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
              AbliHUB is your AI-powered mentor, generating personalized,
              project-based roadmaps to take you from beginner to pro. Stop
              tutorial-hopping, start building.
            </p>
          </BlurFade>
          <BlurFade delay={0.7} duration={0.6}>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to={isSignedIn ? "/dashboard" : "/signup"}
                className="bg-gradient-to-r from-blue-600 to-slate-700 text-white font-semibold py-4 px-8 rounded-lg shadow-2xl hover:from-blue-700 hover:to-slate-800 transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/25"
              >
                {isSignedIn ? "Go to Dashboard" : "Start Your Journey"} 🚀
              </Link>
              {/* Only show "See Dashboard Demo" for non-authenticated users */}
              {!isSignedIn && (
                <Link
                  to="/dashboard"
                  className="border-2 border-gray-600 text-white font-semibold py-4 px-8 rounded-lg hover:border-gray-500 hover:bg-gray-800 transition-all duration-300"
                >
                  See Dashboard Demo
                </Link>
              )}
            </div>
          </BlurFade>
        </header>
        {/* Features Section */}
        <section className="py-20 bg-gray-800/50 px-4">
          <div className="max-w-7xl mx-auto">
            <BlurFade delay={0.1} duration={0.6}>
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
                Why <span className="text-blue-400">AbliHUB</span> Works
              </h2>
            </BlurFade>
            <BlurFade delay={0.2} duration={0.6}>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto text-center mb-12">
                Stop watching endless tutorials. Start building real projects
                that actually matter for your career.
              </p>
            </BlurFade>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <BlurFade delay={0.3} duration={0.6}>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 transform hover:-translate-y-2 hover:border-gray-600 transition-all duration-300 shadow-2xl hover:shadow-3xl">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-blue-600 to-slate-700 text-white mb-4">
                    <BrainCircuit className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    AI-Powered Roadmaps
                  </h3>
                  <p className="text-gray-400">
                    Get a personalized 3-level learning path (Beginner →
                    Advanced) generated by AI for any skill you want to master.
                  </p>
                </div>
              </BlurFade>
              {/* Feature Card 2 */}
              <BlurFade delay={0.5} duration={0.6}>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 transform hover:-translate-y-2 hover:border-gray-600 transition-all duration-300 shadow-2xl hover:shadow-3xl">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-blue-600 to-slate-700 text-white mb-4">
                    <Zap className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Project-Based Learning
                  </h3>
                  <p className="text-gray-400">
                    Master skills through real mini-projects, not passive video
                    watching. Build your portfolio while you learn.
                  </p>
                </div>
              </BlurFade>
              {/* Feature Card 3 */}
              <BlurFade delay={0.7} duration={0.6}>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 transform hover:-translate-y-2 hover:border-gray-600 transition-all duration-300 shadow-2xl hover:shadow-3xl">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-blue-600 to-slate-700 text-white mb-4">
                    <Target className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Visual Progress Tracking
                  </h3>
                  <p className="text-gray-400">
                    Track your journey with interactive skill cards and progress
                    rings. See exactly how far you've come.
                  </p>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-900/20 to-slate-800/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0.1} duration={0.6}>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Ready to Stop Watching and Start Building?
              </h2>
            </BlurFade>
            <BlurFade delay={0.3} duration={0.6}>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of developers who chose to learn by doing real
                projects.
              </p>
            </BlurFade>
            <BlurFade delay={0.5} duration={0.6}>
              <Link
                to={isSignedIn ? "/dashboard" : "/signup"}
                className="bg-gradient-to-r from-blue-600 to-slate-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-slate-800 transition-all transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 inline-block"
              >
                {isSignedIn
                  ? "Go to Dashboard"
                  : "Start Your Journey — It's Free"}{" "}
                🚀
              </Link>
            </BlurFade>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-gray-900 border-t border-gray-800 py-12">
          <BlurFade delay={0.1} duration={0.6}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                  <img src="/logo.png" alt="AbliHUB Logo" className="w-8 h-8" />
                  <span className="text-white text-xl font-bold">AbliHUB</span>
                </div>

                {/* Footer Navigation */}
                <div className="flex space-x-6 mb-4 md:mb-0">
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    About
                  </Link>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Contact Us
                  </Link>
                </div>

                <div className="text-gray-400 text-sm text-center md:text-right">
                  © {new Date().getFullYear()} AbliHUB. Learn by doing, not
                  watching.
                </div>
              </div>
            </div>
          </BlurFade>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
