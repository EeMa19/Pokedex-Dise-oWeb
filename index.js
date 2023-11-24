const inputPokeId = document.getElementById("PokeId");
const btnNum = document.querySelectorAll(".btnNumero");
const btnCancel = document.getElementById("btnCancel");
const btnGet = document.getElementById("btnGet");
let imgSprite = document.querySelector('#img-sprite');
let PokeName = document.querySelector('#PokeName');
let PokedexID = document.querySelector('#PokedexID');
var audio = document.getElementById('PokedexAudio');
var MusicaFondo = document.getElementById('audio');
MusicaFondo.volume = 0.6;

btnNum.forEach((btn) => {
  btn.addEventListener("click", function () {
    const number = btn.textContent;

    inputPokeId.value += number;
  });
});

btnCancel.addEventListener("click", function () {
  inputPokeId.value = "";
});

btnGet.addEventListener('click', getData)

async function getData(){
  audio.volume = 1;
  if (audio.paused) {
    audio.play();
} else {
    audio.pause();
}

  const PokeId = inputPokeId.value
  try {
    const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokeId}/`)
    const pokemon = await promise.json()

    imgSprite.src = pokemon.sprites.front_default
    PokeName.value= ("Pokemon: "+ pokemon.name)
    PokedexID.value=("PNN: "+inputPokeId.value)

  } catch(err) {
    alert('Ocurrió un error ' + err)
  }
  inputPokeId.value = "";
}
