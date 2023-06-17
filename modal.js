const closeBtn = document.querySelector(".close");
const closeBtn2 = document.querySelector(".fermer");
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// Sélectionnez le formulaire à réinitialiser
var form = document.forms.reserve;
// Fonction pour effacer les messages d'erreur
function clearErrorMessages() {
  var errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(function(errorMessage) {
    errorMessage.remove();
  });
}
// Fonction pour réinitialiser le formulaire
function resetForm() {
  form.reset();
  clearErrorMessages();
}

function closeModal() {
  modalbg.style.display = "none"; 
  resetForm();
}

closeBtn.addEventListener("click", closeModal);
closeBtn2.addEventListener("click", closeModal);
