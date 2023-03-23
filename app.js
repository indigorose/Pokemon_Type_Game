let types = ['Normal', "Fighting", 'Rock', 'Fire', 'Poison', 'Ghost', 'Water', ' Ground', 'Dark', 'Grass', 'Flying', 'Dragon', 'Electric', 'Psychic', 'Steel', 'Ice', 'Bug', 'Fairy']
let famous_pokemon = ['Bulbasaur', 'Squirtle', 'Charmander', 'Pikachu', 'Mew', 'MewTwo']
function getRandomID(max) {
    return Math.floor(Math.random() * max)
}
/* The aim of the game is to try and match the type to the pokemon based on what is stored in the pokemon API. 
Initially try to 'catch' 30 pokemon at random, with possible bonus points for famous pokemon.
*/
// Constants
const choice = getRandomID(151)
const startUrl = 'https://pokeapi.co/api/v2/pokemon/'+choice
// 404 error with guessUrl
const guessUrl = `https://pokeapi.co/api/v2/type/18`;

// Button Functionality
document.getElementById('start').addEventListener('click', getPokemon);

document.getElementById('guess').addEventListener('click', guessType);

function getPokemon() {
	console.log(choice);
	fetch(startUrl)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			console.log(data);
            console.log(data.name)
            console.log(data.types)
            document.querySelector('img').src = data.sprites.front_default
            document.getElementById('pokemon-name').innerHTML = data.name
            // console.log(getRandomID(151))

		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}

// Guess function to search API date for type by ID(choice)
function guessType() {
	console.log(choice);
    console.log(typeof choice)
	fetch(guessUrl)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			console.log(data);
			console.log(data.name);
			document.getElementById('answer').innerHTML = data.name;
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}