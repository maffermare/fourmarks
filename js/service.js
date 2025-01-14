const tasks = [
    "Write a heartfelt thank-you note to someone who has helped you.",
    "Hold the door open for others.",
    "Smile and greet people warmly, even strangers.",
    "Volunteer at a local food pantry or shelter.",
    "Offer to babysit for a family who needs a break.",
    "Help a neighbor with yard work or shoveling snow.",
    "Donate gently used clothes or toys to a charity.",
    "Call or visit a family member you haven’t seen in a while.",
    "Pay for someone’s coffee or meal in line behind you.",
    "Give genuine compliments to people throughout the day.",
    "Share your lunch or snack with a friend who forgot theirs.",
    "Pray for someone who is struggling.",
    "Send an encouraging text to a friend or family member.",
    "Help a classmate or coworker with a difficult task.",
    "Organize a small fundraiser for a cause you care about.",
    "Surprise someone with a handwritten letter or card.",
    "Offer to carry someone’s heavy bag or groceries.",
    "Bake cookies or a meal for a neighbor or friend.",
    "Spend time with someone who seems lonely.",
    "Donate books to a school, library, or community center."
];

const generateButton = document.getElementById("generate-task");
const taskDisplay = document.getElementById("task-display");
const retryButton = document.getElementById("retry-task");

// Generate a random challenge when the button is clicked
generateButton.addEventListener("click", () => {
    const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
    taskDisplay.textContent = `Your challenge: ${randomTask}`;
    retryButton.style.display = "inline-block"; // Show the retry button
});

// Retry for a new challenge when the retry button is clicked
retryButton.addEventListener("click", () => {
    const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
    taskDisplay.textContent = `Your new challenge: ${randomTask}`;
});
