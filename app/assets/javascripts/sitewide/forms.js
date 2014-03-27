$(document).ready(function() {

  autocomplete();

  selectize();

  selectize_location();

  tags();

  var delay = (function(){
    var timer = 0;
    return function(callback, ms){
      clearTimeout (timer);
      timer = setTimeout(callback, ms);
    };
  })();

  $('#search-form').find('input').on("keyup click", function() {
    delay(function(){
      $('#search-form').submit();
    }, 500 );
  });

  $('.selectize-themes').selectize({
    maxItems: 10  
  });
});