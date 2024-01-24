document.querySelector(".form-login").addEventListener("submit", async (event) => {
  event.preventDefault();

  const loginConnection = {
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
  };

  console.log(loginConnection);

  const reponse = await fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(loginConnection)
  })
  const token = await reponse.json();
  if (reponse.ok == true) {
    alert("connexion réussie")
    localStorage.setItem("userId", token.token);
    window.location.href = "index.html";
  } else {
    alert("Erreur dans l’identifiant ou le mot de passe")
  }

  

  // .catch(error => {
  //  console.error(error);
  


});


