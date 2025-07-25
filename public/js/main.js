const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header__imagee img", {
    ...scrollRevealOption,
    origin: "left",
});
ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 200,
});
ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 400,
});
ScrollReveal().reveal(".featurette h2", {
    ...scrollRevealOption,
    delay: 200,
});
ScrollReveal().reveal(".featurette li", {
    ...scrollRevealOption,
    delay: 400,
});
ScrollReveal().reveal(".katalog_2", {
    ...scrollRevealOption,
    delay: 400,
});

const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

//-------------------------------------------making purchases green and red---------------------------------------------
const number = document.querySelectorAll(".narudzbina-broj-x").length;
function e(i) {
    document.querySelectorAll(".uspeh")[i].addEventListener("click", function() {
        document.querySelectorAll(".listni-item")[i].classList.toggle("listni-item-zeleni");
    });
    document.querySelectorAll(".neuspeh")[i].addEventListener("click", function() {
        document.querySelectorAll(".listni-item")[i].classList.toggle("listni-item-crveni");
    });
}
for(var i = 0; i < number; i++) {
    e(i);
}

//----------------------------------------------------Filteri-----------------------------------------------------------
// const number_of_gree = document.querySelectorAll(".brend----gree").length;
// const number_of_bergen = document.querySelectorAll(".brend----bergen").length;
// const number_of_mitz = document.querySelectorAll(".brend----mitzu").length;

// document.querySelector(".gree-checkbox").addEventListener("click", function() {
//     for(var iter = 0; iter < number_of_bergen; iter++) {
//         document.querySelectorAll(".brend----bergen")[iter].classList.add('hide');
//     }
// });

// <select class="form-select" aria-label="Default select example">
// <option selected>Filteri</option>
// <option class="gree-checkbox" value="1">Gree</option>
// <option class="bergen-checkbox" value="2">Bergen</option>
// <option class="mitsubishi-checkbox" value="3">Mitsubishi</option>
// </select>
//-----------------------------------------------------hodajuci-text----------------------------------------------------
var style = document.createElement('style');
var position = 'right';

style.innerHTML = `
@keyframes my-animation{
    0%{ ${position}: -${document.querySelector('.montaza-hodajuca-text').offsetWidth + 10}px;}
    100%{${position}: 100%;}
}`;

document.head.append(style);