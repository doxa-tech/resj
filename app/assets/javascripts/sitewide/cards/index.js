/* load_mapbox:true, $:true */
"use strict";

var cards_index = {

  init: function() {

    $.getJSON( "reseau.json", function( data ) {
      load_mapbox.process_map(data);
    });

  },

};

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
      $scope.paginator = Paginator.new(2, cards.length);
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
    var el = btn.next().next();
    if(el.css("display")=="none") {
      btn.css("color", "rgba(39,40,41,1)");
    } else {
      btn.css("color", "rgba(39,40,41,.6)");
    }
    el.slideToggle();
  });

  // Mapbox loading
  load_mapbox.loadMap(cards_index.init);

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