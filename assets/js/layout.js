
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

    // function to change gray/black color to layer buttons
    // and invert visibility of the layer, due click on button layer event

    function clickButtonLayer(button, layer) {
      var visibility = layer.getVisible();
      layer.setVisible(!visibility);
      if (visibility == false) {
        button.style.color = "black";
      } else {
        button.style.color = "gray";
      }
    };

    // Function to turn on a layer for other events
    function LayerTurnOn(button, layer) {
      var visibility = layer.getVisible();
      if (visibility == false) {
        layer.setVisible(true);
        button.style.color = "black";
      }
    };

    // Function to turn off a layer for other events
    function LayerTurnOff(button, layer) {
      var visibility = layer.getVisible();
      if (visibility == true) {
        layer.setVisible(false);
        button.style.color = "gray";
      }
    };

    // Function for frist load and visibility of layers after load
    function LayerFristLoad (ButtonID, layer, fristvisibility ) {
      layer.setVisible(fristvisibility);
      var button = document.getElementById(ButtonID);
      button.addEventListener('load', setColorButtonLayer(button, layer));
      button.addEventListener('click', function() {
        clickButtonLayer(button, layer);
      });
    };
      

    // ### STYLE DEFINITIONS ##
    // TODO: Reorder layer list and id #

    // 1. ### BASE LAYER ###
    // Define OpenLayers mapbaselayer

    // TODO: move attribtions to a separate region of frame

    var osmbaselayer = new ol.layer.Tile({
      source: new ol.source.OSM({
        attributions: [ 'CC-BY-SA | Università di Catania | MetPetId | ' + new Date().getFullYear(),
                        ol.source.OSM.ATTRIBUTION]
      })   
    });
    


  // ### START OF VECTOR LAYERS ###
    var ActiveLandslidesLayerSource = new ol.source.Vector({
      url: 'https://gianfrancodp.github.io/metpet/assets/geodata/Active_landslides.geojson',
      format: new ol.format.GeoJSON({
        dataProjection: 'EPSG:32633',
        featureProjection: 'EPSG:3857'
      })
    });
    var ActiveLandslidesLayer = new ol.layer.Vector({
      source: ActiveLandslidesLayerSource,
      style: ActiveLandslidesLayerStyle
    });
    
     


    // 3. General Geology layer
    var GeneralGeologyLayerSource = new ol.source.Vector({
      url: 'https://gianfrancodp.github.io/metpet/assets/geodata/General_Geology.geojson',
      format: new ol.format.GeoJSON({
        dataProjection: 'EPSG:32633',
        featureProjection: 'EPSG:3857'
      })
    });


    var GeneralGeologyLayer = new ol.layer.Vector({
      source: GeneralGeologyLayerSource,
      style: General_Geology_olStyle,
      opacity: 0.8
    });

    // 4. Contour lines layer 10 m
    
    var ContourLines10mLayerSource = new ol.source.Vector({
      url: 'https://gianfrancodp.github.io/metpet/assets/geodata/contour_10_smooth.geojson',
      format: new ol.format.GeoJSON({
        dataProjection: 'EPSG:32633',
        featureProjection: 'EPSG:3857'
      })
    });
    var ContourLines10mLayer = new ol.layer.Vector({
      source: ContourLines10mLayerSource,
      style: ContourLines10mLayerStyle
    });
    

    // 5. HD Structural Features
    var HDStructuralFeatureSource = new ol.source.Vector({
      url: 'https://gianfrancodp.github.io/metpet/assets/geodata/HD_Structural_Features.geojson',
      format: new ol.format.GeoJSON({
        dataProjection: 'EPSG:32633',
        featureProjection: 'EPSG:3857'
      })
    });
    var HDStructuralFeatureLayer = new ol.layer.Vector({
      source: HDStructuralFeatureSource,
      style: HDStructuralFeaturesStyle
    });

    // 6. Ortofoto tile-layer
    var OrtofotoTileLayer = new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: 'https://metpetools.s3.eu-central-1.amazonaws.com/ortofoto/{z}/{x}/{y}.png'
      })
    });

    

    // TODO: create 2 separate layer collection
    // HDareaLayerCollection
    // LDareaLayerCollection
    // aggregate button to show/hide all layers inside the collection
    
    // Frist load and visibility of layers

  LayerFristLoad('LayerButton1', osmbaselayer, true);
  LayerFristLoad('LayerButton2', ActiveLandslidesLayer, false);
  LayerFristLoad('LayerButton3', GeneralGeologyLayer, true);
  LayerFristLoad('LayerButton4', ContourLines10mLayer, false);
  LayerFristLoad('LayerButton5', HDStructuralFeatureLayer, false);
  LayerFristLoad('LayerButton6', OrtofotoTileLayer, false);

    // ### LAYER ORDER ###


    var LayerOrder = new ol.Collection([
          osmbaselayer,
          OrtofotoTileLayer,
          ActiveLandslidesLayer, 
          GeneralGeologyLayer, 
          ContourLines10mLayer, 
          HDStructuralFeatureLayer,
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
    
    
    applyInitialUIState();
    applyMargins();

    // ### SEARCH FEATURE ###
    // to activate 

  $('.navbar-form button[type="submit"]').click(function(event){
      event.preventDefault();
      var searchInput = $('.navbar-form input[type="text"]').val();
      console.log('Button clicked, the text is: '+ searchInput);
      // Geocoding address using Nominatim
      $.getJSON('https://nominatim.openstreetmap.org/search?format=json&limit=1&q=' + searchInput, function(data) {
        var lat = data[0].lat;
        var lon = data[0].lon;
        //console.log('Latitude: ' + lat + ' Longitude: ' + lon);
        // Zoom to location
        map.getView().animate({center: ol.proj.fromLonLat([lon, lat]), zoom: 15});
      });
  });


});
