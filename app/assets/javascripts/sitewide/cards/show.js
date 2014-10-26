var CardsController = Paloma.controller('Cards');

CardsController.prototype.show = function() {

  // call the map
  load_google_map.loadScript('card_show.initialize', 
        [this.params['lat'], this.params['lng']], true);

  $('.edit-banner').click(function(){
    $('.edit-banner .edit-banner').css('display', 'block');
    $('.edit-banner .tools').show();
  });
  $('body').click(function(e) {
    if ($(e.target).closest('.edit-banner').length === 0) {
      $('.edit-banner .tools').hide();
      $('.edit-banner .edit-banner').css('display', 'none');
    }
  });
  $('.edit-logo').click(function(){
    $('.edit-logo .edit-logo').css('display', 'block');
    $('.edit-logo .tools').show();
  });
  $('body').click(function(e) {
    if ($(e.target).closest('.edit-logo').length === 0) {
      $('.edit-logo .tools').hide();
      $('.edit-logo .edit-logo').css('display', 'none');
    }
  });
};

var card_show = {
  initialize: function(lat, lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    var mapOptions = {
      center: latlng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.PLAN
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    geocoder = new google.maps.Geocoder();
    marker = new google.maps.Marker({position: latlng,map: map});
  }
};