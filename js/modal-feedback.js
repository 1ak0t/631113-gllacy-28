var feedbackLink = document.querySelector(".connect-button");
var feedbackWindow = document.querySelector(".modal-bg");
var feedbackClose = document.querySelector(".close-modal");
var feedbackForm = document.querySelector("modal-feedback");
var feedbackName = document.querySelector("#name-field");
var feedbackMail = document.querySelector("#email-field");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt){
  evt.preventDefault();
  feedbackWindow.classList.add("on");
  if (storage) {
    feedbackName.value = storage;
    feedbackMail.focus();
  } else {
    feedbackName.focus();  
  }
});

feedbackClose.addEventListener("click", function (){
  feedbackWindow.classList.remove("on");
});

feedbackForm.addEventListener("submit", function(evt){
  if (!feedbackName) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", feedbackName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackWindow.classList.contains("on")) {
      evt.preventDefault();
      feedbackWindow.classList.remove("on");
    }
  }
});