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



const bouquets = document.querySelector(".promotion-bouquets");
if (bouquets){
    const dataTitleBouquets = [
        "Всё для тебя",
        "Весна во всей красе",
        "Карамельный букет",
    ];
    const BouquetsName = bouquets.querySelectorAll(".bouquet-name");
    BouquetsName.forEach((item, index) => {
        item.textContent = dataTitleBouquets[index];
    }
)};
//объявляем переменную и сохраняем в неё кнопку для оставления заявки
const requestButton = document.querySelector(".request-button");
//объявляем переменную и сохраняем в неё модальное окно
const modalApplication = document.querySelector(".applications");

if (requestButton && modalApplication) {
    requestButton.addEventListener("click", ()=> {
        modalApplication.removeAttribute("hidden");
    });
}

window.addEventListener("click", (event) => {
    // проверяем, был ли клик на фоне модального окна
        if (event.target === modalApplication) {
    //если условие выполняется, добавляем атрибут hidden у модального окна modalApplication и модальное окно становится невидимым
            modalApplication.setAttribute("hidden", true);
        }
    });

    
const headerMenu = document.querySelector('.header-menu');
if (headerMenu){
    const headerList = headerMenu.querySelector('.menu');
    const menuData = {
        link1: {
            link: '#',
            title: 'Главная',
        },
        link2: {
            link: '#',
            title: 'Корзины с цветами',
        },
        link3: {
            link: '#',
            title: 'Контакты',
        },
        link4: {
            link: '#',
            title: 'Моя корзина',
        }
    }
    const createLink = (UrlLink, title) =>{
        const link = 
        `<li class="menu-item"><a href="${UrlLink}" class="menu-link">${title}</a></li>`;
        return link;
    }
    for (const linkItem in menuData) {
        const link = menuData[linkItem];
        const linkIndex = createLink(link.UrlLink, link.title);
        headerList.insertAdjacentHTML('beforeend', linkIndex);
    }
}


const cardCon = document.querySelector(".job");
if (cardCon) {
    const cardList = cardCon.querySelector(".job-list");
    //получаем данные с сервера
    const apiUrl = "data.json";
    //функция для создания карточки
    const createCard = (
        image,
        iconAlt,
        imageWight,
        imageHeigt,
        title,
        description
    ) => {
        //шаблонные строки и подстановки
        const card = 
        `<li class="job-item"><img class="job-img" src="${image}" alt="${iconAlt}" width="${imageWight}" height="${imageHeigt}">
        <h3 class="job-title">${title}</h3>
        <p class="job-description">${description}</p>
        </li> 
        `;
        return card;
    };
    fetch(apiUrl)
    .then((Response)=> Response.json())
    .then((data)=>{
        console.log(data); //данные
        console.log(typeof data);

        data.forEach((item) =>{
            const cardElement = createCard(
                item.image,
                item.iconAlt,
                item.imageWight,
                item.imageHeigt,
                item.title,
                item.description
            );
            cardList.insertAdjacentHTML("beforeend", cardElement);
        });
    })
    .catch((error) => {
        console.error("Ошибка при загрузке данных:", error);
    });
        
    
    
}