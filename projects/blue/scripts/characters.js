function buttonChar1 () {
    const imageBlue = document.getElementById ("characterImage")
    const characterPara = document.getElementById ("characterPara")

    imageBlue.style.transform = "rotateY(180deg)";
    imageBlue.src = "../blue/images/QuestionMark2.png";
    characterPara.textContent = "She's so cool!";
}

const buttonBlue = document.getElementById ("characterBlue")
buttonBlue.addEventListener("click", buttonChar1)