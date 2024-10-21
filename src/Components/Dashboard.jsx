import React, { useState } from 'react';

// Sample user data and default values
const userData = {
    weight: "Weight (kg)",
    height: "Height (cm)",
    daysTraining: "Days of Training per Week",
    fitnessGoal: "Fitness Goal",
    timeSpent: "Time Spent (min)",
    caloriesBurned: "Calories Assumed to Burn",
};

const Dashboard = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [daysTraining, setDaysTraining] = useState('');
    const [fitnessGoal, setFitnessGoal] = useState('');
    const [timeSpent, setTimeSpent] = useState('');
    const [caloriesBurned, setCaloriesBurned] = useState('');

    const handleGenerateValues = () => {
        const randomTimeSpent = Math.floor(Math.random() * (180 - 30 + 1)) + 30; // Between 30 and 180 minutes
        const randomCalories = Math.floor(Math.random() * (1500 - 300 + 1)) + 300; // Between 300 and 1500 calories
        setTimeSpent(randomTimeSpent);
        setCaloriesBurned(randomCalories);
    };

    return (
        <div style={styles.body}>
            <div style={styles.container}>
                <h2 style={styles.title}>Dashboard</h2>
                <div style={styles.card}>
                    <h3>User Information</h3>
                    <div style={styles.formGroup}>
                        <label>{userData.weight}:</label>
                        <input
                            type="number"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            placeholder="Enter weight"
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label>{userData.height}:</label>
                        <input
                            type="number"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            placeholder="Enter height"
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label>{userData.daysTraining}:</label>
                        <input
                            type="number"
                            min="0"
                            max="7"
                            value={daysTraining}
                            onChange={(e) => setDaysTraining(e.target.value)}
                            placeholder="Enter number of days"
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label>{userData.fitnessGoal}:</label>
                        <select
                            value={fitnessGoal}
                            onChange={(e) => setFitnessGoal(e.target.value)}
                            style={styles.select}
                        >
                            <option value="">Select a goal</option>
                            <option value="weightloss">Weight Loss</option>
                            <option value="strength">Strength Training</option>
                            <option value="recomposition">Body Recomposition</option>
                        </select>
                    </div>
                    <div style={styles.card}>
                        <p><strong>{userData.timeSpent}:</strong> {timeSpent || 'N/A'}</p>
                        <p><strong>{userData.caloriesBurned}:</strong> {caloriesBurned || 'N/A'}</p>
                    </div>
                </div>
                <button onClick={handleGenerateValues} style={styles.button}>Update Progress</button>
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
        overflow: 'hidden',
    },
    container: {
        background: 'white',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center',
        animation: 'fadeIn 1s ease-in-out',
    },
    title: {
        marginBottom: '20px',
        fontSize: '24px',
        color: '#333',
    },
    card: {
        background: '#f9f9f9',
        borderRadius: '8px',
        padding: '15px',
        margin: '10px 0',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    formGroup: {
        marginBottom: '15px',
        textAlign: 'left',
    },
    input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        marginTop: '5px',
    },
    select: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        marginTop: '5px',
    },
    button: {
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#4CAF50',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer',
        marginTop: '20px',
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

export default Dashboard;
