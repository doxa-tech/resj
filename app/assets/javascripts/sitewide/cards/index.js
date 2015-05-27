/* load_mapbox:true, $:true */
"use strict";

var cards_index = {

  init: function() {

    $.getJSON( "reseau.json", function( data ) {
      load_mapbox.process_map(data);
    });

  },

};

app.controller('cards#index', ['$scope', '$http', function($scope, $http) {

  $scope.search = {};

  $scope.search = function() {
    $http.get('reseau.json', { params: { 
      'query' : $scope.search.query, 
      'canton_ids[]': $scope.search.cantons, 
      'card_type_ids[]': $scope.search.types,
      'tag_ids[]': $scope.search.tags
    }}).success(function(cards) {
      $scope.cards = cards;
      $scope.letter = { current: cards[0].name[0].toLowerCase() };
    });
  };

  $scope.search();

  // Filters for the search
  $("#filter ul").hide();
  $("#filter h3 span.show").click(function(){
    var btn = $(this);
    $("#filter ul").slideToggle();
    if (btn.text()=="voir") {
      btn.text("fermer");
    } else {
      btn.text("voir");
    }
  });

  /* Description */
  $("#results").on("click", ".show-description", function(){
    var btn = $(this);
    var el = btn.next().next();
    if(el.css("display")=="none") {
      btn.css("color", "rgba(39,40,41,1)");
    } else {
      btn.css("color", "rgba(39,40,41,.6)");
    }
    el.slideToggle();
  });

  // Ajax for will_paginate
  $("#results").on("click", ".pagination a", function() {
    $.getScript(this.href);
    return false;
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

}]).directive('displayLetter', function() {
  return {
    restrict: 'E',
    transclude: true,
    template: '<li class="letter" ng-transclude></li>',
    link: function(scope, element, attrs) {
      if(attrs.new !== scope.letter.current) {
        scope.letter.current = attrs.new;
      } else {
        element.remove();
      }
    }
  };
});