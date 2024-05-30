const characterPara = document.getElementById ("characterPara") as HTMLParagraphElement;
const characterImage =  document.getElementById ("characterImage") as HTMLImageElement;

function characterInfo(imageSrc: string, title: string, textContent: string) {
    characterImage.src = imageSrc;
    characterImage.title = title;
    characterPara.textContent = textContent;
}

const buttonContainer = document.getElementById("buttonContainer");
if (buttonContainer) {
    const characterButtons = buttonContainer.querySelectorAll("button");

    characterButtons.forEach(button => {
        button.addEventListener("click", function () {
            switch (button.id) {
                case "characterBlue":
                    characterInfo(
                        "../images/QuestionMark.png",
                        "She's so cool!",
                        "She's so cool!")
                        break;

                case "characterJuniper":
                    characterInfo(
                        "../images/QuestionMark.png",
                        "She's a super detective!",
                        "She's a super detective!")
                        break;

                case "characterVincent":
                    characterInfo(
                        "../images/QuestionMark.png",
                        "He's an elite hacker!",
                        "He's an elite hacker!")
                        break;

                case "characterOlive":
                    characterInfo(
                        "../images/QuestionMark.png",
                        "She's a mad chemist!",
                        "She's a mad chemist!")
                        break;
            }
        })
    })
}