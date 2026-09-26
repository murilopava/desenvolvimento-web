const loadNavbar = () => {
  fetch("./navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-mainpage").innerHTML = data;
    });
};

const loadCarousel = () => {
  fetch("./carousel.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("carousel-mainpage").innerHTML = data;
    });
};

const loadMinicards = () => {
  fetch("./minicards.html")
    .then((response) => response.text())
    .then((data) => {
      let allMinicards = "";
      for (let i = 0; i < 5; i++) {
        allMinicards += data;
      }
      document.getElementById("minicards-mainpage").innerHTML = allMinicards;
    });
};

const loadBigCards = () => {
  fetch("./bigcards.html")
    .then((response) => response.text())
    .then((data) => {
      let allBigCards = "";
      for (let i = 0; i < 6; i++) {
        allBigCards += data;
      }
      document.getElementById("bigcards-mainpage").innerHTML = allBigCards;
    });
};

const loadFacilidades = () => {
  fetch("./facilidades.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("facilidades-mainpage").innerHTML = data;
    });
};

const loadFooter = () => {
  fetch("./footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-mainpage").innerHTML = data;
    });
};

document.addEventListener("DOMContentLoaded", loadNavbar);
document.addEventListener("DOMContentLoaded", loadCarousel);
document.addEventListener("DOMContentLoaded", loadMinicards);
document.addEventListener("DOMContentLoaded", loadBigCards);
document.addEventListener("DOMContentLoaded", loadFacilidades);
document.addEventListener("DOMContentLoaded", loadFooter);
