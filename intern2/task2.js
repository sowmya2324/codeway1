const display = document.querySelector(".bin");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (data) => {
  display.focus();
  if (data === "=" && output !== "") {

    output = eval(output.replace("%", "/100"));
  } else if (data === "AC") {
    output = "";
  } else if (data === "DEL") {

    output = output.toString().slice(0, -1);
  } else {
    //If output is empty and button is specialChars then return
    if (output === "" && specialChars.includes(data)) return;
    output += data;
  }
  display.value = output;
};


buttons.forEach((button) => {
  
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});