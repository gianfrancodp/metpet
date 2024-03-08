
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

// OpenLayers map

    
    // ### VECTOR LAYER ###

    // Define the proj4 projection EPSG:32633
    proj4.defs("EPSG:32633","+proj=utm +zone=33 +datum=WGS84 +units=m +no_defs");
    // Register the proj4 projection
    ol.proj.proj4.register(proj4);
    // Define projection EPSG:4326
    proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs");
    ol.proj.proj4.register(proj4);



    // GeoJson file source and Layer definition
    
    var vectoriconStyle = new ol.style.Style({
      image: new ol.style.Icon({
        anchor: [0.5, 0.5],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        src: 'https://gianfrancodp.github.io/metpet/assets/microdata/PAL/icon.png', // icon from https://mapicons.mapsmarker.com/
        scale: 1
      })
    });

    var vectorSource = new ol.source.Vector({
      url: 'https://gianfrancodp.github.io/metpet/assets/microdata/PAL/locations.geojson',
      format: new ol.format.GeoJSON({
        dataProjection: 'EPSG:4326',
        featureProjection: 'EPSG:3857'
      })
    });
    var vectorLayer = new ol.layer.Vector({
      source: vectorSource,
      style: vectoriconStyle
    });
    // var popupcontent = document.createElement('popup');
    // popupcontent.innerHTML = 'This is a popup';
    // var popup = new ol.Overlay({
    //   element: popupcontent,
    //   positioning: 'bottom-center',
    //   stopEvent: false,
    //   offset: [0, -50]
    // });
    // var popup = new ol.Overlay({
    //     element: document.getElementById('popup'),
    //   });
    //   popup.setPosition(0,0); //coordinate is the clicked point
    //   console.log('Popup position: ' + popup.getPosition());
 
   
     
    // Click event on the layer button
    var LayerButton1 = document.getElementById('LayerButton1');
    LayerButton1.addEventListener('click', function() {
      // Ottieni la visibilità corrente del layer
      var visibility = vectorLayer.getVisible();
    
      // Set visibility
      vectorLayer.setVisible(!visibility);
      if (visibility == false) {
        LayerButton1.style.color = "black";
      } else {
        LayerButton1.style.color = "gray";
      }
    });

    // ### BASE LAYER ###
    // Define OpenLayers mapbaselayer
    var osmbaselayer = new ol.layer.Tile({
      source: new ol.source.OSM({
        attributions: [ 'CC-BY-SA | Università di Catania | MetPetId | ' + new Date().getFullYear(),
                        ol.source.OSM.ATTRIBUTION]
      })
    });
    //Click event on the base layer button
    var LayerButton2 = document.getElementById('LayerButton2');
    LayerButton2.addEventListener('click', function() {
      var visibility = osmbaselayer.getVisible();
      osmbaselayer.setVisible(!visibility);
      if (visibility == false) {
        LayerButton2.style.color = "black";
      } else {
        LayerButton2.style.color = "gray";
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
      layers: [osmbaselayer, vectorLayer],
      view: new ol.View({
        center: ol.proj.fromLonLat([15.8584, 38.3806]), 
        zoom: 17,
        extent: ol.proj.transformExtent(mapextension, 'EPSG:4326', 'EPSG:3857'),
        minZoom: 10,
        maxZoom: 20
      })
    });

    // Add the popup to the map
    var element = document.getElementById('popup');
    var popup = new ol.Overlay({
      element: element,
      positioning: 'bottom-center',
      stopEvent: false,
    });
    map.addOverlay(popup);
    let popover;
    function disposePopover() {
      if (popover) {
        popover.dispose();
        popover = undefined;
      }
    }
    // display popup on click
    map.on('click', function (evt) {
      const feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
        return feature;
      });
      disposePopover();
      if (!feature) {
        return;
      }
      popup.setPosition(evt.coordinate);
      
      popover = new bs.Popover(element, {
        placement: 'top',
        html: true,
        content: feature.get('sigla'),
      });
      popover.show();
    });


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
