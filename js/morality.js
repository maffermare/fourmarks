const dilemmas = [
    "You overhear a friend planning to cheat on a test. Do you report it to the teacher or stay silent?",
    "You find a wallet on the ground with money in it. Do you keep it or turn it in?",
    "A friend asks you to help them with a task that goes against your beliefs. Do you help them or refuse?",
    "You see someone being bullied at school. Do you intervene or ignore it to avoid trouble?",
    "You promised to help a sibling with their homework, but your friends want you to join them instead. Do you keep your promise or go with your friends?"
];

const generateButton = document.getElementById("generate-task");
const taskDisplay = document.getElementById("task-display");
const retryButton = document.getElementById("retry-task");

// Generate a random moral dilemma when the button is clicked
generateButton.addEventListener("click", () => {
    const randomDilemma = dilemmas[Math.floor(Math.random() * dilemmas.length)];
    taskDisplay.textContent = `Your dilemma: ${randomDilemma}`;
    retryButton.style.display = "inline-block"; // Show the retry button
});

// Retry for a new dilemma when the retry button is clicked
retryButton.addEventListener("click", () => {
    const randomDilemma = dilemmas[Math.floor(Math.random() * dilemmas.length)];
    taskDisplay.textContent = `Your new dilemma: ${randomDilemma}`;
});
