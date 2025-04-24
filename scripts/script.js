'use strict';

document.addEventListener("DOMContentLoaded", () => {
    //* 1. Начало.
    //* 2. Получаем все элементы кнопок 
    //* 3. Для каждой кнопки (проверям есть ли такие кнопки):
    //*    3.1. Добавляем обработчик клика на кнопку:
    //*        3.1.1. Да:
    //*          3.1.1.1. показываем текст при клике и убираем стандартное действие.
    //*        3.1.2. Нет: продолжаем.
    //*    3.2. При повторном клике убираем текст.
    //* 4. Конец.

    const link = document.querySelectorAll(".link");

    link.forEach((item, index) => {
        const linkDescribe = document.querySelectorAll('.link-description');

        item.addEventListener('click', (event) => {
            event.preventDefault();
            item.style.opacity = 0.5;
            if(linkDescribe[index].hasAttribute('hidden')){
                linkDescribe[index].removeAttribute('hidden');
            } else{
                linkDescribe[index].setAttribute('hidden', 'hidden');
            }
        });

    });
});
