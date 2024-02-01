function switchOff() {
    document.getElementById("bulbImage").src = "images/bulb-go-off-img.png";
    document.getElementById("catImage").src = "images/cat-eyes-img.png";
    document.getElementById("switchStatus").textContent = "Switched Off";
    document.getElementById("onSwitch").style.backgroundColor = "#22c55e";
    document.getElementById("offSwitch").style.backgroundColor = "#cbd2d9";
}

function switchOn() {
    document.getElementById("bulbImage").src = "images/bulb-go-on-img.png";
    document.getElementById("catImage").src = "images/cat-img.png";
    document.getElementById("switchStatus").textContent = "Switched On";
    document.getElementById("offSwitch").style.backgroundColor = "#e12d39";
    document.getElementById("onSwitch").style.backgroundColor = "#cbd2d9";
}
