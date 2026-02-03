const randomNumber = document.querySelectorAll(" .random-number");
let numberArray = [];
let random = document.querySelector(".random");

const numberGenerator = async function () {
  const res = await fetch("https://cataas.com/cat");
  const cats = res.json();

}

const randomCat = function(cats) {
  const randmIndex = Math.floor(Math.random() * cats.length);
  const catImage = cats[randmIndex];
}

const displayCat = function(catImage) {
  
}









