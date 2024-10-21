import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Import all your individual pages
import Home from './Components/Home';
import FitLogin from './Components/FitLogin';
import DashboardPage from './Components/Dashboard';
import ProgressTrackingPage from './Components/ProgressTracking';
import NutritionPage from './Components/NutritionPage';
import WorkoutPage from './Components/WorkoutPage';
import CommunityPage from './Components/Community';
import HelpFAQPage from './Components/HelpFAQ';
import SettingsPage from './Components/Settings';
import LogoutPage from './Components/Logout';
import SignUp from './Components/SignUp';

function App() {
  return (
    <>
      {/* Navigation Menu */}
      <nav style={styles.navbar}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/login" style={styles.link}>FitLogin</Link>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        <Link to="/progress" style={styles.link}>Progress Tracking</Link>
        <Link to="/nutrition" style={styles.link}>Nutrition</Link>
        <Link to="/workout" style={styles.link}>Workout Library</Link>
        <Link to="/community" style={styles.link}>Community</Link>
        <Link to="/help" style={styles.link}>Help/FAQ</Link>
        <Link to="/settings" style={styles.link}>Settings</Link>
        <Link to="/logout" style={styles.link}>Logout</Link>
        <Link to="/signup" style={styles.link}>Sign Up</Link>
      </nav>

      {/* Define routes for each page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login"element={<FitLogin/>}/>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/progress" element={<ProgressTrackingPage />} />
        <Route path="/nutrition" element={<NutritionPage />} />
        <Route path="/workout" element={<WorkoutPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/help" element={<HelpFAQPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#333',
    padding: '10px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default App;
