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
    }, 150);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div
      className={`transition-opacity duration-300 ${
        isTransitioning ? "opacity-0" : "opacity-100"
      }`}
    >
      <Routes location={location}>
        <Route
          path="/"
          element={
            <RouteTransition>
              <LandingPage />
            </RouteTransition>
          }
        />
        <Route
          path="/login"
          element={
            <RouteTransition delay={150}>
              <Login />
            </RouteTransition>
          }
        />
        <Route
          path="/signup"
          element={
            <RouteTransition delay={150}>
              <Signup />
            </RouteTransition>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RouteTransition delay={200}>
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

  useEffect(() => {
    // Simulate initial app loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loading for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div>
        <LoadingSpinner isLoading={isLoading} />

        {!isLoading && (
          <div className="animate-fadeInUp">
            <AnimatedRoutes />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
