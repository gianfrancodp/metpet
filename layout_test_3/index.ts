/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

let map: google.maps.Map;

function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    zoom: 10,
    center: { lat: 38.4, lng: 15.8 },
  });

  // NOTE: This uses cross-domain XHR, and may not work on older browsers.
  map.data.loadGeoJson(
    "https://storage.googleapis.com/mapsdevsite/json/google.json"
  );
  map.data.loadGeoJson(
    "map.geojson"
  );

}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
