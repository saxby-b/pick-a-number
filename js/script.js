const randomNumber = document.querySelectorAll(" .random-number");
const numberArray = [23, 78, 9, 5, 23, 20, 49, 58, 39, 20, 34, 60];
const h2 = document.createElement("h2");
randomNumber.innerText ="";
let i = 0;
let list = document.querySelector(".random");

const randomNumberGenerator = function () {
  let randomNum = Math.floor(Math.random() * 28);
  const li = document.createElement("li");
  li.innerText = randomNum;
  list.append(li);
}

randomNumberGenerator();

/*const randomNumberGenerator = function () {
    let random = function (min, max) {
        return Math.floor((Math.random())*(max - min + 1)) + min;
    }
   if (randomNumber.innerText === "") {
     const h2 = document.createElement("h2");
     h2.innerText = random(1, 200);
     randomNumber[0].append(h2);
   }
} */

/*const randomNumberGenerator = function () {
  h2.innerText = "";
  /*let numberGenerator = function () { 
    Math.floor(Math.random() * 50); }

numberArray.push(numberGenerator()); */

/*do { 
  h2.innerText = numberArray[i];
  randomNumber.append(h2);
  i++;

}
while (i < 13); 
do {
  h2.innerText += numberArray[i];
  i++;
  randomNumber.append(h2);
}

while ( i < 13 );

} */




