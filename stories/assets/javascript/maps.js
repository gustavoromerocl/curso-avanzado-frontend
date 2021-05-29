//Cursos de mapas
//crea una app web con geolocalizacion
//curso de desarrollo web front end

import styles from './maps/styles'
function initMap(){

    const coords = {
        lat: -33.52098282505456, 
        lng: -70.78443197382306
    }

    let map = new google.maps.Map(document.getElementById('mapa'),{
        center: coords,
        zoom: 16,
        styles: styles,
    });

    let marker = new google.maps.Marker({
        position: coords,
        map,
        title: 'Home'
    })
}

initMap();