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

  const zone = document.getElementById("inc");

  zone.textContent = "";

  for (let num = 1; num <= 100; num++) {
    if (num % 2 == 0 && num % 5 == 0) {
      console.log(num);
      zone.textContent += num + "-";
    }
  }

  for (let num = 100; num >= 1; num--) {
    if (num % 2 == 0 && num % 5 == 0) {
      console.log(num);
      zone.textContent += num + "-";
    }

    // document.getElementById("inc").textContent += num + '<br>'
  }
});
