import React, { useState } from 'react';

const workouts = [
    { 
        id: 1, 
        title: "Full Body Workout", 
        description: "A complete workout for all major muscle groups.", 
        image: "https://img.icons8.com/?size=100&id=9848&format=png&color=000000",
        exercises: [
            "Squats: 3 sets of 12 reps",
            "Push-ups: 3 sets of 10 reps",
            "Lunges: 3 sets of 10 reps per leg",
            "Plank: 3 sets of 30 seconds",
            "Dumbbell rows: 3 sets of 12 reps"
        ]
    },
    { 
        id: 2, 
        title: "Cardio Workout", 
        description: "Get your heart pumping with these high-energy exercises.", 
        image: "https://img.icons8.com/ios-filled/100/000000/running.png",
        exercises: [
            "Jumping jacks: 3 sets of 30 seconds",
            "High knees: 3 sets of 30 seconds",
            "Burpees: 3 sets of 10 reps",
            "Mountain climbers: 3 sets of 30 seconds",
            "Jump rope: 3 sets of 1 minute"
        ]
    },
    { 
        id: 3, 
        title: "Strength Training", 
        description: "Build muscle and strength with these weightlifting routines.", 
        image: "https://img.icons8.com/ios-filled/100/000000/dumbbell.png",
        exercises: [
            "Deadlifts: 3 sets of 8 reps",
            "Bench press: 3 sets of 8 reps",
            "Shoulder press: 3 sets of 10 reps",
            "Bicep curls: 3 sets of 12 reps",
            "Tricep dips: 3 sets of 12 reps"
        ]
    },
    { 
        id: 4, 
        title: "Yoga and Flexibility", 
        description: "Improve your flexibility and balance with yoga poses.", 
        image: "https://img.icons8.com/ios-filled/100/000000/yoga.png",
        exercises: [
            "Downward facing dog: Hold for 1 minute",
            "Warrior pose: Hold for 30 seconds each side",
            "Tree pose: Hold for 30 seconds each side",
            "Child's pose: Hold for 1 minute",
            "Cobra pose: Hold for 30 seconds"
        ]
    },
    { 
        id: 5, 
        title: "HIIT Workouts", 
        description: "High-Intensity Interval Training for maximum results.", 
        image: "https://img.icons8.com/?size=100&id=9769&format=png&color=000000",
        exercises: [
            "Sprints: 30 seconds sprint, 30 seconds rest (5 rounds)",
            "Squat jumps: 45 seconds work, 15 seconds rest (4 rounds)",
            "Push-up to plank jack: 45 seconds work, 15 seconds rest (4 rounds)",
            "Mountain climbers: 45 seconds work, 15 seconds rest (4 rounds)",
            "Burpees: 30 seconds work, 30 seconds rest (5 rounds)"
        ]
    },
];

const Modal = ({ workout, onClose }) => {
    if (!workout) return null;

    return (
        <div style={styles.modalOverlay}>
            <div style={styles.modalContent}>
                <h2>{workout.title}</h2>
                <p>{workout.description}</p>
                <h3>Exercises:</h3>
                <ul>
                    {workout.exercises.map((exercise, index) => (
                        <li key={index}>{exercise}</li>
                    ))}
                </ul>
                <button style={styles.closeButton} onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

const WorkoutPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedWorkout, setSelectedWorkout] = useState(null);

    const filteredWorkouts = workouts.filter(workout =>
        workout.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={styles.body}>
            <h2 style={styles.title}>Workout Library</h2>
            <input
                type="text"
                placeholder="Search workouts..."
                style={styles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div style={styles.container}>
                {filteredWorkouts.length > 0 ? (
                    filteredWorkouts.map((workout) => (
                        <div key={workout.id} style={styles.card}>
                            <img src={workout.image} alt={workout.title} style={styles.icon} />
                            <h3 style={styles.cardTitle}>{workout.title}</h3>
                            <p style={styles.cardContent}>{workout.description}</p>
                            <button 
                                style={styles.cardButton}
                                onClick={() => setSelectedWorkout(workout)}
                            >
                                View Workout
                            </button>
                        </div>
                    ))
                ) : (
                    <p style={styles.noResults}>No workouts found.</p>
                )}
            </div>
            <Modal workout={selectedWorkout} onClose={() => setSelectedWorkout(null)} />
        </div>
    );
};

// Updated styles for the components
const styles = {
    body: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f0f0f0',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowY: 'auto',
        padding: '20px',
    },
    title: {
        fontSize: '28px',
        color: '#333',
        marginBottom: '20px',
    },
    searchInput: {
        width: '300px',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        marginBottom: '20px',
        outline: 'none',
        fontSize: '16px',
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
        width: '250px',
        textAlign: 'center',
        animation: 'slideIn 0.5s ease-in-out',
    },
    cardTitle: {
        fontSize: '22px',
        color: '#333',
        margin: '10px 0',
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
        width: '80px',
        height: '80px',
        marginBottom: '10px',
    },
    noResults: {
        fontSize: '18px',
        color: '#666',
        margin: '20px 0',
    },
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        background: 'white',
        padding: '20px',
        borderRadius: '10px',
        maxWidth: '500px',
        width: '90%',
    },
    closeButton: {
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#4CAF50',
        color: 'white',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '20px',
    },
};

// CSS Animations (unchanged)
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

export default WorkoutPage;