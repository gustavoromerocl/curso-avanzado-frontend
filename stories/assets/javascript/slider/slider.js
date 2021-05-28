export default class Slider{
    constructor({elements, animationFunc}){
        this.elements = elements;
        this.animalFunc = animationFunc;
        this.index =  0;
        this.size = elements.length;

        this.prev = this.prev.bind(this); //Sin importar el contexto en que se ejecute, mantendra el de su clase
    }

    next(){
        this.index++;
        if(this.index >= this.size) this.index = 0;
        console.log(this.elements[this.index]);
    }

    prev(){
        this.index--;
        if(this.index < 0) this.index = this.size - 1;
        console.log(this.elements[this.index]);
    }

    play(){
        this.interval = setInterval(this.prev,1000)
    }

    stop(){
        clearInterval(this.interval);
    }
}


let slider = new Slider({
    elements: [1,2,3,4,5],
})

slider.play();

setTimeout(()=>{slider.stop()},5000); //Tambien se puede pasar el contexto del padre usando arrow function