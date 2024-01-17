// récupération des projet depuis

const projectsAPI = await fetch("http://localhost:5678/api/works");

const projects = await projectsAPI.json();

 console.log(projects);

 // récupération des catégories//

const projectsCategories = await fetch("http://localhost:5678/api/categories");

const categories = await projectsCategories.json();

console.log (categories);

 




 

//Selecteur pour la zone dans laquelle le code va se générer

const main = document.querySelector("main");



export function generateProjectsHead() {

    //creation section projects

    const projectsSection = document.createElement("section");

    projectsSection.id = "portfolio";

    projectsSection.innerHTML = `

        <h2>Mes projets</h2>
        
        <div id="filtres-container">
          <div class="categories">
            <button id="0" class="filtre-cat">Tous</button>
        </div>    
        </div>

        <div class="gallery"></div>
        

        `;

 

    main.appendChild(projectsSection);
    categories.forEach(category => {

        const filtreCat = document.createElement("button");
        filtreCat.id = category.id;
        filtreCat.classList.add("filtre-cat");
        filtreCat.innerText = category.name;
        document.querySelector("#filtres-container").appendChild(filtreCat);
    });
    
    //génération des boutons de filtres
    const filtersBtns = document.querySelectorAll(".filtre-cat");
    
    filtersBtns.forEach(filterCat => {
        filterCat.addEventListener("click", ()=> {
    
            const filteredProjects = projects.filter((project)=> {return project.category.id == filterCat.id});
            !!+filterCat.id ? generateProjects(filteredProjects) : generateProjects(projects);
        });
    });
    

//Creation des projects dans la galerie
}
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
    
    generateFormContact();
   
    
};



// Creation bloc formulaire de contact
function generateFormContact(){
        
    //creation bloc contact        
    const contactSection = document.createElement("section");
    contactSection.id = "contact";
    contactSection.innerHTML = `
        <h2>Contact</h2>
        <p>Vous avez un project ? Discutons-en !</p>
            <form action="#" method="post"><label for="name">Nom</label>
                <input type="text" name="name" id="name">
                <label for="email">Email</label>
                <input type="email" name="email" id="email">
                <label for="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
                <button type="submit" class="main-btn" value="Envoyer">Envoyer</button>
            </form>`;
    main.appendChild(contactSection);
};

generateMainPage();