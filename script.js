const quotes = [
  "You belong with me",
  "Cause darling I'm a nightmare dressed like a daydream",
  "We are never ever getting back together",
  "This love is good, this love is bad",
  "I remember it all too well"
];

function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}

//Search Filter
const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", function() {
  let filter = searchInput.value.toLowerCase();
  cards.forEach(card => {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(filter) ? "inline-block" : "none";
  });
});