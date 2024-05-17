const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!"

document.getElementById("test").innerHTML = "This is not a test."

function whenClicked() {
    alert("Surprise!")
}

const button = document.getElementById("button1")
button.addEventListener("click", whenClicked)