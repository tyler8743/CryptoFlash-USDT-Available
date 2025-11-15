// Script for USDT Flash Website
// Add animations, effects, or interactions here

console.log("USDT Flash site loaded.");

// Example: Smooth scroll function
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: "smooth"
    });
}

// Example: Auto fade-in effect
window.addEventListener("load", () => {
    const content = document.querySelector(".container");
    if (content) {
        content.style.opacity = 0;
        setTimeout(() => {
            content.style.transition = "1s";
            content.style.opacity = 1;
        }, 200);
    }
});
