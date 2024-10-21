import React from 'react';

// Sample FAQs
const faqs = [
    {
        question: "How do I reset my password?",
        answer: "To reset your password, go to the login page and click on 'Forgot Password'. Follow the instructions sent to your email."
    },
    {
        question: "How do I track my fitness progress?",
        answer: "You can track your fitness progress by navigating to the 'Progress Tracking' page from the dashboard."
    },
    {
        question: "Can I connect with a trainer?",
        answer: "Yes, you can find a list of trainers in the 'Community' page where you can connect with them."
    },
    {
        question: "What should I do if I have a technical issue?",
        answer: "If you experience technical issues, please visit the 'Help/FAQ' page or contact our support team."
    },
    {
        question: "How do I change my account settings?",
        answer: "You can change your account settings by going to the 'Settings' page from the dashboard."
    }
];

const HelpFAQ = () => {
    return (
        <div style={styles.body}>
            <h2 style={styles.title}>Help & FAQ</h2>
            <p style={styles.subtitle}>Your questions answered!</p>

            <div style={styles.faqList}>
                {faqs.map((faq, index) => (
                    <div key={index} style={styles.faqItem}>
                        <div style={styles.faqQuestion}>
                            <img
                                src="https://img.icons8.com/ios-filled/50/000000/question-mark.png"
                                alt="Question Icon"
                                style={styles.icon}
                            />
                            <span>{faq.question}</span>
                        </div>
                        <p style={styles.faqAnswer}>{faq.answer}</p>
                    </div>
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
        padding: '20px',
        overflowY: 'auto',
    },
    title: {
        marginBottom: '10px',
        fontSize: '28px',
        color: '#333',
        textAlign: 'center',
        animation: 'fadeIn 1s ease-in-out',
    },
    subtitle: {
        marginBottom: '20px',
        fontSize: '18px',
        color: '#555',
        fontStyle: 'italic',
        textAlign: 'center',
        animation: 'fadeIn 1s ease-in-out',
    },
    faqList: {
        textAlign: 'left',
        width: '100%',
    },
    faqItem: {
        marginBottom: '15px',
        borderBottom: '1px solid #ccc',
        padding: '10px 0',
        animation: 'slideIn 0.5s ease-in-out',
    },
    faqQuestion: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '5px',
        fontWeight: 'bold',
    },
    faqAnswer: {
        marginLeft: '30px',
        fontSize: '14px',
        color: '#666',
    },
    icon: {
        width: '30px',
        height: '30px',
        marginRight: '10px',
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

export default HelpFAQ;
