//El metodo de document, querySelector regresa el primero elemento que coincida con el selector
const $pokemono = document.querySelector("#pokemon");

function renderPokemon(image) {
  $pokemono.setAttribute("src", image);
}

let chik=choosePokemon('¿Qué pokemon quieres ver?')

function choosePokemon(value) {
  return prompt(value)
}

fetch("https://pokeapi.co/api/v2/pokemon/"+chik)
  .then((response) => response.json())
  .then((pokemon) => {
    renderPokemon(pokemon.sprites.front_default);
    console.log(typeof(pokemon))
  })
  .catch(() => {
    console.log('no wey')
    //renderMessage("Pokemon no encontrado :(");
  });