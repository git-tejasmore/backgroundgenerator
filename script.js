var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

body.style.background = "linear-gradient(to right,"+color1.value+","+color2.value+")";
css.textContent = body.style.background + ";";
function gradient(){
	body.style.background = "linear-gradient(to right,"+color1.value+","+color2.value+")";
	css.textContent = body.style.background + ";";
}
color1.addEventListener("input", gradient);

color2.addEventListener("input", gradient);

//Create button for random color pick
var button = document.createElement("button");
button.appendChild(document.createTextNode("Select Random Color"));
body.appendChild(button);
 
//Random color selector
button.addEventListener("click", getRandomColor);
 
//Random color generator
function randomColor() {
 var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' 
 + (Math.floor(Math.random() * 256)) + ',' 
 + (Math.floor(Math.random() * 256)) + ')';
  return color;
}
 
//Get random colors from random color generator code
function getRandomColor() {
 var rndColor1 = randomColor();
 var rndColor2 = randomColor();
 body.style.background = "linear-gradient(to right, " 
+ rndColor1 + ", " 
 + rndColor2 +")";
 css.textContent = body.style.background + ";";
}