const menuBar = document.querySelector(".menu-bar")
const menuButton = document.querySelector("#menu-button");
const menuItems = document.querySelector(".menu-items");

menuButton.addEventListener("click", () => {
  menuItems.classList.toggle("active");
});
