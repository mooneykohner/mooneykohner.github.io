document.addEventListener('DOMContentLoaded', () => {
    const dropdownButton = document.getElementById('dropdown-button');
    const dropdownContent = document.getElementById('dropdown-content');

    if (dropdownButton && dropdownContent) {
        dropdownButton.addEventListener('click', (event) => {
            event.stopPropagation();
            event.preventDefault();
            console.log('Dropdown button clicked');
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            } else {
                dropdownContent.style.display = 'block';
            }
        });

        document.addEventListener('click', (event) => {
            console.log('Document clicked');
            if (!dropdownContent.contains(event.target) && !dropdownButton.contains(event.target)) {
                dropdownContent.style.display = 'none';
            }
        });
    }
});
