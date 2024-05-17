function buttonClicked () {
    const paraChange = document.getElementById("test")
    const playAudio = document.getElementById("dingButton")
    if (paraChange.textContent === "This is a test") {
        paraChange.textContent = "Hello"
    }
    else {
        paraChange.textContent = "This is a test"
    }
    playAudio.play();
}

const buttonPress = document.getElementById("pressMe")
buttonPress.addEventListener("click", buttonClicked)