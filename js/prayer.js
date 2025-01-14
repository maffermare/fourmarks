const prayers = [
    "Say a prayer of gratitude for something you're thankful for.",
    "Offer a prayer for someone you know who is going through a tough time.",
    "Pray for the strength to be patient and kind to others.",
    "Spend a moment in silence, reflecting on God's love and presence.",
    "Say a prayer for peace in the world and for those affected by conflict."
];

const generateButton = document.getElementById("generate-task");
const taskDisplay = document.getElementById("task-display");
const retryButton = document.getElementById("retry-task");

// Generate a random prayer task when the button is clicked
generateButton.addEventListener("click", () => {
    const randomPrayer = prayers[Math.floor(Math.random() * prayers.length)];
    taskDisplay.textContent = `Your prayer challenge: ${randomPrayer}`;
    retryButton.style.display = "inline-block"; // Show the retry button
});

// Retry for a new prayer task when the retry button is clicked
retryButton.addEventListener("click", () => {
    const randomPrayer = prayers[Math.floor(Math.random() * prayers.length)];
    taskDisplay.textContent = `Your new prayer challenge: ${randomPrayer}`;
});

