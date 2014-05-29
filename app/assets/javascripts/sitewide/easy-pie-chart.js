// ATTENTION easypiechart.js needs to be included !!
$(function() {
	var show = false;
	var stop = false;
	$(window).scroll(function(){
		if(show) {
			show = false;
			stop = true;
	    $('.easy-chart').easyPieChart({
	        animate: 1000,
	        onStep: function(from, to, percent) {
						$(this.el).find('span').text(Math.round(percent));
					},
					barColor:function(percent) {
						return "rgba(255,97,41,"+percent/100+")";
					}
	    });
		} else if( !stop && isScrolledIntoView('.easy-chart')) {
			show = true;
		}
	});
});

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top+30;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom)
      && (elemBottom <= docViewBottom) &&  (elemTop >= docViewTop) );
}