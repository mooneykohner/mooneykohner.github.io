var dropdownButton = document.getElementById("dropdown-button");
var dropdownContent = document.getElementById("dropdown-content");
dropdownButton.addEventListener("click", function () {
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
});
window.addEventListener("click", function (event) {
    var target = event.target;
    if (!target.matches("#dropdown-button")) {
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        }
    }
});
