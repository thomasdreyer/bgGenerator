var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var rndBtn = document.getElementById("random-btn");



setGradient();
function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

rndBtn.addEventListener("click", () =>{

let val1 = Math.floor(Math.random(255) * Math.floor(255));

let val2 = Math.floor(Math.random(255) * Math.floor(255));

let val3 = Math.floor(Math.random(255) * Math.floor(255));

let val4 = Math.floor(Math.random(255) * Math.floor(255));

let val5 = Math.floor(Math.random(255) * Math.floor(255));

let val6 = Math.floor(Math.random(255) * Math.floor(255));


body.style.background =
"linear-gradient(to left, "
+ "rgb("+val1+", "+val2+","+val3+")"
+ ", "
+ "rgb("+val4+", "+val5+","+val6+")"
+ ")";

	css.textContent = body.style.background + ";";

})
