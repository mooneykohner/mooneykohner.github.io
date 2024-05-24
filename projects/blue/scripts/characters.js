function buttonChar1 () {
    const imageBlue = document.getElementById ("characterBox")
    const characterPara = document.getElementById ("characterPara")

    characterPara.textContent = "She's so cool!"
    imageBlue.src = "projects/blue/images/QuestionMark2.png"
}

const buttonBlue = document.getElementById ("characterBlue")
buttonBlue.addEventListener("click", buttonChar1)