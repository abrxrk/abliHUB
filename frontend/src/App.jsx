import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LoadingSpinner from "./components/LoadingSpinner";
import RouteTransition from "./components/RouteTransition";
import ScrollToTop from "./components/ScrollToTop";

// Component to handle route transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top immediately when route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div
      className="min-h-screen overflow-x-hidden w-full"
      style={{ maxWidth: "100vw" }}
    >
      <Routes location={location}>
        <Route
          path="/"
          element={
            <RouteTransition delay={50}>
              <LandingPage />
            </RouteTransition>
          }
        />
        <Route
          path="/login"
          element={
            <RouteTransition delay={50}>
              <Login />
            </RouteTransition>
          }
        />
        <Route
          path="/signup"
          element={
            <RouteTransition delay={50}>
              <Signup />
            </RouteTransition>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RouteTransition delay={50}>
              <Dashboard />
            </RouteTransition>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only show loading screen on very first visit
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      // First time visit - show loading screen
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasVisited", "true");
      }, 1500); // Reduced to 1.5 seconds

      return () => clearTimeout(timer);
    } else {
      // Subsequent visits - no loading screen
      setIsLoading(false);
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div
        className="min-h-screen bg-gray-900 overflow-x-hidden w-full"
        style={{ maxWidth: "100vw" }}
      >
        <LoadingSpinner isLoading={isLoading} />

        {!isLoading && (
          <div
            className="overflow-x-hidden w-full"
            style={{ maxWidth: "100vw" }}
          >
            <AnimatedRoutes />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
