/* global $, app, load_mapbox, appendScript, onYouTubeIframeAPIReady */
"use strict";

app.controller("pages#home", ["$http", function($http) {

  var mapInitialized = false;
  if(isScrolledIntoView("#map")) {
    mapInitialized = initMap();
  }

  // Pie chart
  var chartInitialized = false;
  if(isScrolledIntoView(".charts", true)) {
    chartInitialized = initChart();
  }

  $(window).on("scroll", function(){

    if(!chartInitialized && isScrolledIntoView(".charts", true)) {
      chartInitialized = initChart();
    }

    if(!mapInitialized && isScrolledIntoView("#map")) {
      mapInitialized =  initMap();
    }
  });

	function initChart() {
	  $(".easy-chart").easyPieChart({
	      animate: 1000,
	      onStep: function(from, to, percent) {
					$(this.el).find("span").text(Math.round(percent / to * $(this.el).data("value")));
				},
				barColor:function(percent) {
					return "rgba(255,97,41," + percent / 100 + ")";
				},
				scaleColor: "#ccc",
	  });
    return true;
	}

  function initMap() {
    $http.get("reseau.json").then(function(res) {
      var cards = res.data;

      load_mapbox.loadMap(cards);

    }, function(err) {
      console.log("failed to load cards", err)
    });
    return true;
  }

  /*
    elementBottom >= docViewTop checks if the element is above the viewport
    elementTop <= docViewBottom checks if the element is below the viewport
  */
	function isScrolledIntoView(selector, entirelyVisible) {
    if (typeof entirelyVisible === 'undefined') { entirelyVisible = false; }
    var element = $(selector);

    if(element.length) {
      var docViewTop = $(window).scrollTop(),
          docViewBottom = docViewTop + $(window).height();

      var elementTop = element.offset().top,
          elementBottom = elementTop + element.height();

      var isVisible = elementBottom >= docViewTop && elementTop <= docViewBottom,
          isEntirelyVisible = elementBottom <= docViewBottom && elementTop >= docViewTop;

      return isVisible && (!entirelyVisible || isEntirelyVisible);
    }
	}

  // This code loads the IFrame Player API code asynchronously.
  appendScript("https://www.youtube.com/iframe_api");

  onYouTubeIframeAPIReady && onYouTubeIframeAPIReady();

}]);
