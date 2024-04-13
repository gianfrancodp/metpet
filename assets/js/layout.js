
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

    // define the color of button when layer is visible
    function setColorButtonLayer(button, layer) {
      var visibility = layer.getVisible();
      if (visibility == false) {
        button.style.color = "gray";
      } else {
        button.style.color = "black";
      }
    };

    // function to change gray/black color to layer buttons
    // and invert visibility of the layer

    function clickButtonLayer(button, layer) {
      var visibility = layer.getVisible();
      layer.setVisible(!visibility);
      if (visibility == false) {
        button.style.color = "black";
      } else {
        button.style.color = "gray";
      }
    };

    


    // 1. ### BASE LAYER ###
    // Define OpenLayers mapbaselayer

    // TODO move attribtions to a separate region of frame

    var osmbaselayer = new ol.layer.Tile({
      source: new ol.source.OSM({
        attributions: [ 'CC-BY-SA | Università di Catania | MetPetId | ' + new Date().getFullYear(),
                        ol.source.OSM.ATTRIBUTION]
      })   
    });
    osmbaselayer.setVisible(false);

    var LayerButton1 = document.getElementById('LayerButton1');
    LayerButton1.addEventListener('load', setColorButtonLayer(LayerButton1, osmbaselayer));
    LayerButton1.addEventListener('click', function() {
      clickButtonLayer(LayerButton1, osmbaselayer);
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

    // frist load visibility
    ActiveLandslidesLayer.setVisible(false);
    var LayerButton2 = document.getElementById('LayerButton2');
    LayerButton2.addEventListener('load', setColorButtonLayer(LayerButton2, ActiveLandslidesLayer));
    LayerButton2.addEventListener('click', function() {
      clickButtonLayer(LayerButton2, ActiveLandslidesLayer);
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
    // Frist load visibility
    GeneralGeologyLayer.setVisible(true);
    var LayerButton3 = document.getElementById('LayerButton3');
    LayerButton3.addEventListener('load', setColorButtonLayer(LayerButton3, GeneralGeologyLayer));
    LayerButton3.addEventListener('click', function() {
      clickButtonLayer(LayerButton3, GeneralGeologyLayer);
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
    // Friest load visibility
    ContourLines10mLayer.setVisible(false);

    var LayerButton4 = document.getElementById('LayerButton4');
    LayerButton4.addEventListener('load', setColorButtonLayer(LayerButton4, ContourLines10mLayer));
    LayerButton4.addEventListener('click', function() {
      clickButtonLayer(LayerButton4, ContourLines10mLayer);
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
    // Frist load visibility
    HDStructuralFeatureLayer.setVisible(false);
    var LayerButton5 = document.getElementById('LayerButton5');
    LayerButton5.addEventListener('load', setColorButtonLayer(LayerButton5, HDStructuralFeatureLayer));
    LayerButton5.addEventListener('click', function() {
      clickButtonLayer(LayerButton5, HDStructuralFeatureLayer);
    });

    // 6. Ortofoto tile-layer
    var OrtofotoTileLayer = new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: 'https://metpetools.s3.eu-central-1.amazonaws.com/ortofoto/{z}/{x}/{y}.png'
      })
    });
    OrtofotoTileLayer.setVisible(true);
    var LayerButton6 = document.getElementById('LayerButton6');
    LayerButton6.addEventListener('load', setColorButtonLayer(LayerButton6, OrtofotoTileLayer));
    LayerButton6.addEventListener('click', function() {
      clickButtonLayer(LayerButton6, OrtofotoTileLayer);
    });

    // TODO create 2 separate layer collection
    // HDareaLayerCollection
    // LDareaLayerCollection
    // aggregate button to show/hide all layers inside the collection
    
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
