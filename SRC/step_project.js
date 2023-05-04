
'use strict';

let ul = document.querySelector('#tabs');

ul.addEventListener('click', function (ev) {
let data = ev.target.dataset.tab;
document.querySelector('.active-tab').classList.remove('active-tab');
document.querySelector('.active-content').classList.remove('active-content');
document.querySelector(`[data-title = ${data}]`).classList.add('active-content');
ev.target.classList.add('active-tab') });

let menu = document.querySelector('.menu-work');
let images = document.querySelectorAll('.work-img');
let items = document.querySelectorAll('.menu-work-item');
let loadMore = document.querySelector('.btn-load-more');


loadMore.addEventListener('click', event =>{

    for(let i = 0; i < 24; i++){
        images[i].classList.remove('hidden-img');
    };

    loadMore.addEventListener('click', event =>{

        for(let i = 0; i < 36; i++){
            images[i].classList.remove('hidden-img');
        };
        loadMore.classList.add('hidden')
    });
});

function filter(){

    menu.addEventListener('click', event =>{
        let targetId = event.target.dataset.item;
        items.forEach(item =>{
            if(item.classList.contains('active-item')){
                item.classList.remove('active-item');
                event.target.classList.add('active-item');
            };
        })
        images.forEach(image =>{
            if(image.classList.contains(targetId) === false){
                image.classList.add('hidden')
            }else{
                image.classList.remove('hidden')
            }
            if(targetId === 'all'){
                image.classList.remove('hidden')
            };
        })
    });
};

filter();

let rigthButton = document.querySelector('.preview-right');
let blocks = Array.from(document.querySelectorAll('.js-content'));
let leftButton = document.querySelector('.preview-left');
let smallFotos = Array.from(document.querySelectorAll('.client-foto-small'));
console.log(smallFotos);


function carouselRight(){

    for(let i = 0; i < blocks.length; i++){
        if(blocks[i].classList.contains('active-feedback-block')){
            if(i < blocks.length){
                blocks[i].classList.remove('active-feedback-block');
                i = i+1;
                if(i === blocks.length){
                    i = 0;
                }
            }
            blocks[i].classList.add('active-feedback-block');
        }
    }

    for(let n = 0; n < smallFotos.length; n++){
        if(smallFotos[n].classList.contains('active-feedback-tab')){
            if(n < smallFotos.length){
                smallFotos[n].classList.remove('active-feedback-tab');
                n = n+1;
                if(n === smallFotos.length){
                    n = 0;
                }
            }
            smallFotos[n].classList.add('active-feedback-tab');
        }
    }

};

function carouselLeft(){
    for(let i = blocks.length -1; i > -1; i--){
        if(blocks[i].classList.contains('active-feedback-block')){
            if(i > -1){
                blocks[i].classList.remove('active-feedback-block');
                i = i-1;
                if(i === -1){
                    i = blocks.length - 1;
                }
            }
            blocks[i].classList.add('active-feedback-block');
        }
    }
    for(let n = smallFotos.length - 1; n > -1 ; n--){
        if(smallFotos[n].classList.contains('active-feedback-tab')){
            if(n > -1){
                smallFotos[n].classList.remove('active-feedback-tab');
                n = n-1;
                if(n === -1){
                    n = smallFotos.length - 1;
                }
            }
            smallFotos[n].classList.add('active-feedback-tab');
        }
    }
}

rigthButton.addEventListener('click', () => {carouselRight()});
leftButton.addEventListener('click', () => {carouselLeft()});




