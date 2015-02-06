var PagesController = Paloma.controller('Pages');

PagesController.prototype.resources = function() {

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

	var show = true;
	if ($('article .text').length && $('article .text')[0].scrollHeight >  $('article .text').innerHeight()) {
		$("#more-article").show();
		$("#more-article").click(function(){
			if(show) {
				$("article .text").animate({"max-height": "100%"}, 500);
				$("article .text button").html('Fermer <span class="fi-arrow-up">');
				show = false;
			} else {
				$("article .text").animate({"max-height": "600px"}, 500);
				$("article .text button").html('Lire la suite <span class="fi-arrow-down">');
				show = true;
			}
		});
	}
	
};