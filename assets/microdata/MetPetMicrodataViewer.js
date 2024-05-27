
// Global Variables

var poligons; // GeoJSON layer with polygons overlay

var popupContent; // Content of the popup


// Function to Update the SVG images of RoseDiagrams (1) and (2)
// Svg rose diagram are stored in the same folder of .html file

function updateSVG(mineral) {
    SvgURI1	= SampleName + '_' + mineral + '_1.svg';
    SvgURI2 = SampleName + '_' +mineral + '_2.svg';

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


// Function to get full name of mineral from acronyms
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
        case 'Cal': return 'Calcite';
        case 'Ca-Si min': return 'Calc-Silicate Mineral';
        case 'Scap (aggr)': return 'Scapolite (aggregate)';
        case 'Scap': return 'Scapolite';
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



function addFilter(Mineral) {
    if (map.hasLayer(poligons)) {
        map.removeLayer(poligons);
    }
    if (Mineral == 'HideAll') {
        return;
    }
    if (Mineral == 'ShowAll') {
        poligons = L.geoJSON(polygonLayer,{
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
    poligons = L.geoJSON(polygonLayer,{
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

