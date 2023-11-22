const body = document.querySelector("body"),
  handHour = document.querySelector(".hour"),
  handMinute = document.querySelector(".minute"),
  handSecond = document.querySelector(".second"),
  btnSwitch = document.querySelector(".push");

const day = document.querySelector(".day h4");
const tgl = document.querySelector(".date");
const turu = document.querySelector(".list");
const nice = document.querySelector(".nice button");

if (localStorage.getItem("mode") === "Dark Mode") {
  body.classList.add("dark");
  btnSwitch.textContent = "Light Mode";
}

btnSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  const isDarkMode = body.classList.contains("dark");
  btnSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
  localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
});
const updateTime = () => {
  let date = new Date();
  (secToDeg = (date.getSeconds() / 60) * 360),
    (minToDeg = (date.getMinutes() / 60) * 360),
    (hrToDeg = (date.getHours() / 12) * 360),
    (handSecond.style.transform = `rotate(${secToDeg}deg)`);
  handMinute.style.transform = `rotate(${minToDeg}deg)`;
  handHour.style.transform = `rotate(${hrToDeg}deg)`;
};

setInterval(updateTime, 1000);
updateTime();

let currentDay = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let nameDay = days[currentDay.getDay()];
let date = currentDay.getDate();
let moth = currentDay.getMonth() + 1;
let year = currentDay.getFullYear();

day.innerHTML = `${nameDay}`;
tgl.innerHTML = `${date} - ${moth} - ${year}`;

currentDay.setHours(currentDay.getHours());
let jam = currentDay.getHours();
let menit = currentDay.getMinutes();

const jamm = document.querySelector(".jam");
jamm.innerHTML = `<h1>${jam}</h1> <h1>:</h1>
<h1>${menit}</h1>`;

turu.addEventListener("click", function () {
  const popup = document.querySelector(".popup");
  popup.classList.add("active");
});
nice.addEventListener("click", function () {
  const popup = document.querySelector(".popup");
  popup.classList.remove("active");
});
