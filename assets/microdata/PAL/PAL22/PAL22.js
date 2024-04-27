// Scripts for file PAL22.html

// Leaflet map
// create map
var map = L.map('micromap').setView([-0.02122159541859717, 0.03552883336733477], 14.0);
L.tileLayer('https://metpetools.s3.eu-central-1.amazonaws.com/PAL22/{z}/{x}/{y}.png', {
    minZoom: 13,
    maxZoom: 18,
    tms: false,
    attribution: 'PAL22'
}).addTo(map);


map.setMaxBounds([[-0.0345, 0.00000], [0.00, 0.075]]);
map.setView([-0.02122159541859717, 0.03552883336733477], 13.0);
map.addControl(new L.Control.Pan());
map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
map.boxZoom.disable();

// add GeoJSON layer
// TODO Remove 

        
var poligons;

// Function Layer add and remove
// 
function addFilter(Mineral) {
    if (map.hasLayer(poligons)) {
        map.removeLayer(poligons);
    
    }
    if (Mineral == 'HideAll') {
        return;
    }
    if (Mineral == 'ShowAll') {
        poligons = L.geoJSON(json_PAL22_polygon).addTo(map);
        return;
    }
    poligons = L.geoJSON(json_PAL22_polygon,{
        filter: function(feature) {
            return feature.properties.Mineral === Mineral;
        }, // end filter
        // popup
        onEachFeature: function (feature, layer) {
            popupContent = '<b> Mineral: ' + feature.properties.Mineral + '</b>';
            popupContent += '<br> L = ' + feature.properties.L;
            popupContent += '<br> W = ' + feature.properties.W;
            popupContent += '<br> O = ' + feature.properties.O;
            popupContent += '<br> AR = ' + feature.properties.AR;
            popupContent += '<br> AsR = ' + feature.properties.AsR;
            popupContent += '<br> A = ' + feature.properties.A;
            popupContent += '<br> E = ' + feature.properties.E;
            popupContent += '<br> R = ' + feature.properties.R;
            popupContent += '<br> P = ' + feature.properties.P;
            popupContent += '<br> C = ' + feature.properties.C;
            popupContent += '<br> Cp = ' + feature.properties.Cp;
            popupContent += '<br> GSI = ' + feature.properties.GSI;
            popupContent += '<br> GSF = ' + feature.properties.GSF;
            popupContent += '<br> S = ' + feature.properties.S;
            popupContent += '<br> EQPC = ' + feature.properties.EQPC;
            popupContent += '<br> El = ' + feature.properties.El;
            layer.bindPopup(popupContent);
        }
    }).addTo(map);
}

// Fucntion to Update the SVG images and the legend filter

function updateSVG(mineral) {
    SvgURI1	= 'PAL22_'+ mineral + '_1.svg';
    SvgURI2 = 'PAL22_'+ mineral + '_2.svg';

    var imgElement1 = document.getElementById('svg1');
    if (imgElement1) {
        imgElement1.src = SvgURI1;
        imgElement1.onerror = function() {
            imgElement1.src = 'blank_diagram.svg';
        }
    }
    var imgElement2 = document.getElementById('svg2');
    if (imgElement2) {
        imgElement2.src = SvgURI2;
        imgElement2.onerror = function() {
            imgElement2.src = 'blank_diagram.svg';
        }
    }
}


// Startup with no mineral filter

addFilter('');


// click on legend event scripts

function legendClick(mineral) {

    idLegend = mineral + '_legend';
    addFilter(mineral);
    updateSVG(mineral);
    
    // TODO add turnON and turnOFF the grayscale filter

    // get visibility of the legend symbol
    // var legend = document.getElementById(idLegend);
    // Get the current grayscale filter
    // var grayscaleFilter = legend.style.filter;
    // if (grayscaleFilter == 'grayscale(1)') {
    // 	legend.style.filter = 'grayscale(0)';
    // } else {
    // 	legend.style.filter = 'grayscale(1)';
    // }

}
