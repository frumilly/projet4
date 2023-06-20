// Récupérer la référence de l'élément bouton
const submitButton = document.querySelector('.btn-submit');
let isValid = true;

// Ajouter un gestionnaire d'événement pour l'événement 'click'
submitButton.addEventListener('click', function (event) {
  // Empêcher le comportement par défaut du bouton (rechargement de la page)
  event.preventDefault();
  clearErrorMessages();


  
  isValid = true;
  // Récupérer la référence de l'élément input
  const firstInput = document.getElementById('first');

  // Récupérer la valeur saisie dans le champ
  const value = firstInput.value.trim();

  // Vérifier si la valeur a un minimum de 2 caractères et n'est pas vide
  if (value.length < 2 || value == '') {

    console.log('Le champ "first" est invalide.');
    // Ajoutez ici le code à exécuter si le champ est invalide

    isValid = false;
    displayError(firstInput, 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
  }
  // Récupérer la référence de l'élément input du nom
  const lastInput = document.getElementById('last');

  // Récupérer la valeur saisie dans le champ du nom
  const lastName = lastInput.value.trim();

  // Vérifier si le nom a un minimum de 2 caractères et n'est pas vide
  if (lastName.length < 2 || lastName == '') {
    console.log('Le champ "Nom" est invalide.');
    isValid = false;
    displayError(lastInput, 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
  }
  // Récupérer la référence de l'élément input de l'adresse électronique
  const emailInput = document.getElementById('email');

  // Récupérer la valeur saisie dans le champ de l'adresse électronique
  const emailA = emailInput.value.trim();

  // Vérifier si l'adresse électronique est valide
  if (!validateEmail(emailA)) {
    console.log('L\'adresse électronique n\'est pas valide.');
    isValid = false;
    displayError(emailInput, 'Email incorrect');
  }

  // Récupérer la valeur de la date de naissance à partir de l'élément input
  const birthdateInput = document.getElementById("birthdate");

  const date_verif = birthdateInput.value;
  const birthdateValue = new Date(birthdateInput.value);

  // Définir les limites d'âge
  const ageLimitMin = new Date();
  ageLimitMin.setFullYear(ageLimitMin.getFullYear() - 65);

  const ageLimitMax = new Date();
  ageLimitMax.setFullYear(ageLimitMax.getFullYear() - 18);
  // Vérifier si la date de naissance est valide
  if (date_verif == "") {
    document.getElementById('date_error').textContent = 'Vous devez entrer votre date de naissance.';
    isValid = false;
  }
  // Comparer la date de naissance avec les limites d'âge
  if (birthdateValue < ageLimitMin) {
    document.getElementById('date_error').textContent = 'Vous êtes encore mineur';
    isValid = false;
  } else if (birthdateValue > ageLimitMax) {
    document.getElementById('date_error').textContent = 'L\'âge limite est de 65 ans';
    isValid = false;
  }

  // Récupérer la référence de l'élément input
  const quantityInput = document.getElementById('quantity');

  // Récupérer la valeur saisie dans le champ
  const quantity = quantityInput.value.trim();

  // Vérifier si la valeur saisie est numérique
  if ((isNaN(quantity)) || (quantity < 0)) {
    console.log('La valeur saisie n\'est pas numérique.');
    displayError(quantityInput, 'Veuillez entrer une valeur numérique positive.');
  }

  // Récupérer les références des boutons radio avec le même nom de groupe
  const locationInputs = document.getElementsByName('location');

  // Vérifier si au moins un bouton radio est sélectionné
  let isLocationSelected = false;
  for (let i = 0; i < locationInputs.length; i++) {
    //console.log("test_check");
    if (locationInputs[i].checked) {
      isLocationSelected = true;
      break;
    }
  }

  // Vérifier si au moins un bouton radio est sélectionné
  if (!isLocationSelected) {
    console.log('Aucun bouton radio n\'est sélectionné.');
    document.getElementById('location-error1').textContent = 'Vous devez choisir une option.';
    isValid = false;
  }

  // Récupérer la référence de l'élément de la première case à cocher
  const checkbox1 = document.getElementById('checkbox1');

  // Vérifier si la première case à cocher est cochée
  if (!checkbox1.checked) {
    console.log('La première case à cocher est obligatoire.');
    document.getElementById('location-error2').textContent = 'Vous devez vérifier que vous acceptez les termes et conditions.';
    isValid = false;
  }
  if (isValid == true) {
    const formElement = document.getElementById("reserve_f");
    const successMessageElement = document.getElementById("success-message-container1");


    // Supprimer le formulaire
    //formElement.remove();
    resetFormulaire();
formElement.style.display = "none";
    // Afficher le message de remerciement
    successMessageElement.style.display = "block";
  }

});
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function clearErrorMessages() {
  let errorMessages = document.querySelectorAll('.error-message');
  errorMessages.forEach(function (errorMessage) {
    errorMessage.remove();
  });
}

// Fonction pour afficher un message d'erreur sous un champ de saisie
function displayError(inputElement, errorMessage) {
  // Supprimer les messages d'erreur existants
  const existingErrorMessage = inputElement.parentElement.querySelector('.error-message');
  if (existingErrorMessage) {
    existingErrorMessage.remove();
  }

  // Créer un nouvel élément de paragraphe pour le message d'erreur
  const errorElement = document.createElement('p');
  errorElement.classList.add('error-message', 'small-error-message');
  errorElement.textContent = errorMessage;

  // Insérer le message d'erreur sous le champ de saisie
  inputElement.parentElement.appendChild(errorElement);
}

let  form2 = document.forms.reserve;
function resetFormulaire() {
  form2.reset();
  let locationError3 = document.getElementById("date_error");
  locationError3.textContent = "";
  let locationError1 = document.getElementById("location-error2");
  locationError1.textContent = "";
  let locationError2 = document.getElementById("location-error1");
  locationError2.textContent = "";
  clearErrorMessages();
}




