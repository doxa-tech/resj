$(function() {
	$('#btn-articles').click(function(e){
		e.preventDefault();
		goToByScroll($('#articles'));  
	});
	$('#btn-docs').click(function(e){
		e.preventDefault();
		goToByScroll($('#docs'));  
	});
	$('#btn-orators').click(function(e){
		e.preventDefault();
		goToByScroll($('#orators'));  
	});
});