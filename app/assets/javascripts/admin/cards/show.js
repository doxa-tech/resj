/* global app, google_map */
"use strict";

app.controller("admin/cards#show", ["params", function(params) {

  google_map.display( [{ lat: params.lat ,lng: params.lng }] );

}]);