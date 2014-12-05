<!doctype html>
<html lang="en">
  <head>
     <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
    <style>
      .map {
        height: 400px;
        width: 100%;
      }
    </style>
    <script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
    <script src="leaflet-tilelayer-geojson/TileLayer.GeoJSON.js"></script>
    <script type="text/javascript">
var param = "";
<?php
if(isset($_REQUEST['lang']))
  print "param += \"&lang=".$_REQUEST['lang']."\";\n";
?>
    </script>
    <title>Leaflet for pgmapcss example</title>
  </head>
  <body>
    <h2>My Map</h2>
    <div id="map" class="map"></div>
    <script type="text/javascript" src="index.js"></script>
    <script type="text/javascript" src="ll4pgm.js"></script>
  </body>
</html>
