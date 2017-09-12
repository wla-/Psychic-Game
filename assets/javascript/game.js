// Psychic Game Starting Point

// Create an array that lists out all of the options (a, b, c, d, e, ...)
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// Create variables to hold the number of wins, losses, and guesses remaining
var wins = 0;
var losses = 0;
var guesses = 9;
// computer randomly chooses from the options array
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
// create variable to store user guessed letters in an array
var guessedLetters = [];


// function triggered by user keyup
document.onkeyup = function(event) {
	var userGuess = event.key;
    guessedLetters.push(userGuess);
	
	console.log(userGuess);
	console.log(computerGuess);
	console.log(guessedLetters);

// if userguess equals the random computer guess, you win
	if (userGuess === computerGuess) {
		// increment wins by 1
		wins++;
		// computer guesses a new letter
		computerGuess = alphabet[Math.floor(Math.random() *alphabet.length)];
		// reset guesses to nine
		guesses = 9;
		// reset the guessed letters
		guessedLetters = [];
	}  else if (userGuess !== computerGuess) {
		// decrement guesses remaining
		guesses = guesses -1;
	}  if (guesses === 0) {
		// increment losses by 1
		losses++;
		// computer guesses a new letter
		computerGuess = alphabet[Math.floor(Math.random() *alphabet.length)];
		// reset guesses to nine
		guesses = 9;
		// reset the guessed letters
		guessedLetters = [];
	}

// dynamic updates to innerHTML
	var html = 
	"<p>Wins: " + wins + "</p>" +
	"<p>Losses: " + losses + "</p>" +
	"<p>Guesses Left: " + guesses + "</p>" +
	"<p>Your Guesses So Far: " + guessedLetters + "</p>"; 

	document.querySelector("#game").innerHTML = html;
}


