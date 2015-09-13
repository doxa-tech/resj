/* global $, google, alert */
"use strict";

/*
 * Purpose : Provides methods to interract with google map that structure is immuable
 * Date : 08.2015
 * Author : Noémien Kocher
 */
var google_map = {

  /*
   * Default params
   */
  maximum_zoom: 17,
  default_lat: 46.57,
  default_lng: 6.8794,

  /*
   * that method gets the scripts at google's and fires the callback
   */
  load: function(callback) {
    // load asynchrously
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://maps.googleapis.com/maps/api/js?v=3.exp&" +
        "callback=" + callback;
    document.getElementsByTagName("head")[0].appendChild(script);
  },

  /*
   * is the method called to display the map with given collection
   * collection format : [ {"lat": 12.23, "lng": 41.003, "text": "xx"}, ... ]
   */
  display: function(collection) {
    // sava data for later
    this.collection = collection;
    google_map.load("google_map._display");
  },

  /*
   * is the private method called to display the map with markers
   */
  _display: function() {
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
      // if there is "text" key we show a popup
      if(markerData.hasOwnProperty("text")) {
        google.maps.event.addListener(marker, "click", function() {
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
  },

  /*
   * function to get coordinate of given point
   * params format : [{ lat: 12.2, lng: 3.003 }] (optional)
   */
   setGetCoord: function(params) {
     this.params = params;
     google_map.load("google_map._setGetCoord");
   },

   /*
    * the private method of setGetCoord
    */
   _setGetCoord: function() {
     var gmap = {
       map: null,
       geocoder: null,
       marker: null,
       initialize: function() {
         var latlng;
         if(google_map.params === undefined) {
           latlng = new google.maps.LatLng(google_map.default_lat, google_map.default_lng);
         } else {
           latlng = new google.maps.LatLng(google_map.params[0].lat, google_map.params[0].lng);
         }
         var mapOptions = {
           center: latlng,
           zoom: 8,
           mapTypeId: google.maps.MapTypeId.HYBRID
         };
         gmap.map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
         gmap.geocoder = new google.maps.Geocoder();
         gmap.marker = new google.maps.Marker({position: latlng,map: gmap.map});
         google.maps.event.addListener(gmap.map, "click", function(event) {
           gmap.marker.setPosition(event.latLng);
           var coord = event.latLng;
           document.getElementById("lat").value =  coord.lat();
           document.getElementById("lng").value =  coord.lng();
         });
         google.maps.event.addDomListener(window, "load");
       },
       codeAddress: function(addr, map, marker) {
         gmap.geocoder.geocode( { "address": addr}, function(results, status) {
           if (status == google.maps.GeocoderStatus.OK) {
             var coord = results[0].geometry.location;
             gmap.map.setCenter(coord);
             gmap.marker.setPosition(coord);
             document.getElementById("lat").value =  coord.lat();
             document.getElementById("lng").value =  coord.lng();
           } else {
             alert("Impossible de trouver " + addr + " - " + status);
           }
         });
       }
     };
     gmap.initialize();
     var street = document.getElementById("card_street");
     var address = document.getElementById("address");
     var btn = document.getElementById("geocode-addr");
     var item = $(".item");
     street.onchange = function(){
       item = $(".item");
       if(item.length) address.value = street.value + " " + $(".item").html().replace(/(.*?\s-\s)?/,"").replace(/\s-\s/g, " ") + ", Switzerland";
     };
     document.getElementById("card_location_id").onchange = function(){
       item = $(".item");
       if(item.length) address.value = street.value + " " + item.html().replace(/(.*?\s-\s)?/,"").replace(/\s-\s/g, " ") + ", Switzerland";
     };
     btn.onclick = function(){
       gmap.codeAddress(address.value, gmap.map, gmap.marker);
     };
   }

};