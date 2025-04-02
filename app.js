document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.card-button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            console.log(`Navigating to ${button.textContent.trim()} page`);
        });
    });
});
