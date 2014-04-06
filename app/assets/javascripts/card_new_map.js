function load_map_stuff() {
  var gmap = {
    initialize: function() {
      var latlng = new google.maps.LatLng(46.57, 6.8794);
      document.getElementById("lat").value =  latlng.lat();
      document.getElementById("lng").value =  latlng.lng();
      var mapOptions = {
        center: latlng,
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.HYBRID
      };
      var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
      geocoder = new google.maps.Geocoder();
      marker = new google.maps.Marker({position: latlng,map: map});
      google.maps.event.addListener(map, 'click', function(event) {
        marker.setPosition(event.latLng);
        var coord = event.latLng;
        document.getElementById("lat").value =  coord.lat();
        document.getElementById("lng").value =  coord.lng();
      });
      google.maps.event.addDomListener(window, 'load');
      return {map: map, marker: marker};
    },
    codeAddress: function(addr, map, marker) {
      geocoder.geocode( { 'address': addr}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          var coord = results[0].geometry.location;
          map.setCenter(coord);
          marker.setPosition(coord);
          document.getElementById("lat").value =  coord.lat();
          document.getElementById("lng").value =  coord.lng();
        } else {
          alert('Impossible de trouver ' + addr + " - " + status);
        }
      });
    }
  };
  map = gmap.initialize();
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