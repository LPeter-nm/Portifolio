let typed = new Typed(".typing", { strings: ["desenvolvedor Back-End", "estudante", "programador da Developers Community"], typeSpeed: 100, BackSpeed: 60, loop: !0 }); const nav = document.querySelector(".nav"), navList = nav.querySelectorAll("li"), totalNavList = navList.length, allSection = document.querySelectorAll(".section"), totalSection = allSection.length; for (let b = 0; b < totalNavList; b++) { const c = navList[b].querySelector("a"); c.addEventListener("click", function () { removeBackSection(); for (let a = 0; a < totalNavList; a++)navList[a].querySelector("a").classList.contains("active") && addBackSection(a), navList[a].querySelector("a").classList.remove("active"); this.classList.add("active"), showSection(this), 1200 > window.innerWidth && asideSectionTogglerBtn() }) } function removeBackSection() { for (let a = 0; a < totalSection; a++)allSection[a].classList.remove("back-section") } function addBackSection(a) { allSection[a].classList.add("back-section") } function showSection(a) { for (let b = 0; b < totalSection; b++)allSection[b].classList.remove("active"); const b = a.getAttribute("href").split("#")[1]; document.querySelector("#" + b).classList.add("active") } const navTogglerBtn = document.querySelector(".nav-toggler"), aside = document.querySelector(".aside"); navTogglerBtn.addEventListener("click", () => { asideSectionTogglerBtn() }); function asideSectionTogglerBtn() { aside.classList.toggle("open"), navTogglerBtn.classList.toggle("open"); for (let a = 0; a < totalSection; a++)allSection[a].classList.toggle("open") } 