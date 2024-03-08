//M
let pikachu = {
  name: "Pikachu",
  health: 45,
  image: "/Images/pikachu.png",
  level: 8,
};

let bulbasaur = {
  name: "Bulbasaur",
  health: 70,
  image: "/Images/bulbasaur.png",
  level: 12,
};

let oranguru = {
  name: "Oranguru",
  health: 170,
  image: "/Images/oranguru.png",
  level: 45,
};

let drowzee = {
  name: "Drowzee",
  health: 90,
  image: "/Images/drowzee.png",
  level: 33,
};

let possiblePokemon = [pikachu, bulbasaur, oranguru, drowzee];
let randomPokemon;

let player = {
  Name: "Bjarne",
  Image: "/Images/pokemonTrainerIdle.png",
  Pokemon: [],
}

let app = document.getElementById("app");

//V
updateView();
function updateView() {
  getRandomPokemon();
  app.innerHTML = /*HTML*/ `
    <div class="container">
      <div class="opposingPokemon">
          <div>${randomPokemon.name} </div>
          <div>lvl: ${randomPokemon.level}</div>
          <img src="${randomPokemon.image}">
      </div>
      <div class="bottomScreen">
          <div class="player">
              <img src="${player.Image}">
              <div>${player.Name}</div>
          </div>
          <div class="buttonContainer">
              <button onclick="catchPokemon()">Fang</button>    
              <button onclick="updateView()">Finn en annen</button>
              <button onclick="showPokemon()">Vis dine pokemon</button>       
          </div>
      </div>
    </div>
  `;
}

function caughtPokemonView() {
  app.innerHTML = /*HTML*/ `
  <div class="caughtContainer">
    <h1>Du fanget ${player.Pokemon[player.Pokemon.length - 1].name}</h1>
    <div class="buttonContainer">
      <button onclick="updateView()">Finn en annen</button>
      <button onclick="showPokemon()">Vis dine pokemon</button>       
    </div>
  </div>
  `;
}

function playerPokemonView() {
  let html = '';
  for (i = 0; i < player.Pokemon.length; i++) {
    html += /*HTML*/`
      <div class="ownedPokemon">
        <img src="${player.Pokemon[i].image}">
        <div>${player.Pokemon[i].name}</div>
      </div>
    `;
  }
  app.innerHTML = /*HTML*/ `
    <div class="playerPokemonContainer">
      <h3>Liste over dine Pokemon</h3>
      ${html}
      <div class="buttonContainer">
          <button onclick="updateView()">Finn flere pokemon</button>
      </div>
    </div>
  `;
}

//C
function catchPokemon() {
  player.Pokemon.push(randomPokemon);
  caughtPokemonView();
}

function showPokemon() {
  playerPokemonView();
}

function getRandomPokemon() {
  let randomNum = Math.floor(Math.random() * possiblePokemon.length);
  randomPokemon = possiblePokemon[randomNum];
}
