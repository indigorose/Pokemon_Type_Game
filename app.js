/* The aim of the game is to guess the name of the pokemon based on what is stored in the pokemon API. 
Initially try to 'catch' pokemon at random, with possible bonus points for famous pokemon.
*/

// Extra Scoring Pokemon
var famousPokemon = [
	'bulbasaur',
	'squirtle',
	'charmander',
	'pikachu',
	'mew',
	'mewtwo',
    'staryu',
    'starmie',
    'psyduck',
    'onix',
    'geodude',
    'vulpix',    
];

// Generate random number pokemon - original 151
function getRandomID(max) {
	return Math.floor(Math.random() * max);
}

// Store already called Pokemon to avoid double calls
var pokemonStore = [];
var answerPokemon = 'Not yet'
var guess = ''
var score = 0
var choice = 0
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
			// console.log(data.name);
			document.querySelector('img').src = data.sprites.front_default;
            answerPokemon = data.name
            console.log(`The hint is ${answerPokemon}`)
            document.getElementById('guessTitle').innerHTML = 'I think it\'s a...';          

		})
		.catch((err) => {
			console.log(`error ${err}`);
		});
}

// Guess function to create guessing buttons
document.getElementById('guessPokemon').addEventListener('click', checkAnswer);

function checkAnswer(){
    var guess = document.querySelector('input').value.toLowerCase();
    // console.log('This is my pokemon guess ' + guess)
    // console.log('This is my pokemon answer ' + answerPokemon)
    if (answerPokemon === guess){
// TODO - break down actions when we have a right answer.
        // Update the score
        console.log('great')
        scoring()
        document.getElementById('score').innerHTML = `Score: ${score}`;
        console.log(score)
        // display correct answer
        document.getElementById('answer').innerHTML = `Yes! You've found a ${answerPokemon}`
        document.getElementById('inputGuess').value = ''
        // Reset for the next round.
        setTimeout(() => {
                getPokemon()
				document.getElementById('answer').innerHTML ='';
				}, 3000);
    } else {
        document.getElementById(
            'answer'
        ).innerHTML = `Sorry, it was a ${answerPokemon} not a ${guess}`;
        document.getElementById('inputGuess').value = '';
        // Reset for the next round.
        setTimeout(() => {
            getPokemon();
            document.getElementById('answer').innerHTML = '';
        }, 3000);
    }
};
// 404 error with guessUrl
// const guessUrl = `https://pokeapi.co/api/v2/type/18`;

function scoring(){
    if (famousPokemon.includes(guess)){
        score += 2
        return score
    } else {
        score += 1
        return score
    }
};

document.getElementById('hint').addEventListener('click', hint);

function hint(){

document.getElementById('answer').innerHTML = 'Open the console - Option + ⌘ + J (on macOS), or Shift + CTRL + J (on Windows/Linux).';
    setTimeout(() => {
        document.getElementById('answer').innerHTML = '';
    }, 5000);

};