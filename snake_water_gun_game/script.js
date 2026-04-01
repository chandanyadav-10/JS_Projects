// Array for choices
const choices = ["S", "W", "G"];

// Convert to full names
const names = {
  S: "Snake 🐍",
  W: "Water 🥤",
  G: "Gun 🔫"
};

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(user, computer) {
  if (user === computer) return "Draw 🤝";

  if (
    (user === "S" && computer === "W") ||
    (user === "W" && computer === "G") ||
    (user === "G" && computer === "S")
  ) {
    return "You Win 🎉";
  } else {
    return "You Lose 😢";
  }
}

function playGame(userChoice) {
  let computerChoice = getComputerChoice();
  let result = getResult(userChoice, computerChoice);

  document.getElementById("userChoice").innerText =
    "Your Choice: " + names[userChoice];

  document.getElementById("computerChoice").innerText =
    "Computer: " + names[computerChoice];

  document.getElementById("result").innerText =
    "Result: " + result;
}

function resetGame() {
  document.getElementById("userChoice").innerText = "Your Choice: -";
  document.getElementById("computerChoice").innerText = "Computer: -";
  document.getElementById("result").innerText = "Result: -";
}




//My Solution--------------------------------------------------------------------------
// let SWG = ["S", "W", "G"];

// let randomChoice = SWG[Math.floor(Math.random() * SWG.length)];

// let getResult = (user, computer) => {
//     if (user === randomChoice) {
//         return "Match Draw";
//     }
//     else if ((user === "S" && computer === "W") ||
//         (user === "W" && computer === "G") ||
//         (user === "G" && computer === "S")) {

//         return "You Win!"
//     }
//     else {
//         return "You lose!"
//     }
// }

// let runAgain = true;

// while (runAgain) {
//     let userChoice = prompt("Enter S (Snake), W (Water), or G (Gun):");

//     if (!userChoice) {
//         alert("Game Cancelled")
//         break;
//     }

//     userChoice = userChoice.toUpperCase();

//     if (!SWG.includes(userChoice)) {
//         alert("Invalid input! Please enter only S, W, or G.");
//         continue;
//     }

//     let computer = randomChoice;
//     let result = getResult(userChoice, computer)

//     alert(
//         `You chose: ${userChoice}\nComputer chose: ${computer}\n\n${result}`
//     );

//     playAgain = confirm("Do you want to play again?");

// }
