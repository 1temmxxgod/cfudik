// Определяем функцию createStars для создания звёзд
function createStars() {
    // Находим элемент с классом 'stars' в DOM, который будет контейнером для звёзд
    const container = document.querySelector('.stars');
    // Задаём общее количество звёзд, которое должно быть на странице
    const starCount = 250;

    // Проверяем, меньше ли текущее количество звёзд в контейнере, чем желаемое (starCount)
    if (container && container.children.length < starCount) {
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
                void star.offsetHeight;
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
const starsInterval = setInterval(createStars, 1000);

// Добавлена логика для работы кнопок Back
document.addEventListener('DOMContentLoaded', function() {
    const backButtons = document.querySelectorAll('.back-button');
    
    backButtons.forEach(button => {
        button.style.display = 'none'; // Скрываем все кнопки по умолчанию
        
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const container = document.querySelector('.container');
            
            if (container.classList.contains('show-portfolio')) {
                container.classList.remove('show-portfolio');
            } else if (container.classList.contains('show-dev')) {
                container.classList.remove('show-dev');
            }
            
            // Скрываем все кнопки Back после закрытия
            backButtons.forEach(btn => btn.style.display = 'none');
        });
    });
});

// Модифицированы функции togglePortfolio и toggleDev
function togglePortfolio(event) {
    event.preventDefault();
    const container = document.querySelector('.container');
    const backButtons = document.querySelectorAll('.back-button');
    
    container.classList.remove('show-dev');
    container.classList.toggle('show-portfolio');
    
    // Показываем/скрываем соответствующую кнопку Back
    backButtons[0].style.display = container.classList.contains('show-portfolio') ? 'block' : 'none';
    backButtons[1].style.display = 'none';
}

function toggleDev(event) {
    event.preventDefault();
    const container = document.querySelector('.container');
    const backButtons = document.querySelectorAll('.back-button');
    
    container.classList.remove('show-portfolio');
    container.classList.toggle('show-dev');
    
    // Показываем/скрываем соответствующую кнопку Back
    backButtons[1].style.display = container.classList.contains('show-dev') ? 'block' : 'none';
    backButtons[0].style.display = 'none';
}