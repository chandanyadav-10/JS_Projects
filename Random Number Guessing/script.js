let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const button = document.getElementById("submitBtn");

button.addEventListener("click", checkGuess);

function checkGuess() {
  const userGuess = Number(document.getElementById("guess").value);
  const result = document.getElementById("result");
  const scoreDisplay = document.getElementById("score");

  if (!userGuess) {
    result.textContent = "⚠️ Please enter a number!";
    return;
  }

  attempts++;

  if (userGuess === randomNumber) {
    result.textContent = "🎉 Correct! You guessed it!";
    let score = 100 - attempts;
    scoreDisplay.textContent = "Your Score: " + score;

    button.disabled = true; // stop game
  } 
  else if (userGuess > randomNumber) {
    result.textContent = "📉 Too High!";
  } 
  else {
    result.textContent = "📈 Too Low!";
  }
}

/*---------------------------------------------------------------------------------------------------------------*/

// let randomNumber = Math.floor(Math.random()*100) + 1;

// let guess;
// let noOfGuess = 0;

// while(true){
//     guess = Number(prompt("Guess Number from 1 to 100: "))

//     noOfGuess++;
    
//     if(guess === randomNumber){
//         console.log("You have guessed Correct Number: ", guess);
//         console.log("Number of Guess: ", noOfGuess);
//         console.log("Total Score: " + (100 - noOfGuess));
//         break;
//     }
//     else if(guess > randomNumber){
//         console.log("You have guessed GREATER value");
//     }
//     else if(guess < randomNumber){
//         console.log("You have guessed lower value");

//     }
//     else{
//         console.log("Invalid Value!!")
//     }
// }


