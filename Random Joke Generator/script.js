const jokesList = [
  "Why do programmers prefer dark mode? Because light attracts bugs 🐛",
  "Why do Java developers wear glasses? Because they don’t C# 👓",
  "A SQL query walks into a bar, walks up to two tables and asks: 'Can I join you?'",
  "Why was the developer broke? Because he used up all his cache 💸",
  "There are only 10 types of people in the world: those who understand binary and those who don’t 😄",
  "Why do programmers hate nature? Too many bugs 🌿🐛",
  "How many programmers does it take to change a light bulb? None, that's a hardware problem 💡",
  "I told my computer I needed a break, and it said: 'No problem — I’ll go to sleep' 😴",
  "Debugging: Removing the needles from the haystack 🧠",
  "Why did the programmer quit his job? Because he didn’t get arrays (a raise) 📉",
  "What's a programmer’s favorite hangout place? Foo Bar 🍻",
  "Why did the function return early? Because it had a condition 😏",
  "Real programmers count from 0, not 1 🔢",
  "Why was the JavaScript developer sad? Because he didn’t know how to 'null' his feelings 😢",
  "I would tell you a joke about recursion… but you’d have to understand recursion first 🤯",
  "Why did the computer show up at work late? It had a hard drive 🚗",
  "Why do Python programmers hate indentation errors? Because they’re space-sensitive 😅",
  "Why did the programmer go broke? Because he lost his domain 💻",
  "Why are programmers always calm? Because they know how to handle exceptions 😎",
  "Programmer: A machine that turns coffee into code ☕➡️💻",
];

let btn = document.getElementById("newJoke");
btn.addEventListener("click", function () {
  let randomJoke = Math.floor(Math.random() * jokesList.length);
  let joke = document.getElementById("jokes");
  joke.innerHTML = jokesList[randomJoke];
});
