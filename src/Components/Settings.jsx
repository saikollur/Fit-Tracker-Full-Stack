import React, { useState } from 'react';

const Settings = () => {
    const [username, setUsername] = useState('JohnDoe');
    const [email, setEmail] = useState('johndoe@example.com');
    const [password, setPassword] = useState('');
    const [notifications, setNotifications] = useState(true);
    const [theme, setTheme] = useState('light');

    const handleSave = (event) => {
        event.preventDefault();
        alert("Settings saved!");
    };

    return (
        <div style={styles.body}>
            <h2 style={styles.title}>Settings</h2>
            <form onSubmit={handleSave} style={styles.form}>
                {/* Username Input */}
                <div style={styles.formGroup}>
                    <label style={styles.label}>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>

                {/* Email Input */}
                <div style={styles.formGroup}>
                    <label style={styles.label}>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>

                {/* Password Input */}
                <div style={styles.formGroup}>
                    <label style={styles.label}>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>

                {/* Notifications Toggle */}
                <div style={styles.formGroup}>
                    <label style={styles.label}>Notifications:</label>
                    <input
                        type="checkbox"
                        checked={notifications}
                        onChange={(e) => setNotifications(e.target.checked)}
                        style={styles.checkbox}
                    />
                </div>

                {/* Theme Selection */}
                <div style={styles.formGroup}>
                    <label style={styles.label}>Theme:</label>
                    <select
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                        style={styles.select}
                    >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </div>

                <button type="submit" style={styles.button}>Save Settings</button>
            </form>
        </div>
    );
};

// Styles for the components
const styles = {
    body: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f0f0f0',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
    },
    title: {
        marginBottom: '20px',
        fontSize: '28px',
        color: '#333',
        animation: 'fadeIn 1s ease-in-out',
        textAlign: 'center',
    },
    form: {
        width: '100%',
        maxWidth: '400px',
        background: 'white',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        animation: 'slideIn 1s ease-in-out',
    },
    formGroup: {
        marginBottom: '20px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontSize: '14px',
        color: '#555',
    },
    input: {
        width: '90%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '14px',
    },
    checkbox: {
        marginLeft: '10px',
        transform: 'scale(1.2)',
    },
    select: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '14px',
    },
    button: {
        width: '100%',
        padding: '12px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#4CAF50',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer',
        marginTop: '10px',
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

export default Settings;
