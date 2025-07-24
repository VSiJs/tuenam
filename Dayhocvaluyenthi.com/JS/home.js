document.addEventListener('DOMContentLoaded', function () {
    // ==================== Highlight nav khi scroll (active menu) ====================
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.8
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // ==================== Popup xem ảnh khóa học ====================
    const menuItems = document.querySelectorAll('.menu-item');
    const popupOverlay = document.getElementById('popup-overlay');
    const popupImage = document.getElementById('popup-image');
    const closeBtn = document.querySelector('.close-btn');

    menuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault(); // Ngăn chuyển trang

            // Ưu tiên lấy ảnh lớn từ data-popup-img (nếu có), không có thì lấy ảnh nhỏ
            const imgSrc = this.getAttribute('data-popup-img')
                || this.querySelector('img').getAttribute('src');

            popupImage.setAttribute('src', imgSrc);
            popupOverlay.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function () {
        popupOverlay.style.display = 'none';
    });

    // Đóng khi click ra ngoài ảnh
    popupOverlay.addEventListener('click', function (e) {
        if (e.target === popupOverlay) {
            popupOverlay.style.display = 'none';
        }
    });

    // ==================== Hiện/ẩn social-fixed khi nhấn Zalo (footer) ====================
    const footerZaloBtn = document.getElementById('footer-zalo-btn');
    const socialFixed = document.querySelector('.social-fixed');

    if (footerZaloBtn && socialFixed) {
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

        // Ngăn sự kiện click lan truyền khi bấm bên trong social-fixed (không bị ẩn khi bấm vào nút)
        socialFixed.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    }
});
