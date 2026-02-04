const img = document.querySelector("img");
const button = document.querySelector("button");

const catGenerator = async function () {
  const res = await fetch("https://cataas.com/cat?json=true");
  const cats = res.json();
  randomCat(cats);
};

const randomCat = function (cats) {
  const randmIndex = Math.floor(Math.random() * cats.length);
  const catImage = cats[randmIndex];
  displayCat(catImage);
};

const displayCat = function (catImage) {
  const imgAddress = catImage.url;
  img.src = imgAddress;
};

button.addEventListener("click", function () {
  catGenerator();
});
