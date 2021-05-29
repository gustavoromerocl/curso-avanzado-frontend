function initMap(){
    let map = new google.maps.Map(document.getElementById('mapa'),{
        center: {
            lat: -33.52098282505456, 
            lng: -70.78443197382306
        },
        zoom: 16
    });
}

initMap();