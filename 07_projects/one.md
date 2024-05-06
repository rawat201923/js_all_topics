# All project on DOM
[click here]https://codesandbox.io/p/live/12838c5e-2eff-4174-a5d6-1c46418c49bf
## project 1

COLOR SWITCHER
```
const buttons = document.querySelectorAll(".button");
console.log(buttons);
const body = document.querySelector("body");

buttons.forEach(function (btn) {
  console.log(btn);
  btn.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "black") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## PROJECT 2
BMI Calculator

```const form = document.querySelector("form");
//const weight = parseInt(document.querySelector("#weight").value);
// this use case will give you empty
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const guide = document.querySelector("#guide");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      guide.innerHTML = `you are under weight`;
    } else if (18.6 < bmi < 24.9) {
      guide.innerHTML = `you have normal weight`;
    } else {
      guide.innerHTML = `you are over weight`;
    }
  }
});
```

## project 3
digital clock

```const clock = document.getElementById("clock");

setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## project 4
Guess a number

