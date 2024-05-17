function buttonClicked () {
    const paraChange = document.getElementById("test")
    if (paraChange.textContent === "This is a test") {
        paraChange.textContent = "Hello"
    }
    else {
        paraChange.textContent = "This is a test"
    }
}

const buttonPress = document.getElementById("pressMe")
buttonPress.addEventListener("click", buttonClicked)