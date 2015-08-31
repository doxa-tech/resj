/* global app, $ */
"use strict";

app.controller("admin/card_statuses#form", ["params", function(params) {

  google_map.display( [{ lat: params.lat ,lng: params.lng }] );

}]);