// TASK ONE PALINDROM

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

// TASK TWO FIZZBUZZ

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

// TASK THREE reverseWords

const buttonTaskThree = document.querySelector(".button_task-three");
const inputTaskThree = document.querySelector(".input_task-three");
const answerThree = document.querySelector(".paragraph-three");

const reverseWords = () => {
  const strWords = inputTaskThree.value;
  const wordsArray = strWords.split(` `).reverse().join(` `);
  answerThree.textContent = wordsArray;
};

buttonTaskThree.addEventListener("click", reverseWords);

// TASK FOUR capitalize

const buttonTaskFour = document.querySelector(".button_task-four");
const inputTaskFour = document.querySelector(".input_task-four");
const answerFour = document.querySelector(".paragraph-four");

const capitalize = () => {
  const string = inputTaskFour.value;
  const newString = string
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
  answerFour.textContent = newString;
};

buttonTaskFour.addEventListener("click", capitalize);

// TASK FIVE findVowels

const buttonTaskFive = document.querySelector(".button_task-five");
const inputTaskFive = document.querySelector(".input_task-five");

const findVowels = () => {
  const word = inputTaskFive.value;
  const wordArr = word.split(``);
  let countVowels = 0;
  const vowelsArr = ["а", "я", "о", "ё", "у", "ю", "ы", "и", "э", "е"];
  wordArr.map((item) => {
    for (let i = 0; i < vowelsArr.length; ++i) {
      if (item === vowelsArr[i]) {
        countVowels = countVowels + 1;
      }
    }
  });

  alert(countVowels);
};

buttonTaskFive.addEventListener("click", findVowels);

// TASK SIX uniqNumber

const buttonTaskSix = document.querySelector(".button_task-six");
const inputTaskSix = document.querySelector(".input_task-six");

const uniqNumber = () => {
  const strNumbers = inputTaskSix.value;
  const numbersArr = strNumbers.split(``);
  alert(
    numbersArr
      .map((item) => item)
      .filter((value, index, self) => self.indexOf(value) === index)
  );
};

buttonTaskSix.addEventListener("click", uniqNumber);
