$(function() {
  $(".pagination a").on("click", function() {
    $.getScript(this.href);
    return false;
  });
  /* Description */
  $('.index .description').hide();
  $('.show-description').click(function(){
    var btn = $(this)
    var el = btn.next().next();
    if(el.css("display")=="none") {
      btn.css("color", "rgba(39,40,41,1)");
    } else {
      btn.css("color", "rgba(39,40,41,.6)");
    }
    el.slideToggle();
  });
});