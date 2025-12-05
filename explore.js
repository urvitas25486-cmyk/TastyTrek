const searchBox = document.getElementById("searchBox");
const cards = document.querySelectorAll(".card");

searchBox.addEventListener("keyup", function () {
  const searchValue = searchBox.value.toLowerCase();

  cards.forEach(card => {
    const title = card.querySelector(".card-title").textContent.toLowerCase();
    
    if (title.includes(searchValue)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
});
