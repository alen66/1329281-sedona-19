var open = document.querySelector(".response__btn");
var modal = document.querySelector(".form-error");
var close = document.querySelector(".form-error__btn");



if (open) {open.addEventListener("click", function (evt) {

  modal.classList.add("modal-show");

});


close.addEventListener("click", function (evt) {

  modal.classList.remove("modal-show");

});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {

    if (modal.classList.contains("modal-show")) {
      modal.classList.remove("modal-show");

    }
  }
});
};


  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });
