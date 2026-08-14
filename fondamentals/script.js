/*

Ex 1
personnal presentation

write a script that will present yourself in the console. You can use console.log() to display your name, age, and a short description about yourself.          

*/
window.addEventListener("load", function () {
  // let name ;
  // name = "yobs koler";
  // const age = 22;
  // const city = "Douala";
  // const Language = "JavaScript";
  // const formation = "I'am doing a specialisaion in sofware engeneering ";

  // // console.log(
  // //   ` Goodmorning my name is ${name}, i have ${age} years old and i'm living at ${city} . actually ${formation}, m favorite programming language is ${Language} `,
  // // );

  // if (city) {
  // //   console.log("i am the best");
  // }

  // // the diff btw le and const is that (let) can be declare and initialise later  while const is declare and initialise
  // // the variable daclare with (let) can be change through the code or the process while with cons is not possible

  // EX 2 simple calculator

  const form = document.getElementById("calForm");
  console.log(form);

  form.addEventListener("submit", function calcultor(event) {
    event.preventDefault();

    const n1 = Number(document.getElementById("number1").value);
    const n2 = Number(document.getElementById("number2").value);

    const operator = document.querySelector(
      'input[name="operation"]:checked',
    ).value;

    let result;

    if (operator === "*") {
      result = n1 * n2;
    } else if (operator === "+") {
      result = n1 + n2;
    } else if (operator === "-") {
      result = n1 - n2;
    } else if (operator === "/") {
      result = n2 !== 0 ? n1 / n2 : "error division by 0";
    } else if (operator === "%") {
      result = n2 !== 0 ? n1 / n2 : "error modulo by 0";
    } else {
      result = "unknown operation ";
    }

    document.getElementById("result").textContent = result;

    console.log(n1);
    console.log(n2);
    console.log(result);
  });

  // form.addEventListener
});
