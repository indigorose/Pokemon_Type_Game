/* The aim of the game is to guess the name of the pokemon based on what is stored in the pokemon API. 
Initially try to 'catch' 30 pokemon at random, with possible bonus points for famous pokemon.
*/

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
let answerPokemon = 'Not yet'
let score = 0

// Button Functionality
document.getElementById('start').addEventListener('click', getPokemon);

function getPokemon() {
	let choice = getRandomID(151);
    let startUrl = 'https://pokeapi.co/api/v2/pokemon/' + choice;
    console.log(choice);
	fetch(startUrl)
		.then((res) => res.json()) // parse response as JSON
		.then((data) => {
			// console.log(data);
			console.log(data.name);
			document.querySelector('img').src = data.sprites.front_default;
            answerPokemon = data.name
            console.log(answerPokemon)
		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}
document.getElementById('guessPokemon').addEventListener('click', checkAnswer);
// Guess function to create guessing buttons
function checkAnswer(){
    let guess = document.querySelector('input').value.toLowerCase();
    console.log('This is my pokemon guess ' + guess)
    console.log('This is my pokemon answer ' + answerPokemon)
    if (answerPokemon === guess){
// TODO - break down actions when we have a right answer.
        console.log('great')
        score +=1
        console.log(score)
        pokemonStore.push(answerPokemon)
        console.log(pokemonStore)
        getPokemon()

    } else {
        console.log('wrong answer')
        getPokemon()
    }
};
// 404 error with guessUrl
// const guessUrl = `https://pokeapi.co/api/v2/type/18`;