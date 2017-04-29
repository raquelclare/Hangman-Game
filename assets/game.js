// List of potential words for the game
		var words = ["sandwhich", "noodles", "popcorn", "jerky", "chicken", "coconut", "nutella", "burger", "fries", "pizza", "pancakes", "spanakopita"];

		var wins = 0;
		document.getElementById("wins").innerHTML = wins;

		var losses = 0;
		document.getElementById("losses").innerHTML = losses;

		// This needs to decrement by 1 for each wrong guess?
		var guessesLeft = 7; 
		document.getElementById("guessesleft").innerHTML = guessesLeft;

		// Everytime they enter a guess push the letter into array
		var guesses = [];
		document.getElementById("lettersguessed").innerHTML = guesses;
		
		
		

		// Choosing a random word from the words array
		// var word = Math.floor(Math.random() * words.length);
		var randomIndex = Math.floor(Math.random() * words.length);
		var word = words[randomIndex];
		console.log(word)

		// Replacing each letter in the random word chosen with underscores
		var blanks = word.split("").map(function(){
				return "_"});
		document.getElementById("word").innerHTML = blanks;
		

		document.onkeyup = function(event){
			// Pressing key will now equal guess
			var guess = (event.key).toLowerCase();
			console.log(guess);
			// guesses.push(guess);

			//Displays new guess count
			document.getElementById("guessesleft").innerHTML = guessesLeft;
			var index = word.indexOf(guess);

			// event.preventDefault();
			// console.log(key);
			// word.indexOf(key);

			if(index === -1){
				// I want the amount of guesses left to decrement by one and 
				//only when the guess is wrong 
				guessesLeft--;
				guesses.push(guess);
				document.getElementById("guessesleft").innerHTML = guessesLeft;
				document.getElementById("lettersguessed").innerHTML = guesses;
			};

			//
			while(index > -1){
				blanks[index] = guess;
				var index = word.indexOf(guess, index + 1);
				guesses.push(guess);
				document.getElementById("word").innerHTML = blanks;
				document.getElementById("lettersguessed").innerHTML = guesses;
			};

			// You win if the underscores are no longer in the word array
			if(blanks.indexOf("_") === -1){
				//you have won! Game needs to reset
				wins++;
				document.getElementById("wins").innerHTML = wins;
				alert("You win!"); 
				location.reload();
				guessesLeft = 7;
				guesses = [];
			};

			// You lose if the amount of guesses left is equal to zero
			if(guessesLeft === 0){
				//you lost! Game needs to reset
				losses++;
				alert("You lose!"); 
				location.reload();
			};
		}