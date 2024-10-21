import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    Filler,
    CategoryScale,
} from 'chart.js';

// Registering the required components
ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, Filler, CategoryScale);

const ProgressTracking = () => {
    const data = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'Weight Loss Progress (kg)',
                data: [75, 74, 72, 70],
                borderColor: 'rgba(34, 202, 236, 1)',
                backgroundColor: 'rgba(34, 202, 236, 0.2)',
                pointBackgroundColor: 'rgba(34, 202, 236, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(34, 202, 236, 1)',
                fill: 'start', // Fills below the line for a smooth effect
                tension: 0.4, // Makes the line smooth and curved
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 14,
                        weight: 'bold',
                    },
                    color: '#555',
                },
            },
            title: {
                display: true,
                text: 'Progress Tracking',
                font: {
                    size: 18,
                },
                color: '#333',
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleFont: {
                    size: 14,
                    weight: 'bold',
                },
                bodyFont: {
                    size: 12,
                },
                footerFont: {
                    size: 10,
                },
                padding: 10,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: '#555',
                    font: {
                        size: 12,
                    },
                },
            },
            y: {
                grid: {
                    color: 'rgba(200, 200, 200, 0.3)',
                    borderDash: [5, 5],
                },
                ticks: {
                    color: '#555',
                    font: {
                        size: 12,
                    },
                },
                beginAtZero: true,
            },
        },
    };

    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <h2 style={styles.title}>Your Progress Tracking</h2>
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

// Styles for the component
const styles = {
    page: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f4f8',
    },
    container: {
        backgroundColor: '#fff',
        borderRadius: '15px',
        padding: '30px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        width: '80%',
        maxWidth: '800px',
        animation: 'fadeIn 1s ease-in-out',
        textAlign: 'center',
    },
    title: {
        marginBottom: '20px',
        fontSize: '26px',
        color: 'white',
        animation: 'slideIn 0.8s ease-in-out',
    },
};

// Adding animations using CSS keyframes
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
            transform: translateY(-20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
`, styleSheet.cssRules.length);

export default ProgressTracking;
