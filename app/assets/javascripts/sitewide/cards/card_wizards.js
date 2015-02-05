/* global Paloma:true, load_google_map:true, google:true, alert:true */
var CardWizardsController = Paloma.controller('CardWizards');

CardWizardsController.prototype.new = function() {

  if(this.params['step'] == 'location') {
    load_google_map.loadScript('card_new_map');
  }

  /* Card#new in ajax */

  $('.wizard').on('click', '.send-a', function() {
    $(this).text('En cours...');
    $('body').attr("data-no-turbolink", "true");
    $(window).bind('beforeunload', function(){
      return "Voulez-vous vraiment quitter cette page alors qu'un transfert est en cours ?";
    });
  });

}

// is called by google map callback
/*jshint unused:false */
function card_new_map() {
  var gmap = {
    map: null,
    geocoder: null,
    marker: null,
    initialize: function() {
      var latlng = new google.maps.LatLng(46.57, 6.8794);
      var mapOptions = {
        center: latlng,
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.HYBRID
      };
      gmap.map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
      gmap.geocoder = new google.maps.Geocoder();
      gmap.marker = new google.maps.Marker({position: latlng,map: gmap.map});
      google.maps.event.addListener(gmap.map, 'click', function(event) {
        gmap.marker.setPosition(event.latLng);
        var coord = event.latLng;
        document.getElementById("lat").value =  coord.lat();
        document.getElementById("lng").value =  coord.lng();
      });
      google.maps.event.addDomListener(window, 'load');
    },
    codeAddress: function(addr, map, marker) {
      gmap.geocoder.geocode( { 'address': addr}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          var coord = results[0].geometry.location;
          gmap.map.setCenter(coord);
          gmap.marker.setPosition(coord);
          document.getElementById("lat").value =  coord.lat();
          document.getElementById("lng").value =  coord.lng();
        } else {
          alert('Impossible de trouver ' + addr + " - " + status);
        }
      });
    }
  };

  gmap.initialize();

  var street = document.getElementById('card_street');
  var address = document.getElementById('address');
  var btn = document.getElementById('geocode-addr');
  var item = $('.item');

  street.onchange = function(){
    item = $('.item');
    if(item.length) address.value = street.value + " " + $('.item').html().replace(/(.*?\s-\s)?/,"").replace(/\s-\s/g, ' ') + ", Switzerland";
  }
  document.getElementById('card_location_id').onchange = function(){
    item = $('.item');
    if(item.length) address.value = street.value + " " + item.html().replace(/(.*?\s-\s)?/,"").replace(/\s-\s/g, ' ') + ", Switzerland";
  }
  btn.onclick = function(){
    gmap.codeAddress(address.value, gmap.map, gmap.marker);
  };
}