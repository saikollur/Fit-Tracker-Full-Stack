import React, { useState } from 'react';

const SignUp = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        mobile: '',
        dob: '',
        gender: '',
        country: '',
        receiveEmails: false,
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSignUp = (event) => {
        event.preventDefault();
        alert("Sign Up button clicked!"); // Placeholder action for sign-up
    };

    const handleSocialLogin = (platform) => {
        alert(`${platform} login clicked!`); // Placeholder action for social login
    };

    return (
        <div style={styles.body}>
            <div style={styles.container}>
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmCRfnT-zWwDKGcZ-ZAOwfTnS-PSl4Qhuccw&s" 
                    alt="Fitness Tracker Logo" 
                    style={styles.logo}
                />
                <h2 style={styles.title}><i><b>FitTracker Sign Up</b></i></h2>
                <p style={styles.tagline}>Join Your Fitness Journey Today!</p>
                <form className="signup-form" onSubmit={handleSignUp}>
                    <div style={styles.inputGroup}>
                        <input 
                            type="text" 
                            name="fullName" 
                            placeholder="Full Name" 
                            value={formData.fullName} 
                            onChange={handleChange} 
                            required 
                            style={styles.input} 
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                            style={styles.input} 
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password" 
                            value={formData.password} 
                            onChange={handleChange} 
                            required 
                            style={styles.input} 
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <input 
                            type="password" 
                            name="confirmPassword" 
                            placeholder="Confirm Password" 
                            value={formData.confirmPassword} 
                            onChange={handleChange} 
                            required 
                            style={styles.input} 
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <input 
                            type="text" 
                            name="mobile" 
                            placeholder="Mobile Number" 
                            value={formData.mobile} 
                            onChange={handleChange} 
                            required 
                            style={styles.input} 
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <input 
                            type="date" 
                            name="dob" 
                            value={formData.dob} 
                            onChange={handleChange} 
                            required 
                            style={styles.input} 
                        />
                    </div>
                    <div style={styles.inputGroup}>
                        <select 
                            name="gender" 
                            value={formData.gender} 
                            onChange={handleChange} 
                            required 
                            style={styles.input} 
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div style={styles.inputGroup}>
                        <input 
                            type="text" 
                            name="country" 
                            placeholder="Country" 
                            value={formData.country} 
                            onChange={handleChange} 
                            required 
                            style={styles.input} 
                        />
                    </div>
                    <div style={styles.checkboxGroup}>
                        <input 
                            type="checkbox" 
                            name="receiveEmails" 
                            checked={formData.receiveEmails} 
                            onChange={handleChange} 
                            style={styles.checkbox} 
                        />
                        <label style={styles.checkboxLabel}>
                            I want to receive promotional emails
                        </label>
                    </div>
                    <button type="submit" style={styles.button}>Sign Up</button>
                </form>

                <div style={styles.socialLogin}>
                    <p style={styles.socialText}>Or Sign Up Using</p>
                    <button style={styles.socialButton} onClick={() => handleSocialLogin('Google')}>Google</button>
                    <button style={styles.socialButton} onClick={() => handleSocialLogin('Facebook')}>Facebook</button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    body: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f4',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        textAlign: 'center',
        maxWidth: '400px',
        width: '100%',
    },
    logo: {
        maxWidth: '80px',
        marginBottom: '20px',
    },
    title: {
        marginBottom: '10px',
        fontSize: '24px',
        color: '#333',
    },
    tagline: {
        color: '#777',
        marginBottom: '20px',
    },
    inputGroup: {
        marginBottom: '15px',
    },
    input: {
        width: '90%',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    checkboxGroup: {
        textAlign: 'left',
        marginBottom: '15px',
    },
    checkbox: {
        marginRight: '10px',
    },
    checkboxLabel: {
        fontSize: '14px',
        color: '#777',
    },
    button: {
        backgroundColor: '#007bff',
        color: 'white',
        padding: '10px',
        width: '100%',
        fontSize: '16px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    socialLogin: {
        marginTop: '20px',
    },
    socialText: {
        marginBottom: '10px',
        color: '#777',
    },
    socialButton: {
        backgroundColor: '#ddd',
        color: '#333',
        padding: '10px',
        marginBottom: '10px',
        width: '100%',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default SignUp;
