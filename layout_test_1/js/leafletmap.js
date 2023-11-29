// Variabile MAP con le coordinate del centro della mappa
var map = L.map('map', {
    zoomControl:true, maxZoom:16, minZoom:1
})
map.setView([37, 14], 6);

map.attributionControl.setPrefix('CCBYSA &middot; <a href="http://gianfrancodp.github.io">GDP</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot;');

// Crea un nuovo "pane" (strato) per la mappa chiamato 'pane_GoogleSat_0'
map.createPane('pane_GoogleSat_0');

// Imposta l'indice Z del pane a 400. L'indice Z determina l'ordine di sovrapposizione degli elementi: 
// gli elementi con un indice Z più alto sovrapporranno quelli con un indice Z più basso.
map.getPane('pane_GoogleSat_0').style.zIndex = 400;

// Crea un nuovo layer di tile (piastrelle) utilizzando le mappe satellitari di Google
var layer_GoogleSat_0 = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    // Assegna il layer al pane creato in precedenza
    pane: 'pane_GoogleSat_0',
    // Imposta l'opacità del layer a 1 (completamente opaco)
    opacity: 1.0,
    // Attributi per il layer
    attribution: 'google.com',
    // Imposta il livello di zoom minimo e massimo per il layer
    minZoom: 1,
    maxZoom: 16,
    // Imposta il livello di zoom nativo minimo e massimo per il layer
    minNativeZoom: 0,
    maxNativeZoom: 18
});

// Aggiunge il layer alla mappa
map.addLayer(layer_GoogleSat_0);