import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
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
        <NavLink 
          to="/" 
          style={({ isActive }) => ({ ...styles.link, color: isActive ? '#00ff00' : 'white' })}
        >
          Home
        </NavLink>
        <NavLink 
          to="/login" 
          style={({ isActive }) => ({ ...styles.link, color: isActive ? '#00ff00' : 'white' })}
        >
          FitLogin
        </NavLink>
        <NavLink 
          to="/dashboard" 
          style={({ isActive }) => ({ ...styles.link, color: isActive ? '#00ff00' : 'white' })}
        >
          Dashboard
        </NavLink>
        <NavLink 
          to="/progress" 
          style={({ isActive }) => ({ ...styles.link, color: isActive ? '#00ff00' : 'white' })}
        >
          Progress Tracking
        </NavLink>
        <NavLink 
          to="/nutrition" 
          style={({ isActive }) => ({ ...styles.link, color: isActive ? '#00ff00' : 'white' })}
        >
          Nutrition
        </NavLink>
        <NavLink 
          to="/workout" 
          style={({ isActive }) => ({ ...styles.link, color: isActive ? '#00ff00' : 'white' })}
        >
          Workout Library
        </NavLink>
        <NavLink 
          to="/community" 
          style={({ isActive }) => ({ ...styles.link, color: isActive ? '#00ff00' : 'white' })}
        >
          Community
        </NavLink>
        <NavLink 
          to="/help" 
          style={({ isActive }) => ({ ...styles.link, color: isActive ? '#00ff00' : 'white' })}
        >
          Help/FAQ
        </NavLink>
        <NavLink 
          to="/settings" 
          style={({ isActive }) => ({ ...styles.link, color: isActive ? '#00ff00' : 'white' })}
        >
          Settings
        </NavLink>
        <NavLink 
          to="/logout" 
          style={({ isActive }) => ({ ...styles.link, color: isActive ? '#00ff00' : 'white' })}
        >
          Logout
        </NavLink>
        <NavLink 
          to="/signup" 
          style={({ isActive }) => ({ ...styles.link, color: isActive ? '#00ff00' : 'white' })}
        >
          Sign Up
        </NavLink>
      </nav>

      {/* Define routes for each page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<FitLogin />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/progress" element={<ProgressTrackingPage />} />
        <Route path="/nutrition" element={<NutritionPage />} />
        <Route path="/workout" element={<WorkoutPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/help" element={<HelpFAQPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: '#333',
    padding: '10px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    margin: '5px 10px',
  },
};

export default App;
