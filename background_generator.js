var body = document.getElementById("gradient")
var gradientOutput = document.querySelector("h3");
var colorSelect1 = document.querySelector(".color1");
var colorSelect2 = document.querySelector(".color2");

function SetGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + colorSelect1.value 
    + ", " 
    + colorSelect2.value 
    + ")";

    gradientOutput.textContent = body.style.background + ";";
}

colorSelect1.addEventListener("input", SetGradient);

colorSelect2.addEventListener("input", SetGradient);
