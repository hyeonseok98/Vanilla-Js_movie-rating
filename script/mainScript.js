window.onload = function () {
  document.getElementById("search-movie").focus();
};

let idStore = {};
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjUxYmI1M2Q5YTNkMTA0NGRiYTcwZDFiMmI2ZGEwNSIsInN1YiI6IjY2MmNmNDRlZjZmZDE4MDEyODIyNGI3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yGcscHFGjYQq6B7s_OqCif9IH5jw8vlFboOuJZNKnTk",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&region=KR",
  options
)
  .then((response) => response.json())
  .then((response) => {
    const cardContainer = document.createElement("section");
    cardContainer.classList.add("card-container");

    response.results.forEach((data, idx) => {
      idStore[`id${idx + 1}`] = { id: data.id };
      const movieCard = document.createElement("div");
      movieCard.classList.add("movie-card");

      movieCard.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${data.backdrop_path}" alt="${data.title}" class="movie-img">
      <div class="movie-title">${data.title}</div>
      <div class="movie-info">
        <p class="movie-overview">${data.overview}</p>
        <p class="movie-vote-average">Rating: <span class="movie-vote-average-number"> ${data.vote_average}</span></p>
      </div>
  </div>
  `;
      movieCard.addEventListener("click", () => {
        const id = idStore[`id${idx + 1}`].id;
        alert(`선택된 영화의 ID: ${id}`);
      });

      cardContainer.appendChild(movieCard);
    });
    document.body.appendChild(cardContainer);
  })
  .catch((err) => alert(err));

//movie-search
const searchBox = document.getElementById("search-box");
const searchInput = document.getElementById("search-movie");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
  const searchText = searchInput.value.trim().toLowerCase();
  const movieCards = document.querySelectorAll(".movie-card");

  movieCards.forEach((movieCard) => {
    const title = movieCard
      .querySelector(".movie-title")
      .textContent.trim()
      .toLowerCase();
    const isVisible = title.includes(searchText);

    movieCard.style.display = isVisible ? "block" : "none";
  });
});

searchBox.addEventListener("submit", (event) => {
  event.preventDefault();
});

//header logo -> main page 이동
const headerLogo = document.getElementById("header-logo");

headerLogo.addEventListener("click", () => {
  window.location.reload();
  window.scrollTo(0, 0);
});
