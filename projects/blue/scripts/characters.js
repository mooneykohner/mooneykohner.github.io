function buttonChar1 () {
    const imageBlue = document.getElementById ("characterImage")
    const characterPara = document.getElementById ("characterPara")

    characterPara.textContent = "She's so cool!";
    imageBlue.src = "../images/QuestionMark3.png";
}

const buttonBlue = document.getElementById ("characterBlue")
buttonBlue.addEventListener("click", buttonChar1)