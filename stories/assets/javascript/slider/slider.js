export default class Slider{
    constructor({elements, animationFunc, speed}){
        this.elements = elements;
        this.animalFunc = animationFunc;
        this.index =  0;
        this.size = elements.length;

        this.speed = speed;

        this.prev = this.prev.bind(this); //Sin importar el contexto en que se ejecute, mantendra el de su clase
        this.next = this.next.bind(this); 

        this.innerNext = this.innerNext.bind(this); 
        this.innerPrev = this.innerPrev.bind(this); 
    }

    innerNext(){
        this.index++;
        if(this.index >= this.size) this.index = 0;
        this.animalFunc(this.elements[this.index]);
    }

    innerPrev(){
        this.index--;
        if(this.index < 0) this.index = this.size - 1;
        this.animalFunc(this.elements[this.index]);
    }

    next(){
        this.innerNext();
        if(this.interval){
            this.stop();
            this.play();
        }
    }

    prev(){
        this.innerPrev();
        if(this.interval){
            this.stop();
            this.play();
        }
    }

    play(){
        this.interval = setInterval(this.innerNext,this.speed)
    }

    stop(){
        clearInterval(this.interval);
    }
}

