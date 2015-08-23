var OratorsController = Paloma.controller('Orators');

OratorsController.prototype.index = function() {

  /* Filters for the search */
  $('#filter ul').hide();
  $('#filter h3 span.show').click(function(){
    var btn = $(this);
    $('#filter ul').slideToggle();
    if (btn.text()=="voir") {
      btn.text("fermer");
    } else {
      btn.text("voir");
    }
  });

  $.getJSON( "orators.json", function( data ) {
    google_map.display(data);
  });

}
