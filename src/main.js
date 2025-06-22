import axios from "axios";
import "./css/styles.css";


// Використовуємо https://pokeapi.co/ та створимо сторінку перегляду покемонів


const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

const container = document.querySelector(".card-container");
const form = document.querySelector(".search-form");

form.addEventListener("submit", onSearch);

async function fetchPokemon(pokemonName) {
    const result = await axios(`${BASE_URL}${pokemonName}`);
    return result.data;
}

async function onSearch(event) {
    event.preventDefault();
    const searchQuery = event.currentTarget.elements.query.value;

    if (!searchQuery.trim()) {
        alert("Please enter a Pokémon name");
        return;
    }
    
    try {
        const data = await fetchPokemon(searchQuery)
        console.log(data);

        container.innerHTML = renderPokemonCard(data);
    }
    catch (error) {
        if (error.response && error.response.status === 404) {
            alert("Pokémon not found. Please check the name.");
        } else {
            alert("Something went wrong. Try again later.");
        }
    }

    form.reset();
}
    
// function renderPokemonCard({ name, weight, height, abilities, sprites
// }) {
//     const abilitiesList = abilities.map(({ ability }) =>
//         `<li class="list-group-item">${ability.name}></li>`).join("");
//     return `
//     <div class="card">
//     <div class="card-img-top">
//     <img src="${sprites.front_default}" alt="${name}"/>
//         </div>
//     <div class="card-body">
//     <h3 class="title">${name}</h3>
//     <p class="card-text">Weight: ${weight}</p>
//     <p class="card-text">Height: ${height}</p>
//     <p class="card-text"><h4>Abilities:</h4> <ul>${abilitiesList}</ul></p>
//     </div>
//     </div>`
// }


//  Щоб картка покемона виглядала як Bootstrap Card, давай оформимо її з урахуванням класів Bootstrap 5.

function renderPokemonCard({ name, weight, height, abilities, sprites }) {
    const abilitiesList = abilities
      .map(({ ability }) => `<li class="list-group-item">${ability.name}</li>`)
      .join("");
  
    return `
      <div class="card mx-auto mt-4 shadow animate-in" style="width: 22rem;">
        <img src="${sprites.front_default}" class="card-img-top p-3" alt="${name}" />
        <div class="card-body">
          <h5 class="card-title text-capitalize text-center">${name}</h5>
          <p class="card-text"><strong>Weight:</strong> ${weight}</p>
          <p class="card-text"><strong>Height:</strong> ${height}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item active">Abilities</li>
          ${abilitiesList}
        </ul>
      </div>`;
  }