// Psychic Game Starting Point

// Create an array that lists out all of the options (a, b, c, d, e, ...)
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// Create variables to hold the number of wins, losses, and guesses remaining
var wins = 0;
var losses = 0;
var guesses = 9;

// computer randomly chooses from the options array
// var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

// while (guesses > 0) {
  // document.onkeyup = function(event) {
	// var userGuess = event.key;
  // }
  // if (userGuess === computerGuess) {
  	// wins = wins + 1;
  // } else {
  	// guesses = guesses - 1;
  // }
// }
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

document.onkeyup = function(event) {
	var userGuess = event.key;
	var guessedLetters = [];
            guessedLetters.push(userGuess);
	console.log(userGuess);
	
	console.log(computerGuess);

	console.log(guessedLetters);

	if (userGuess === computerGuess) {
		wins++;
	}  else if (userGuess !== computerGuess) {
		guesses = guesses -1;
	}  

	if (guesses === 0) {
		losses++;
	}

	var html = 
	"<p>wins: " + wins + "</p>" +
	"<p>losses: " + losses + "</p>" +
	"<p>guesses left: " + guesses + "</p>" +
	"<p>your guesses so far: " + guessedLetters + "</p>"; 

	document.querySelector("#game").innerHTML = html;
}
// function for user guessing a letter (by pressing a key)




// logic determining outcome of game

// create variable to hold new html to track user guesses, wins, losses

