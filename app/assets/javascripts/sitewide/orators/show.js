var OratorsController = Paloma.controller('Orators');

OratorsController.prototype.show = function() {

  // call the map
  google_map.display( [{ lat: this.params['lat'], lng: this.params['lng'] }] );

}
