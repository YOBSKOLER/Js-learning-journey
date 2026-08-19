window.addEventListener("load", function () {
  /*
  ex 1
  write a programme that will show the level of appreciation of a student accordin to his mark
  */
  const table = document.getElementById("marks");

  table.addEventListener("submit", function (event) {
    event.preventDefault();

    const maks = [
      Number(document.getElementById("mark").value),
      Number(document.getElementById("mark1").value),
      Number(document.getElementById("mark2").value),
    ];

    maks.forEach((mak, index) => {
      let appr;
      if (mak < 10) {
        appr = "insufficient";
        console.log(appr);
      } else if (mak >= 10 && mak < 13) {
        appr = "Average";
        console.log(appr);
      } else if (mak >= 13 && mak < 16) {
        appr = "Good";
        console.log(appr);
      } else {
        appr = "Very Good";
        console.log(appr);
      }

      document.getElementById("app" + (index === 0 ? "" : index)).textContent =
        appr;
    });
  });

  /*
  ex 2
  write a programme that will show the even numbers between 1 and 100 that are divisible by 5
  
  */

  const zone = document.getElementById("inc");

  zone.innerHTML = "";

  for (let num = 1; num <= 100; num++) {
    if (num % 2 == 0 && num % 5 == 0) {
      // console.log(num);
      zone.innerHTML += num + "<br>";
    }
  }

  for (let num = 100; num >= 1; num--) {
    if (num % 2 == 0 && num % 5 == 0) {
      // console.log(num);
      zone.innerHTML += num + "-";
    }

    // document.getElementById("inc").textContent += num + '<br>'
  }

  /*

for loop is best when the number of iterations is known (like counting or iterating through arrays).

while loop  best when the number of iterations is unknown and depends on a condition 
(like waiting for user input, or looping until a certain state is reached).

*/
  let i = 100;
  while (i >= 1) {
    if (i % 5 === 0 && i % 2 === 0) {
      console.log(i);
    }
    i--;
  }

  /*
Exercise 7 — Multiplication Table

The user chooses a number.

Example:
5 × 1 = 5
5 × 2 = 10
and so on...
Concepts:
- loop
- variables
- calculation
- template literals
*/

  const form = document.getElementById("times");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const number = Number(document.getElementById("number").value);
    let result = "";

    for (let i = 0; i <= 10; i++) {
      result += `${number} × ${i} = ${number * i}<br>`;
    }
    document.getElementById("result").innerHTML = result;
  });
});
