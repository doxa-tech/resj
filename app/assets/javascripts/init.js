/* global angular, $ */
"use strict";

var app = angular.module("Resj", ["checklist-model", "components"]);

angular.module("components", []);

$(document).on("ready turbolinks:load", function(args) {
  angular.bootstrap(document.body, ["Resj"]);
});