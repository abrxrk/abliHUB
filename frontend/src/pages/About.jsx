import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-slate-400 bg-clip-text text-transparent">
                AbliHUB
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Revolutionizing how developers learn through project-based,
              AI-powered education
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* The Problem */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">
                The Problem We're Solving
              </h2>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Traditional programming education is broken. Developers spend
                  months watching endless tutorials, reading documentation, and
                  following along with outdated examples, only to find
                  themselves unprepared for real-world development challenges.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  The tutorial hell is real - learners get stuck in a cycle of
                  consuming content without actually building anything
                  meaningful. This passive learning approach fails to develop
                  the problem-solving skills and practical experience that
                  employers value.
                </p>
              </div>
            </section>

            {/* The Solution */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Solution: Learn by Building
              </h2>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  AbliHUB transforms learning through{" "}
                  <strong className="text-blue-400">
                    AI-powered, project-based education
                  </strong>
                  . Instead of passive video consumption, learners immediately
                  start building real projects that matter for their portfolio
                  and career growth.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Our AI mentor generates personalized learning roadmaps with
                  hands-on mini-projects, ensuring every learner gets a
                  customized path from beginner to professional developer. Each
                  step builds upon the previous one, creating a comprehensive
                  skill development journey.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  By focusing on{" "}
                  <strong className="text-blue-400">
                    doing rather than watching
                  </strong>
                  , learners develop confidence, build impressive portfolios,
                  and gain the practical experience that leads to successful
                  careers in software development.
                </p>
              </div>
            </section>

            {/* Vision */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  We envision a world where anyone can become a skilled
                  developer through practical, project-driven learning. AbliHUB
                  aims to democratize programming education by making it
                  accessible, engaging, and directly applicable to real-world
                  development.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Our mission is to bridge the gap between theoretical knowledge
                  and practical skills, empowering the next generation of
                  developers to build amazing things from day one.
                </p>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-blue-900/20 to-slate-800/20 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Start Building?
                </h3>
                <p className="text-gray-300 mb-6">
                  Join thousands of developers who chose to learn by doing real
                  projects.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    to="/signup"
                    className="bg-gradient-to-r from-blue-600 to-slate-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-slate-800 transition-all transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25"
                  >
                    Start Your Journey 🚀
                  </Link>
                  <Link
                    to="/"
                    className="border-2 border-gray-600 text-white font-semibold py-4 px-8 rounded-lg hover:border-gray-500 hover:bg-gray-800 transition-all duration-300"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
