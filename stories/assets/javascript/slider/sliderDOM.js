import Slider from './slider';

let textSlider = document.querySelector("#slider-text");
let titleSlider = document.querySelector("#slider-titulo");
let subtitleSlider = document.querySelector("#slider-subtitle");
let imageSlider = document.querySelector("#slider-image");
let textContent = document.querySelector("#slider-text-content");

let slider = new Slider({
    elements: [
        {
            title: 'Lorem Ipsum',
            subtitle: 'Ipsum',
            image: '../../public/images/image2.jpg',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elitNam aliquid quod vel. Corporis eaque repellendus iusto modi aspernatur vero numquam cum, quis nulla maxime laborum corrupti fugiat, perspiciatis similique placeat.',
        },
        {
            title: 'Lorem Ipsum 2',
            subtitle: 'Ipsum 2',
            image: '../../public/images/image4.jpg',
            text: '2 Lorem ipsum dolor sit amet consectetur adipisicing elitNam aliquid quod vel. Corporis eaque repellendus iusto modi aspernatur vero numquam cum, quis nulla maxime laborum corrupti fugiat, perspiciatis similique placeat.',
        }, 
        {
            title: 'Lorem Ipsum 3',
            subtitle: 'Ipsum 3',
            image: '../../public/images/image3.jpg',
            text: '2 Lorem ipsum dolor sit amet consectetur adipisicing elitNam aliquid quod vel. Corporis eaque repellendus iusto modi aspernatur vero numquam cum, quis nulla maxime laborum corrupti fugiat, perspiciatis similique placeat.',
        }, 
        {
            title: 'Lorem Ipsum 4',
            subtitle: 'Ipsum 4',
            image: '../../public/images/image1.jpg',
            text: '2 Lorem ipsum dolor sit amet consectetur adipisicing elitNam aliquid quod vel. Corporis eaque repellendus iusto modi aspernatur vero numquam cum, quis nulla maxime laborum corrupti fugiat, perspiciatis similique placeat.',
        }, 
    ],
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