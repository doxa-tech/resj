var CardsController = Paloma.controller('Cards');

CardsController.prototype.show = function() {

  // call the map
  load_google_map.loadScript('card_show.initialize', 
        [this.params['lat'], this.params['lng']], true);

  // edit popup of images
  $('.graphics').click('.edit-banner', function(){
    $('.edit-banner .edit-banner').css('display', 'block');
    $('.edit-banner .tools').show();
  });
  $('.graphics').click('.edit-logo', function(){
    $('.edit-logo .edit-logo').css('display', 'block');
    $('.edit-logo .tools').show();
  });
  $('body').click(function(e) {
    if ($(e.target).closest('.edit-logo').length === 0) {
      $('.edit-logo .tools').hide();
      $('.edit-logo .edit-logo').css('display', 'none');
    }
    if ($(e.target).closest('.edit-banner').length === 0) {
      $('.edit-banner .tools').hide();
      $('.edit-banner .edit-banner').css('display', 'none');
    }
  });

  // responsive google map
  var show_map = true;
  $('#show-map').click(function(){
    if(show_map) {
      $('.map-canvas-wrapper').show();
      google.maps.event.trigger(card_show.map, 'resize');
      card_show.center();
      show_map = false;
    } else {
      $('.map-canvas-wrapper').hide();
      show_map = true;
    }
  });

  $('.graphics').on('change', '#card_banner, #card_avatar, #card_remove_banner, #card_remove_avatar', function() {
    $(this).closest('form').ajaxSubmit();
  });

  // fire loading image
  $.ajax({
    data: {
      w: window.innerWidth
    }
  });

}

var card_show = {

  map: null,
  marker: null,

  initialize: function(lat, lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    var mapOptions = {
      center: latlng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.PLAN
    };
    card_show.map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    card_show.marker = new google.maps.Marker({position: latlng,map: card_show.map});
  },

  center: function() {
    card_show.map.setCenter(card_show.marker.getPosition());
  }

};