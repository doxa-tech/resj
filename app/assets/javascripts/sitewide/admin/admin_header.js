/* Admin header menu */

$(function() {
	$('#admin_header .parent').find('ul').hide();
	$('#admin_header .parent').find('.group_link').click(function(e) {
		e.preventDefault();
		$(this).next().slideToggle('1000', 'linear');
	});
	$('#admin_header .active').parents('.parent ul').show();

	$('#admin_top_header').click(function(){
		$('#admin_header').slideToggle();
		window.onresize = function() {
			if(window.innerWidth > 1200) {
				$('#admin_header').show();
			} else {
				$('#admin_header').hide();
			}
		};
	});
});