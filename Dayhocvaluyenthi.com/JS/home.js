document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.4
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
});


document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll('.menu-item');
    const popupOverlay = document.getElementById('popup-overlay');
    const popupImage = document.getElementById('popup-image');
    const closeBtn = document.querySelector('.close-btn');

    menuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault(); // Ngăn chuyển trang
            const imgSrc = this.querySelector('img').getAttribute('src');
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
});

