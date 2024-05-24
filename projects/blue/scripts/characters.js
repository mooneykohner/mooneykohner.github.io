function buttonChar1 () {
    const imageBlue = document.getElementById ("characterImage")
    const characterPara = document.getElementById ("characterPara")

    imageBlue.style.transition = "transform 0.6"
    imageBlue.style.transform = "rotateY(180deg)";

    setTimeout(() => {
        imageBlue.src = "../blue/images/QuestionMark2.png";
        characterPara.textContent = "She's so cool!";
        imageBlue.style.transform = "rotateY(0deg)";
    }, 600);
}

const buttonBlue = document.getElementById ("characterBlue")
buttonBlue.addEventListener("click", buttonChar1)