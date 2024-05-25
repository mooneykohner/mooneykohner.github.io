const characterPara = document.getElementById("characterPara") as HTMLParagraphElement | null;
const characterImage = document.getElementById("characterImage") as HTMLImageElement | null;

if (characterPara && characterImage) {
    function updateCharacterInfo(imageSrc: string, title: string, textContent: string) {
        characterImage.src = imageSrc;
        characterImage.title = title;
        characterPara.textContent = textContent;
    }

    // Select all buttons within the button container
    const buttonContainer = document.getElementById("buttonContainer");
    if (buttonContainer) {
        const characterButtons = buttonContainer.querySelectorAll("button");

        characterButtons.forEach(button => {
            button.addEventListener("click", function() {
                switch (button.id) {
                    case "characterBlue":
                        updateCharacterInfo("../images/QuestionMark.png", "She's so cool!", "She's so cool!");
                        break;
                    case "characterJuniper":
                        updateCharacterInfo("../images/QuestionMark.png", "She's a super detective!", "She's a super detective!");
                        break;
                    case "characterVincent":
                        updateCharacterInfo("../images/QuestionMark.png", "He's an elite hacker!", "He's an elite hacker!");
                        break;
                    case "characterOlive":
                        updateCharacterInfo("../images/QuestionMark.png", "She's a mad chemist!", "She's a mad chemist!");
                        break;
                    default:
                        console.error("Unknown button ID: " + button.id);
                }
            });
        });
    } else {
        console.error('buttonContainer element not found.');
    }
} else {
    if (!characterPara) console.error('characterPara element not found.');
    if (!characterImage) console.error('characterImage element not found.');
}