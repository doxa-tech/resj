/* global app, $ */
"use strict";

app.controller("articles#index", function() {

	$("article .text").each(function(){
		var button = $(this).children("button");
		var text = $(this);
		if (text[0].scrollHeight >  text.innerHeight()) {
			var show = true;
			button.show();
			button.on("click", function(){
				if(show) {
					text.animate({"max-height": "100%"}, 500);
					button.html("Fermer <span class='fi-arrow-up'>");
					show = false;
				} else {
					text.animate({"max-height": "600px"}, 500);
					button.html("Lire la suite <span class='fi-arrow-down'>");
					show = true;
				}
			});
		}
	});

});