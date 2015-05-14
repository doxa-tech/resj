/* global Paloma:true, load_mapbox:true, $:true */
"use strict";

var CardsController = Paloma.controller("Cards");

CardsController.prototype.index = function() {

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
  load_mapbox.loadMap("cards_index.init");

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


};

var cards_index = {

  init: function() {

    $.getJSON( "reseau.json", function( data ) {
      load_mapbox.process_map(data);
    });

  },

};
