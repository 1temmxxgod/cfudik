function createStars() {
    const container = document.querySelector('.stars');
    const starCount = 200;

    if (container.children.length < starCount) {
        const starsToAdd = starCount - container.children.length;

        for (let i = 0; i < starsToAdd; i++) {
            const star = document.createElement('div');
            star.className = 'star';

            if (Math.random() > 0.8) {
                star.classList.add('bright');
            }

            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;

            const duration = 5 + Math.random() * 5;
            star.style.setProperty('--duration', `${duration}s`);
            star.style.animationDelay = `${Math.random() * duration}s`;

            star.addEventListener('animationend', () => {
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                star.style.animationDelay = '0s';
                star.style.animation = 'none';
                star.offsetHeight;
                star.style.animation = `starTravel ${duration}s linear infinite`;
            });

            container.appendChild(star);
        }
    }
}

window.addEventListener('load', createStars);
setInterval(createStars, 1000);