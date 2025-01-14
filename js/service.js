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
const storyInput = document.getElementById("story");
const submitButton = document.getElementById("submit-story");
const wordCountWarning = document.getElementById("word-count-warning");

// Generate a random challenge when the button is clicked
generateButton.addEventListener("click", () => {
    const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
    taskDisplay.textContent = `Your challenge: ${randomTask}`;
    retryButton.style.display = "inline-block"; // Show the retry button
    submitButton.style.display = "inline-block"; // Show the submit button
    document.getElementById("instructions").textContent = "Write a story about how you could complete this task, describing the people involved and how it made a difference.";
});

// Retry for a new challenge when the retry button is clicked
retryButton.addEventListener("click", () => {
    const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
    taskDisplay.textContent = `Your new challenge: ${randomTask}`;
    document.getElementById("instructions").textContent = "Write a story about how you could complete this task, describing the people involved and how it made a difference.";
});

// Check word count when the user writes their story
storyInput.addEventListener("input", () => {
    const storyText = storyInput.value.trim();
    const wordCount = storyText.split(/\s+/).filter(Boolean).length;

    // Show the warning if the story has fewer than 50 words
    if (wordCount < 50) {
        wordCountWarning.style.display = "inline-block";
        submitButton.disabled = true; // Disable submit button
    } else {
        wordCountWarning.style.display = "none";
        submitButton.disabled = false; // Enable submit button
    }
});

// Submit the story when the button is clicked (can add functionality for actual submission)
submitButton.addEventListener("click", () => {
    alert("Thank you for submitting your story! Keep up the great work!");
    // Clear the story input after submission (optional)
    storyInput.value = "";
});
