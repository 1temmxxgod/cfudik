// Определяем функцию createStars для создания звёзд
function createStars() {
    // Находим элемент с классом 'stars' в DOM, который будет контейнером для звёзд
    const container = document.querySelector('.stars');
    // Задаём общее количество звёзд, которое должно быть на странице
    const starCount = 250;

    // Проверяем, меньше ли текущее количество звёзд в контейнере, чем желаемое (starCount)
    if (container.children.length < starCount) {
        // Вычисляем, сколько звёзд нужно добавить, чтобы достичь starCount
        const starsToAdd = starCount - container.children.length;

        // Запускаем цикл для создания нужного количества звёзд
        for (let i = 0; i < starsToAdd; i++) {
            // Создаём новый элемент <div> для каждой звезды
            const star = document.createElement('div');
            // Присваиваем этому элементу класс 'star' для стилизации
            star.className = 'star';

            // С вероятностью 20% (если случайное число > 0.8) добавляем класс 'bright'
            if (Math.random() > 0.8) {
                // Класс 'bright' делает звезду ярче (предположительно через CSS)
                star.classList.add('bright');
            }

            // Задаём случайную горизонтальную позицию звезды (от 0% до 100% ширины контейнера)
            star.style.left = `${Math.random() * 100}%`;
            // Задаём случайную вертикальную позицию звезды (от 0% до 100% высоты контейнера)
            star.style.top = `${Math.random() * 100}%`;

            // Вычисляем случайную длительность анимации от 5 до 10 секунд
            const duration = 5 + Math.random() * 5;
            // Устанавливаем CSS-переменную '--duration' с вычисленной длительностью
            star.style.setProperty('--duration', `${duration}s`);
            // Задаём случайную задержку перед началом анимации (от 0 до duration секунд)
            star.style.animationDelay = `${Math.random() * duration}s`;

            // Добавляем обработчик события 'animationend', срабатывающий по окончании анимации
            star.addEventListener('animationend', () => {
                // После завершения анимации задаём новую случайную позицию по горизонтали
                star.style.left = `${Math.random() * 100}%`;
                // Задаём новую случайную позицию по вертикали
                star.style.top = `${Math.random() * 100}%`;
                // Сбрасываем задержку анимации на 0 секунд
                star.style.animationDelay = '0s';
                // Отключаем текущую анимацию, чтобы избежать конфликтов
                star.style.animation = 'none';
                // Принудительно вызываем пересчёт стилей (reflow), чтобы анимация перезапустилась
                star.offsetHeight; // Это "хак" для сброса анимации
                // Устанавливаем бесконечную линейную анимацию 'starTravel' с заданной длительностью
                star.style.animation = `starTravel ${duration}s linear infinite`;
            });

            // Добавляем созданную звезду в контейнер .stars
            container.appendChild(star);
        }
    }
}

// Вызываем функцию createStars, когда страница полностью загрузилась
window.addEventListener('load', createStars);
// Периодически вызываем createStars каждую секунду (1000 мс), чтобы проверять и добавлять звёзды
setInterval(createStars, 1000);