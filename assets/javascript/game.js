 

	//This is the variable for the letter choices//
 	var letters = [
	["R", "A", "C", "H", "E", "L"],
 	["C","O","D","E","S"],
  	["J","A","V","A","S","C","R","I","P","T"],
  	]

	//This is the variable for randomizing the array
	var random = Math.floor((Math.random()*(letters.length-1))); 

	//This is the variable for randomizing the words
	var words = letters[random]; 


	var guess = new Array(words.length);
	var attempts = 0;

	// every letter in the word is symbolized by an underscore in the guessfield
	for (var i = 0; i < guess.length; i++){
 	 guess[i] = "_ ";
	}

	// prints the guessfield
	function printguess(){
  	for (var i = 0; i < guess.length; i++){
  	var guessField = document.getElementById("guessField");
  	var result = document.createTextNode(guess[i]);
  	guessField.appendChild(result);
  		}
	}

	//checks if letters provided by the user match
	var checker = function(){
 	 var f = document.crossCheck; 
  	var b = f.elements["guessBox"]; 
  	var attemptedLetters = b.value; // the letter provided by the user
  	attemptedLetters = attemptedLetters.toUpperCase();
  	for (var i = 0; i < words.length; i++){
    if(words[i] === attemptedLetters){
      guess[i] = attemptedLetters + " ";
      var match = true;
   		}
  		b.value = "";
  	}
  
  //deletes the guessfield and replaces it with the new one
  var guessField = document.getElementById("guessField");
  guessField.innerHTML=""; 
  printguess();
  
  // if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
  if(!match){
    var wrongLetters = document.getElementById("wrongLetters");
    var result = document.createTextNode(" " + attemptedLetters);
    wrongLetters.appendChild(result); 
    attempts++;
    var hangman = document.getElementById("hangman");
  }
  
  //checks if all letters have been found
  var found = true;
  for (var i = 0; i < guess.length; i++){
    if(guess[i] === "_ "){
      found = false;
    }
  }
  if(found){
    window.alert("Congrats You Got it!");
  }
  
  //once you got six wrong letters, you lose
  if(attempts === 6){
    window.alert("You lose");
  }
}

function load(){
  printguess();
}

window.onload = load;

 
