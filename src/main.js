import createMovieCard from "./movie.js";

window.onload = () => {
  document.getElementById("search-movie").focus();
};

createMovieCard();

//Logo Click -> Main page 이동
const headerLogo = document.getElementById("header-logo");

headerLogo.addEventListener("click", () => {
  window.location.reload();
  window.scrollTo(0, 0);
});

//movie-search
const searchBox = document.getElementById("search-box");
const searchInput = document.getElementById("search-movie");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
  const searchText = searchInput.value.trim().toLowerCase();
  const movieCards = document.querySelectorAll(".movie-card");

  movieCards.forEach((movieCard) => {
    const title = movieCard.querySelector(".movie-title").textContent.trim().toLowerCase();
    const isVisible = title.includes(searchText);

    movieCard.style.display = isVisible ? "block" : "none";
  });
});

searchBox.addEventListener("submit", (event) => {
  event.preventDefault();
});
