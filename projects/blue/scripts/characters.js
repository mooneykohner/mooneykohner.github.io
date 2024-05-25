var characterPara = document.getElementById("characterPara");
var characterImage = document.getElementById("characterImage");
function updateCharacterInfo(imageSrc, title, textContent) {
    characterImage.src = imageSrc;
    characterImage.title = title;
    characterPara.textContent = textContent;
}
var characterButtons = document.querySelectorAll(".characterButton");
characterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        switch (button.id) {
            case "characterBlue":
                updateCharacterInfo("../images/QuestionMark.png", "She's so cool!", "She's so cool!");
                break;
            case "characterJuniper":
        }
    });
});
