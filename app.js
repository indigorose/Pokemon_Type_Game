let types = ['Normal', "Fighting", 'Rock', 'Fire', 'Poison', 'Ghost', 'Water', ' Ground', 'Dark', 'Grass', 'Flying', 'Dragon', 'Electric', 'Psychic', 'Steel', 'Ice', 'Bug', 'Fairy']
let famous_pokemon = ['Bulbasaur', 'Squirtle', 'Charmander', 'Pikachu', 'Mew', 'MewTwo']
function getRandomID(max) {
    return Math.floor(Math.random() * max)
}
/* The aim of the game is to try and match the type to the pokemon based on what is stored in the pokemon API. 
Initially try to 'catch' 30 pokemon at random, with possible bonus points for famous pokemon.
*/

document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
	const choice = getRandomID(151)
	const url = 'https://pokeapi.co/api/v2/pokemon/'+choice
	// const nasa_key = 'tMakPDi527qDIiFdyK9zwIsVWbionCa4ImGR4vHw';
	// const url = `https://api.nasa.gov/planetary/apod?api_key=${nasa_key}&date=${choice}`;
	console.log(choice);

	fetch(url)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			console.log(data);
            console.log(data.name)
            document.querySelector('img').src = data.sprites.front_default
            document.getElementById('pokemon-name').innerHTML = data.name
            // console.log(getRandomID(151))

		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}

