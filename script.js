
window.addEventListener('scroll', function() {
  var header = document.getElementById('navbar');
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", function () {
  menu.classList.toggle("active");
});

