$(function() {

  autocomplete();

  hide_contact();

  selectize.default();

  selectize.location();

  selectize.cards();

  selectize.tags();

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
    maxItems: 10,
    plugins: ['remove_button'],
    dropdownParent: "body" // prevent overflow error in admin
  });

  form.card();
  form.progress();
});