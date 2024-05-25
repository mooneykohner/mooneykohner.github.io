var characterPara = document.getElementById("characterPara");
var characterImage = document.getElementById("characterImage");
function updateCharacterInfo(imageSrc, title, textContent) {
    if (characterImage && characterPara) { // Ensure elements exist before using them
        characterImage.src = imageSrc;
        characterImage.title = title;
        characterPara.textContent = textContent;
    }
}
var characterButtons = document.querySelectorAll(".characterButton");
characterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
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
        }
    });
});
