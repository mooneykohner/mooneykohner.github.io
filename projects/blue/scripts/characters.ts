const characterPara = document.getElementById("characterPara") as HTMLParagraphElement | null;
const characterImage = document.getElementById("characterImage") as HTMLImageElement | null;

function updateCharacterInfo(imageSrc: string, title: string, textContent: string) {
    if (characterImage && characterPara) { // Ensure elements exist before using them
        characterImage.src = imageSrc;
        characterImage.title = title;
        characterPara.textContent = textContent;
    }
}

const characterButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".characterButton");
characterButtons.forEach(button => {
    button.addEventListener("click", function() {
        switch (button.id) {
            case "characterBlue":
                updateCharacterInfo(
                    "../images/QuestionMark.png",
                    "She's so cool!",
                    "She's so cool!"
                );
                break;

            case "characterJuniper":
                updateCharacterInfo(
                    "../images/QuestionMark.png",
                    "She's a super detective!",
                    "She's a super detective!"
                );
                break;

            case "characterVincent":
                updateCharacterInfo(
                    "../images/QuestionMark.png",
                    "He's an elite hacker!",
                    "He's an elite hacker!"
                );
                break;

            case "characterOlive":
                updateCharacterInfo(
                    "../images/QuestionMark.png",
                    "She's a mad chemist!",
                    "She's a mad chemist!"
                );
                break;

            default:
                console.error("Unknown button ID: " + button.id);
        }
    });
});