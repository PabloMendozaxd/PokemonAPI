const $pokemono = document.querySelector("#pokemon");
let pokemonWanted = choosePokemon("¿Qué pokemon quieres ver?").toLowerCase();

function choosePokemon(value) {
  return prompt(value);
}

function renderPokemon(image) {
    $pokemono.setAttribute("src", image);
  }

  let promesaPokemon = new Promise(function(resolve, reject) {
    let pokeReq = new XMLHttpRequest();
   
    pokeReq.addEventListener('load', function() {
      resolve(JSON.parse(this.responseText));
    });
   
    pokeReq.open('GET', 'https://pokeapi.co/api/v2/pokemon/'+pokemonWanted)
    pokeReq.send();
  });

  promesaPokemon.then((pokemon)=>renderPokemon(pokemon.sprites.front_default))