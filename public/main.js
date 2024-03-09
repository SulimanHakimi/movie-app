let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  movieCatch(e.target.search.value);
});
let movieSearch = document.querySelector(".movie-o-search");
let notFoundMovie = document.querySelector(".not-found-movie");
let cardList = document.querySelector(".card-list");
function movieCatch(movie) {
  fetch(`https://www.omdbapi.com/?apikey=59f796d9&s=${movie}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.Response === "True") {
        cardList.style.display = "flex";
        movieSearch.style.display = "none";
        cardList.innerHTML = "";

        data.Search.forEach((film) => {
          fetch(`https://www.omdbapi.com/?apikey=59f796d9&i=${film.imdbID}`)
            .then((respose) => respose.json())
            .then((data) => {
              cardList.innerHTML += `<div class="card">
              <img
                src="${data.Poster}"
                alt=""
              />
              <div class="card-content">
                <div class="top-title-rate">
                  <span class="title">${data.Title}</span>
                  <div class="star-rate">
                    <svg
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.78671 1.19529C6.01122 0.504306 6.98878 0.504305 7.21329 1.19529L8.01547 3.66413C8.11588 3.97315 8.40384 4.18237 8.72876 4.18237H11.3247C12.0512 4.18237 12.3533 5.11208 11.7655 5.53913L9.66537 7.06497C9.40251 7.25595 9.29251 7.59447 9.39292 7.90349L10.1951 10.3723C10.4196 11.0633 9.62875 11.6379 9.04097 11.2109L6.94084 9.68503C6.67797 9.49405 6.32203 9.49405 6.05916 9.68503L3.95903 11.2109C3.37125 11.6379 2.58039 11.0633 2.8049 10.3723L3.60708 7.90349C3.70749 7.59448 3.59749 7.25595 3.33463 7.06497L1.2345 5.53914C0.646715 5.11208 0.948796 4.18237 1.67534 4.18237H4.27124C4.59616 4.18237 4.88412 3.97315 4.98453 3.66414L5.78671 1.19529Z"
                        fill="#FEC654"
                      />
                    </svg>
                    <span>${data.imdbRating}</span>
                  </div>
                </div>
                <div class="time-gu">
                  <span class="time-du">${data.Runtime}</span>
                  <span class="gan">${data.Genre}</span>
                  <span class="add-fiv"
                    ><svg
                      width="16"
                      class="button"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM9 5C9 4.44772 8.55228 4 8 4C7.44772 4 7 4.44772 7 5V7H5C4.44772 7 4 7.44771 4 8C4 8.55228 4.44772 9 5 9H7V11C7 11.5523 7.44772 12 8 12C8.55228 12 9 11.5523 9 11V9H11C11.5523 9 12 8.55228 12 8C12 7.44772 11.5523 7 11 7H9V5Z"
                        fill="#111827"
                      />
                    </svg>
                    Watchlist
                  </span>
                </div>
                <p class="movie-des">
                ${data.Plot}
                </p>
              </div>
            </div>`;
            });
          console.log(data);
        });
      } else {
        cardList.style.display = "none";
        notFoundMovie.style.display = "flex";
        movieSearch.style.display = "none";
      }
    });
}
