// crea una mappa, imposta la sua vista iniziale, 
// aggiunge un layer di tile da OpenStreetMap 
// imposta un livello massimo di zoom.
var mymap = L.map('map').setView([37.51586, 15.09549], 18);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19,
    }).addTo(mymap);