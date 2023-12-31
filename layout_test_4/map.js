// crea una mappa, imposta la sua vista iniziale, 
// aggiunge un layer di tile da OpenStreetMap 
// imposta un livello massimo di zoom.
var mymap = L.map('map').setView([38.37, 15.85], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19,
    }).addTo(mymap);



// var hash = new L.Hash(mymap);
// var creativecommonslicencattribution = '<a href="http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;"><img style="height:10px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:10px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:10px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"></a>';
// mymap.attributionControl.setPrefix(creativecommonslicencattribution + ' | <a href="http://gianfrancodp.github.io">GDP</a> | <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>');
    
// var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
// var bounds_group = new L.featureGroup([]);
// function setBounds() {
//      if (bounds_group.getLayers().length) {
//           mymap.fitBounds(bounds_group.getBounds());
//      }
//      map.setMaxBounds(map.getBounds());
// }
// //     // Adding Google Satellite basemap    
//     map.createPane('pane_GoogleSat_0');
//     map.getPane('pane_GoogleSat_0').style.zIndex = 400;
//     var layer_GoogleSat_0 = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
//         pane: 'pane_GoogleSat_0',
//         opacity: 1.0,
//         attribution: '',
//         minZoom: 1,
//         maxZoom: 16,
//         minNativeZoom: 0,
//         maxNativeZoom: 18
//     });
//     layer_GoogleSat_0;
//     map.addLayer(layer_GoogleSat_0);
//     function pop_CartaGeologica_1(feature, layer) {
//         var popupContent = '<table>\
//                 <tr>\
//                     <th scope="row">Litotipo: </th>\
//                     <td>' + (feature.properties['Litotipo'] !== null ? autolinker.link(feature.properties['Litotipo'].toLocaleString()) : '') + '</td>\
//                 </tr>\
//             </table>';
//             // Here there a sample of table in popup
//         // var popupContent = '<table>\
//         //         <tr>\
//         //             <th scope="row">fid</th>\
//         //             <td>' + (feature.properties['fid'] !== null ? autolinker.link(feature.properties['fid'].toLocaleString()) : '') + '</td>\
//         //         </tr>\
//         //         <tr>\
//         //             <td colspan="2">' + (feature.properties['Id'] !== null ? autolinker.link(feature.properties['Id'].toLocaleString()) : '') + '</td>\
//         //         </tr>\
//         //         <tr>\
//         //             <th scope="row">Litotipo</th>\
//         //             <td>' + (feature.properties['Litotipo'] !== null ? autolinker.link(feature.properties['Litotipo'].toLocaleString()) : '') + '</td>\
//         //         </tr>\
//         //         <tr>\
//         //             <td colspan="2">' + (feature.properties['3yhw'] !== null ? autolinker.link(feature.properties['3yhw'].toLocaleString()) : '') + '</td>\
//         //         </tr>\
//         //     </table>';

        
//         layer.bindPopup(popupContent, {maxHeight: 400});
//     }

    // Carta Geologica 
    // TODO make this section in a separate file or in a separate function
    function style_CartaGeologica_1_0(feature) {
        switch(String(feature.properties['Litotipo'])) {
            case 'Arenarie silicoclastiche':
                return {
          //   pane: 'pane_CartaGeologica_1',
            opacity: 0.5,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 0.5,
            fillColor: 'rgba(218,52,55,1.0)',
            interactive: true,
        }
                break;
            case 'Argille marnose':
                return {
          //   pane: 'pane_CartaGeologica_1',
            opacity: 0.5,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 0.5,
            fillColor: 'rgba(224,80,142,1.0)',
            interactive: true,
        }
                break;
            case 'Calcari a Porites':
                return {
          //   pane: 'pane_CartaGeologica_1',
            opacity: 0.5,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 0.5,
            fillColor: 'rgba(39,216,216,1.0)',
            interactive: true,
        }
                break;
            case 'Calcari brecciati evaporitici':
                return {
          //   pane: 'pane_CartaGeologica_1',
            opacity: 0.5,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 0.5,
            fillColor: 'rgba(20,213,126,1.0)',
            interactive: true,
        }
                break;
            case 'Detrito':
                return {
          //   pane: 'pane_CartaGeologica_1',
            opacity: 0.5,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 0.5,
            fillColor: 'rgba(227,164,119,1.0)',
            interactive: true,
        }
                break;
            case 'Frane':
                return {
          //   pane: 'pane_CartaGeologica_1',
            opacity: 0.5,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 0.5,
            fillColor: 'rgba(227,33,201,1.0)',
            interactive: true,
        }
                break;
            case 'Gneiss occhiadini':
                return {
          //   pane: 'pane_CartaGeologica_1',
            opacity: 0.5,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 0.5,
            fillColor: 'rgba(204,181,48,1.0)',
            interactive: true,
        }
                break;
            case 'Gneiss tonalitici':
                return {
          //   pane: 'pane_CartaGeologica_1',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 0.5,
            fillColor: 'rgba(179,98,214,1.0)',
            interactive: true,
        }
                break;
            case 'Paragneiss migmatitici':
                return {
          //   pane: 'pane_CartaGeologica_1',
            opacity: 0.5,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 0.5,
            fillColor: 'rgba(55,212,76,1.0)',
            interactive: true,
        }
                break;
            case 'Skarns':
                return {
          //   pane: 'pane_CartaGeologica_1',
            opacity: 0.5,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 0.5,
            fillColor: 'rgba(145,235,107,1.0)',
            interactive: true,
        }
                break;
            case 'Spiagge e alluvioni':
                return {
          //   pane: 'pane_CartaGeologica_1',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 0.5,
            fillColor: 'rgba(185,216,99,1.0)',
            interactive: true,
        }
                break;
            case 'Terrazzi marini':
                return {
          //   pane: 'pane_CartaGeologica_1',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 0.5,
            fillColor: 'rgba(21,52,231,1.0)',
            interactive: true,
        }
                break;
            case 'Trubi':
                return {
          //   pane: 'pane_CartaGeologica_1',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 0.5,
            fillColor: 'rgba(94,50,206,1.0)',
            interactive: true,
        }
                break;
            default:
                return {
          //   pane: 'pane_CartaGeologica_1',
            opacity: 1,
            color: 'rgba(35,35,35,1.0)',
            dashArray: '',
            lineCap: 'butt',
            lineJoin: 'miter',
            weight: 1.0, 
            fill: true,
            fillOpacity: 0.5,
            fillColor: 'rgba(125,172,208,1.0)',
            interactive: true,
        }
                break;
        }
    }

    L.geoJson(json_CartaGeologica_1, {
          style: style_CartaGeologica_1_0
     }).addTo(mymap);

//     mymap.createPane('pane_CartaGeologica_1');
//     mymap.getPane('pane_CartaGeologica_1').style.zIndex = 401;
//     mymap.getPane('pane_CartaGeologica_1').style['mix-blend-mode'] = 'normal';
//     var layer_CartaGeologica_1 = new L.geoJson(json_CartaGeologica_1, {
//         attribution: '',
//         interactive: true,
//         dataVar: 'json_CartaGeologica_1',
//         layerName: 'layer_CartaGeologica_1',
//         pane: 'pane_CartaGeologica_1',
//         onEachFeature: pop_CartaGeologica_1,
//         style: style_CartaGeologica_1_0,
//     });
//     bounds_group.addLayer(layer_CartaGeologica_1);
//     mymap.addLayer(layer_CartaGeologica_1);

//     // pop up Litography
//     function pop_Litografia_2(feature, layer) {
        
//         // The popup content is in a string that contain html source of popup
//         // For use feature from geojson file use feature.properties['name_of_field'] and !== null ? autolinker.link(feature.properties['name_of_field'].toLocaleString()) : ''
//         // see example below this section
//         var popupContent = '<table>\
//             <tr><th style="text-align: center; vertical-align: middle;"> Sezione Sottile </th></tr>\
//             <tr><td style="text-align: center; vertical-align: middle;">\
//             \
//             <a href="https://it.wikipedia.org/wiki/File:Thin_section_scan_crossed_polarizers_Siilinjärvi_R636-105.90_edit.jpg"> \
//                 <img\
//                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Thin_section_scan_crossed_polarizers_Siilinjärvi_R636-105.90_edit.jpg/320px-Thin_section_scan_crossed_polarizers_Siilinjärvi_R636-105.90_edit.jpg"\
//                     alt="an image"\
//                     style="width:128px" \
//                 >\
//             </a>\
//             </td></tr></table>'; 
             
  
//         // var popupContent = '<table>\
//         //         <tr>\
//         //         </tr>\
//         //         <tr>\
//         //             <th scope="row">Id</th>\
//         //             <td>' + (feature.properties['Id'] !== null ? autolinker.link(feature.properties['Id'].toLocaleString()) : '') + '</td>\
//         //         </tr>\
//         //     </table>'; 
//         layer.bindPopup(popupContent, {maxHeight: 400});
//     }

//     function style_Litografia_2_0() {
//         return {
//             pane: 'pane_Litografia_2',
//             radius: 30.0,
//             opacity: 1,
//             color: 'rgba(250,139,57,1.0)',
//             dashArray: '',
//             lineCap: 'butt',
//             lineJoin: 'miter',
//             weight: 4.0,
//             fill: true,
//             fillOpacity: 1,
//             fillColor: 'rgba(255,255,255,1.0)',
//             interactive: true,
//         }
//     }
//     function style_Litografia_2_1() {
//         return {
//             pane: 'pane_Litografia_2',
//             radius: 12.27272,
//             opacity: 1,
//             color: 'rgba(250,176,124,1.0)',
//             dashArray: '',
//             lineCap: 'butt',
//             lineJoin: 'miter',
//             weight: 1.0,
//             fill: true,
//             fillOpacity: 1,
//             fillColor: 'rgba(250,176,124,1.0)',
//             interactive: true,
//         }
//     }
//     map.createPane('pane_Litografia_2');
//     map.getPane('pane_Litografia_2').style.zIndex = 402;
//     map.getPane('pane_Litografia_2').style['mix-blend-mode'] = 'normal';
//     var layer_Litografia_2 = new L.geoJson.multiStyle(json_Litografia_2, {
//         attribution: '',
//         interactive: true,
//         dataVar: 'json_Litografia_2',
//         layerName: 'layer_Litografia_2',
//         pane: 'pane_Litografia_2',
//         onEachFeature: pop_Litografia_2,
//         pointToLayers: [function (feature, latlng) {
//             var context = {
//                 feature: feature,
//                 variables: {}
//             };
//             return L.shapeMarker(latlng, style_Litografia_2_0(feature));
//         },function (feature, latlng) {
//             var context = {
//                 feature: feature,
//                 variables: {}
//             };
//             return L.shapeMarker(latlng, style_Litografia_2_1(feature));
//         },
//     ]});
//     bounds_group.addLayer(layer_Litografia_2);
//     map.addLayer(layer_Litografia_2);
//     var osmGeocoder = new L.Control.Geocoder({
//         collapsed: true,
//         position: 'topleft',
//         text: 'Search',
//         title: 'Testing'
//     }).addTo(map);

//     // Section for add map control and navigation elements
//     document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
//     .className += ' fa fa-search';
//     document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
//     .title += 'Search for a place';
//     var baseMaps = {};
//     L.control.layers(baseMaps,{'<img src="legend/Litografia_2.png" /> Litografia': layer_Litografia_2,'Carta Geologica<br /><table><tr><td style="text-align: center;"><img src="legend/CartaGeologica_1_Arenariesilicoclastiche0.png" /></td><td>Arenarie silicoclastiche</td></tr><tr><td style="text-align: center;"><img src="legend/CartaGeologica_1_Argillemarnose1.png" /></td><td>Argille marnose</td></tr><tr><td style="text-align: center;"><img src="legend/CartaGeologica_1_CalcariaPorites2.png" /></td><td>Calcari a Porites</td></tr><tr><td style="text-align: center;"><img src="legend/CartaGeologica_1_Calcaribrecciatievaporitici3.png" /></td><td>Calcari brecciati evaporitici</td></tr><tr><td style="text-align: center;"><img src="legend/CartaGeologica_1_Detrito4.png" /></td><td>Detrito</td></tr><tr><td style="text-align: center;"><img src="legend/CartaGeologica_1_Frane5.png" /></td><td>Frane</td></tr><tr><td style="text-align: center;"><img src="legend/CartaGeologica_1_Gneissocchiadini6.png" /></td><td>Gneiss occhiadini</td></tr><tr><td style="text-align: center;"><img src="legend/CartaGeologica_1_Gneisstonalitici7.png" /></td><td>Gneiss tonalitici</td></tr><tr><td style="text-align: center;"><img src="legend/CartaGeologica_1_Paragneissmigmatitici8.png" /></td><td>Paragneiss migmatitici</td></tr><tr><td style="text-align: center;"><img src="legend/CartaGeologica_1_Skarns9.png" /></td><td>Skarns</td></tr><tr><td style="text-align: center;"><img src="legend/CartaGeologica_1_Spiaggeealluvioni10.png" /></td><td>Spiagge e alluvioni</td></tr><tr><td style="text-align: center;"><img src="legend/CartaGeologica_1_Terrazzimarini11.png" /></td><td>Terrazzi marini</td></tr><tr><td style="text-align: center;"><img src="legend/CartaGeologica_1_Trubi12.png" /></td><td>Trubi</td></tr><tr><td style="text-align: center;"><img src="legend/CartaGeologica_1_13.png" /></td><td></td></tr></table>': layer_CartaGeologica_1,"Google Sat": layer_GoogleSat_0,}).addTo(map);
//     setBounds();