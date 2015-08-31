/* global app, $, google_map */
"use strict";

app.controller("cards/wizards#new", ["params", function(params) {

  if(params.step == "location") {
    google_map.setGetCoord();
  }

  /* Card#new in ajax */

  $(".wizard").on("click", ".send-a", function() {
    $(this).text("En cours...");
    $("body").attr("data-no-turbolink", "true");
    $(window).bind("beforeunload", function(){
      return "Voulez-vous vraiment quitter cette page alors qu'un transfert est en cours ?";
    });
  });

}]);