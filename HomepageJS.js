// JavaScript Document
document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.querySelector('.main-text p');
    const text = paragraph.textContent;
    paragraph.textContent = "";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            paragraph.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 50); // Adjust the speed (in milliseconds) here
        }
    }

    setTimeout(typeText, 4000); // Start typing the paragraph after the header animation
});