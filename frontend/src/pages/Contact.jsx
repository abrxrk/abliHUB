import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Navbar from "../components/Navbar";

const Contact = () => {
  const { isSignedIn, isLoaded } = useUser();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Contact{" "}
              <span className="bg-gradient-to-r from-blue-400 to-slate-400 bg-clip-text text-transparent">
                Us
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get in touch with the AbliHUB team. We'd love to hear from you!
            </p>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Email Contact */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-slate-700 text-white mr-4">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Email</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Have questions, feedback, or suggestions? Drop us a line and
                we'll get back to you as soon as possible.
              </p>
              <a
                href="mailto:abrarkhawarwork@gmail.com"
                className="text-blue-400 hover:text-blue-300 text-lg font-medium transition-colors duration-200 break-all"
              >
                abrarkhawarwork@gmail.com
              </a>
            </div>

            {/* GitHub */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-slate-700 text-white mr-4">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">GitHub</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Check out the source code, contribute to the project, or follow
                our development progress on GitHub.
              </p>
              <a
                href="https://github.com/abrxrk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-lg font-medium transition-colors duration-200"
              >
                @abrxrk
              </a>
            </div>
          </div>

          {/* Additional Contact Info */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">
              Let's Build Something Amazing Together
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">
                  For General Inquiries
                </h4>
                <p className="text-gray-300">
                  Questions about AbliHUB, feature requests, or general feedback
                  about the platform.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">
                  For Collaboration
                </h4>
                <p className="text-gray-300">
                  Interested in contributing to the project or exploring
                  partnership opportunities.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">
                  Technical Support
                </h4>
                <p className="text-gray-300">
                  Having trouble with the platform or need help with your
                  learning journey.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">
                  Bug Reports
                </h4>
                <p className="text-gray-300">
                  Found a bug or issue? Let us know so we can fix it and improve
                  the experience.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-900/20 to-slate-800/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Start Your Learning Journey?
              </h3>
              <p className="text-gray-300 mb-6">
                Don't wait - begin building real projects today and transform
                your coding skills.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                {isLoaded && isSignedIn ? (
                  // Show Dashboard button for authenticated users
                  <Link
                    to="/dashboard"
                    className="bg-gradient-to-r from-blue-600 to-slate-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-slate-800 transition-all transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
                  >
                    Go to Dashboard 🚀
                  </Link>
                ) : (
                  // Show Sign Up button for unauthenticated users
                  <Link
                    to="/signup"
                    className="bg-gradient-to-r from-blue-600 to-slate-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-slate-800 transition-all transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
                  >
                    Get Started Free 🚀
                  </Link>
                )}
                <Link
                  to="/"
                  className="border-2 border-gray-600 text-white font-semibold py-4 px-8 rounded-lg hover:border-gray-500 hover:bg-gray-800 transition-all duration-300"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
