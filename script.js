import { menu } from "./menu.js";

// LES VARIABLES : -----------------------------------------
const userName = document.querySelector('#user_name');
const submitNameButton = document.querySelector('#submit_name');
const helloUserName = document.querySelector('#hello_name');
const ThanksUserName = document.querySelector('#thanks_name');
const dishesDiv = document.querySelector('#dishes_div');

// LES FONCTIONS : -----------------------------------------

const displayDishes = (menu) => {
    for (let x = 0 ; x < menu.length ; x++) {
        const dishDiv = document.createElement('div');
        const ImgNameDescription = document.createElement('div');
        const dishImg = document.createElement('div');
        const dishInfos = document.createElement('div');
        const dishName = document.createElement('h3');
        const dishDescription = document.createElement('p');
        const buttonDiv = document.createElement('div');
        const orderButton = document.createElement('button');
    
        dishDiv.classList.add('dish_div');
        ImgNameDescription.classList.add('img_name_description');
        dishImg.classList.add('image');
        dishInfos.classList.add('dish');
        dishName.classList.add('dish_name');
        dishDescription.classList.add('dish_description');
        buttonDiv.classList.add('button_div');
        orderButton.classList.add('order_button');
    
        dishImg.innerText = menu[x].image;
        dishName.innerText = menu[x].plate;
        dishDescription.innerText = menu[x].description;
        orderButton.innerText = 'Commander';

        dishesDiv.appendChild(dishDiv);
        dishDiv.appendChild(ImgNameDescription);
        ImgNameDescription.appendChild(dishImg);
        ImgNameDescription.appendChild(dishInfos);
        dishInfos.appendChild(dishName);
        dishInfos.appendChild(dishDescription);
        dishDiv.appendChild(buttonDiv);
        buttonDiv.appendChild(orderButton);
    }
}

// LES EVENT LISTENERS : -----------------------------------
submitNameButton.addEventListener('click', () => {
    if (userName.value === "") {
        userName.focus()
    } else {
        helloUserName.innerText = `Bonjour ${userName.value}`
        ThanksUserName.innerText = `Merci pour ta commande ${userName.value}`
        document.querySelector('#ordering_page').style.display = "flex";
        document.querySelector('#title_page').style.display = "none"
        displayDishes(menu);
    }
})