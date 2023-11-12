const menuBar = document.querySelector(".menu-bar")
const menuButton = document.querySelector("#menu-button");
const menuItems = document.querySelector(".menu-items");

function clickHandler() {
  menuItems.classList.toggle("active");
}

menuBar.addEventListener("click", clickHandler);
