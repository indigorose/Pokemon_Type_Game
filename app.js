/* The aim of the game is to guess the name of th pokemon based on what is stored in the pokemon API. 
Initially try to 'catch' 30 pokemon at random, with possible bonus points for famous pokemon.
*/

// let types = [
// 	'Normal',
// 	'Fighting',
// 	'Rock',
// 	'Fire',
// 	'Poison',
// 	'Ghost',
// 	'Water',
// 	'Ground',
// 	'Dark',
// 	'Grass',
// 	'Flying',
// 	'Dragon',
// 	'Electric',
// 	'Psychic',
// 	'Steel',
// 	'Ice',
// 	'Bug',
// 	'Fairy',
// ];
// Extra Scoring Pokemon
let famousPokemon = [
	'Bulbasaur',
	'Squirtle',
	'Charmander',
	'Pikachu',
	'Mew',
	'MewTwo',
];
// Generate random number pokemon - original 151
function getRandomID(max) {
	return Math.floor(Math.random() * max);
}

// Store already called Pokemon to avoid double calls
let pokemonStore = [];

// Constants
const choice = getRandomID(151);
const startUrl = 'https://pokeapi.co/api/v2/pokemon/' + choice;
// 404 error with guessUrl
// const guessUrl = `https://pokeapi.co/api/v2/type/18`;

// Button Functionality
document.getElementById('start').addEventListener('click', getPokemon);
document.getElementById('guess').addEventListener('click', checkAnswer);

function getPokemon() {
	console.log(choice);
    let guess = document.querySelector('input').value;
	fetch(startUrl)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			console.log(data);
			console.log(data.name);
			document.querySelector('img').src = data.sprites.front_default;
            let answerPokemon = data.name
			// document.getElementById('pokemon-name').innerHTML = data.name
			// console.log(getRandomID(151))
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}

// Guess function to create guessing buttons
// function checkAnswer(){

// }
