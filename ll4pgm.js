var cached_styles = {}

function ll4pgmLayer(options) {
  this.options = options;

  this.layer = new L.TileLayer.GeoJSON(this.options.url, {
    style: {
      clickable: true,
      color: '#f00',
      fillColor: '#0f0',
      weight: 3,
    },
    //onEachFeature: this.styleFeature.bind(this)
  });
}

//ll4pgmLayer.prototype.styleFeature = function(feature, layer) {
//  layer.setStyle({
//  });
//}
