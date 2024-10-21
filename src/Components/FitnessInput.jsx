import React from 'react';

const FitnessInput = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Form submitted!"); // Placeholder action for form submission
    };

    return (
        <div style={styles.body}>
            <div style={styles.container}>
                {/* Logo */}
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmCRfnT-zWwDKGcZ-ZAOwfTnS-PSl4Qhuccw&s" 
                    alt="Fitness Tracker Logo" 
                    style={styles.logo} 
                />
                <h2 style={styles.title}><i><b>Track Your Fitness Journey</b></i></h2>

                <form className="fitness-form" onSubmit={handleSubmit}>
                    {/* Weight Input */}
                    <div style={styles.formGroup}>
                        <label>Weight (kg):</label>
                        <div style={styles.inputContainer}>
                            <img 
                                src="https://img.icons8.com/ios-filled/50/000000/weight.png" 
                                alt="Weight Icon" 
                                style={styles.icon}
                            />
                            <input type="number" placeholder="Enter your weight" required style={styles.input} />
                        </div>
                    </div>

                    {/* Height Input */}
                    <div style={styles.formGroup}>
                        <label>Height (cm):</label>
                        <div style={styles.inputContainer}>
                            <img 
                                src="https://img.icons8.com/ios-filled/50/000000/height.png" 
                                alt="Height Icon" 
                                style={styles.icon}
                            />
                            <input type="number" placeholder="Enter your height" required style={styles.input} />
                        </div>
                    </div>

                    {/* Age Input */}
                    <div style={styles.formGroup}>
                        <label>Age:</label>
                        <div style={styles.inputContainer}>
                            <img 
                                src="https://img.icons8.com/ios-filled/50/000000/calendar.png" 
                                alt="Calendar Icon" 
                                style={styles.icon}
                            />
                            <input type="number" placeholder="Enter your age" required style={styles.input} />
                        </div>
                    </div>

                    {/* Gender Input */}
                    <div style={styles.formGroup}>
                        <label>Gender:</label>
                        <select required style={styles.select}>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* Activity Level Input */}
                    <div style={styles.formGroup}>
                        <label>Activity Level:</label>
                        <select required style={styles.select}>
                            <option value="">Select Activity Level</option>
                            <option value="sedentary">Sedentary</option>
                            <option value="lightly active">Lightly Active</option>
                            <option value="moderately active">Moderately Active</option>
                            <option value="very active">Very Active</option>
                        </select>
                    </div>

                    {/* Fitness Goal Input */}
                    <div style={styles.formGroup}>
                        <label>Fitness Goal:</label>
                        <select required style={styles.select}>
                            <option value="">Select Goal</option>
                            <option value="weight loss">Weight Loss</option>
                            <option value="muscle gain">Muscle Gain</option>
                            <option value="maintain weight">Maintain Weight</option>
                        </select>
                    </div>

                    {/* Date of Birth Input */}
                    <div style={styles.formGroup}>
                        <label>Date of Birth:</label>
                        <div style={styles.inputContainer}>
                            <input type="date" required style={styles.input} />
                        </div>
                    </div>

                    <button type="submit" style={styles.button}>Submit</button>
                </form>
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
        overflow: 'hidden', // Prevents body from scrolling
    },
    container: {
        background: 'white',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        width: '100%',
        height: '80vh', // Set a height for the container
        overflowY: 'scroll', // Enables vertical scrolling
        textAlign: 'center',
        animation: 'fadeIn 1s ease-in-out',
        scrollbarWidth: 'none', // For Firefox
        '-ms-overflow-style': 'none', // For Internet Explorer and Edge
    },
    logo: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '20px',
        animation: 'bounce 1s infinite alternate',
    },
    title: {
        marginBottom: '10px',
        fontSize: '24px',
        color: '#333',
    },
    formGroup: {
        marginBottom: '15px',
        textAlign: 'left',
    },
    inputContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '5px',
    },
    input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        marginLeft: '10px', // Space between icon and input
    },
    select: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        marginTop: '5px',
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
    icon: {
        width: '30px',
        height: '30px',
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

export default FitnessInput;
