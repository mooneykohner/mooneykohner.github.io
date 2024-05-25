function buttonChar1() {
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
    characterImage.title = "She's a mad chemist!";
    characterPara.textContent = "She's a mad chemist!";
}
var characterPara = document.getElementById("characterPara");
var characterImage = document.getElementById("characterImage");
var buttonBlue = document.getElementById("characterBlue");
buttonBlue.addEventListener("click", buttonChar1);
var buttonJuniper = document.getElementById("characterJuniper");
buttonJuniper.addEventListener("click", buttonChar2);
var buttonVincent = document.getElementById("characterVincent");
buttonVincent.addEventListener("click", buttonChar3);
var buttonOlive = document.getElementById("characterOlive");
buttonOlive.addEventListener("click", buttonChar4);
