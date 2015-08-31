/* global app */
"use strict";

app.controller("subjects#index", ["$scope", function($scope) {

	/* Filters for the search */
  $scope.toggleFilter = function() {
    if($scope.filter === "fermer") {
      $scope.filter = "voir";
    } else {
      $scope.filter = "fermer";
    }
  };

}]);