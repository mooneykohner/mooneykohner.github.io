const characterPara = document.getElementById(
  "characterPara",
) as HTMLParagraphElement;
const characterImage = document.getElementById(
  "characterImage",
) as HTMLImageElement;

function characterInfo(imageSrc: string, title: string, textContent: string) {
  console.log("Updating information with..", { imageSrc, title, textContent });
  characterImage.src = imageSrc;
  characterImage.title = title;
  characterPara.textContent = textContent;
}

const buttonContainer = document.getElementById("buttonContainer");
if (buttonContainer) {
  const characterButtons = buttonContainer.querySelectorAll("button");
  console.log("These buttons were found:", buttonContainer);
  console.log("These characters were found:", characterButtons);

  characterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      switch (button.id) {
        case "characterBlue":
          characterInfo(
            "../images/QuestionMark.png",
            "She's so cool!",
            "She's so cool!",
          );
          break;

        case "characterJuniper":
          characterInfo(
            "../images/QuestionMark.png",
            "She's a super detective!",
            "She's a super detective!",
          );
          break;

        case "characterVincent":
          characterInfo(
            "../images/QuestionMark.png",
            "He's an elite hacker!",
            "He's an elite hacker!",
          );
          break;

        case "characterOlive":
          characterInfo(
            "../images/QuestionMark.png",
            "She's a mad chemist!",
            "She's a mad chemist!",
          );
          break;
      }
    });
  });
}
