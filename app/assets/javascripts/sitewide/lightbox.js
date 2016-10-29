/* global $ */
"use strict";

$(document).on("ready page:load", function() {

  $("#lightbox").click(function(e) {
    if(e.target.id == "lightbox") {
      $(this).removeClass("show");
    }
  });

});
