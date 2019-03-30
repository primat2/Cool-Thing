var css = document.querySelector("h3");
var color_1 = document.querySelector(".color1");
var color_2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

//var currentBodyStyle = getComputedStyle(body);

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
 }

function onInputGradient() {
	setGradient(color_1.value, color_2.value);
}

function onButtonClick() {
	var newColor_1 = getRandomColor();//randomInteger(0, 255);
	var newColor_2 = randomInteger(0, 255);
	setGradient(newColor_1, newColor_2);
	color_1.value = newColor_1.value;
	color_2.value = newColor_2.value;
}

function setGradient(value_1, value_2) {
	body.style.background = "linear-gradient(to right, " 
	+ value_1 + ", " + value_2 + ")";

	css.textContent = body.style.background + ";";
}

onInputGradient();

color_1.addEventListener("input", onInputGradient);
color_2.addEventListener("input", onInputGradient); 
button.addEventListener("click", onButtonClick);