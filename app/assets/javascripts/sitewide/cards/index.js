var CardsController = Paloma.controller('Cards');

CardsController.prototype.index = function() {

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

  // ajax for will_paginate
  $("#container.cards .pagination a").on("click", function() {
    $.getScript(this.href);
    return false;
  });

}