// function to create delay
function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

// function to print message
async function showMessage(message) {
  let output = document.getElementById("hacking_process");

  let line = document.createElement("p");
  output.appendChild(line);

  // typing effect
  for (let i = 0; i < message.length; i++) {
    line.innerText += message[i];
    await delay(50);
  }
}

// main async function
let isRunning = false;
async function hackProgram() {
if (isRunning) return;   // 🚫 stop if already running

  isRunning = true;
  let output = document.getElementById("hacking_process");
  output.innerText = "" 
  await showMessage("Initializing Hack program...");
  await delay(1000);

  await showMessage("Hacking Ashish's username...");
  await delay(1000);

  await showMessage("Username found: aashish17...");
  await delay(1000);

  await showMessage("Connecting to Facebook...");
}



// run program
// hackProgram();

let btn = document.getElementsByTagName("button");
btn[0].addEventListener('click', hackProgram)