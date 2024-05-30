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

            }
        })
    })
}