// Targeting Elements
var hamburger = document.getElementById("hamburger"),
  navbarMenu = document.querySelector(".navbar .menu"),
  closeBtn = document.querySelector(".navbar .menu .close-btn"),
  dropDown = document.querySelector(".navbar .menu > ul > li.dropdown");

// Showing Sidebar Menu
hamburger.addEventListener("click", function () {
  navbarMenu.classList.add("active");
});

// Hiding Sidebar Menu
closeBtn.onclick = function () {
  navbarMenu.classList.remove("active");
};

// Dropdown Menu
dropDown.children[0].onclick = function (e) {
  e.preventDefault();
  this.nextElementSibling.classList.toggle("active");
};
