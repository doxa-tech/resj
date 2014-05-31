// ATTENTION easypiechart.js needs to be included !!
$(function() {
	var check = true;
	if(isScrolledIntoView('.easy-chart')) {
		initChart();
	}
	$(window).scroll(function(){
		if(check && isScrolledIntoView('.easy-chart')) {
			check = false;
	    initChart();
		}
	});
});

function initChart() {
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
}

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top+30;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
      && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) );
}