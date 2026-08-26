// document.addEventListener("load", function () {
/*
    Exercise1 — Calculator with functions 
Create:
addition()
subtraction()
multiplication()
division()

Each function receives two numbers.
Concepts
function declaration
parameters
arguments
return

Key point to remember  
You must understand the difference between:
parameter
argument
return
    */

const display = document.getElementById("display");
const historyEl = document.getElementById("history");
let current = "0";
let previous = "";
let operator = null;
let resetNext = false;

function update() {
  display.textContent = current;
  historyEl.textContent = previous + (operator ? ` ${operator}` : "");
}

function inputNumber(num) {
  if (resetNext) {
    current = num === "." ? "0." : num;
    resetNext = false;
  } else {
    if (num === "." && current.includes(".")) return;
    current = current === "0" && num !== "." ? num : current + num;
  }
  update();
}

function inputOperator(op) {
  if (previous !== "" && operator && !resetNext) calculate();
  previous = current;
  operator = op;
  resetNext = true;
  update();
}

function calculate() {
  const a = parseFloat(previous);
  const b = parseFloat(current);
  if (isNaN(a) || isNaN(b)) return;
  let result = 0;
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = b === 0 ? "Erreur" : a / b;
      break;
    case "%":
      result = a / 100;
  }
  current =
    typeof result === "string"
      ? result
      : parseFloat(result.toFixed(10)).toString();
  previous = "";
  operator = null;
  resetNext = true;
  update();
}

document
  .querySelectorAll("[data-number]")
  .forEach((b) =>
    b.addEventListener("click", () => inputNumber(b.dataset.number)),
  );
document
  .querySelectorAll("[data-operator]")
  .forEach((b) =>
    b.addEventListener("click", () => inputOperator(b.dataset.operator)),
  );

document
  .querySelector('[data-action="equals"]')
  .addEventListener("click", calculate);
document
  .querySelector('[data-action="clear"]')
  .addEventListener("click", () => {
    current = "0";
    previous = "";
    operator = null;
    update();
  });
document
  .querySelector('[data-action="plusminus"]')
  .addEventListener("click", () => {
    if (current !== "0") current = (parseFloat(current) * -1).toString();
    update();
  });
document
  .querySelector('[data-action="percent"]')
  .addEventListener("click", () => {
    current = (parseFloat(current) / 100).toString();
    update();
  });

// Clavier PC
document.addEventListener("keydown", (e) => {
  if (/[0-9]/.test(e.key)) inputNumber(e.key);
  if (e.key === ".") inputNumber(".");
  if (["+", "-", "*", "/","%"].includes(e.key))
    inputOperator({ "+": "+", "-": "-", "*": "×", "/": "÷","%":"%" }[e.key]);
  if (e.key === "Enter" || e.key === "=") calculate();
  if (e.key === "Backspace") {
    current = current.length > 1 ? current.slice(0, -1) : "0";
    update();
  }
});
update();
// });
