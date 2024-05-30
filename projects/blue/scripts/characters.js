var characterPara = document.getElementById("characterPara");
var characterImage = document.getElementById("characterImage");
function characterInfo(imageSrc, title, textContent) {
    characterImage.src = imageSrc;
    characterImage.title = title;
    characterPara.textContent = textContent;
}
var buttonContainer = document.getElementById("buttonContainer");
if (buttonContainer) {
    var characterButtons = buttonContainer.querySelectorAll("button");
    characterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            switch (button.id) {
                case "characterBlue":
                    characterInfo("../images/QuestionMark.png", "She's so cool!", "She's so cool!");
                    break;
            }
        });
    });
}
