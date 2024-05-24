function buttonChar1 () {
    const characterImage = document.getElementById ("characterImage")
    const characterPara = document.getElementById ("characterPara")

    characterImage.src = "../blue/images/QuestionMark.png";
    characterPara.textContent = "She's so cool!";
}

function buttonChar2() {
    const characterImage = document.getElementById("characterImage")
    const characterPara = document.getElementById("characterPara")

    characterImage.src = "../blue/images/QuestionMark.png";
    characterImage.title = "The sweetest superhero!"
    characterPara.textContent = "She's a super detective!";
}

function buttonChar3() {
    const characterImage = document.getElementById("characterImage")
    const characterPara = document.getElementById ("characterPara")

    characterImage.src = "../blue/images/QuestionMark.png";
    characterPara.textContent = "He's an elite hacker!";
}

function buttonChar4() {
    const characterImage = document.getElementById("characterImage")
    const characterPara = document.getElementById ("characterPara")

    characterImage.src = "../blue/images/QuestionMark.png";
    characterPara.textContent = "She's a mad chemist!"
}

const buttonBlue = document.getElementById ("characterBlue")
buttonBlue.addEventListener("click", buttonChar1)

const buttonJuniper = document.getElementById ("characterJuniper")
buttonJuniper.addEventListener("click", buttonChar2)

const buttonVincent = document.getElementById ("characterVincent")
buttonVincent.addEventListener("click", buttonChar3)

const buttonOlive = document.getElementById ("characterOlive")
buttonOlive.addEventListener ("click", buttonChar4)