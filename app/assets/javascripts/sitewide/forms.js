$(function() {

  /* Search form for cards */

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

  /* Add/remove form's fields */

  $('.wizard').on('click', '#add_field', function() {
    associationFields = $(this).parents('.association_fields');
    fields = associationFields.find('.fields');
    count = fields.length;
    content = associationFields.find(".fields:last").clone();
    content.find('input').attr('value', '');
    content.find('span').remove();
    content.find('.add_contact').show();
    content = "<div class='fields'>" + content.html().replace(new RegExp(count-1, "g"), count) + "</div>";
    $(content).insertBefore(associationFields.find(">:last-child"));
    autocomplete();
  });

  $('.wizard').on('click', '#remove_field', function() {
    fields = $(this).parents(".fields");
    fields.find("input[identifier=destroy]").val("1");
    fields.find("input[identifier=is_contact]").val("false")
    fields.hide();
  });

  $('.wizard').on('click', '.add_contact', function() {
    fields = $(this).parents(".fields");
    currentContact = $('.fields.contact')
    currentContact.find('input[identifier=is_contact]').val("false");
    currentContact.find('.add_contact').show();
    $(".fields").removeClass("contact");
    fields.find("input[identifier=is_contact]").val("true");
    fields.addClass("contact");
    $(this).hide();
  });

  /* Card#new in ajax */

  $('.wizard').on('click', '.send-a', function() {
      $(this).text('En cours...');
  });

  $('.wizard').on('submit', '#form-progress', function(){
    $(this).find('input[type="submit"]').attr('value', 'En cours... ');
    $('body').attr("data-no-turbolink", "true");
    $(window).bind('beforeunload', function(){
      return "Voulez-vous vraiment quitter cette page alors qu'un transfert est en cours ?";
    });
  });

 /* Form's function needed to be recallable */

  hide_contact()

  autocomplete();

});

/* Hide current contact in Card#new */

function hide_contact() {
  $('.team').find(".contact").find(".add_contact").hide();
}

/* Autocomplete fields */

function autocomplete() {
  $('.autocomplete').find('input').autocomplete({
    source: function(request, response) {
      attr = this.element.data('attr');
      link = this.element.parents('.autocomplete').data('link');
      if (attr) {
        $.ajax({
          url:'/searches/' + link,
          type:"post",
          dataType: 'json',
          data: 'term=' + request.term + '&attr=' + attr,
          async: true,
          cache: true,
          success: function(data){
            response(data); 
          }
        });
      }
    }
  });
}