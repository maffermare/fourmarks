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
    "Donate books to a school, library, or community center.",
    "Pick up trash at a local park or playground.",
    "Offer to help a teacher or mentor with classroom tasks.",
    "Give up your seat for someone who needs it more.",
    "Organize a group to visit residents at a nursing home.",
    "Bring flowers or a small gift to someone who’s feeling down.",
    "Help siblings or younger family members with their homework.",
    "Volunteer at your church or local parish.",
    "Offer to tutor or mentor someone in a subject you’re good at.",
    "Spend time listening to someone without interrupting or offering advice.",
    "Leave a kind note or inspirational quote in a public place.",
    "Donate non-perishable food to a local food drive.",
    "Offer to take care of a pet for someone going out of town.",
    "Send a care package to a missionary, service member, or college student.",
    "Let someone go ahead of you in a long line.",
    "Organize a group to clean up your school or church grounds.",
    "Share your umbrella with someone caught in the rain.",
    "Offer to pray with someone in person.",
    "Wash someone else’s car as a surprise.",
    "Share a skill, like baking or crafting, with a younger student or friend.",
    "Forgive someone who hurt you and let them know they’re forgiven.",
    "Offer encouragement to someone who seems overwhelmed.",
    "Participate in a charity walk or run to support a cause.",
    "Make a care package for someone who is sick or recovering.",
    "Help your parents or guardians with chores without being asked.",
    "Invite someone who’s new to your school or parish to join your group of friends.",
    "Organize a drive for coats, school supplies, or hygiene items for those in need.",
    "Donate your allowance or savings to a charity or church collection.",
    "Leave flowers or kind notes at a graveyard for strangers.",
    "Offer to accompany someone to a difficult appointment or task.",
    "Be patient and kind when someone is having a bad day."
];

const generateButton = document.getElementById("generate-task");
const taskDisplay = document.getElementById("task-display");
const retryButton = document.getElementById("retry-task");

generateButton.addEventListener("click", () => {
    const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
    taskDisplay.textContent = `Your challenge: ${randomTask}`;
    retryButton.style.display = "inline-block";
});

retryButton.addEventListener("click", () => {
    const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
    taskDisplay.textContent = `Your new challenge: ${randomTask}`;
});
