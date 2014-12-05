var map;

function init() {
  layer = new ll4pgmLayer({
    url: "test.cgi?x={x}&y={y}&z={z}&srs=4326",
    maxZoom: 17,
//    tileSize: 1024
  });
//&tilesize=1024

  map = L.map('map').setView([48.2, 16.4], 15);
  L.tileLayer('http://tiles-base.openstreetbrowser.org/tiles/basemap_base/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18
  }).addTo(map);

  map.addLayer(layer.layer)
}

window.onload = init;
