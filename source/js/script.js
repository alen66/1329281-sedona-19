var open = document.querySelector(".response__btn");
var modal = document.querySelector(".form-error");
var modal__letter = document.querySelector(".form-letter");
var close = document.querySelector(".form-error__btn");
var close__letter = document.querySelector(".form-letter__btn");
console.log('close__letter' + close__letter);
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
      console.log('field is blank', fields[i]);

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


  close.addEventListener("click", function (evt) {
    modal.classList.remove("modal-show");
  });
close__letter.addEventListener("click", function (evt) {
    modal__letter.classList.remove("modal-letter");
  });


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
