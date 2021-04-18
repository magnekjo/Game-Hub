const hamburgerButton = document.querySelector(".hamburger");
const dropdownMenu = document.querySelector(".dropdown-menu");

if (hamburgerButton) {
  hamburgerButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("navbar-toggle");
  });
}
