const hamburgerButton = document.querySelector(".hamburger");
const dropdownMenu = document.querySelector(".dropdown-menu");

if (hamburgerButton) {
  hamburgerButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("navbar-toggle");
  });
}

const signupBtn = document.getElementById("signup-btn");

signupBtn.addEventListener("click", () => {
  alert("Thank you for subscribing to our newspaper!");
});
