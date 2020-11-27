// PALINDROM

const buttonTaskOne = document.querySelector(".button_task-one");
const inputTaskOne = document.querySelector(".input_task-one");

const palindrom = () => {
  const str = inputTaskOne.value.toLowerCase();
  const strClean = str.replace(/[\s.,%!?#]*/g, "");
  const strArray = strClean.split(``);
  const strArrayRev = strClean.split(``).reverse();
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
  answer.textContent = numberArray.join(", ");
};

buttonTaskTwo.addEventListener("click", fizzBuzz);

// TASK THREE

const buttonTaskThree = document.querySelector(".button_task-three");
const inputTaskThree = document.querySelector(".input_task-three");
const answerThree = document.querySelector(".paragraph-three");

const reverseWords = () => {
  const strWords = inputTaskThree.value;
  const wordsArray = strWords.split(` `).reverse().join(` `);
  answerThree.textContent = wordsArray;
};

buttonTaskThree.addEventListener("click", reverseWords);

// TASK FOUR

const buttonTaskFour = document.querySelector(".button_task-four");
const inputTaskFour = document.querySelector(".input_task-four");
const answerFour = document.querySelector(".paragraph-four");

const capitalize = () => {
  const string = inputTaskFour.value;
  const newString = string.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
  answerFour.textContent = newString;
};

buttonTaskFour.addEventListener("click", capitalize);


