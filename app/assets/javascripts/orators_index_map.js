var gmap = {
  initialize: function() {
    var latlng = new google.maps.LatLng(46.57, 6.8794);
    var mapOptions = {
      center: latlng,
      zoom: 9,
      mapTypeId: google.maps.MapTypeId.PLAN
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    geocoder = new google.maps.Geocoder();
    google.maps.event.addDomListener(window, 'load');
    return map;
  },
  addIcon: function(addr, map, text) {
    geocoder.geocode( { 'address': addr}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        var coord = results[0].geometry.location;
        
        var infowindow = new google.maps.InfoWindow({
          content: text
        });
        var marker = new google.maps.Marker({
          position: coord,
          map: map,
          title:"Hello World!"
        });
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

      } else {
        alert('Impossible de trouver ' + addr + " - " + status);
      }
    });
  }
};