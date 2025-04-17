'use strict'
document.addEventListener("DOMContentLoaded", () => {
    //* 1. Начало.
    //* 2. Получаем все элементы кнопок 
    //* 3. Для каждой кнопки (проверям есть ли такие кнопки):
    //*    3.1. Добавляем обработчик клика на кнопку:
    //*        3.1.1. Да:
    //*          3.1.1.1. показываем текст при клике и убираем стандартное действие.
    //*        3.1.2. Нет: продолжаем.
    //*    3.2. 
    //* 4. Конец.


    const link = document.querySelector(".link-law");
    link.addEventListener('click', (event) => {
        event.preventDefault();
        console.log("Мышка кликнула на кнопку, показываем текст");
    });

    const link2 = document.querySelector(".link-agreement");
    link2.addEventListener('click', (event) => {
        event.preventDefault();
        console.log("Мышка кликнула на кнопку, показываем текст");
    });

    const link3 = document.querySelector(".link-confidentiality");
    link3.addEventListener('click', (event) => {
        event.preventDefault();
        console.log("Мышка кликнула на кнопку, показываем текст");
    });

    
    
});
