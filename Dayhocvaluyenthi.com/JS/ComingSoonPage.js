let progress = 65;
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");

const progressInterval = setInterval(() => {
    if (progress < 98) {
        progress += Math.random() * 2;
        progress = Math.min(progress, 98);
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `Chúng tôi đã hoàn thành ${Math.floor(progress)}% quá trình phát triển. Hãy theo dõi để cập nhập!`;
    }
}, 3000);
