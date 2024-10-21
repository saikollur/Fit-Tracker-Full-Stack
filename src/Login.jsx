import React from 'react';
import './App.css'; // Assuming you have a CSS file for styles

const LoginPage = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        // Redirect to the main page
        window.location.href = 'main.html'; // Replace with your actual main page
    };

    const handleSignUp = () => {
        // Redirect to the sign-up page
        window.location.href = 'signup.html'; // Replace with your actual sign-up page
    };

    return (
        <div style={styles.body}>
            <div style={styles.container}>
                <img 
                    src="C:\\Users\\15712\\Downloads\\safesteps.jpg" 
                    alt="Safe Steps Logo" 
                    style={styles.logo}
                />
                <h2 style={styles.title}><i><b>Safe Steps</b></i></h2>
                <p>Your Safety Matters!</p>
                <form className="login-form" onSubmit={handleLogin}>
                    <div style={styles.inputGroup}>
                        <input type="email" placeholder="Email" required style={styles.input} />
                    </div>
                    <div style={styles.inputGroup}>
                        <input type="password" placeholder="Password" required style={styles.input} />
                    </div>
                    <button type="submit" style={styles.button}>Login</button>
                    <p className="signup-link" style={styles.signupLink}>
                        Don't have an account? 
                        <a href="#" onClick={handleSignUp} style={styles.signUpLink}> Sign Up</a>
                    </p>
                </form>
                <div style={styles.socialLogin}>
                    <img 
                        src="https://img.icons8.com/color/48/000000/google-logo.png" 
                        alt="Google Login" 
                        style={styles.socialIcon}
                        onClick={() => alert('Google login clicked!')}
                    />
                    <img 
                        src="https://img.icons8.com/ios-filled/50/000000/github.png" 
                        alt="GitHub Login" 
                        style={styles.socialIcon}
                        onClick={() => alert('GitHub login clicked!')}
                    />
                    <img 
                        src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" 
                        alt="Facebook Login" 
                        style={styles.socialIcon}
                        onClick={() => alert('Facebook login clicked!')}
                    />
                </div>
            </div>
        </div>
    );
};

// Styles for the components
const styles = {
    body: {
        fontFamily: 'Arial, sans-serif',
        backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdVlNKTAPU2FvN8FILQhYUpVRfv_i8Mz0r4Q&s')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        background: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center',
    },
    logo: {
        width: '100px',
        height: '100px',
        marginBottom: '20px',
        borderRadius: '50%',
        objectFit: 'cover',
    },
    title: {
        marginBottom: '10px',
        fontSize: '24px',
        color: '#333',
    },
    inputGroup: {
        marginBottom: '15px',
    },
    input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        transition: 'border-color 0.3s',
    },
    button: {
        width: '100%',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#ff6f61',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    signupLink: {
        textAlign: 'center',
        marginTop: '15px',
    },
    signUpLink: {
        color: '#007bff',
        textDecoration: 'none',
    },
    socialLogin: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '20px',
    },
    socialIcon: {
        width: '30px',
        height: 'auto',
        cursor: 'pointer',
        transition: 'transform 0.3s',
    },
};

export default LoginPage;
