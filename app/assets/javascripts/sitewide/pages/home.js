/* global $, app, load_mapbox, appendScript, onYouTubeIframeAPIReady */
"use strict";

app.controller("pages#home", ["$http", function($http) {

  $http.get("reseau.json").success(function(cards) {

    load_mapbox.loadMap(cards);

  });
  
  // Pie chart stuff
  var check = true;
  if(isScrolledIntoView(".easy-chart")) {
    initChart();
  }
  $(window).on("scroll", function(){
    if(check && isScrolledIntoView(".easy-chart")) {
      check = false;
      initChart();
    }
  });

	function initChart() {
	  $(".easy-chart").easyPieChart({
	      animate: 1000,
	      onStep: function(from, to, percent) {
          console.log(Math.round((percent / to) * 100) / 100 * $(this.el).data("value"));
					$(this.el).find("span").text(Math.round((percent / to) * 100) / 100 * $(this.el).data("value"));
				},
				barColor:function(percent) {
					return "rgba(255,97,41,"+percent/100+")";
				},
				scaleColor: "#ccc",
	  });
	}

	function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top+30;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) );
	}

  // This code loads the IFrame Player API code asynchronously.
  appendScript("https://www.youtube.com/iframe_api");

  onYouTubeIframeAPIReady && onYouTubeIframeAPIReady();

}]);
