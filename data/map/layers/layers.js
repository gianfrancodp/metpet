ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32633").setExtent([570736.658496, 4242986.418414, 579473.194317, 4251902.296613]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRISatellite_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Geologia_nuova_2 = new ol.format.GeoJSON();
var features_Geologia_nuova_2 = format_Geologia_nuova_2.readFeatures(json_Geologia_nuova_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32633'});
var jsonSource_Geologia_nuova_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geologia_nuova_2.addFeatures(features_Geologia_nuova_2);
var lyr_Geologia_nuova_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Geologia_nuova_2, 
                style: style_Geologia_nuova_2,
                interactive: true,
    title: 'Geologia_nuova<br />\
    <img src="styles/legend/Geologia_nuova_2_0.png" /> Arenarie silicoclastiche<br />\
    <img src="styles/legend/Geologia_nuova_2_1.png" /> Argille marnose<br />\
    <img src="styles/legend/Geologia_nuova_2_2.png" /> Calcari a Porites<br />\
    <img src="styles/legend/Geologia_nuova_2_3.png" /> Calcari brecciati evaporitici<br />\
    <img src="styles/legend/Geologia_nuova_2_4.png" /> Detrito<br />\
    <img src="styles/legend/Geologia_nuova_2_5.png" /> Frane<br />\
    <img src="styles/legend/Geologia_nuova_2_6.png" /> Gneiss occhiadini<br />\
    <img src="styles/legend/Geologia_nuova_2_7.png" /> Gneiss tonalitici<br />\
    <img src="styles/legend/Geologia_nuova_2_8.png" /> Paragneiss migmatitici<br />\
    <img src="styles/legend/Geologia_nuova_2_9.png" /> Skarns<br />\
    <img src="styles/legend/Geologia_nuova_2_10.png" /> Spiagge e alluvioni<br />\
    <img src="styles/legend/Geologia_nuova_2_11.png" /> Terrazzi marini<br />\
    <img src="styles/legend/Geologia_nuova_2_12.png" /> Trubi<br />\
    <img src="styles/legend/Geologia_nuova_2_13.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_ESRISatellite_1.setVisible(true);lyr_Geologia_nuova_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ESRISatellite_1,lyr_Geologia_nuova_2];
lyr_Geologia_nuova_2.set('fieldAliases', {'Id': 'Id', 'Litotipo': 'Litotipo', '3yhw': '3yhw', });
lyr_Geologia_nuova_2.set('fieldImages', {'Id': 'Range', 'Litotipo': 'TextEdit', '3yhw': 'TextEdit', });
lyr_Geologia_nuova_2.set('fieldLabels', {'Id': 'no label', 'Litotipo': 'inline label', '3yhw': 'no label', });
lyr_Geologia_nuova_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});