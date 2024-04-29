console.log('MetPetMicrodataViewer.js loaded');

// Function to Update the SVG images of RoseDiagram
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
        case 'Oth': return 'Other';    
    }
}