const characterPara = document.getElementById ("characterPara") as HTMLParagraphElement | null
const characterImage = document.getElementById ("characterImage") as HTMLImageElement | null

function updateCharacterInfo (imageSrc: string, title: string, textContent: string) {
    characterImage.src = imageSrc;
    characterImage.title = title;
    characterPara.textContent = textContent;
}

const characterButtons: NodeListOf <HTMLButtonElement> = document.querySelectorAll (".characterButton");
characterButtons.forEach (button => {
    button.addEventListener ("click", function() {
        switch (button.id) {
            case "characterBlue":
                updateCharacterInfo(
                    "../images/QuestionMark.png",
                    "She's so cool!",
                    "She's so cool!"
                );

                break;

            case "characterJuniper"


        }

                )
    }
})