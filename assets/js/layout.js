
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

    // 1. ### BASE LAYER ###
    // Define OpenLayers mapbaselayer
    var osmbaselayer = new ol.layer.Tile({
      source: new ol.source.OSM({
        attributions: [ 'CC-BY-SA | Università di Catania | MetPetId | ' + new Date().getFullYear(),
                        ol.source.OSM.ATTRIBUTION]
      })
    });

    //Click event on the base layer button 1
    var LayerButton1 = document.getElementById('LayerButton1');
    LayerButton1.addEventListener('click', function() {
      var visibility = osmbaselayer.getVisible();
      osmbaselayer.setVisible(!visibility);
      if (visibility == false) {
        LayerButton1.style.color = "black";
      } else {
        LayerButton1.style.color = "gray";
      }
    });

  // ### START OF VECTOR LAYERS ###

    // 2. Active Landslides layer
    var ActiveLandslidesLayerStyle = function(feature) {
      var alpha = 0.5;
      var color;
      switch(feature.get('TIPOLOGIA')) {
        case 'Crollo': color = `rgba(26, 150, 65, ${alpha}`; break;
        case 'Scorrimento': color  = `rgba(119, 195, 92, ${alpha})`; break;
        case 'ZDSL': color = `rgba(196, 230, 135, ${alpha})`; break;
        case 'ZEI' : color = `rgba(255, 255, 192, ${alpha})`; break;
        case 'ZFP' : color = `rgba(255, 127, 0, ${alpha})`; break;
        case 'ZFS' : color = `rgba(255, 0, 0, ${alpha})`; break;

      } // get the color from the feature
      return new ol.style.Style({
          fill: new ol.style.Fill({
              color: color
          }),
          stroke: new ol.style.Stroke({
              color: color,
              width: 2
          }),
          text: new ol.style.Text({
            font: '12px Calibri,sans-serif',
            fill: new ol.style.Fill({
              color: '#000'
            }),
            stroke: new ol.style.Stroke({
              color: '#fff',
              width: 3
            }),
            text: feature.get('TIPOLOGIA')
          })
      });
    };
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

    var LayerButton2 = document.getElementById('LayerButton2');
    LayerButton2.addEventListener('click', function() {
      // get actual visibility
      var visibility = ActiveLandslidesLayer.getVisible();
      // Set the opposite visibility
      ActiveLandslidesLayer.setVisible(!visibility);
      // set color of the button
      if (visibility == false) {
        LayerButton2.style.color = "black";
      } else {
        LayerButton2.style.color = "gray";
      }
    });
     


    // 3. General Geology layer
  

    var GeneralGeologyLayerStyle = function(feature) {
      var alpha = 0.5;
      var color;
      switch(feature.get('Litotipo')) {
        case 'Marine Terraces': color = `rgba(144, 238, 144, ${alpha}`; break;
        case 'Beaches and alluvial deposits': color = `rgba(0, 128, 0, ${alpha}`; break;
        case 'Trubi': color = `rgba(34, 139, 34, ${alpha}`; break;
        case 'Mylonitic Skarn' : color = `rgba(85, 107, 47, ${alpha}`; break;
        case 'Skarn' : color = `rgba(0, 102, 51, ${alpha}`; break;
        case 'Evaporitic brecciated limestones' : color = `rgba(102, 205, 170, ${alpha}`; break;
        case 'Migmatitic paragneiss' : color = `rgba(127, 255, 212, ${alpha}`; break;
        case 'Debris flow' : color = `rgba(175, 238, 238, ${alpha}`; break;
        case 'Porites limestones' : color = `rgba(0, 102, 204, ${alpha}`; break;
        case 'Augen gneiss' : color = `rgba(135, 206, 250, ${alpha}`; break;
        case 'Siliciclastic arenites' : color = `rgba(15, 82, 186, ${alpha}`; break;
        case 'Layered tonalites' : color = `rgba(0, 0, 128, ${alpha}`; break;
        case 'Marly clays' : color = `rgba(10, 10, 20, ${alpha}`; break;
        case 'Landslides' : color = `rgba(0, 39, 77, ${alpha}`; break;
        case 'Mylonitic magmatitic paragneiss' : color = `rgba(65, 105, 225, ${alpha}`; break;

      } // get the color from the feature
      return new ol.style.Style({
          fill: new ol.style.Fill({
              color: color
          }),
          stroke: new ol.style.Stroke({
              color: color,
              width: 2
          }),
          text: new ol.style.Text({
            font: '12px Calibri,sans-serif',
            fill: new ol.style.Fill({
              color: '#000'
            }),
            stroke: new ol.style.Stroke({
              color: '#fff',
              width: 3
            }),
            text: feature.get('Litotipo')
          })
      });
    };

    var GeneralGeologyLayerSource = new ol.source.Vector({
      url: 'https://gianfrancodp.github.io/metpet/assets/geodata/General_Geology.geojson',
      format: new ol.format.GeoJSON({
        dataProjection: 'EPSG:32633',
        featureProjection: 'EPSG:3857'
      })
    });
    console.log('General Geology Layer loaded');

    var GeneralGeologyLayer = new ol.layer.Vector({
      source: GeneralGeologyLayerSource,
      style: GeneralGeologyLayerStyle
    });


    var LayerButton3 = document.getElementById('LayerButton3');
    LayerButton3.addEventListener('click', function() {
      // get actual visibility
      var visibility = GeneralGeologyLayer.getVisible();
      // Set the opposite visibility
      GeneralGeologyLayer.setVisible(!visibility);
      // set color of the button
      if (visibility == false) {
        LayerButton3.style.color = "black";
      } else {
        LayerButton3.style.color = "gray";
      }
    });

    // 4. Contour lines layer 10 m
    var ContourLines10mLayerStyle = new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'blue',
        width: 1
      })
    });
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

    var LayerButton4 = document.getElementById('LayerButton4');
    LayerButton4.addEventListener('click', function() {
      // get actual visibility
      var visibility = ContourLines10mLayer.getVisible();
      // Set the opposite visibility
      ContourLines10mLayer.setVisible(!visibility);
      // set color of the button
      if (visibility == false) {
        LayerButton4.style.color = "black";
      } else {
        LayerButton4.style.color = "gray";
      }
    });


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
      layers: [osmbaselayer, ActiveLandslidesLayer, GeneralGeologyLayer, ContourLines10mLayer],
      view: new ol.View({
        center: ol.proj.fromLonLat([15.8584, 38.3806]), 
        zoom: 17,
        extent: ol.proj.transformExtent(mapextension, 'EPSG:4326', 'EPSG:3857'),
        minZoom: 10,
        maxZoom: 20
      })
    });

    // // Add the popup to the map
    // var element = document.getElementById('popup');
    // var popup = new ol.Overlay({
    //   element: element,
    //   positioning: 'bottom-center',
    //   stopEvent: false,
    // });
    // map.addOverlay(popup);
    // let popover;
    // function disposePopover() {
    //   if (popover) {
    //     popover.dispose();
    //     popover = undefined;
    //   }
    // }
    // // display popup on click
    // map.on('click', function (evt) {
    //   const feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
    //     return feature;
    //   });
    //   disposePopover();
    //   if (!feature) {
    //     return;
    //   }
    //   popup.setPosition(evt.coordinate);
      
    //   popover = new bs.Popover(element, {
    //     placement: 'top',
    //     html: true,
    //     content: feature.get('sigla'),
    //   });
    //   popover.show();
    // });


    // map.addOverlay(popup);
    // map.on('click', function(evt) {
    //   var feature = map.forEachFeatureAtPixel(evt.pixel, function(feature) {
    //     return feature;
    //   });
    //   if (feature) {
    //     var coordinates = feature.getGeometry().getCoordinates();
    //     popup.setPosition(coordinates);
    //     console.log('Popup position: ' + popup.getPosition());
    //     $(element).popover({
    //       'placement': 'top',
    //       'html': true,
    //       'content': feature.get('name')
    //     });
    //     $(element).popover('show');
    //   } else {
    //     $(element).popover('destroy');
    //   }
    // });

    //
    
    applyInitialUIState();
    applyMargins();

    // ### SEARCH FEATURE ###

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
