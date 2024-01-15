// Creation du formulaire de connection //
const form = document.createElement("form");
form.method = "post";
form.action = "./assets/works.js";

// Ajout du titre//
const title = document.createElement("h2");
title.textContent = "Log In";
form.appendChild(title);

// Ajout du champ pour l'e-mail//
const emailLabel = document.createElement("p");
emailLabel.textContent = "E-mail";
form.appendChild(emailLabel);

const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.name = "email";
emailInput.size = "25";
form.appendChild(emailInput);

// Ajout du champ pour le mot de passe//
const passwordLabel = document.createElement("p");
passwordLabel.textContent = "Mot de passe";
form.appendChild(passwordLabel);

const passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.name = "password";
passwordInput.size = "25";
form.appendChild(passwordInput);

// Ajout du bouton submit//
const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Se connecter";
form.appendChild(submitButton);

// Ajout du lien mot de passe oublié //
const forgotPasswordLink = document.createElement("a");
forgotPasswordLink.href = "#";
forgotPasswordLink.textContent = "Mot de passe oublié";
form.appendChild(forgotPasswordLink);


// Gère l'evenement pour la soumission du formulaire de connexion//
form.addEventListener("submit", function (event){
    event.preventDefault(); // Empêche le rechargement de la page//

    //Recupère les valeurs saisies par l'utilisateur//
    const email = emailInput.value;
    const password = passwordInput.value;

   //Vérifie les informations de l'utilisateur pour le mot de passe//
   if (email === "utilisateur@test.com" && password === "motdepasse") {
    // Redirection vers la page d'acceuil//
    window.location.href = "./assets/works.js";
   } else {
    // Affiche un message d'erreur//
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Mot de passe incorrect";
    form.appendChild(errorMessage);
   }
});

// Ajout du formulaire à la page //
document.body.appendChild(form);

generateMainPage();
