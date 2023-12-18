// Initialize and add the map
let map;

async function initMap() {
  
  const position = { lat: 38.5, lng: 16 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 10,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "MetPetId",
  });
  // map.data.loadGeoJson(
  //      "https://storage.googleapis.com/mapsdevsite/json/google.json",
  //    );
  map.data.loadGeoJson(Geologia_Nuova);
}
initMap();