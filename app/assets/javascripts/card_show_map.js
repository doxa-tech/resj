var gmap = {
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
  loc_search: function(map) {
    var street = document.getElementById('card_street');
    var address = document.getElementById('address');
    var btn = document.getElementById('geocode-addr');
    street.onchange = function(){
      address.value = street.value + " " + $('.item').html() + ", Switzerland";
    }
    document.getElementById('card_location_id').onchange = function(){
      address.value = street.value + " " + $('.item').html() + ", Switzerland";
    }
    btn.onclick = function(){
      gmap.codeAddress(address.value, map.map, map.marker);
    };
  }
};