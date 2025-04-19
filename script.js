document.addEventListener('DOMContentLoaded', function () {
    // Мобильное меню
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNavLinks = document.querySelector('.nav-links');

    if (menuToggle && mobileNavLinks) {
        menuToggle.addEventListener('click', function () {
            mobileNavLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Анимация при скролле
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.feature-card, .section-header, .mods-category, .dev-category, .order-form');
        
        elements.forEach((element, index) => {
            element.style.setProperty('--animation-order', index);
            
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    };

    // Анимация хедера при скролле
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });

    // Анимация для карточек при наведении
    const cards = document.querySelectorAll('.feature-card, .mods-category, .dev-category');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = 'var(--shadow-md)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Анимация для кнопок
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = 'var(--shadow-md)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--shadow-sm)';
        });
    });

    // Анимация для ссылок в навигации
    const navigationLinks = document.querySelectorAll('.nav-link');
    
    navigationLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = 'var(--light)';
        });
        
        link.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.color = 'var(--text)';
            }
        });
    });

    // Анимация для логотипа
    const logo = document.querySelector('.logo');
    
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Анимация для социальных иконок
    const socialIcons = document.querySelectorAll('.social-links img');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2) rotate(5deg)';
            this.style.filter = 'grayscale(0%) brightness(100%)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.filter = 'grayscale(100%) brightness(150%)';
        });
    });

    // Анимация для аватара
    const avatar = document.querySelector('.hero-avatar');
    
    if (avatar) {
        avatar.addEventListener('mouseenter', function() {
            this.querySelector('img').style.transform = 'scale(1.1)';
        });
        
        avatar.addEventListener('mouseleave', function() {
            this.querySelector('img').style.transform = 'scale(1)';
        });
    }

    // Инициализация анимаций
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Инициализация при загрузке
});