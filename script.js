document.addEventListener('DOMContentLoaded', function() {
    const warningContainer = document.getElementById('warning-container');
    const toolsPage = document.getElementById('tools-page');
    const settingsButton = document.getElementById('settings-button');
    const settingsPanel = document.getElementById('settings-panel');
    const closeSettingsButton = document.getElementById('close-settings-button');
    const editorsLinkButton = document.getElementById('editors-link');
    const languageButton = document.getElementById('language-button');
    const languageOptions = document.getElementById('language-options');
    const languageButtons = document.querySelectorAll('#language-options button');

    // Время в миллисекундах, через которое исчезнет предупреждение
    const delay = 3000; // 3 секунды

    setTimeout(() => {
        warningContainer.style.opacity = 0; // Запускаем исчезновение

        // Ждем окончания анимации исчезновения
        setTimeout(() => {
            warningContainer.style.display = 'none'; // Скрываем контейнер с предупреждением
            toolsPage.style.display = 'block'; // Убеждаемся, что страница инструментов видна
        }, 1000); // Время, равное длительности CSS-анимации (1 секунда)
    }, delay);

    // Убеждаемся, что страница инструментов видна изначально
    toolsPage.style.display = 'block';

    // Обработчик клика на кнопку "Настройки"
    if (settingsButton && settingsPanel) {
        settingsButton.addEventListener('click', function() {
            settingsPanel.classList.toggle('open'); // Добавляем или удаляем класс 'open'
            // При открытии настроек убеждаемся, что список языков скрыт
            if (settingsPanel.classList.contains('open') && languageOptions) {
                languageOptions.classList.add('hidden');
            }
        });
    }

    // Обработчик клика на кнопку "Закрыть"
    if (closeSettingsButton && settingsPanel) {
        closeSettingsButton.addEventListener('click', function() {
            settingsPanel.classList.remove('open'); // Удаляем класс 'open' для закрытия
        });
    }

    // Обработчик клика на кнопку "Редакторы" (пример действия)
    if (editorsLinkButton) {
        editorsLinkButton.addEventListener('click', function() {
            alert('Функциональность раздела "Редакторы" будет добавлена позже.');
        });
    }

    // Обработчик клика на кнопку "Язык" для показа/скрытия списка языков
    if (languageButton && languageOptions) {
        languageButton.addEventListener('click', function(event) {
            event.stopPropagation(); // Предотвращаем всплытие события, чтобы не закрыть сразу окно настроек
            languageOptions.classList.toggle('hidden');
        });
    }

    // Обработчик клика на вариантах языка
    languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const langCode = this.dataset.lang;
            console.log(`Выбран язык: ${langCode}`);
            // Здесь вы можете добавить код для изменения языка интерфейса
            // Например, сохранить выбранный язык в localStorage или отправить на сервер
            // и обновить отображаемый текст на странице.

            // Пример: изменение текста заголовка (потребуется добавить соответствующие data-атрибуты в HTML)
            // const pageTitle = document.querySelector('h1');
            // if (pageTitle) {
            //     switch (langCode) {
            //         case 'ru':
            //             pageTitle.textContent = 'Инструменты';
            //             break;
            //         case 'uk':
            //             pageTitle.textContent = 'Інструменти';
            //             break;
            //         case 'en':
            //             pageTitle.textContent = 'Tools';
            //             break;
            //         case 'ar':
            //             pageTitle.textContent = 'أدوات'; // Пример арабского
            //             break;
            //     }
            // }

            if (languageOptions) {
                languageOptions.classList.add('hidden'); // Скрываем список после выбора
            }
        });
    });

    // Закрываем выпадающий список языков при клике за его пределами
    document.addEventListener('click', function(event) {
        if (languageOptions && !languageOptions.contains(event.target) && event.target !== languageButton) {
            languageOptions.classList.add('hidden');
        }
    });
});