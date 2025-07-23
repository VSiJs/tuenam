function setupSocialFixedToggle() {
    const footerZaloBtn = document.getElementById('footer-zalo-btn');
    const socialFixed = document.querySelector('.social-fixed');

    if (footerZaloBtn && socialFixed) {
        // Toggle hiện/ẩn
        footerZaloBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            socialFixed.classList.toggle('active');
        });

        // Ẩn khi click ngoài vùng social-fixed
        document.addEventListener('click', function (e) {
            if (
                socialFixed.classList.contains('active') &&
                !socialFixed.contains(e.target) &&
                e.target !== footerZaloBtn
            ) {
                socialFixed.classList.remove('active');
            }
        });

        // Không đóng khi click bên trong social-fixed
        socialFixed.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    }
}

// Đảm bảo chạy sau khi DOM load (tương thích mọi trang)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupSocialFixedToggle);
} else {
    setupSocialFixedToggle();
}
