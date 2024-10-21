import React from 'react';

const Community = () => {
    return (
        <div style={styles.body}>
            <h2 style={styles.title}>Community</h2>
            <p style={styles.description}>Join the conversation and share your fitness journey!</p>
            
            <div style={styles.container}>
                {/* Discussion Section */}
                <div style={styles.card}>
                    <img 
                        src="https://img.icons8.com/?size=100&id=yhNHlC1hjMip&format=png&color=1A1A1A" 
                        alt="Discussion Icon" 
                        style={styles.icon}
                    />
                    <h3 style={styles.cardTitle}>Discussions</h3>
                    <p style={styles.cardContent}>Participate in discussions with fellow fitness enthusiasts.</p>
                    <button style={styles.cardButton}>Join Now</button>
                </div>

                {/* Tips Section */}
                <div style={styles.card}>
                    <img 
                        src="https://img.icons8.com/ios-filled/50/000000/tips.png" 
                        alt="Tips Icon" 
                        style={styles.icon}
                    />
                    <h3 style={styles.cardTitle}>Fitness Tips</h3>
                    <p style={styles.cardContent}>Share and learn valuable fitness tips from the community.</p>
                    <button style={styles.cardButton}>Explore Tips</button>
                </div>

                {/* User Stories Section */}
                <div style={styles.card}>
                    <img 
                        src="https://img.icons8.com/ios-filled/50/000000/user.png" 
                        alt="User Stories Icon" 
                        style={styles.icon}
                    />
                    <h3 style={styles.cardTitle}>User Stories</h3>
                    <p style={styles.cardContent}>Read inspiring fitness journeys shared by other users.</p>
                    <button style={styles.cardButton}>Read Stories</button>
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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflowY: 'hidden',
    },
    title: {
        fontSize: '28px',
        color: '#333',
        marginBottom: '10px',
    },
    description: {
        fontSize: '18px',
        color: '#666',
        marginBottom: '20px',
        textAlign: 'center',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        maxWidth: '900px',
        width: '100%',
        animation: 'fadeIn 1s ease-in-out',
    },
    card: {
        background: 'white',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        margin: '10px',
        width: '280px',
        textAlign: 'center',
        animation: 'slideIn 0.5s ease-in-out',
    },
    cardTitle: {
        fontSize: '22px',
        color: '#333',
    },
    cardContent: {
        fontSize: '16px',
        color: '#666',
        margin: '10px 0',
    },
    cardButton: {
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#4CAF50',
        color: 'white',
        cursor: 'pointer',
        fontSize: '16px',
    },
    icon: {
        width: '40px',
        height: '40px',
        marginBottom: '10px',
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
    @keyframes slideIn {
        from {
            transform: translateY(20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
`, styleSheet.cssRules.length);

export default Community;
