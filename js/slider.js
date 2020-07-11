var sliderDot1 = document.querySelector(".dot1");
var sliderDot2 = document.querySelector(".dot2");
var sliderDot3 = document.querySelector(".dot3");
var bodyBG = document.querySelector("body")

sliderDot1.addEventListener("click", function(){
  sliderDot1.classList.add("active");
  bodyBG.classList.add("general-background-1");
  bodyBG.classList.add("slide-1");
  sliderDot2.classList.remove("active");
  sliderDot3.classList.remove("active");
  bodyBG.classList.remove("general-background-2");
  bodyBG.classList.remove("slide-2");
  bodyBG.classList.remove("general-background-3");
  bodyBG.classList.remove("slide-3");
});

sliderDot2.addEventListener("click", function(){
  sliderDot2.classList.add("active");
  bodyBG.classList.add("general-background-2");
  bodyBG.classList.add("slide-2");
  sliderDot1.classList.remove("active");
  sliderDot3.classList.remove("active");
  bodyBG.classList.remove("general-background-1");
  bodyBG.classList.remove("slide-1");
  bodyBG.classList.remove("general-background-3");
  bodyBG.classList.remove("slide-3");
});

sliderDot3.addEventListener("click", function(){
  sliderDot3.classList.add("active");
  bodyBG.classList.add("general-background-3");
  bodyBG.classList.add("slide-3");
  sliderDot1.classList.remove("active");
  sliderDot2.classList.remove("active");
  bodyBG.classList.remove("general-background-1");
  bodyBG.classList.remove("slide-1");
  bodyBG.classList.remove("general-background-2");
  bodyBG.classList.remove("slide-2");
});
