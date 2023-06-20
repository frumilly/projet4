const closeBtn = document.querySelector(".close");
const closeBtn2 = document.querySelector(".fermer");
// Clonez le formulaire initial
const originalFormElement = document.getElementById("reserve_f").cloneNode(true);

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
let form = document.forms.reserve;
// Fonction pour effacer les messages d'erreur
function clearErrorMessages() {
  let errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(function(errorMessage) {
    errorMessage.remove();
  });
}
// Fonction pour réinitialiser le formulaire
function resetForm() {
  form.reset();
  let locationError3 = document.getElementById("date_error");
  locationError3.textContent = "";
  let locationError1 = document.getElementById("location-error2");
  locationError1.textContent = "";
  let locationError2 = document.getElementById("location-error1");
  locationError2.textContent = "";
  clearErrorMessages();
}

function closeModal() {
  modalbg.style.display = "none"; 
  resetForm();
}
function closeModal2() {
 
   // 

    // Masquer le message de réussite
    const successMessageElement = document.getElementById("success-message-container1");
    successMessageElement.style.display = "none";
    const formElement = document.getElementById("reserve_f");
    formElement.style.display = "block";
    modalbg.style.display = "none"; 
}

closeBtn.addEventListener("click", closeModal);
closeBtn2.addEventListener("click", closeModal2);
