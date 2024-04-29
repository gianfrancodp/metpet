
// Layout scripts and functions - map and sidebar

function applyMargins() {
    var leftToggler = $(".mini-submenu-left");
    var rightToggler = $(".mini-submenu-right");
    if (leftToggler.is(":visible")) {
      $("#map .ol-zoom")
        .css("margin-left", 0)
        .removeClass("zoom-top-opened-sidebar")
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

// END OF SIDEBAR SCRIPTS

////////////////////////
//START OPENLAYERS MAP SCRIPTS
//First we define the projections used in the map, then we define the base layer and the vector layers.
//For each layer we define a style and a source, then we define the layer itself.
//We also define the buttons to show/hide the layers.
//Finally we define the map itself and the search feature.

    // Define and register the proj4 projections used 
    proj4.defs("EPSG:32633","+proj=utm +zone=33 +datum=WGS84 +units=m +no_defs");
    ol.proj.proj4.register(proj4);
    proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");
    ol.proj.proj4.register(proj4);

    // define the color of button if layer is visible or not

    function setColorButtonLayer(button, layer) {
      var visibility = layer.getVisible();
      if (visibility == false) {
        button.style.color = "gray";
      } else {
        button.style.color = "black";
      }
    };

    // function to switch on/off layer visibility
    function layerswitcher(button, layer) {
      var visibility = layer.getVisible();
      layer.setVisible(!visibility);
        if (visibility == false) {
          button.style.color = "black";
        } else {
          button.style.color = "gray";
        }
      }

    // function to change gray/black color to layer buttons
    // and invert visibility of the layer, due click on button layer event

    function clickButtonLayer(button, layer) {
      if (layer.getProperties().isBaseLayer == false) {
      // switch on/off of layer
      layerswitcher(button, layer);
      // check if layer is base layer
      // console.log('click on'+ layer.getProperties().name + ' button');
      } 
      else {

        // if turned ON leave ON
        if (layer.getVisible() == true) {
          // none
        }
        else {
          // 1. turn On
          LayerTurnOn(button, layer);
         // turn OFF all other base layers

        // if layer is base layer, turn off all other base layers
        
            for (var i = 0; i < LayerOrder.getLength(); i++) {
              
              var layeriterated = LayerOrder.item(i);
              var isBASELAYERiterated = layeriterated.getProperties().isBaseLayer;
              
              if (isBASELAYERiterated == true) {

              // if layeriterated is not the same layer, turn off
                
                if (layeriterated != layer) {

                    var ButtonID = layeriterated.get('buttonid');
                    var buttoniterated = document.getElementById(ButtonID);
                    LayerTurnOff(buttoniterated, layeriterated);
                    
                  }
                  else {
                  // if layeriterated is the same layer, leave ON
                  // none
                  }
                }
            }
          }
      }
    };

    // Function to turn on a layer for other events
    function LayerTurnOn(button, layer) {
      var visibility = layer.getVisible();
      if (visibility == false) {
        layer.setVisible(true);
        button.style.color = "black";
        button.style.borderColor = "black";
        button.style.borderStyle = "outset";
      }
    };

    // Function to turn off a layer for other events
    function LayerTurnOff(button, layer) {
      var visibility = layer.getVisible();
      if (visibility == true) {
        layer.setVisible(false);
        button.style.color = "gray";  
        button.style.borderStyle =  "none";
      }
    };

    // Function for frist load and visibility of layers after load
    function LayerFristLoad (ButtonID, layer, fristvisibility) {
      isBaseLayer = layer.getProperties().isBaseLayer;
      // Set visibility
      layer.setVisible(fristvisibility);
      // Load eventListener for button
      var button = document.getElementById(ButtonID);
      button.setAttribute('isBaseLayer', isBaseLayer);
      button.addEventListener('load', setColorButtonLayer(button, layer));
      button.addEventListener('click', function() {
        clickButtonLayer(button, layer);
      });
      
      // Set button layer html text
      button.innerHTML = layer.getProperties().name;
      // seti buttonID property to layer
      layer.set('buttonid', ButtonID);
    };




        
    // ### Layer DEFINITIONS ##
    // Style are defined in the olStyle.js file
    //
    // general layout parameter and path
    var iconLayerHeight = "22px"; // a parameter to define all icons height in layer menù
    // icon URIs
  
    var iconFolderPath = 'assets/geodata/icons/';
    // 
    var baseLayerOffIconPath = iconFolderPath + 'off-svgrepo-com.svg';
    var osmbaselayerIconPath = iconFolderPath + 'openstreetmap-svgrepo-com.svg';
    var OrtofotoTileLayerIconPath = iconFolderPath + 'photogrammetry-svgrepo-com.svg';
    var TouringClubTileLayerIconPath = iconFolderPath + 'magnify-map-svgrepo-com.svg';
    var GeneralGeologyLayerIconPath = iconFolderPath + 'geology-svgrepo-com.svg';
    var ContourLines10mLayerIconPath = iconFolderPath + 'mountain-mountaineering-landscape-svgrepo-com.svg';
    var HDStructuralFeatureLayerIconPath = iconFolderPath + 'feature-request-device-svgrepo-com.svg';
    var ActiveLandslidesLayerIconPath = iconFolderPath + 'steep-slope-failure-landslide-svgrepo-com.svg';
    var SamplesLayerIconPath = iconFolderPath + 'microscope-laboratory-science-experiment-lab-svgrepo-com.svg';


    // TODO: Reorder layer list and id #

    // 1. ### BASE LAYER ###


    // TODO: move attribtions to a separate region of frame

    // this is a base layer to turn off all other baselayers
    var baseLayerOff = new ol.layer.Vector({
      source: new ol.source.Vector(),
      properties: {'name': `<img title="Off" src ="${baseLayerOffIconPath}" height="${iconLayerHeight}">`, 'isBaseLayer': true}
    });

    var osmbaselayer = new ol.layer.Tile({
      source: new ol.source.OSM({
        attributions: [ 'CC-BY-SA | Università di Catania | MetPetId | ' + new Date().getFullYear(),
                        ol.source.OSM.ATTRIBUTION]
      }),
      properties : {'name': `<img title="Open Street Map" src ="${osmbaselayerIconPath}" height="${iconLayerHeight}">`, 'isBaseLayer': true} 
    });
    


  // ### START OF VECTOR LAYERS ###
    var ActiveLandslidesLayerSource = new ol.source.Vector({
      url: 'assets/geodata/Active_landslides.geojson',
      format: new ol.format.GeoJSON({
        dataProjection: 'EPSG:32633',
        featureProjection: 'EPSG:3857'
      })
    });
    var ActiveLandslidesLayer = new ol.layer.Vector({
      source: ActiveLandslidesLayerSource,
      style: ActiveLandslidesLayerStyle,
      properties : {'name': `<img src ="${ActiveLandslidesLayerIconPath}" height="${iconLayerHeight}"> Active Landslides`,  'isBaseLayer': false}
    });
    
     


    // 3. General Geology layer
    var GeneralGeologyLayerSource = new ol.source.Vector({
      url: 'assets/geodata/General_Geology.geojson',
      format: new ol.format.GeoJSON({
        dataProjection: 'EPSG:32633',
        featureProjection: 'EPSG:3857'
      })
    });


    var GeneralGeologyLayer = new ol.layer.Vector({
      source: GeneralGeologyLayerSource,
      style: General_Geology_olStyle,
      opacity: 0.8,
      properties : {'name': `<img src ="${GeneralGeologyLayerIconPath}" height="${iconLayerHeight}"> General Geology`, 'isBaseLayer': false}
    });

    // 4. Contour lines layer 10 m
    
    var ContourLines10mLayerSource = new ol.source.Vector({
      url: 'assets/geodata/contour_10_smooth.geojson',
      format: new ol.format.GeoJSON({
        dataProjection: 'EPSG:32633',
        featureProjection: 'EPSG:3857'
      })
    });
    var ContourLines10mLayer = new ol.layer.Vector({
      source: ContourLines10mLayerSource,
      style: ContourLines10mLayerStyle,
      properties : {'name': `<img src ="${ContourLines10mLayerIconPath}" height="${iconLayerHeight}"> Contour Lines 10 m`, 'isBaseLayer': false}
    });
    

    // 5. HD Structural Features
    var HDStructuralFeatureSource = new ol.source.Vector({
      url: 'geodata/HD_Structural_Features.geojson',
      format: new ol.format.GeoJSON({
        dataProjection: 'EPSG:32633',
        featureProjection: 'EPSG:3857'
      })
    });
    var HDStructuralFeatureLayer = new ol.layer.Vector({
      source: HDStructuralFeatureSource,
      style: HDStructuralFeaturesStyle,
      properties : {'name': `<img src ="${HDStructuralFeatureLayerIconPath}" height="${iconLayerHeight}"> HD Structural Features`, 'isBaseLayer': false}
    });

    // 6. Ortofoto tile-layer
    var OrtofotoTileLayer = new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: 'https://metpetools.s3.eu-central-1.amazonaws.com/ortofoto/{z}/{x}/{y}.png'
      }),
      properties : {'name': `<img title="Ortofoto" src ="${OrtofotoTileLayerIconPath}" height="${iconLayerHeight}">`, 'isBaseLayer': true}
    });

    // Touring Club tile-layer
    var TouringClubTileLayer = new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: 'https://metpetools.s3.eu-central-1.amazonaws.com/ReggioCAL2/{z}/{x}/{y}.png'
      }),
      properties : {'name': `<img title="Touring Club Map" src ="${TouringClubTileLayerIconPath}" height="${iconLayerHeight}">`, 'isBaseLayer': true}
    });

    // Samples points layer
    var SamplesSource = new ol.source.Vector({
      url: 'assets/geodata/Samples.geojson',
      format: new ol.format.GeoJSON({
        dataProjection: 'EPSG:32633',
        featureProjection: 'EPSG:3857'
      })
    });
    var SamplesLayer = new ol.layer.Vector({
      source: SamplesSource,
      style: SamplesStyle,
      properties : {'name': `<img src ="${SamplesLayerIconPath}" height="${iconLayerHeight}"> Samples`, 'isBaseLayer': false}
    });



    // TODO: create 2 separate layer collection
    // HDareaLayerCollection
    // LDareaLayerCollection
    // aggregate button to show/hide all layers inside the collection
    
    // Frist load and visibility of layers
  LayerFristLoad('LayerButton0', baseLayerOff, false, 'LayerButtonIcon0');
  LayerFristLoad('LayerButton1', osmbaselayer, false, 'LayerButtonIcon1');
  LayerFristLoad('LayerButton2', OrtofotoTileLayer, true, 'LayerButtonIcon2');
  LayerFristLoad('LayerButton3', TouringClubTileLayer, false, 'LayerButtonIcon3')
  LayerFristLoad('LayerButton4', GeneralGeologyLayer, true, 'LayerButtonIcon4');
  LayerFristLoad('LayerButton5', ContourLines10mLayer, false, 'LayerButtonIcon5');
  LayerFristLoad('LayerButton6', HDStructuralFeatureLayer, false, 'LayerButtonIcon6');
  LayerFristLoad('LayerButton7', ActiveLandslidesLayer, false, 'LayerButtonIcon7');
  LayerFristLoad('LayerButton8', SamplesLayer, true, 'LayerButtonIcon8');

    // ### LAYER ORDER ###


    var LayerOrder = new ol.Collection([
          baseLayerOff,
          TouringClubTileLayer,
          osmbaselayer,
          OrtofotoTileLayer,
          ActiveLandslidesLayer, 
          GeneralGeologyLayer, 
          ContourLines10mLayer, 
          HDStructuralFeatureLayer,
          SamplesLayer
        ]);

    // ### MAP ###
    // define map extension
    minX = 15.750920388815471;
    minY = 38.244901695888345;
    maxX = 16.044992248280618;
    maxY = 38.45893662712136;
    var mapextension = [minX, minY, maxX, maxY];
    
    // Define the map
    var map = new ol.Map({
      target: "map",
      layers: LayerOrder,
      view: new ol.View({
        center: ol.proj.fromLonLat([15.8584, 38.3806]), 
        zoom: 17,
        extent: ol.proj.transformExtent(mapextension, 'EPSG:4326', 'EPSG:3857'),
        minZoom: 10,
        maxZoom: 20
      })
    });

    // Layers eventListener
    map.on('click', function(evt) {
      map.forEachFeatureAtPixel(evt.pixel, function(feature, layer) {
        if (layer === SamplesLayer) {
          var microdataFullScreen = document.getElementById('microdataFullScreenButton');
          var microdataframe = document.getElementById('microdataFrame');
          //---> Change the microdata source in the iframe and in the "FullScreen button"
          var properties = feature.getProperties();
          var microdataID = properties["Nome"];
          var microdataframesource = 'assets/microdata/PAL/' + microdataID + '/' + microdataID + '.html';
          microdataframe.src = microdataframesource;
          microdataFullScreen.setAttribute('href', microdataframesource);
          // Set a new center view
          var coordinates = feature.getGeometry().getCoordinates();
          map.getView().animate({center: coordinates, zoom: 19});
        }
      });
    });
    
    
    applyInitialUIState();
    applyMargins();

    // ### SEARCH FEATURE ###
    // to activate uncomment this section and the search form in the html file

  // $('.navbar-form button[type="submit"]').click(function(event){
  //     event.preventDefault();
  //     var searchInput = $('.navbar-form input[type="text"]').val();
  //     console.log('Button clicked, the text is: '+ searchInput);
  //     // Geocoding address using Nominatim
  //     $.getJSON('https://nominatim.openstreetmap.org/search?format=json&limit=1&q=' + searchInput, function(data) {
  //       var lat = data[0].lat;
  //       var lon = data[0].lon;
  //       //console.log('Latitude: ' + lat + ' Longitude: ' + lon);
  //       // Zoom to location
  //       map.getView().animate({center: ol.proj.fromLonLat([lon, lat]), zoom: 15});
  //     });
  // });


});
