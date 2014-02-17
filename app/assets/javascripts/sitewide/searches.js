$(document).ready(function() {

  autocomplete();

  tags();

  var delay = (function(){
    var timer = 0;
    return function(callback, ms){
      clearTimeout (timer);
      timer = setTimeout(callback, ms);
    };
  })();

  $('#card-search-form').find('input').on("keyup click", function() {
    delay(function(){
      $('#card-search-form').submit();
    }, 500 );
  });
});