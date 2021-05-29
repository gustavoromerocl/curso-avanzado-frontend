function scrollToElement(element){
    window.scrollTo({
        'behavior': 'smooth',
        'top': element.offsetTop
    });
}

document.querySelector(".menu")
    .addEventListener("click", function(){
        document.querySelector(".menu-screen").classList.add("active");
    })

document.querySelector(".close")
    .addEventListener("click", function(){
        document.querySelector(".menu-screen").classList.remove("active");
        ev.preventDefault();
        return false;
    })

let links = document.querySelectorAll(".menu-screen a");



links.forEach(link => {
    link.addEventListener('click', function(ev){
        document.querySelector(".menu-screen").classList.remove("active");
        //console.log(this.href);
        let paths = this.href.split("/"); //Devuelve la cadena en arreglos deividos por el elemento indicado, en este caso /
        const selector = paths[paths.length -1];
        console.log(selector);

        if(window.scrollTo) ev.preventDefault(); //Valida que exista scrollTo en el navegador para no romper la app

        scrollToElement(document.querySelector(selector));

        return !!window.scrollTo;
    })
})