var OratorsController = Paloma.controller('Orators');

OratorsController.prototype.index = function() {

  /* Filters for the search */
  $('#filter ul').hide();
  $('#filter h3 span.show').click(function(){
    var btn = $(this);
    $('#filter ul').slideToggle();
    if (btn.text()=="voir") {
      btn.text("fermer");
    } else {
      btn.text("voir");
    }
  });

	load_google_map.loadScript('orators_index.hello', null, true);

}

var orators_index = {

	infowindow: null,
	map: null,
	markers: [],

	hello: function() {

    orators_index.infowindow = new google.maps.InfoWindow();
    var latlng = new google.maps.LatLng(46.57, 6.8794);
    var mapOptions = {
      center: latlng,
      zoom: 9,
      mapTypeId: google.maps.MapTypeId.PLAN
    };
    orators_index.map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    google.maps.event.addDomListener(window, 'load');

    $.ajax({
                 url: "orators", // Route to the Script Controller method
                type: "GET",
               error: function() {
                        $('#map-canvas').html("<p class='err'>Erreur de chargement, rechargez la page.</p>");
                      }
    });

	},


  addIcon: function(lat, lng, text) {
    var myLatlng = new google.maps.LatLng(lat,lng);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: orators_index.map,
      title:"Click to open"
    });
    orators_index.markers.push(marker);
    google.maps.event.addListener(marker, 'click', function() {
      orators_index.infowindow.close();
      orators_index.infowindow.setContent(text);
      orators_index.infowindow.open(orators_index.map,marker);
        $('.link_orator').click(function(){
          $($(this).data('id')).animate({backgroundColor: '#A1FFA1'}, 'slow');
        });
    });
  },

  clearMarkers: function() {
  	for(var i = 0; i < orators_index.markers.length; i++) {
  		orators_index.markers[i].setMap(null);
  	}
  	orators_index.markers = [];
  },

}
