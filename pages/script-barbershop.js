var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");

var map_link = document.querySelector(".contacts-button-map");
var map_popup = document.querySelector(".modal-map");
var map_close = map_popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");

var isStorageSupport = true; // Переменная для проверки включено ли локальное хранилище в браузере.
var storage = "";

try {
  storage = localStorage.getItem("login");
}
catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    login.value = storage;
    password.focus();
  }
  else {
   login.focus();
  }
});

close.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!login.value || !password.value){
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Нужно ввести логин и пароль!");
  }
  else {
    if (isStorageSupport){
      localStorage.setItem("login", login.value);
    }
  }
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
})

map_link.addEventListener("click", function(evt){
  evt.preventDefault();
  map_popup.classList.add("modal-show");
});

map_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  map_popup.classList.remove("modal-show");
})

window.addEventListener("keydown", function(evt){
  evt.preventDefault();
  if (evt.keyCode === 27) {
    if (map_popup.classList.contains("modal-show")){
      map_popup.classList.remove("modal-show");
    }
  }
});
