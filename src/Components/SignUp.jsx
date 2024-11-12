import React, { useState } from "react";
import styles from "./styles";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    receiveEmails: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to register.");
      }

      const data = await response.json();

      if (data.success) {
        alert("Signup successful!");
        window.location.href = "/dashboard";
      } else {
        alert(data.message || "An error occurred during signup.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const handleSocialLogin = (platform) => {
    if (platform === "google") {
      window.location.href = "https://accounts.google.com/signin";
    } else if (platform === "facebook") {
      window.location.href = "https://www.facebook.com/login";
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmCRfnT-zWwDKGcZ-ZAOwfTnS-PSl4Qhuccw&s" 
          alt="Fitness Tracker Logo" 
          style={styles.logo}
        />
        <h2 style={styles.title}>Sign Up</h2>
        <p style={styles.tagline}>Create your account to get started</p>
        <form onSubmit={handleSignUp}>
          <div style={styles.inputGroup}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.checkboxGroup}>
            <label style={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="receiveEmails"
                checked={formData.receiveEmails}
                onChange={handleChange}
                style={styles.checkbox}
              />
              I want to receive emails about updates and offers.
            </label>
          </div>
          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </form>
        <div style={styles.socialLogin}>
          <p style={styles.socialText}>Or sign up with:</p>
          <button
            style={styles.socialButton}
            onClick={() => handleSocialLogin("google")}
          >
            Google
          </button>
          <button
            style={styles.socialButton}
            onClick={() => handleSocialLogin("facebook")}
          >
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
