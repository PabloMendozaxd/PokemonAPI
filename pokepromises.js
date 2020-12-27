//El metodo de document, querySelector regresa el primero elemento que coincida con el selector
const $pokemono = document.querySelector("#pokemon");

function renderPokemon(image) {
  $pokemono.setAttribute("src", image);
}

let pokemonWanted = choosePokemon("¿Qué pokemon quieres ver?");

function choosePokemon(value) {
  return prompt(value);
}

fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonWanted)
  .then((response) => response.json())
  .then((pokemon) => {
    renderPokemon(pokemon.sprites.front_default);
  })
  .catch(() => {
    console.log("no wey");
    renderMessage("Pokemon no encontrado :(");
  });