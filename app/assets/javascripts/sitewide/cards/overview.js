var CardsController = Paloma.controller('Cards');

CardsController.prototype.overview = function() {

  // call the map
  load_google_map.loadScript('card_overview', 
        [this.params['lat'], this.params['lng']], true);

  // make in-place editing
  $('.in-place form').hide();
  var editing = false;
  $(document).on('click', '.in-place', function(){
    if(!editing) {
      var current = $(this).children('p');
      var form = $(this).children('form');
      var input = form.children(':nth-child(2)');
      current.hide();
      form.show();
      input.focus();
      $(this).attr('id', 'ip-cur');

      $(document).bind('click',{'parent': $(this), 'current': current, 'form': form}, handler);

      editing = true;
    }
  });
  var handler = function(event) {
    var parent = event.data.parent;
    var current = event.data.current;
    var form = event.data.form;
    var target = $(event.target);
    if (editing && !target.closest(".in-place form").length) {
      form.hide();
      current.show();
      $(document).unbind('click', handler);
      editing  = false;
      parent.removeAttr('id', '');
    }
  }

}


// is called by google map callback
function card_overview(lat, lng) {
  var gmap = {
    initialize: function() {
      var latlng = new google.maps.LatLng(lat, lng);
      var mapOptions = {
        center: latlng,
        zoom: 10,
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
    var item = $('.item');
    if(item.length) address.value = street.value + " " + $('.item').html().replace(/(.*?\s-\s)?/,"").replace(/\s-\s/g, ' ') + ", Switzerland";
  }
  document.getElementById('card_location_id').onchange = function(){
    var item = $('.item');
    if(item.length) address.value = street.value + " " + item.html().replace(/(.*?\s-\s)?/,"").replace(/\s-\s/g, ' ') + ", Switzerland";
  }
  btn.onclick = function(){
    gmap.codeAddress(address.value, map.map, map.marker);
  };
}