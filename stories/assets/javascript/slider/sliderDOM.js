import Slider from './slider';
import elements from './elements';

let textSlider = document.querySelector("#slider-text");
let titleSlider = document.querySelector("#slider-titulo");
let subtitleSlider = document.querySelector("#slider-subtitle");
let imageSlider = document.querySelector("#slider-image");
let textContent = document.querySelector("#slider-text-content");

let slider = new Slider({
    elements, //shorhand properties EC6
    animationFunc: function(element){

        textContent.classList.add("hide");
        imageSlider.classList.add("hide");

        setTimeout(function(){
            titleSlider.innerHTML = element.title;
            subtitleSlider.innerHTML = element.subtitle;
            imageSlider.src = element.image;
            textSlider.innerHTML = element.text;

            textContent.classList.remove("hide");
            imageSlider.classList.remove("hide");
        },600);

    },
    speed: 5000,
})

slider.play();