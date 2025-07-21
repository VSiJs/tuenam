let progress = 65;
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");

const progressInterval = setInterval(() => {
    if (progress < 100) {
        progress += Math.random() * 2;
        progress = Math.min(progress, 100);
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `We're ${Math.floor(progress)}% complete with development. Stay tuned for updates!`;
    }
}, 3000);
