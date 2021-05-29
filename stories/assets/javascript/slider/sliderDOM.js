import Slider from './slider';
import elements from './elements';
import Preloader from '../preloader/preloader';

let textSlider = document.querySelector("#slider-text");
let titleSlider = document.querySelector("#slider-titulo");
let subtitleSlider = document.querySelector("#slider-subtitle");
let imageSlider = document.querySelector("#slider-image");
let textContent = document.querySelector("#slider-text-content");

let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");

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

leftArrow.addEventListener('click', slider.prev);
rightArrow.addEventListener('click', slider.next);

const imagePaths = elements.map(el => el.image);

//console.log(imagePaths);

Preloader.preloadImages({
    images: imagePaths,
    completed: function(){
        //alert('Imagenes precargadas');
        document.querySelector(".controls").style.display = "block";
    }
})