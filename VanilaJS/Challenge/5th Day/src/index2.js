//import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const KSThours = NINE_HOURS_MILLISECONDS/(60*60*1000);
//UTC시간에서 KST시간으로 구하기 위해
const div = document.querySelector(".js-clock");
const clock = div.querySelector("h2");

function getTime() {
    const xmasDay = new Date("2020-12-24:00:00:00+0900");
    const now = new Date();
    // This is in milisecondsx
    const difference = new Date(xmasDay - now);
    const secondsInMs = Math.floor(difference / 1000);
    const minutesInMs = Math.floor(secondsInMs / 60);
    const hoursInMs = Math.floor(minutesInMs / 60);
    const days = Math.floor(hoursInMs / 24);
    const seconds = secondsInMs % 60;
    const minutes = minutesInMs % 60;
    const hours = hoursInMs % 24;
    const daysStr = `${days < 10 ? `0${days}` : days}d`;
    const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
    const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
    const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
    clock.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
  }
  console.log(differ)

function init() {
  setInterval(getTime, 1000);
}

init();
