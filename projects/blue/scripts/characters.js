var characterImage = document.getElementById("characterImage");
var characterPara = document.getElementById("characterPara");
function buttonChar1() {
    characterImage.src = "../images/QuestionMark.png";
    characterPara.textContent = "She's so cool!";
    characterImage.title = "The sweetest superhero!";
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
    characterPara.textContent = "She's a mad chemist!";
}
var buttonBlue = document.getElementById("characterBlue");
buttonBlue.addEventListener("click", buttonChar1);
var buttonJuniper = document.getElementById("characterJuniper");
buttonJuniper.addEventListener("click", buttonChar2);
var buttonVincent = document.getElementById("characterVincent");
buttonVincent.addEventListener("click", buttonChar3);
var buttonOlive = document.getElementById("characterOlive");
buttonOlive.addEventListener("click", buttonChar4);
