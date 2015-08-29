"use strict";

app.controller('orators#index', ['$scope', '$http', function($scope, $http) {

  /* Filters for the search */
  $scope.toggleFilter = function() {
    if($scope.filter === 'fermer') {
      $scope.filter = 'voir'
    } else {
      $scope.filter = "fermer"
    }
  };

  $scope.search = {};

  $scope.search = function() {
    $http.get('orators.json', { params: {
      'query' : $scope.search.query,
      'canton_ids[]': $scope.search.cantons,
      'theme_ids[]': $scope.search.themes
    }}).success(function(orators) {

      $scope.orators = orators.records;

      google_map.display(orators.grouped);

    });
  };

  $scope.search();

}]);
