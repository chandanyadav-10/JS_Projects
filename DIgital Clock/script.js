let alarmTime = null;
let sound = document.getElementById("alarmSound");
let status = document.getElementById("status");
let dateTime = document.getElementsByClassName("date");

let updateTime = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let dates = date.getDate();
  let months = date.getMonth();
  let years = date.getFullYear();

  let ampm = hours >= 12 ? "PM" : "AM";

  // hours = hours % 12;
  // hours = hours ? hours : 12;


  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  dates = dates < 10 ? "0" + dates : dates;
  months = months + 1;
  months = months < 10 ? "0" + months : months;

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  dateTime[0].innerHTML = hours;
  dateTime[1].innerHTML = minutes;
  dateTime[2].innerHTML = seconds;
  dateTime[3].innerHTML = ampm;
  dateTime[4].innerHTML = `${days[date.getDay()]} ${dates}/${months}/${years}`;

  if (alarmTime === `${hours}:${minutes}`) {
    sound.play();
    alarmTime = null; // stop future triggers
    status.textContent = "Alarm is Ringing!!";
  }
};

setInterval(updateTime, 1000);

function setAlarm() {
  alarmTime = document.getElementById("alarmTime").value;
  if (alarmTime) {
    status.textContent = `Alarm set for ${alarmTime}`;
  } else {
    status.textContent = "Please select time!";
  }
}

function stopAlarm() {
  sound.pause();
  sound.currentTime = 0;
  alarmTime = null; // disable alarm
  document.getElementById("alarmTime").value = "";
  status.textContent = "Alarm stopped";
}
