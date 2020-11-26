// PALINDROM

const buttonTaskOne = document.querySelector(".button_task-one");
const inputTaskOne = document.querySelector(".input_task-one");

const palindrom = () => {
  const str = inputTaskOne.value.toLowerCase();
  const strClean = str.replace(/[\s.,%!?#]*/g, "");
  const strArray = strClean.split(``);
  console.log(strArray);
  const strArrayRev = strClean.split(``).reverse();
  console.log(strArrayRev);
  for (let i = 0; i < strArray.length; ++i) {
    if (strArray[i] !== strArrayRev[i]) {
      return alert(`false`);
    }
  }
  alert(`true`);
};

buttonTaskOne.addEventListener("click", palindrom);

// FIZZBUZZ
const buttonTaskTwo = document.querySelector(".button_task-two");
const inputTaskTwo = document.querySelector(".input_task-two");
const answer = document.querySelector(".paragraph-two");

const fizzBuzz = () => {
  const number = inputTaskTwo.value;
  let x = null;
  let i = 1;
  const numberArray = [];
  for (i; i <= number; ++i) {
    if (i % 3 == 0 && i % 5 == 0) {
      x = `fizzBuzz`;
    } else {
      if (i % 3 == 0) {
        x = `fizz`;
      } else {
        if (i % 5 == 0) {
          x = `buzz`;
        } else {
          x = i;
        }
      }
    }
    numberArray[i - 1] = x;
  }
  answer.textContent = numberArray.join(', ');
};

buttonTaskTwo.addEventListener("click", fizzBuzz);

//
