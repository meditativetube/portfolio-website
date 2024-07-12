<<<<<<< HEAD
window.onscroll = function() {myFunction()};

var navbar = document.getElementsByClassName("nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
=======

>>>>>>> 72aa75d1269e20454493050b8b18c0937c302403
