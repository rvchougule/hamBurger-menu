const hamburgerMenuContainer = document.querySelector(
  ".hamburger-menu-container"
);
const headerContainer = document.querySelector(".header-container");
const closeIcon = document.querySelector(".close-icon");
const goto = document.querySelector(".goto");
const nav = document.querySelector("nav");

hamburgerMenuContainer.addEventListener("click", (e) => {
  e.stopPropagation();
  headerContainer.classList.add("menu-open");
});

nav.addEventListener("click", (e) => {
  e.stopPropagation();
});

closeIcon.addEventListener("click", () => {
  headerContainer.classList.remove("menu-open");
});

window.addEventListener("click", () => {
  headerContainer.classList.remove("menu-open");
});

goto.addEventListener("click", () => {
  document.querySelector("body > div").scrollTo(0, 0);
});
