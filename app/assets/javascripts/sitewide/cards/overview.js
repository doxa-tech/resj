/* global Paloma:true, load_google_map:true, google:true, alert:true */
var CardsController = Paloma.controller('Cards');

CardsController.prototype.overview = function() {

  // call the map
  load_google_map.loadScript('card_overview', 
        [this.params.lat, this.params.lng], true);

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
  };

};


// is called by google map callback
/*jshint unused:false */
function card_overview(lat, lng) {
  var gmap = {
    map: null,
    geocoder: null,
    marker: null,
    initialize: function() {
      var latlng = new google.maps.LatLng(lat, lng);
      var mapOptions = {
        center: latlng,
        zoom: 10,
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
    codeAddress: function(addr) {
      gmap.geocoder.geocode( { 'address': addr}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
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
  street.onchange = function(){update_addr();};
  document.getElementById('card_location_id').onchange = function(){update_addr();};
  btn.onclick = function(){
    gmap.codeAddress(address.value);
  };
  function update_addr() {
    if(item.length) {
      address.value = street.value + " " + item.html().replace(/(.*?\s-\s)?/,"").replace(/\s-\s/g, ' ') + ", Switzerland";
    }    
  }
}