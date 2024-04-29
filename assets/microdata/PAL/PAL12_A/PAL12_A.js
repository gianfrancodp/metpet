// Scripts for file PAL11.html
var SampleName = 'PAL12_A';
var tileLayerURI = 'https://metpetools.s3.eu-central-1.amazonaws.com/PAL12a/{z}/{x}/{y}.png';
var polygonLayer = json_PAL12_A_polygon; // make sure for correct name called from main html


// Leaflet map

var map = L.map('micromap').setView([-0.02122159541859717, 0.03552883336733477], 14.0);
L.tileLayer(tileLayerURI, {
    minZoom: 13,
    maxZoom: 18,
    tms: false,
    attribution: SampleName
}).addTo(map);


map.setMaxBounds([[-0.08, -0.0200], [0.02, 0.08]]);
map.setView([-0.02122159541859717, 0.03552883336733477], 13.0);
map.addControl(new L.Control.Pan());
map.dragging.enable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.enable();
map.boxZoom.disable();

