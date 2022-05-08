function setHelloH1(text) {
    document.getElementById("helloh1").innerHTML = text;
}

function getBgColour() {
    return document.body.style.backgroundColor; 
}

function setBgTogglerEnabled(value) {
    document.getElementById("bgGreen").disabled = !value;
}

function changeBgColour(color) {
    document.body.style.backgroundColor = color;
}

function helloWorld() {
   setHelloH1("Hello World");
}

function goodbyeMars() {
    setHelloH1("Goodbye Mars");
}

function loaded() {
    setHelloH1("Ipsum Dominum");
    setBgTogglerEnabled(false);
    document.getElementById("enableBgColour").addEventListener("click", bgEnableClick);
}

function bgEnableClick() {
    setBgTogglerEnabled(true);
    document.getElementById("enableBgColour").removeEventListener("click", bgEnableClick);
    document.getElementById("enableBgColour").addEventListener("click", bgDisableClick);
}

function bgDisableClick() {
    setBgTogglerEnabled(false);
    document.getElementById("enableBgColour").removeEventListener("click", bgDisableClick);
    document.getElementById("enableBgColour").addEventListener("click", bgEnableClick);
}

function bgGreen() {
    if (getBgColour() == "green") {
        changeBgColour("red")
    } else {
        changeBgColour("green");
    }
}