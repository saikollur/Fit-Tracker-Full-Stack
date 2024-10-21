import React, { useState, useEffect } from 'react';

const initialMeals = [
    { id: 1, title: "Breakfast: Oatmeal", description: "A healthy start to your day with fiber and protein.", calories: 300, image: "https://img.icons8.com/?size=100&id=y6Ise2mlOMc5&format=png&color=000000", category: "general" },
    { id: 2, title: "Lunch: Grilled Chicken Salad", description: "A lean source of protein with fresh vegetables.", calories: 400, image: "https://img.icons8.com/?size=100&id=AJ6dGeh9HvJM&format=png&color=000000", category: "general" },
    { id: 3, title: "Dinner: Quinoa Bowl", description: "Packed with nutrients, a perfect dinner option.", calories: 350, image: "https://img.icons8.com/?size=100&id=24463&format=png&color=000000", category: "general" },
    { id: 4, title: "Snack: Greek Yogurt", description: "A tasty and healthy snack high in protein.", calories: 150, image: "https://img.icons8.com/?size=100&id=XHwHpaOI057h&format=png&color=000000", category: "general" },
    { id: 5, title: "Dessert: Dark Chocolate", description: "A guilt-free indulgence with antioxidants.", calories: 100, image: "https://img.icons8.com/?size=100&id=31227&format=png&color=000000", category: "general" },
    // Weight Loss Meals
    { id: 6, title: "Breakfast: Egg White Frittata", description: "Low-calorie, high-protein start to your day.", calories: 200, image: "https://img.icons8.com/?size=100&id=8419&format=png&color=1A1A1A", category: "weight loss" },
    { id: 7, title: "Lunch: Lentil Soup", description: "Filling and nutritious with minimal calories.", calories: 250, image: "https://img.icons8.com/?size=100&id=25824&format=png&color=1A1A1A", category: "weight loss" },
    { id: 8, title: "Dinner: Grilled Fish with Steamed Vegetables", description: "Lean protein with fiber-rich sides.", calories: 300, image: "https://img.icons8.com/?size=100&id=O93gXt13V7Pi&format=png&color=1A1A1A", category: "weight loss" },
    { id: 9, title: "Snack: Celery with Almond Butter", description: "Crunchy, satisfying snack with healthy fats.", calories: 100, image: "https://img.icons8.com/?size=100&id=J2ayPsRfngtp&format=png&color=1A1A1A", category: "weight loss" },
    // Body Recomposition Meals
    { id: 10, title: "Breakfast: Protein Pancakes", description: "High-protein, moderate-carb breakfast for muscle building.", calories: 400, image: "https://img.icons8.com/?size=100&id=112120&format=png&color=1A1A1A", category: "body recomposition" },
    { id: 11, title: "Lunch: Turkey and Avocado Wrap", description: "Balanced meal with lean protein and healthy fats.", calories: 450, image: "https://img.icons8.com/?size=100&id=11211&format=png&color=1A1A1A", category: "body recomposition" },
    { id: 12, title: "Dinner: Lean Beef Stir-Fry", description: "Iron-rich meal with a mix of protein and vegetables.", calories: 500, image: "https://img.icons8.com/?size=100&id=BxAQXVI8jOHW&format=png&color=1A1A1A", category: "body recomposition" },
    { id: 13, title: "Snack: Cottage Cheese with Berries", description: "Protein-rich snack with antioxidants.", calories: 200, image: "https://img.icons8.com/?size=100&id=8330&format=png&color=1A1A1A", category: "body recomposition" },
    // Strength Training Meals
    { id: 14, title: "Breakfast: Scrambled Eggs with Whole Grain Toast", description: "Protein-packed start with complex carbs.", calories: 450, image: "https://img.icons8.com/?size=100&id=prcRsEI3WFJu&format=png&color=1A1A1A", category: "strength training" },
    { id: 15, title: "Lunch: Chicken Breast with Sweet Potato", description: "Lean protein with nutrient-dense carbs.", calories: 550, image: "https://img.icons8.com/?size=100&id=109350&format=png&color=1A1A1A", category: "strength training" },
    { id: 16, title: "Dinner: Salmon with Quinoa and Broccoli", description: "Omega-3 rich protein with complete protein grains.", calories: 600, image: "https://img.icons8.com/?size=100&id=11312&format=png&color=1A1A1A", category: "strength training" },
    { id: 17, title: "Snack: Protein Shake with Banana", description: "Quick protein hit with fast-acting carbs.", calories: 300, image: "https://img.icons8.com/?size=100&id=18952&format=png&color=1A1A1A", category: "strength training" },
];

const NutritionTracker = () => {
    const [meals, setMeals] = useState(initialMeals);
    const [searchTerm, setSearchTerm] = useState("");
    const [consumedMeals, setConsumedMeals] = useState([]);
    const [totalCalories, setTotalCalories] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("all");

    useEffect(() => {
        const newTotalCalories = consumedMeals.reduce((sum, meal) => sum + meal.calories, 0);
        setTotalCalories(newTotalCalories);
    }, [consumedMeals]);

    const filteredMeals = meals.filter(meal =>
        meal.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "all" || meal.category === selectedCategory)
    );

    const addMealToConsumed = (meal) => {
        setConsumedMeals([...consumedMeals, meal]);
    };

    const removeMealFromConsumed = (mealId) => {
        setConsumedMeals(consumedMeals.filter(meal => meal.id !== mealId));
    };

    return (
        <div style={styles.body}>
            <h2 style={styles.title}>Nutrition Tracker</h2>
            <div style={styles.searchContainer}>
                <input
                    type="text"
                    placeholder="Search meals..."
                    style={styles.searchInput}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select 
                    value={selectedCategory} 
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    style={styles.select}
                >
                    <option value="all">All Categories</option>
                    <option value="general">General</option>
                    <option value="weight loss">Weight Loss</option>
                    <option value="body recomposition">Body Recomposition</option>
                    <option value="strength training">Strength Training</option>
                </select>
            </div>

            <div style={styles.container}>
                {filteredMeals.map((meal) => (
                    <div key={meal.id} style={styles.card}>
                        <img src={meal.image} alt={meal.title} style={styles.icon} />
                        <h3 style={styles.cardTitle}>{meal.title}</h3>
                        <p style={styles.cardDescription}>{meal.description}</p>
                        <p style={styles.calories}>Calories: {meal.calories}</p>
                        <p style={styles.category}>Category: {meal.category}</p>
                        <button 
                            style={styles.cardButton}
                            onClick={() => addMealToConsumed(meal)}
                        >
                            Add to Consumed
                        </button>
                    </div>
                ))}
            </div>

            <div style={styles.consumedSection}>
                <h3 style={styles.consumedTitle}>Consumed Meals</h3>
                {consumedMeals.map((meal) => (
                    <div key={`consumed-${meal.id}`} style={styles.consumedItem}>
                        <span style={styles.consumedText}>
                            {meal.title} - {meal.calories} calories
                        </span>
                        <button 
                            style={styles.removeButton}
                            onClick={() => removeMealFromConsumed(meal.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
                <div style={styles.totalCalories}>
                    Total Calories: {totalCalories}
                </div>
            </div>
        </div>
    );
};

const styles = {
    body: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f0f0f0',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        overflowY: 'auto',
    },
    title: {
        fontSize: '28px',
        color: '#333',
        marginBottom: '20px',
        textAlign: 'center',
    },
    searchContainer: {
        display: 'flex',
        gap: '10px',
        marginBottom: '20px',
        width: '100%',
        maxWidth: '700px',
        justifyContent: 'center',
    },
    searchInput: {
        width: '300px',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        outline: 'none',
        fontSize: '16px',
    },
    select: {
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        outline: 'none',
        fontSize: '16px',
        backgroundColor: 'white',
        cursor: 'pointer',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        maxWidth: '1200px',
        width: '100%',
        marginBottom: '30px',
    },
    card: {
        background: 'white',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        width: '250px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    icon: {
        width: '80px',
        height: '80px',
        margin: '0 auto 10px auto',
        borderRadius: '5px',
    },
    cardTitle: {
        fontSize: '20px',
        color: '#333',
        margin: '0',
    },
    cardDescription: {
        fontSize: '14px',
        color: '#666',
        margin: '0',
    },
    calories: {
        fontSize: '16px',
        color: '#4CAF50',
        fontWeight: 'bold',
        margin: '0',
    },
    category: {
        fontSize: '14px',
        color: '#888',
        margin: '0',
        fontStyle: 'italic',
    },
    cardButton: {
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#4CAF50',
        color: 'white',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: 'auto',
        transition: 'background-color 0.2s',
    },
    consumedSection: {
        maxWidth: '700px',
        width: '100%',
        background: 'white',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    },
    consumedTitle: {
        fontSize: '24px',
        color: '#333',
        marginBottom: '15px',
    },
    consumedItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        borderBottom: '1px solid #eee',
    },
    consumedText: {
        fontSize: '16px',
        color: '#333',
    },
    removeButton: {
        padding: '8px 15px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#ff4444',
        color: 'white',
        cursor: 'pointer',
        fontSize: '14px',
        transition: 'background-color 0.2s',
    },
    totalCalories: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#333',
        marginTop: '20px',
        textAlign: 'right',
        padding: '10px',
        borderTop: '2px solid #eee',
    },
};

// Add hover effects
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    button:hover {
        opacity: 0.9;
        transform: translateY(-1px);
    }
`, styleSheet.cssRules.length);

export default NutritionTracker;
