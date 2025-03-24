const randomNumber = document.querySelectorAll(" .random-number");
let numberArray = [];
let random = document.querySelector(".random");

const numberGenerator = function () {
  let num = Math.floor(Math.random() * 500);
  let li = document.createElement("li");
  li.innerText = num;
  random.append(li);
  numberArray.push(num);
  console.log(numberArray);
}
numberGenerator();







