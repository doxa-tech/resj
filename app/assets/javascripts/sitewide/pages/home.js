var PagesController = Paloma.controller('Pages');

PagesController.prototype.home = function() {

	// Mapbox loading
  load_mapbox.loadMap("cards_index.init");

  // This code loads the IFrame Player API code asynchronously.
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = "https://www.youtube.com/iframe_api";
  document.body.appendChild(script);

		//
	// Fix for map fullscreen and incompatibility with sublim video
	//
	var screen_change_events = "webkitfullscreenchange mozfullscreenchange fullscreenchange";
	$(document).on(screen_change_events, function () {
		$('#map').removeClass('leaflet-fullscreen-on');
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

}

  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'ppQ23qycHC0',
      playerVars: {"modestbranding": 1, "wmode": "opaque", "showinfo": 0, "autohide": 1, "controls": 1}
    });
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
	}
}