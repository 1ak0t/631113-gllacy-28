/* TopSlider */

var sliderDot1 = document.querySelector(".dot1");
var sliderDot2 = document.querySelector(".dot2");
var sliderDot3 = document.querySelector(".dot3");
var bodyBG = document.querySelector("body");
var slideH11 = document.querySelector(".slide-h1-1");
var slideH12 = document.querySelector(".slide-h1-2");
var slideH13 = document.querySelector(".slide-h1-3");

sliderDot1.addEventListener("click", function(){
	sliderDot1.classList.add("active");
	bodyBG.classList.add("general-background-1");
	bodyBG.classList.add("slide-1");
	slideH11.classList.add("slide-current");
	sliderDot2.classList.remove("active");
	sliderDot3.classList.remove("active");
	bodyBG.classList.remove("general-background-2");
	bodyBG.classList.remove("slide-2");
	bodyBG.classList.remove("general-background-3");
	bodyBG.classList.remove("slide-3");
	slideH12.classList.remove("slide-current");
	slideH13.classList.remove("slide-current");
});

sliderDot2.addEventListener("click", function(){
	sliderDot2.classList.add("active");
	bodyBG.classList.add("general-background-2");
	bodyBG.classList.add("slide-2");
	slideH12.classList.add("slide-current");
	sliderDot1.classList.remove("active");
	sliderDot3.classList.remove("active");
	bodyBG.classList.remove("general-background-1");
	bodyBG.classList.remove("slide-1");
	bodyBG.classList.remove("general-background-3");
	bodyBG.classList.remove("slide-3");
	slideH11.classList.remove("slide-current");
	slideH13.classList.remove("slide-current");
});

sliderDot3.addEventListener("click", function(){
	sliderDot3.classList.add("active");
	bodyBG.classList.add("general-background-3");
	bodyBG.classList.add("slide-3");
	slideH13.classList.add("slide-current");
	sliderDot1.classList.remove("active");
	sliderDot2.classList.remove("active");
	bodyBG.classList.remove("general-background-1");
	bodyBG.classList.remove("slide-1");
	bodyBG.classList.remove("general-background-2");
	bodyBG.classList.remove("slide-2");
	slideH11.classList.remove("slide-current");
	slideH12.classList.remove("slide-current");
});


/* ModalFeedback */

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