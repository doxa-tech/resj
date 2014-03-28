$(document).ready(function() {
	$('.parent').find('ul').hide();
	$('.parent').find('.group_link').click(function(e) {
		e.preventDefault();
		$(this).next().slideToggle('1000', 'linear');
	});
	$('.active').parents('.parent ul').show();
});