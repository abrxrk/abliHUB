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
import LoadingSpinner from "./components/LoadingSpinner";
import RouteTransition from "./components/RouteTransition";

// Component to handle route transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 100); // Reduced transition time

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div
      className={`transition-all duration-200 ease-out min-h-screen ${
        isTransitioning ? "opacity-90" : "opacity-100"
      }`}
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
      </Routes>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Only show loading screen on very first visit
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      // First time visit - show loading screen
      const timer = setTimeout(() => {
        setIsLoading(false);
        setHasLoaded(true);
        sessionStorage.setItem("hasVisited", "true");
      }, 1500); // Reduced to 1.5 seconds

      return () => clearTimeout(timer);
    } else {
      // Subsequent visits - no loading screen
      setIsLoading(false);
      setHasLoaded(true);
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <LoadingSpinner isLoading={isLoading} />

        {!isLoading && (
          <div className={`${hasLoaded ? "animate-fadeInUp" : ""}`}>
            <AnimatedRoutes />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
