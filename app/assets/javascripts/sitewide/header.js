$(document).ready(function() {
	$('.parent > ul').hide();
	$('.parent a:first-child').click(function(){
		$(this).next().slideToggle('1000', 'linear');
	});
	$('.active').parents('.parent ul').show();
});