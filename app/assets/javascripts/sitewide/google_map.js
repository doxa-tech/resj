var load_google_map = {

  already_loaded: false,

  // Asynchronous loading of google map javascript API
  // Params :
  //   - second_callback (String)
  //   method executed only after the API has fully loaded.
  //   - second_callback_params (Array)
  //   optional params for second_callback
  //   - not_delayed (Boolean)
  //   optional, if true the script doesn't wait for window.onload
  // See https://developers.google.com/maps/documentation/javascript/tutorial
  // See http://www.sitepoint.com/call-javascript-function-string-without-using-eval/
  loadScript: function(second_callback, second_callback_params, not_delayed) {
    function load() {
      load_google_map.second_callback = second_callback; // Set 'second' callback
      load_google_map.second_callback_params = second_callback_params; // Set 'second' callback
      if(!load_google_map.already_loaded) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
            'callback=load_google_map.callback';
        script.setAttribute('data-turbolinks-track', true)
        document.getElementsByTagName('head')[0].appendChild(script);
      } else {
        load_google_map.callback();
      }
    }
    if(not_delayed) {
      load();
    } else {
      window.onload = function() {
        load();
      }
    }
  },

  callback: function() {
    load_google_map.already_loaded = true;
    var fn = eval(load_google_map.second_callback);
    fn.apply(null, load_google_map.second_callback_params);
  }

}

var google_map = {
  maximum_zoom: 17,
  /*
   * is the method called to load the map with given collection
   * collection format : [ {"lat": 12.23, "lng": 41.003, "text": "xx"}, ... ]
   */
  load: function(collection) {
    // load asynchrously
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
        'callback=google_map._load';
    document.getElementsByTagName('head')[0].appendChild(script);
    // sava data for later
    this.collection = collection;
  },

  /*
   * is the private method called when the script is loaded
   */
  _load: function() {
    // create map options
    var mapOptions = {
      mapTypeId: google.maps.MapTypeId.PLAN
    };
    // create the map
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    // the bound object to center the map
    var bounds = new google.maps.LatLngBounds();
    // get all markers
    for (var key in this.collection) {
      var markerData = this.collection[key];
      var latlng = new google.maps.LatLng(markerData.lat, markerData.lng);
      var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: "click me",
        html: markerData.text
      });
      bounds.extend(marker.position);
      var infowindow = new google.maps.InfoWindow({ content: "Holding ..." });
      // if there is 'text' key we show a popup
      if(markerData.hasOwnProperty('text')) {
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(this.html);
          infowindow.open(map,this);
        });
      }
    }
    // center the map
    map.fitBounds(bounds);
    // little tricky to zoom after fitBounds
    var listener = google.maps.event.addListener(map, "idle", function() {
      if (map.getZoom() > google_map.maximum_zoom) map.setZoom(google_map.maximum_zoom);
      google.maps.event.removeListener(listener);
    });
  }

}
