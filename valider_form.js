// Récupérer la référence de l'élément bouton
const submitButton = document.querySelector('.btn-submit');
let isValid="true";
// Ajouter un gestionnaire d'événement pour l'événement 'click'
submitButton.addEventListener('click', function(event) {
  // Empêcher le comportement par défaut du bouton (rechargement de la page)
  event.preventDefault();

  // Récupérer la référence de l'élément input
  const firstInput = document.getElementById('first');

  // Récupérer la valeur saisie dans le champ
  const value = firstInput.value.trim();

  // Vérifier si la valeur a un minimum de 2 caractères et n'est pas vide
  if (value.length >= 2 && value !== '') {
    console.log('Le champ "first" est valide.');
    // Ajoutez ici le code à exécuter si le champ est valide
    // Par exemple, vous pouvez soumettre le formulaire avec submit() :
    // document.getElementById('monFormulaire').submit();
   
  } else {
    console.log('Le champ "first" est invalide.');
    // Ajoutez ici le code à exécuter si le champ est invalide
   
    isValid="false";
    displayError(firstInput, 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
  }
   // Récupérer la référence de l'élément input du nom
   const lastInput = document.getElementById('last');

   // Récupérer la valeur saisie dans le champ du nom
   const lastName = lastInput.value.trim();
 
   // Vérifier si le nom a un minimum de 2 caractères et n'est pas vide
   if (lastName.length >= 2 && lastName !== '') {
     console.log('Le champ "Nom" est valide.');
     // Ajoutez ici le code à exécuter si le champ est valide
   } else {
     console.log('Le champ "Nom" est invalide.');
     isValid="false";
     displayError(lastInput, 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
   }
   // Récupérer la référence de l'élément input de l'adresse électronique
  const emailInput = document.getElementById('email');

  // Récupérer la valeur saisie dans le champ de l'adresse électronique
  const email = emailInput.value.trim();

  // Vérifier si l'adresse électronique est valide
  if (emailInput.checkValidity()) {
    console.log('L\'adresse électronique est valide.');
    // Ajoutez ici le code à exécuter si l'adresse électronique est valide
  } else {
    console.log('L\'adresse électronique n\'est pas valide.');
   isValid="false"
  }
 // Récupérer la référence de l'élément input
 const quantityInput = document.getElementById('quantity');

 // Récupérer la valeur saisie dans le champ
 const quantity = quantityInput.value.trim();

 // Vérifier si la valeur saisie est numérique
 if (isNaN(quantity)) {
   console.log('La valeur saisie est numérique.');
   // Ajoutez ici le code à exécuter si la valeur est numérique
 } else {
   console.log('La valeur saisie n\'est pas numérique.');
   // Ajoutez ici le code à exécuter si la valeur n'est pas numérique
 }

  // Récupérer les références des boutons radio avec le même nom de groupe
  const locationInputs = document.getElementsByName('location');

  // Vérifier si au moins un bouton radio est sélectionné
  let isLocationSelected = false;
  for (let i = 0; i < locationInputs.length; i++) {
    if (locationInputs[i].checked) {
      isLocationSelected = true;
      break;
    }
  }

  // Vérifier si au moins un bouton radio est sélectionné
  if (isLocationSelected) {
    console.log('Au moins un bouton radio est sélectionné.');
    // Ajoutez ici le code à exécuter si au moins un bouton radio est sélectionné
  } else {
    console.log('Aucun bouton radio n\'est sélectionné.');
    displayError(isLocationSelected, '"Vous devez choisir une option."');
   isValid="false";
  }

  // Récupérer la référence de l'élément de la première case à cocher
  const checkbox1 = document.getElementById('checkbox1');

  // Vérifier si la première case à cocher est cochée
  if (checkbox1.checked) {
    console.log('La première case à cocher est cochée.');
    // Ajoutez ici le code à exécuter si la première case à cocher est cochée
  } else {
    console.log('La première case à cocher est obligatoire.');
    isValid="false";
  }

alert(isValid);

});


// Fonction pour afficher un message d'erreur sous un champ de saisie
function displayError(inputElement, errorMessage) {
    // Supprimer les messages d'erreur existants
    const existingErrorMessage = inputElement.parentElement.querySelector('.error-message');
    if (existingErrorMessage) {
      existingErrorMessage.remove();
    }
  
    // Créer un nouvel élément de paragraphe pour le message d'erreur
    const errorElement = document.createElement('p');
    errorElement.classList.add('error-message');
    errorElement.textContent = errorMessage;
  
    // Insérer le message d'erreur sous le champ de saisie
    inputElement.parentElement.appendChild(errorElement);
  }
 
  
  
  
  
  
  
  