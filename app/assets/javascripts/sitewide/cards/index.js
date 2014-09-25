var CardsController = Paloma.controller('Cards');

CardsController.prototype.index = function() {

  /*****************************
  * TODO : this section is loaded each time a pagination occurs
  *        makes click events trigered many times at once (nkcr)
  */
  console.error('TODO : see comment');
  /* ************************* */

  // Filters for the search
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


  // Description
  // Also loaded in ajax
  $('#container.cards .index .description').hide();
  $('#container.cards .show-description').click(function(){
    var btn = $(this)
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


}

var cards_index = {

  init: function() {
    $.ajax({
           url: "cards", // Route to the Script Controller method
          type: "GET",
         error: function() {
                  $('#map').html("<p class='err'>Erreur de chargement, rechargez la page.</p>");
                  }
    });
  },

}