var randomNuber1 = Math.floor(Math.random() * 6) +1; //1 to 6 

var randomDiceimage = "dice" + randomNuber1 + ".png"; // dice.png1 to dice.png 6

var randomImages = "images/" + randomDiceimage; // imagesdice 1 to 6 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImages);


var randomNuber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNuber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// if players wins 

//player 1 seen 

if (randomNuber1 > randomNuber2) {
    document.querySelector("h1").innerHTML = "🏁 Player 1 Wins!";
}
else if (randomNuber2 > randomNuber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🏁";
}
else{
    document.querySelector("h1").innerHTML ="DRAW! ⭐";
}