// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const form = document.getElementById("form");
const calculator = form.querySelector("input");
const span = document.querySelector("span");
const array = [];

function handleCal(event) {
  event.preventDefault();
  const button = event.submitter.innerText;
  let sum = 0;

  //let span = calculator.childNodes;
  switch (button) {
    case "C":
      calculator.value = "0";
      array.length = 0;
      break;
    case "+":
      array.push(parseInt(calculator.value));
      array.push("+");
      console.log(array);
      break;
    case "-":
      array.push(parseInt(calculator.value));
      array.push("-");
      break;
    case "/":
      array.push(parseInt(calculator.value));
      array.push("/");
      break;
    case "*":
      array.push(parseInt(calculator.value));
      array.push("*");
      break;
    case "=":
      array.push(parseInt(calculator.value));
      console.log(array);
      if (array[1] === "+") {
        sum = array[0] + array[3];
      } else if (array[1] === "-") {
        sum = array[0] - array[3];
      } else if (array[1] === "/") {
        sum = array[0] / array[3];
      } else if (array[1] === "*") {
        sum = array[0] * array[3];
      } else {
        sum = array[0];
      }
      calculator.value = sum;
      array.length = 0;
      break;
    default:
      if (calculator.value === "0") {
        calculator.value = "";
        //calculator.value = parseInt(button);
      }
      if (array.length === 2) {
        calculator.value = "";
        array.push(0);
        console.log(array);
      }
      if (array[1] === "*") {
        calculator.value = "";
        sum = array[0] * parseInt(button);
        calculator.value = sum;
        array.length = 0;
      } else {
        calculator.value += button;
      }
  }
}

function init() {
  form.addEventListener("submit", handleCal);
}
init();
