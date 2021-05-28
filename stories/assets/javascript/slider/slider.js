export default class Slider{
    constructor({elements, animationFunc, speed}){
        this.elements = elements;
        this.animalFunc = animationFunc;
        this.index =  0;
        this.size = elements.length;

        this.speed = speed;

        this.prev = this.prev.bind(this); //Sin importar el contexto en que se ejecute, mantendra el de su clase
    }

    next(){
        this.index++;
        if(this.index >= this.size) this.index = 0;
        this.animalFunc(this.elements[this.index]);
    }

    prev(){
        this.index--;
        if(this.index < 0) this.index = this.size - 1;
        this.animalFunc(this.elements[this.index]);
    }

    play(){
        this.interval = setInterval(this.prev,this.speed)
    }

    stop(){
        clearInterval(this.interval);
    }
}

