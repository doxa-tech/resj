$(document).ready(function() {
  /* Filters */
  $('#filter ul').hide();
  $('#filter h3 span').click(function(){
    var btn = $(this);
    $('#filter ul').slideToggle();
    if (btn.text()=="voir") { 
      btn.text("fermer");
    } else { 
      btn.text("voir"); 
    }
  });
});