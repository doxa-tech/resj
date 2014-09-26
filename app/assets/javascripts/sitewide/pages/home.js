var PagesController = Paloma.controller('Pages');

PagesController.prototype.home = function() {

	page_home.init();

	// Mapbox loading
  load_mapbox.loadMap("cards_index.init");

}



// ATTENTION easypiechart.js needs to be included !!
var page_home = {
	mapbox: function() {
    $.ajax({
           url: "/", // Route to the Script Controller method
          type: "GET",
         error: function() {
                  $('#map').html("<p class='err'>Erreur de chargement, rechargez la page.</p>");
                  }
    });
	},

	initChart: function() {
	  $('.easy-chart').easyPieChart({
	      animate: 1000,
	      onStep: function(from, to, percent) {
					$(this.el).find('span').text(Math.round(percent) / to * $(this.el).data('value'));
				},
				barColor:function(percent) {
					return "rgba(255,97,41,"+percent/100+")";
				},
				scaleColor: "#ccc",
	  });
	},
	isScrolledIntoView: function(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top+30;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
      && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) );
	},
	init: function() {
		$(function() {
			//
			// Sublime video stuff
			// Snippets to work with turbolinks
			//
			window.SublimeVideo = {};
			$(window).bind('page:change', function() {
			  return SublimeVideo.prepareVideoPlayers();
			});
			 
			SublimeVideo.prepareVideoPlayers = function() {
			  sublime.ready(function() {
			    return $('.sublime').each(function(index, el) {
			      return sublime.prepare(el);
			    });
			  });
			  return sublime.load();
			};
			//
			// Fix for map fullscreen and incompatibility with sublim video
			//
			var screen_change_events = "webkitfullscreenchange mozfullscreenchange fullscreenchange";
			$(document).on(screen_change_events, function () {
				if(!map.isFullscreen()) {
					$('#map').removeClass('leaflet-fullscreen-on');
				}
			});
			//
			// Pie chart stuff
			//
			var check = true;
			if(page_home.isScrolledIntoView('.easy-chart')) {
				page_home.initChart();
			}
			$(document).on('scroll', function(){
				if(check && page_home.isScrolledIntoView('.easy-chart')) {
					check = false;
			    page_home.initChart();
				}
			});
			
		});
	}
}