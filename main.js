var player1 = prompt("enter your name: ");

var player2 = prompt("enter your friend: ");

var randomNumber1 = Math.floor(Math.random() * 6) + 1;   // 1-6

var ImgRandom = "dice" + randomNumber1 + ".png" // dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", ImgRandom);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; 

var ImgRandom2 = "dice" + randomNumber2 + ".png";

 document.querySelectorAll("img")[1].setAttribute("src", ImgRandom2);

if (randomNumber1 > randomNumber2) {
   document.querySelector("h1").innerHTML = player1 + " is winner 🏁"; 
} else if (randomNumber2 > randomNumber1) {
   document.querySelector("h1").innerHTML = player2 + " is winner 🏁";
} else {
   document.querySelector("h1").innerHTML = "DRAW";
}