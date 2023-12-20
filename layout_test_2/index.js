      // Questo script si occupa di regolare i margini dei pannelli di zoom e 
      // rotazione sulla mappa in base alla visibilità dei pulsanti di 
      // attivazione del menu a sinistra e a destra. 
      // Inoltre, controlla se l'elemento con la classe "mid" è vincolato in larghezza.
      //
      //import Overlay from 'ol/Overlay';
      // import { Vector as VectorLayer } from 'ol/layer';
      // import { Vector as VectorSource } from 'ol/source';
      // import { GeoJSON } from 'ol/format';
      // Questa funzione aggiusta i margini del pannello di zoom e rotazione sulla mappa.
      function applyMargins() {
        // Seleziona i pulsanti di attivazione del menu a sinistra e a destra.
        var leftToggler = $(".mini-submenu-left");
        var rightToggler = $(".mini-submenu-right");

        // Se il pulsante di attivazione del menu a sinistra è visibile...
        if (leftToggler.is(":visible")) {
          //...aggiusta il margine sinistro del pannello di zoom sulla mappa...
          $("#map .ol-zoom")
            .css("margin-left", 0)
            // ...rimuovi la classe "zoom-top-opened-sidebar"...
            .removeClass("zoom-top-opened-sidebar")
            // ...e aggiungi la classe "zoom-top-collapsed".
            .addClass("zoom-top-collapsed");
        } else {
          $("#map .ol-zoom")
            .css("margin-left", $(".sidebar-left").width())
            .removeClass("zoom-top-opened-sidebar")
            .removeClass("zoom-top-collapsed");
        }
        if (rightToggler.is(":visible")) {
          $("#map .ol-rotate")
            .css("margin-right", 0)
            .removeClass("zoom-top-opened-sidebar")
            .addClass("zoom-top-collapsed");
        } else {
          $("#map .ol-rotate")
            .css("margin-right", $(".sidebar-right").width())
            .removeClass("zoom-top-opened-sidebar")
            .removeClass("zoom-top-collapsed");
        }
      }

      //
      // Questa funzione controlla se la larghezza dell'elemento con la classe "mid" 
      // è uguale alla larghezza della finestra del browser.
      function isConstrained() {
        return $("div.mid").width() == $(window).width();
      }

      function applyInitialUIState() {
        if (isConstrained()) {
          $(".sidebar-left .sidebar-body").fadeOut('slide');
          $(".sidebar-right .sidebar-body").fadeOut('slide');
          $('.mini-submenu-left').fadeIn();
          $('.mini-submenu-right').fadeIn();
        }
      }

      $(function(){
        $('.sidebar-left .slide-submenu').on('click',function() {
          var thisEl = $(this);
          thisEl.closest('.sidebar-body').fadeOut('slide',function(){
            $('.mini-submenu-left').fadeIn();
            applyMargins();
          });
        });

        $('.mini-submenu-left').on('click',function() {
          var thisEl = $(this);
          $('.sidebar-left .sidebar-body').toggle('slide');
          thisEl.hide();
          applyMargins();
        });

        $('.sidebar-right .slide-submenu').on('click',function() {
          var thisEl = $(this);
          thisEl.closest('.sidebar-body').fadeOut('slide',function(){
            $('.mini-submenu-right').fadeIn();
            applyMargins();
          });
        });

        $('.mini-submenu-right').on('click',function() {
          var thisEl = $(this);
          $('.sidebar-right .sidebar-body').toggle('slide');
          thisEl.hide();
          applyMargins();
        });

        $(window).on("resize", applyMargins);
            applyInitialUIState();
            applyMargins();
        });

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
// map.on('popupopen', function(e) {
//     // Ottieni il contenuto del popup
//     var popupContent = e.popup.getContent();
//     popupContent = 'Hai cliccato su: <br>' + popupContent;

//     // Ottieni il div in cui vuoi inserire il contenuto del popup
//     var div = document.getElementById('content');
  

//     // Inserisci il contenuto del popup nel div
//     div.innerHTML = popupContent;
// });



        // map.createPane('pane_CartaGeologica_1');
        // map.getPane('pane_CartaGeologica_1').style.zIndex = 401;
        // map.getPane('pane_CartaGeologica_1').style['mix-blend-mode'] = 'normal';
        // var layer_CartaGeologica_1 = new L.geoJson(json_CartaGeologica_1, {
        //     attribution: 'Unknow',
        //     interactive: true,
        //     dataVar: 'json_CartaGeologica_1',
        //     layerName: 'layer_CartaGeologica_1',
        //     pane: 'pane_CartaGeologica_1',
        //     onEachFeature: pop_CartaGeologica_1,
        //     style: style_CartaGeologica_1_0,
        // });
        // bounds_group.addLayer(layer_CartaGeologica_1);
        // map.addLayer(layer_CartaGeologica_1);

