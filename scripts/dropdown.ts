document.addEventListener('DOMContentLoaded', () => {
    const dropdownButton: HTMLElement | null = document.getElementById('dropdown-button');
    const dropdownContent: HTMLElement | null = document.getElementById('dropdown-content');

    if (dropdownButton && dropdownContent) {
        dropdownButton.addEventListener('click', (event: MouseEvent) => {
            event.stopPropagation();
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            } else {
                dropdownContent.style.display = 'block';
            }
        });

        document.addEventListener('click', (event: MouseEvent) => {
            if (!dropdownContent.contains(event.target as Node) && !dropdownButton.contains(event.target as Node)) {
                dropdownContent.style.display = 'none';
            }
        });
    }
});
