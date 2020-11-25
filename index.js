const buttonTaskOne = document.querySelector(".button_task-one");
const inputTaskOne = document.querySelector(".input_task-one");

const palindrom = () => {
  const str = inputTaskOne.value.toLowerCase();
  const strClean = str.replace(/[\s.,%!?#]*/g, '');
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
