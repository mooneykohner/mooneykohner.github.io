const characterImage = document.getElementById("characterImage") as HTMLImageElement;
const characterPara = document.getElementById ("characterPara") as HTMLParagraphElement;

function buttonChar1 () {
    characterImage.src = "../images/QuestionMark.png";
    characterPara.textContent = "She's so cool!";
    characterImage.title = "The sweetest superhero!"
}

function buttonChar2() {
    characterImage.src = "../images/QuestionMark.png";
    characterPara.textContent = "She's a super detective!";
}

function buttonChar3() {
    characterImage.src = "../images/QuestionMark.png";
    characterPara.textContent = "He's an elite hacker!";
}

function buttonChar4() {
    characterImage.src = "../images/QuestionMark.png";
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