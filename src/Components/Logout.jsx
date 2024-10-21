import React from 'react';

const Logout = () => {
    const handleLogout = () => {
        // Placeholder action for logging out
        alert("You have successfully logged out!");
        // Redirect or perform other logout actions here
    };

    const handleCancel = () => {
        // Placeholder action for cancelling logout
        alert("Logout cancelled!");
    };

    return (
        <div style={styles.body}>
            <div style={styles.container}>
                <h2 style={styles.title}>Logout</h2>
                <p style={styles.message}>Are you sure you want to log out?</p>
                <div style={styles.buttonContainer}>
                    <button onClick={handleLogout} style={styles.button}>Yes, Log Out</button>
                    <button onClick={handleCancel} style={styles.cancelButton}>Cancel</button>
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
        overflowY: 'hidden',
    },
    container: {
        background: 'white',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        animation: 'fadeIn 1s ease-in-out',
    },
    title: {
        marginBottom: '10px',
        fontSize: '28px',
        color: '#333',
    },
    message: {
        marginBottom: '20px',
        fontSize: '18px',
        color: '#666',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    button: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#4CAF50',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer',
        marginRight: '10px',
    },
    cancelButton: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#f44336',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer',
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

export default Logout;
