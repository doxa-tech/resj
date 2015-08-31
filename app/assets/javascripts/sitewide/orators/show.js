/* global app, google_map */
"use strict";

app.controller("orators#show", ["params", function(params) {

  // call the map
  google_map.display( [{ lat: params.lat, lng: params.lng }] );

}]);
