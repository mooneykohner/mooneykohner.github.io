function buttonClicked () {
    const paraChange = document.getElementById("test")
    const playAudio = document.getElementById("dingButton")
    if (paraChange.textContent === "Hello, Alana!") {
        paraChange.textContent = "I love you very much!"
    }
    else {
        paraChange.textContent = "That's all I've got.."
    }
    playAudio.play();
}

const buttonPress = document.getElementById("pressMe")
buttonPress.addEventListener("click", buttonClicked)