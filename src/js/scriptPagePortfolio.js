const backPage = document.querySelector(".back"); backPage.addEventListener("click", () => { window.location = "index.html" }), window.addEventListener("load", () => { document.body.classList.contains("dark") ? dayNight.querySelector("i").classList.add("fa-sun") : dayNight.querySelector("i").classList.add("fa-moon") });