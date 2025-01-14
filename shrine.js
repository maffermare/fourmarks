const quotes = [
    "The sacraments are a visible sign of invisible grace. — St. Augustine",
    "Grace is nothing else but a certain beginning of glory in us. — Thomas Aquinas",
    "The Eucharist is the source and summit of our faith. — Vatican II",
    "Through baptism, we are freed from sin and reborn as children of God.",
    "Reconciliation is God's gift of healing and forgiveness."
];

document.getElementById("generate-quote").addEventListener("click", () => {
    const inspiration = document.getElementById("inspiration");
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    inspiration.textContent = randomQuote;
});
