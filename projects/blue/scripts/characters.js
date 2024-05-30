var characterPara = document.getElementById("characterPara");
var characterImage = document.getElementById("characterImage");
function characterInfo(imageSrc, title, textContent) {
    console.log("Updating information with..", { imageSrc: imageSrc, title: title, textContent: textContent });
    characterImage.src = imageSrc;
    characterImage.title = title;
    characterPara.textContent = textContent;
}
var buttonContainer = document.getElementById("buttonContainer");
if (buttonContainer) {
    var characterButtons = buttonContainer.querySelectorAll("button");
    console.log("These buttons were found:", buttonContainer);
    console.log("These characters were found:", characterButtons);
    characterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            switch (button.id) {
                case "characterBlue":
                    characterInfo("../images/QuestionMark.png", "She's so cool!", "She's so cool!");
                    break;
                case "characterJuniper":
                    characterInfo("../images/QuestionMark.png", "She's a super detective!", "She's a super detective!");
                    break;
                case "characterVincent":
                    characterInfo("../images/QuestionMark.png", "He's an elite hacker!", "He's an elite hacker!");
                    break;
                case "characterOlive":
                    characterInfo("../images/QuestionMark.png", "She's a mad chemist!", "She's a mad chemist!");
                    break;
            }
        });
    });
}
