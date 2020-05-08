var open = document.querySelector(".response__btn");
var modal = document.querySelector(".form-error");
var modal__letter = document.querySelector(".form-letter");
var close = document.querySelector(".form-error__btn");
var close__letter = document.querySelector(".form-letter__btn");
var form = document.querySelector(".feedback__form");
var firstname = document.querySelector(".firstname");
var surname = document.querySelector(".surname");
var phone = document.querySelector(".phone");
var email = document.querySelector(".email");


var fields = document.querySelectorAll('.field')

if (open) {open.addEventListener("click", function (evt) {
  form.addEventListener('submit', function (event) {
    event.preventDefault()

    var error=false;

    for (var i = 0; i < fields.length; i++) {
      if (!fields[i].value) {
        error=true;
        fields[i].classList.add('error');
        modal.classList.add("modal-show");
      }
    }


    if (error){
      modal.classList.add("modal-show")}
      else {
        modal__letter.classList.add("modal-letter");
      }

    })
}
)};


  if (close) {close.addEventListener("click", function (evt) {
    modal.classList.remove("modal-show");
  })};

  if (close__letter) {close__letter.addEventListener("click", function (evt) {
    modal__letter.classList.remove("modal-letter");
  })};


  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle--icon');
  var navToggleClose = document.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    }
  });

  navToggleClose.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--opened')) {
      navMain.classList.remove('main-nav--opened');
      navMain.classList.add('main-nav--closed');
    }
  });
