const $pokemono = document.querySelector("#pokemon");
//const $pokeName = document.querySelector("#name");
let pokemonWanted = choosePokemon("¿Qué pokemon quieres ver?").toLowerCase();

function choosePokemon(value) {
  return prompt(value);
}

function renderPokemon(image) {
    $pokemono.setAttribute("src", image);
  }
function setInfo(name) {
  document.querySelector("#data").innerHTML=name;
}

  let promesaPokemon = new Promise(function(resolve, reject) {
    let pokeReq = new XMLHttpRequest();
   
    pokeReq.addEventListener('load', function() {
      resolve(JSON.parse(this.responseText));
    });
   
    pokeReq.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+pokemonWanted)
    pokeReq.send();
  });

  promesaPokemon.then(pokemon=>renderPokemon(pokemon.sprites.front_default))
  promesaPokemon.then(pokemon=>setInfo(pokemon.species.name))