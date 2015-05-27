/* load_mapbox:true, $:true */
"use strict";

app.controller('cards#index', ['$scope', '$http', 'Paginator', function($scope, $http, Paginator) {

  $scope.search = {};

  $scope.search = function() {
    $http.get('reseau.json', { params: { 
      'query' : $scope.search.query, 
      'canton_ids[]': $scope.search.cantons, 
      'card_type_ids[]': $scope.search.types,
      'tag_ids[]': $scope.search.tags

    }}).success(function(cards) {

      $scope.cards = cards;

      $scope.letter = { current: null };

      $scope.paginator = Paginator.new(10, cards.length);

      load_mapbox.loadMap(cards);

    });
  };

  $scope.search();

  $scope.filter = "voir";

  $scope.toggleFilter = function() {
    if($scope.filter === 'fermer') {
      $scope.filter = 'voir'
    } else {
      $scope.filter = "fermer"
    }
  };

  /* Description */
  $("#results").on("click", ".show-description", function() {
    var btn = $(this);
    var desc = btn.nextAll(".description");
    btn.toggleClass("selected")
    desc.slideToggle();
  });

  // Show marker when click
  $("#results").on("click", ".show-on-map", function(){
    var link = $(this);
    document.getElementById("map").scrollIntoView();
    load_mapbox.markers.eachLayer(function(layer){
      if(layer.options.id == parseInt(link.data("id"))) {
        load_mapbox.markers.zoomToShowLayer(layer, function() {
          layer.openPopup();
        });
      }
    });
  });

}]);