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



map.setMaxBounds([[-0.08, -0.0200], [0.02, 0.08]]);
map.setView([-0.02122159541859717, 0.03552883336733477], 13.0);
map.addControl(new L.Control.Pan());
map.dragging.enable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.enable();
map.boxZoom.disable();


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


        
var poligons;
var popupContent;



// Function to get full name of mineral in database
function getMineralName(mineral) {
    switch (mineral) {
        case 'Amph': return 'Amphibole';
        case 'Ep': return 'Epidote';
        case 'Ap': return 'Apatite';
        case 'Kfs': return 'K-Feldspar';
        case 'Ol': return 'Olivine';
        case 'Pl': return 'Plagioclase';
        case 'Px': return 'Pyroxene';
        case 'Qtz': return 'Quartz';
        case 'Oth': return 'Other';    
    }
}

// Function for PopUp Content
function PopUpContent(feature, layer) {
    mineral = feature.properties.Mineral;
    popupContent = '<b> Mineral: ' + getMineralName(feature.properties.Mineral) + '</b>';
    // popupContent += '<br> L = ' + feature.properties.L;
    // popupContent += '<br> W = ' + feature.properties.W;
    popupContent += '<br> Orientation = ' + String(feature.properties.O).substring(0, 5) + '°';
    // popupContent += '<br> AR = ' + feature.properties.AR;
    popupContent += '<br> Aspect Ratio = ' + String(feature.properties.AsR).substring(0, 5);
    popupContent += '<br> Area = ' + String(feature.properties.A).substring(0, 5) + ' mm²';
    // popupContent += '<br> E = ' + feature.properties.E;
    popupContent += '<br> Roundness = ' + String(feature.properties.R).substring(0, 5);
    // popupContent += '<br> P = ' + feature.properties.P;
    // popupContent += '<br> C = ' + feature.properties.C;
    // popupContent += '<br> Cp = ' + feature.properties.Cp;
    popupContent += '<br> Grain Shape Index = ' + String(feature.properties.GSI).substring(0, 5);
    // popupContent += '<br> GSF = ' + feature.properties.GSF;
    // popupContent += '<br> S = ' + feature.properties.S;
    // popupContent += '<br> EQPC = ' + feature.properties.EQPC;
    // popupContent += '<br> El = ' + feature.properties.El;
    layer.bindPopup(popupContent);
}



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
        poligons = L.geoJSON(json_PAL22_polygon,{
            onEachFeature: function(feature, layer) {
                PopUpContent(feature, layer);
                }
            }       
        ).addTo(map);
        poligons.on('popupopen', function(e) {
            //get clicked layer
            var layer = e.popup._source;
            Mineral = layer.feature.properties.Mineral;
            updateSVG(Mineral);

        });        
        return;
    }
    poligons = L.geoJSON(json_PAL22_polygon,{
        filter: function(feature) {
            return feature.properties.Mineral === Mineral;
        }, // end filter
        // popup
        onEachFeature: function(feature, layer) {
            PopUpContent(feature, layer);
        }
    }).addTo(map);  
}



// Startup with no mineral filter

addFilter('');


// click on legend event scripts

function legendClick(mineral) {

    // idLegend = mineral + '_legend';
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
