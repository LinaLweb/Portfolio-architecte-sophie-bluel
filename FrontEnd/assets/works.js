// récupération des projet depuis

const projectsAPI = await fetch("http://localhost:5678/api/works");

const projects = await projectsAPI.json();

 console.log(projects);

 // récupération des catégories//

const projectsCategory = await fetch("http://localhost:5678/api/categories");

const category = await projectsCategory.json();

console.log (category);

 




 

//Selecteur pour la zone dans laquelle le code va se générer

const main = document.querySelector("main");

 

//Creation de la zone filtres des projects
export function filteredProjectsByCategory(categoryId){
    const filteredProjects = projects.filter(project => project.categoryId === categoryId);
    generateProjects(filteredProjects);

}

export function generateProjectsHead() {

    //creation section projects

    const projectsSection = document.createElement("section");

    projectsSection.id = "portfolio";

    projectsSection.innerHTML = `

        <h2>Mes projets</h2>

        <div id="filtres-container">
          <div class="categories">
            <button id="0" class="filtre-cat">Tous</button>
            ${generateButtonsFiltres(category)}
        </div>

        <div class="gallery"></div>
        

        `;

 

    main.appendChild(projectsSection);

   
}
 

    //ici prochainement à catégories

 

    //ici prochainement à génération des boutons de filtres
    export function generateButtonsFiltres (categories) {
        let buttonsHTML = "";
        Object.values(categories).forEach(category => {
            buttonsHTML +=`
            <button data-category-id="${category.id}" class ="filtre-cat-${category.name.toLowerCase()}">${category.name}</button>
            `;
        });
        return buttonsHTML;
    }    
    

//Creation des projects dans la galerie

export function generateProjects(projects) {

 

    document.querySelector(".gallery").innerHTML = "";

    projects.forEach(project => {

 

        const projectsGallery = document.querySelector(".gallery");
        

        const projectTile = document.createElement("figure");

        projectTile.dataset.id = project.id;

        projectTile.dataset.cat = project.categoryId;

        projectTile.innerHTML = `<img src="${project.imageUrl}" alt="${project.title}" crossorigin="anonymous"></img><figcaption>${project.title}</figcaption>`;

        projectsGallery.appendChild(projectTile);

    });

};

// Generation de la page principale

export function generateMainPage () {

    generateProjectsHead();

    generateProjects(projects);

    addFiltreListener();
     
   
};

function addFiltreListener (){
    const filtreButtons = document.querySelectorAll('[data-category-id]');
    filtreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const categoryId = button.dataset.categoryId;
            filteredProjectsByCategory(categoryId);
        });
    });
}



// Creation du formulaire de contact //
const form = document.createElement("form");
form.method = "post";
form.action = "";

// Ajout du titre//
const title = document.createElement("h2");
title.textContent = "Contact";
form.appendChild(title);

const paragraph = document.createElement("p");
paragraph.textContent = "Vous avez un projet ? Discutons-en !";
form.appendChild(paragraph);

// Ajout du champ pour le nom //
const nameLabel = document.createElement("p");
nameLabel.textContent = "Nom";
form.appendChild(nameLabel);

const nameInput = document.createElement("input");
nameInput.type = "name";
nameInput.name = "name";
nameInput.size = "35";
form.appendChild(nameInput);

// Ajout du champ pour l'e-mail//
const emailLabel = document.createElement("p");
emailLabel.textContent = "E-mail";
form.appendChild(emailLabel);

const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.name = "email";
emailInput.size = "35";
form.appendChild(emailInput);

// Ajout du champ pour le message//
const messageLabel = document.createElement("p");
messageLabel.textContent = "Message";
form.appendChild(messageLabel);

const messageInput = document.createElement("textarea");
messageInput.name = "text";
messageInput.cols = "35";
messageInput.rows = "10";
form.appendChild(messageInput);

// Ajout du bouton submit//
const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Envoyer";
form.appendChild(submitButton);

// Ajout du formulaire à la page //
document.body.appendChild(form);

generateMainPage();