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
	var articles = $('article .text');
	if (articles.length && articles[0].scrollHeight >  articles.innerHeight()) {
		$("#more-article").show();
		$("#more-article").click(function(){
			if(show) {
				articles.animate({"max-height": "100%"}, 500);
				$("article .text button").html('Fermer <span class="fi-arrow-up">');
				show = false;
			} else {
				articles.animate({"max-height": "600px"}, 500);
				$("article .text button").html('Lire la suite <span class="fi-arrow-down">');
				show = true;
			}
		});
	}
	
};