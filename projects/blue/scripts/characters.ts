document.addEventListener('DOMContentLoaded', () => {
    const characterImage = document.getElementById("characterImage") as HTMLImageElement;
    const characterPara = document.getElementById("characterPara") as HTMLParagraphElement;

    function buttonChar1(): void {
        characterImage.src = "../blue/images/QuestionMark.png";
        characterPara.textContent = "She's so cool!";
        characterImage.title = "The sweetest superhero!";
    }

    function buttonChar2(): void {
        characterImage.src = "../blue/images/QuestionMark.png";
        characterPara.textContent = "She's a super detective!";
    }

    function buttonChar3(): void {
        characterImage.src = "../blue/images/QuestionMark.png";
        characterPara.textContent = "He's an elite hacker!";
    }

    function buttonChar4(): void {
        characterImage.src = "../blue/images/QuestionMark.png";
        characterPara.textContent = "She's a mad chemist!";
    }

    const buttonBlue = document.getElementById("characterBlue");
    const buttonJuniper = document.getElementById("characterJuniper");
    const buttonVincent = document.getElementById("characterVincent");
    const buttonOlive = document.getElementById("characterOlive");

    if (buttonBlue) {
        buttonBlue.addEventListener("click", buttonChar1);
    }
    if (buttonJuniper) {
        buttonJuniper.addEventListener("click", buttonChar2);
    }
    if (buttonVincent) {
        buttonVincent.addEventListener("click", buttonChar3);
    }
    if (buttonOlive) {
        buttonOlive.addEventListener("click", buttonChar4);
    }
});