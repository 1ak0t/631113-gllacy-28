var feedbackLink=document.querySelector(".connect-button"),feedbackWindow=document.querySelector(".modal-bg"),feedbackClose=document.querySelector(".close-modal"),feedbackForm=document.querySelector("modal-feedback"),feedbackName=document.querySelector("#name-field"),feedbackMail=document.querySelector("#email-field"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("name")}catch(e){isStorageSupport=!1}feedbackLink.addEventListener("click",function(e){e.preventDefault(),feedbackWindow.classList.add("on"),storage?(feedbackName.value=storage,feedbackMail.focus()):feedbackName.focus()}),feedbackClose.addEventListener("click",function(){feedbackWindow.classList.remove("on")}),feedbackForm.addEventListener("submit",function(e){feedbackName?isStorageSupport&&localStorage.setItem("name",feedbackName.value):e.preventDefault()}),window.addEventListener("keydown",function(e){27===e.keyCode&&feedbackWindow.classList.contains("on")&&(e.preventDefault(),feedbackWindow.classList.remove("on"))});