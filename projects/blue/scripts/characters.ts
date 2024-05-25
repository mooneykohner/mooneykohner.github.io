function buttonChar1 () {
    characterImage.src = "../images/QuestionMark.png";
    characterImage.title = "She's so cool!";
    characterPara.textContent = "She's so cool!";
}

function buttonChar2() {
    characterImage.src = "../images/QuestionMark.png";
    characterImage.title = "She's a super detective!";
    characterPara.textContent = "She's a super detective!";
}

function buttonChar3() {
    characterImage.src = "../images/QuestionMark.png";
    characterImage.title = "He's an elite hacker!";
    characterPara.textContent = "He's an elite hacker!";
}

function buttonChar4() {
    characterImage.src = "../images/QuestionMark.png";
    characterImage.title = "She's a mad chemist!"
    characterPara.textContent = "She's a mad chemist!"
}

const characterPara = document.getElementById ("characterPara") as HTMLParagraphElement;
const characterImage = document.getElementById("characterImage") as HTMLImageElement;


const buttonBlue = document.getElementById ("characterBlue")
buttonBlue.addEventListener("click", buttonChar1)

const buttonJuniper = document.getElementById ("characterJuniper")
buttonJuniper.addEventListener("click", buttonChar2)

const buttonVincent = document.getElementById ("characterVincent")
buttonVincent.addEventListener("click", buttonChar3)

const buttonOlive = document.getElementById ("characterOlive")
buttonOlive.addEventListener ("click", buttonChar4)