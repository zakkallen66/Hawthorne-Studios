
// Interactive script for website
document.addEventListener('DOMContentLoaded', () => {
    console.log('Interactive script loaded successfully.');
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#ff9800';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '#bb86fc';
        });
    });
});
