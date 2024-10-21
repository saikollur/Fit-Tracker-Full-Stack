import React from 'react';
import { Link } from 'react-router-dom';

// Array of menu items
const menuItems = [
    { name: "Dashboard", icon: "https://img.icons8.com/ios-filled/50/000000/dashboard.png", path: "/dashboard" },
    { name: "Progress Tracking", icon: "https://img.icons8.com/ios-filled/50/000000/track-changes.png", path: "/progress" },
    { name: "Nutrition", icon: "https://img.icons8.com/ios-filled/50/000000/food.png", path: "/nutrition" },
    { name: "Workout Library", icon: "https://img.icons8.com/ios-filled/50/000000/barbell.png", path: "/workouts" },
    { name: "Settings", icon: "https://img.icons8.com/ios-filled/50/000000/settings.png", path: "/settings" },
    { name: "Help/FAQ", icon: "https://img.icons8.com/ios-filled/50/000000/question-mark.png", path: "/help" },
    { name: "Logout", icon: "https://img.icons8.com/ios-filled/50/000000/logout-rounded-left.png", path: "/logout" },
    { name: "Community", icon: "https://img.icons8.com/ios-filled/50/000000/group.png", path: "/community" },
];

const MainMenu = () => {
    return (
        <div style={styles.body}>
            <h1 style={styles.title}>Welcome to FitTracker!</h1>
            <p style={styles.tagline}>Your journey to fitness starts here!</p>
            <div style={styles.menuContainer}>
                {menuItems.map((item, index) => (
                    <Link to={item.path} key={index} style={styles.menuItem}>
                        <img src={item.icon} alt={item.name} style={styles.icon} />
                        <span style={styles.menuText}>{item.name}</span>
                    </Link>
                ))}
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
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden',
    },
    title: {
        marginBottom: '10px',
        fontSize: '32px',
        color: '#333',
        animation: 'fadeIn 1s ease-in-out',
    },
    tagline: {
        marginBottom: '30px',
        fontSize: '18px',
        color: '#555',
        animation: 'fadeIn 1.5s ease-in-out',
    },
    menuContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
        gap: '20px',
        width: '80%',
        animation: 'fadeIn 2s ease-in-out',
    },
    menuItem: {
        background: 'white',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        textDecoration: 'none',
        color: '#333',
        textAlign: 'center',
        transition: 'transform 0.3s, box-shadow 0.3s',
        border: '2px solid transparent', // for border animation
    },
    menuItemHover: {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
        border: '2px solid #4CAF50', // Green border on hover
    },
    icon: {
        width: '60px',
        height: '60px',
        marginBottom: '10px',
    },
    menuText: {
        fontSize: '16px',
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

export default MainMenu;
