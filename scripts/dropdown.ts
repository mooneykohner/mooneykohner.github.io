const dropdownButton = document.getElementById("dropdown-button");
const dropdownContent = document.getElementById("dropdown-content");

dropdownButton.addEventListener("click", () => {
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
});

window.addEventListener("click", (event) => {
    const target = event.target as Element;
    if (!target.matches("#dropdown-button")) {
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        }
    }
})