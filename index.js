// alert("working");

var imgs = document.querySelectorAll("img");
var randomNumbers = [];
for (var i = 0; i < imgs.length; i++) {
  randomNumbers.push(Math.floor(Math.random() * 6) + 1);
  var randomImageSource = "images/dice" + randomNumbers[i] + ".png";
  imgs[i].setAttribute("src", randomImageSource);
  console.log(i);
}


if (randomNumbers[0] > randomNumbers[1]) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumbers[0] < randomNumbers[1]) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
