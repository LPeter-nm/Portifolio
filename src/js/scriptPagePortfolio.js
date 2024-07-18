const backPage = document.querySelector(".back");
backPage.addEventListener("click", () => {
  window.location = "index.html"
})

window.addEventListener('load', () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun")
  } else {
    dayNight.querySelector("i").classList.add("fa-moon")
  }
})