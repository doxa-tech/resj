/* global app, google_map, $ */
"use strict";

app.controller("cards#overview", ["params", function(params) {

  // call the map
  google_map.setGetCoord( [{ lat: params.lat, lng: params.lng }] );

  // make in-place editing
  $(".in-place form").hide();
  var editing = false;
  $(document).on("click", ".in-place", function(){
    if(!editing) {
      var current = $(this).children("p");
      var form = $(this).children("form");
      var input = form.children(":nth-child(2)");
      current.hide();
      form.show();
      input.focus();
      $(this).attr("id", "ip-cur");

      $(document).bind("click",{"parent": $(this), "current": current, "form": form}, handler);

      editing = true;
    }
  });
  var handler = function(event) {
    var parent = event.data.parent;
    var current = event.data.current;
    var form = event.data.form;
    var target = $(event.target);
    if (editing && !target.closest(".in-place form").length) {
      form.hide();
      current.show();
      $(document).unbind("click", handler);
      editing  = false;
      parent.removeAttr("id", "");
    }
  };

  // To transfer
  selectize.users();

}]);
