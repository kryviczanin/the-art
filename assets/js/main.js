document.getElementById("currentYear").textContent = new Date().getFullYear();

const glowImage = document.querySelector(".glow-image");
let startTime = null;

function animateGlow(timestamp) {
    if (!startTime) {
        startTime = timestamp;
    }

    const elapsed = timestamp - startTime;
    const pulse = (Math.sin(elapsed / 950) + 1) / 2;
    const opacity = 0.23 + pulse * 0.41;
    const scale = 1 + pulse * 0.015;

    glowImage.style.opacity = opacity;
    glowImage.style.transform = `scale(${scale})`;

    requestAnimationFrame(animateGlow);
}

requestAnimationFrame(animateGlow);
