// Create stars background
function createStars() {
    const container = document.querySelector('.stars');
    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        // Random size
        const size = Math.random() * 3;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Random opacity and animation delay
        star.style.opacity = Math.random();
        star.style.animationDelay = `${Math.random() * 5}s`;

        container.appendChild(star);
    }
}

// Initialize animations
function initAnimations() {
    // Animate elements when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.portfolio-item, .dev-item, .btn').forEach(el => {
        observer.observe(el);
    });
}

// Mobile menu toggle
function setupMobileMenu() {
    const menuToggle = document.createElement('div');
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>';

    const header = document.querySelector('.header-content');
    header.prepend(menuToggle);

    menuToggle.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('active');
    });
}

// Show home page
function showHome(event) {
    if (event) event.preventDefault();
    document.querySelector('.hero-section').classList.remove('hidden');
    document.querySelector('.portfolio-section').classList.add('hidden');
    document.querySelector('.dev-section').classList.add('hidden');

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector('.nav-link:nth-child(1)').classList.add('active');

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show shop (placeholder - can be implemented later)
function showShop(event) {
    if (event) event.preventDefault();
    alert("Shop section will be implemented soon!");
}

// Portfolio and Dev section toggles
function togglePortfolio(event) {
    event.preventDefault();
    document.querySelector('.portfolio-section').classList.toggle('hidden');
    document.querySelector('.dev-section').classList.add('hidden');
    document.querySelector('.hero-section').classList.toggle('hidden');

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    if (!document.querySelector('.portfolio-section').classList.contains('hidden')) {
        document.querySelector('.nav-link:nth-child(2)').classList.add('active');
    } else {
        document.querySelector('.nav-link:nth-child(1)').classList.add('active');
    }

    // Scroll to top of portfolio section
    if (!document.querySelector('.portfolio-section').classList.contains('hidden')) {
        window.scrollTo({
            top: document.querySelector('.portfolio-section').offsetTop - 100,
            behavior: 'smooth'
        });
    } else {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

function toggleDev(event) {
    event.preventDefault();
    document.querySelector('.dev-section').classList.toggle('hidden');
    document.querySelector('.portfolio-section').classList.add('hidden');
    document.querySelector('.hero-section').classList.toggle('hidden');

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector('.nav-link:nth-child(1)').classList.add('active');

    // Scroll to top of dev section
    if (!document.querySelector('.dev-section').classList.contains('hidden')) {
        window.scrollTo({
            top: document.querySelector('.dev-section').offsetTop - 100,
            behavior: 'smooth'
        });
    } else {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    initAnimations();

    if (window.innerWidth < 768) {
        setupMobileMenu();
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        const nav = document.querySelector('.nav-links');
        if (nav) nav.classList.remove('active');
    }
});

// В конец файла добавьте:
function showOrders(event) {
    if (event) event.preventDefault();
    window.location.href = "orders.html";
}

// Обновите обработчик DOMContentLoaded:
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    initAnimations();

    if (window.innerWidth < 768) {
        setupMobileMenu();
    }

    // Добавляем обработчик для кнопки заказов
    document.querySelector('.btn.accent')?.addEventListener('click', showOrders);
});