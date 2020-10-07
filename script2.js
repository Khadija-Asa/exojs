// faire déplacer un carré

// console.log(document.querySelector('.container').getBoundingClientRect());
// La méthode Element.getBoundingClientRect() 
// renvoie la taille d'un élément et sa position relative 
// par rapport à la zone d'affichage (viewport).

// console.log(document.querySelector('#square').getBoundingClientRect());

// document.querySelector('div').addEventListener('keypress',function(e){
// 	console.log(e.key);
// });

// document.getElementById('square').style.background = 'blue';

// function walk()
// 	if (keypress === 'right'){
// 		document.getElementById('square').style.right = squareX - 1 + "px";
// 	  document.getElementById('square').style.right = squareY - 1 + "px";
// }
// 	if (keypress === 'left') {
// 		document.getElementById('square').style.left = squareX - 1 + "px";
// 	  document.getElementById('square').style.left = squareY - 1 + "px";
// }

// var squareleft = 0;
// function key(e){
// 	if(e.key == 39) {
// 		squareLeft +=2;
// 		square.style.left - guyLeft + 'px';
// 	}
// 	if(e.key == 37){
// 		squareLeft -=2;
// 		square.style.left - squareLeft + 'px';
// 	}

let x = 0;
let y = 0;
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight" && x < ) {
    x++;
    document.querySelector("#square").style.left = x + "px";
  }
  if (event.key === "ArrowLeft" && x > 0) {
    x--;
    document.querySelector("#square").style.left = x + "px";
  }
  if (event.key === "ArrowUp" && y > 0) {
    y--;
    document.querySelector("#square").style.top = y + "px";
  }
  if (event.key === "ArrowDown" && y < ) {
    y++;
    document.querySelector("#square").style.top = y + "px";
  }
  console.log(event.key);
});

// + jeu du pendu

