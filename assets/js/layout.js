
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

    


    // Define the proj4 projection EPSG:32633
    proj4.defs("EPSG:32633","+proj=utm +zone=33 +datum=WGS84 +units=m +no_defs");
    // Register the proj4 projection
    ol.proj.proj4.register(proj4);

    // GeoJson file source and Layer definition
    var vectorSource = new ol.source.Vector({
      url: './assets/geodata/test1.geojson',
      format: new ol.format.GeoJSON({
        dataProjection: 'EPSG:32633',
        featureProjection: 'EPSG:3857'
      })
    });
    var vectorLayer = new ol.layer.Vector({
      source: vectorSource
    });

    // Click event on the layer button
    var LayerButton1 = document.getElementById('LayerButton1');
    LayerButton1.addEventListener('click', function() {
      // Ottieni la visibilità corrente del layer
      var visibility = vectorLayer.getVisible();
    
      // Cambia la visibilità del layer
      vectorLayer.setVisible(!visibility);
      if (visibility == false) {
        LayerButton1.style.color = "black";
      } else {
        LayerButton1.style.color = "gray";
      }
    });

    // Define OpenLayers mapbaselayer
    var osmbaselayer = new ol.layer.Tile({
      source: new ol.source.OSM()
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

    var map = new ol.Map({
      target: "map",
      layers: [osmbaselayer, vectorLayer],
      view: new ol.View({
        center: ol.proj.fromLonLat([15.2442, 38.1923]),
        zoom: 10
      })
    });

    //
    
    applyInitialUIState();
    applyMargins();

    // Search form
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