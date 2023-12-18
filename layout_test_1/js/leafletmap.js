// V.0

// create map
var map = L.map('map').setView([37, 15], 13);

// Adding creative commons licence attribution
var creativecommonslicencattribution = '<a href="http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;"><img style="height:10px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:10px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:10px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"></a>'
map.attributionControl.setPrefix(creativecommonslicencattribution + ' | <a href="http://gianfrancodp.github.io">GDP</a> | ');

// add layer to map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// add marker to map
var marker = L.marker([37, 15]).addTo(map);
marker.bindPopup("<b>Marker</b><br>Marker di esempio").openPopup(); 


// Aggiungi un listener per l'evento 'popupopen'
map.on('popupopen', function(e) {
    // Ottieni il contenuto del popup
    var popupContent = e.popup.getContent();
    popupContent = 'Hai cliccato su: <br>' + popupContent;

    // Ottieni il div in cui vuoi inserire il contenuto del popup
    var div = document.getElementById('content');
  

    // Inserisci il contenuto del popup nel div
    div.innerHTML = popupContent;
});



        // map.createPane('pane_CartaGeologica_1');
        // map.getPane('pane_CartaGeologica_1').style.zIndex = 401;
        // map.getPane('pane_CartaGeologica_1').style['mix-blend-mode'] = 'normal';
        var layer_CartaGeologica_1 = new L.geoJson(json_CartaGeologica_1, {
            attribution: 'Unknow',
            interactive: true,
            dataVar: 'json_CartaGeologica_1',
            layerName: 'layer_CartaGeologica_1',
            pane: 'pane_CartaGeologica_1',
            onEachFeature: pop_CartaGeologica_1,
            style: style_CartaGeologica_1_0,
        });
        bounds_group.addLayer(layer_CartaGeologica_1);
        map.addLayer(layer_CartaGeologica_1);

