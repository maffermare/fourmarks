const dilemmas = [
    "1. Honesty vs. Protecting a Friend: You overhear a classmate telling a lie to avoid getting in trouble for not completing their homework. The teacher asks you directly if you know anything about the situation.\n\nDilemma: Should you tell the truth and risk your friend getting in trouble, or protect them by staying silent or lying?",
    "2. Taking Credit for Someone Else’s Work: During a group project, one member does most of the work, but the teacher praises you specifically for the outcome. Do you correct the teacher or accept the praise?\n\nDilemma: Is it more important to be truthful or to avoid creating awkwardness in the group?",
    "3. Peer Pressure to Exclude: Your friend group is planning to exclude someone from sitting with them at lunch because they think the person is 'weird.' They expect you to go along with it.\n\nDilemma: Should you risk your group’s approval to stand up for the excluded person or stay silent?",
    "4. Finding Money: You find a $20 bill in the school hallway. No one else is around, and no one has claimed it.\n\nDilemma: Do you keep the money, turn it in, or try to find out who it belongs to?",
    "5. Breaking a Rule to Help Someone: Your school has a strict 'no phones' policy during class, but a classmate asks to borrow your phone to call their parent about an emergency.\n\nDilemma: Should you break the rule to help them or follow the rules strictly?",
    "6. Group Cheating: During a test, several classmates are sharing answers. The teacher doesn’t notice, but you see what’s happening.\n\nDilemma: Should you report the cheating, confront your classmates, or ignore it to avoid conflict?",
    "7. Standing Up to Gossip: You overhear someone spreading rumors about a friend of yours. You know the rumors aren’t true, but speaking up might make you a target.\n\nDilemma: Should you confront the gossip, support your friend privately, or stay out of it?",
    "8. Prioritizing Commitments: You promised a sibling you would help them with a school project, but then your friends invite you to a fun outing at the same time.\n\nDilemma: Do you honor your promise to your sibling or prioritize spending time with friends?",
    "9. Misusing Technology: A friend shares their streaming service password with you so you can watch a movie, even though you know it violates the service’s rules.\n\nDilemma: Do you use the password or decline because it breaks the terms of service?",
    "10. Standing Up for Your Beliefs: You’re in a discussion where the majority disagrees with your perspective on a moral or ethical issue. Speaking up might lead to debate or criticism.\n\nDilemma: Should you express your views, try to change the subject, or stay quiet to avoid conflict?"
];

const generateButton = document.getElementById("generate-dilemma");
const dilemmaDisplay = document.getElementById("dilemma-display");
const retryButton = document.getElementById("retry-dilemma");

generateButton.addEventListener("click", () => {
    const randomDilemma = dilemmas[Math.floor(Math.random() * dilemmas.length)];
    dilemmaDisplay.textContent = randomDilemma;
    retryButton.style.display = "inline-block";
});

retryButton.addEventListener("click", () => {
    const randomDilemma = dilemmas[Math.floor(Math.random() * dilemmas.length)];
    dilemmaDisplay.textContent = randomDilemma;
});
