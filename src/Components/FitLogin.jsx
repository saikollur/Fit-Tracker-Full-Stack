import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FitLogin = () => {
    const navigate = useNavigate();  // useNavigate hook for navigation

    const handleLogin = (event) => {
        event.preventDefault();
        alert("Login button clicked!"); // Placeholder action for login
    };

    const handleSocialLogin = (platform) => {
        alert('${platform} login clicked!'); // Placeholder action for social login
    };

    return (
        <div style={styles.body}>
            <div style={styles.container}>
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmCRfnT-zWwDKGcZ-ZAOwfTnS-PSl4Qhuccw&s" 
                    alt="Fitness Tracker Logo" 
                    style={styles.logo}
                />
                <h2 style={styles.title}><i><b>FitTracker Login</b></i></h2>
                <p style={styles.tagline}>Welcome to Your Fitness Journey!</p>
                
                <form className="login-form" onSubmit={handleLogin}>
                    <div style={styles.inputGroup}>
                        <input type="email" placeholder="Email" required style={styles.input} />
                    </div>
                    <div style={styles.inputGroup}>
                        <input type="password" placeholder="Password" required style={styles.input} />
                    </div>
                    <button type="submit" style={styles.button}>Login</button>
                </form>

                {/* Social Login Section */}
                <div style={styles.socialLogin}>
                    <p style={styles.orText}>OR</p>
                    <div style={styles.socialIcons}>
                        <img 
                            src="https://img.icons8.com/color/48/000000/google-logo.png" 
                            alt="Google Login" 
                            style={styles.socialIcon} 
                            onClick={() => handleSocialLogin('Google')}
                        />
                        <img 
                            src="https://img.icons8.com/ios-filled/50/000000/github.png" 
                            alt="GitHub Login" 
                            style={styles.socialIcon} 
                            onClick={() => handleSocialLogin('GitHub')}
                        />
                        <img 
                            src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" 
                            alt="Facebook Login" 
                            style={styles.socialIcon} 
                            onClick={() => handleSocialLogin('Facebook')}
                        />
                    </div>
                </div>

                {/* Don't have an account? Sign Up Section */}
                <div style={styles.signupContainer}>
                    <p style={styles.signupText}>Don't have an account?</p>
                    <button 
                        style={styles.signupButton} 
                        onClick={() => navigate('/signup')} // Redirect to Signup page
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

// Styles for the components
const styles = {
    body: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f0f0f0',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        background: 'white',
        borderRadius: '10px',
        padding: '30px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center',
        animation: 'fadeIn 1s ease-in-out', // Animation for fade-in effect
    },
    logo: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '20px',
        animation: 'bounce 1s infinite alternate', // Animation for logo bouncing
    },
    title: {
        marginBottom: '10px',
        fontSize: '24px',
        color: '#333',
    },
    tagline: {
        marginBottom: '20px',
        fontSize: '16px',
        color: '#555',
        fontStyle: 'italic',
        animation: 'fadeIn 1s ease-in-out',
    },
    inputGroup: {
        marginBottom: '15px',
    },
    input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    button: {
        width: '100%',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#4CAF50',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer',
        marginTop: '10px',
    },
    orText: {
        marginTop: '20px',
        fontSize: '16px',
        color: '#555',
    },
    socialLogin: {
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    socialIcons: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '200px',
    },
    socialIcon: {
        width: '40px',
        height: 'auto',
        cursor: 'pointer',
        transition: 'transform 0.3s',
    },
    signupContainer: {
        marginTop: '30px',
        textAlign: 'center',
    },
    signupText: {
        fontSize: '14px',
        color: '#555',
    },
    signupButton: {
        backgroundColor: '#007BFF',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
};

// CSS Animations
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`, styleSheet.cssRules.length);
styleSheet.insertRule(`
    @keyframes bounce {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(-10px);
        }
    }
`, styleSheet.cssRules.length);

export default FitLogin;
