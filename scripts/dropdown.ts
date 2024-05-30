document.addEventListener('DOMContentLoaded', () => {
    const dropdownButton = document.getElementById('dropdown-button') as HTMLElement | null;
    const dropdownContent = document.getElementById('dropdown-content') as HTMLElement | null;

    if (dropdownButton && dropdownContent) {
        dropdownButton.addEventListener('click', (event: MouseEvent) => {
            event.stopPropagation();
            event.preventDefault();
            console.log('Dropdown button clicked');
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            } else {
                dropdownContent.style.display = 'block';
            }
        });

        document.addEventListener('click', (event: MouseEvent) => {
            console.log('Document clicked');
            if (!dropdownContent.contains(event.target as Node) && !dropdownButton.contains(event.target as Node)) {
                dropdownContent.style.display = 'none';
            }
        });
    }
});
