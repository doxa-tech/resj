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
  }
};