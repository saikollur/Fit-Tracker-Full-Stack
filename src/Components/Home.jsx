import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-content">
          <h1>Welcome to FitTrack!</h1>
          <p>Your personal fitness journey starts here. Transform your life with our comprehensive tracking tools.</p>
        </div>
      </header>

      <section className="features-section">
        <h2 className="section-title">Achieve Your Fitness Goals</h2>
        <p className="section-subtitle">
          Our comprehensive suite of tools helps you track, analyze, and improve every aspect of your fitness journey
        </p>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Track Workouts</h3>
            <p>Log your exercises and see progress over time. Track running, cycling, lifting, and more with our intuitive interface!</p>
            <Link to="/workout" className="btn btn-primary">Start Workout</Link>
          </div>

          <div className="feature-item">
            <h3>Nutrition Plans</h3>
            <p>Keep track of your daily calorie intake and follow personalized meal plans designed specifically for your goals.</p>
            <Link to="/nutrition" className="btn btn-primary">View Nutrition</Link>
          </div>

          <div className="feature-item">
            <h3>Progress Reports</h3>
            <p>Visualize your journey with detailed progress reports. Stay motivated by seeing your improvements week after week.</p>
            <Link to="/progress" className="btn btn-primary">View Progress</Link>
          </div>
        </div>
      </section>

      <section className="join-section">
        <h2>Ready to Transform Your Fitness Journey?</h2>
        <p>Join thousands of others who have already taken the first step towards their fitness goals. Get personalized tracking, expert guidance, and connect with a community of fitness enthusiasts.</p>
        <div className="auth-buttons">
          <Link to="/login" className="btn btn-primary">Get Started Now</Link>
          <Link to="/signup" className="btn btn-secondary">Learn More</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
