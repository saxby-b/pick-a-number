const img = document.querySelector("img");
const button = document.querySelector("button");

const displayCat = function () {
  location.reload();
};

button.addEventListener("click", displayCat);
