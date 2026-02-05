const img = document.querySelector("img");
const button = document.querySelector("button");

/*const catGenerator = async function () {
  const res = await fetch("https://cataas.com/cat?json=true");
  const cats = res.json();
  displayCat(cats);
};

const randomCat = function (cats) {
  const randmIndex = Math.floor(Math.random() * cats.length);
  const catImage = cats[randmIndex];
  displayCat(catImage);
}; */

const displayCat = function () {
  location.reload();
};

button.addEventListener("click", displayCat
);
