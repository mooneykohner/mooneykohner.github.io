function buttonChar1 () {
    const characterImage = document.getElementById ("characterImage")
    const characterPara = document.getElementById ("characterPara")

    characterImage.src = "../blue/images/QuestionMark2.png";
    characterPara.textContent = "She's so cool!";
}

function buttonChar2() {
    const characterImage = document.getElementById ("characterImage")
    const characterPara = document.getElementById ("characterPara")

    characterImage.src = "..blue/images/QuestionMark.png";
    characterPara.textContent = "She's a super detective!";
}

const buttonBlue = document.getElementById ("characterBlue")
buttonBlue.addEventListener("click", buttonChar1)

const buttonJuniper = document.getElementById ("characterJuniper")
buttonJuniper.addEventListener("click", buttonChar2)