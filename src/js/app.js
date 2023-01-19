import "../scss/app.scss";
const url = 'https://pokeapi.co/api/v2/pokemon?limit=10';

window.addEventListener("DOMContentLoaded", () => {
  const ul = document.querySelector("ul");

  fetch(url).then((Response) => {

    if (Response.status !== 200) {
      console.log("Oh nooo, ${response status}");
      return;
    }

    Response.json().then((data) => {
      const arrayOfPok = data.results
      arrayOfPok.map(pokname => {
        const li = document.createElement("li");
        li.innerText = pokname.name;
        ul.appendChild(li);
      });
    });
  });
});
