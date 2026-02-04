const catSection = document.querySelector(".cat-section");
const button = document.querySelector("button");

const catGenerator = async function () {
  const res = await fetch("https://cataas.com/cat");
  const cats = res.json();
  randomCat(cats);

}

const randomCat = function(cats) {
  const randmIndex = Math.floor(Math.random() * cats.length);
  const catImage = cats[randmIndex];
  displayCat(catImage);
}

const displayCat = function(catImage) {
  catSection.append(catImage);
}

button.addEventListener("click", function() {
  catGenerator();

})









