var gmap_orator = {
  initialize: function() {
    var infowindow = new google.maps.InfoWindow();
    var latlng = new google.maps.LatLng(46.57, 6.8794);
    var mapOptions = {
      center: latlng,
      zoom: 9,
      mapTypeId: google.maps.MapTypeId.PLAN
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    geocoder = new google.maps.Geocoder();
    google.maps.event.addDomListener(window, 'load');
    return {"map":map,"infowindow": infowindow};
  },
  addIcon: function(lat, lng, map, text, infowindow) {
    var myLatlng = new google.maps.LatLng(lat,lng);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title:"Click to open"
    });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.close();
      infowindow.setContent(text);
      infowindow.open(map,marker);
        $('.link_orator').click(function(){
          console.log($(this).data('id'));
          $($(this).data('id')).animate({backgroundColor: '#A1FFA1'}, 'slow');
        });
    });
  }
};