document.addEventListener("scroll", () => {
  document.documentElement.dataset.scroll = window.scrollY;
});

var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

var popup = document.querySelector(".popup");
var click = document.querySelector(".click");
var close = document.querySelector(".close");

function toggleModal2() {
  popup.classList.toggle("reveal-modal");
}

function windowOnClick2(event) {
  if (event.target === popup) {
    toggleModal2();
  }
}


click.addEventListener("click", toggleModal2);
close.addEventListener("click", toggleModal2);
window.addEventListener("click", windowOnClick2);


var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 2 seconds
}



// var popup_pay = document.querySelector(".popup-pay");
// var click_pay = document.querySelector(".click-pay");
// var close_pay = document.querySelector(".close-pay");

// function toggleModal3() {
//   popup_pay.classList.toggle("unhide-modal");
// }

// function windowOnClick3(event) {
//   if (event.target === popup_pay) {
//     toggleModal3();
//   }
// }


// click_pay.addEventListener("click", toggleModal3);
// close_pay.addEventListener("click", toggleModal3);
// window.addEventListener("click", windowOnClick3);





