/* global $ */
"use strict";

/* Admin header menu */

$(document).on("ready page:load", function() {

	var adminHeader = $("#admin_header");

	adminHeader.find(".parent").find("ul").hide();
	adminHeader.find(".parent").find(".group_link").click(function(e) {
		e.preventDefault();
		$(this).next().slideToggle("1000", "linear");
	});
	adminHeader.find(".active").parents(".parent ul").show();

	$("#admin_top_header").click(function(){
		adminHeader.slideToggle();
		window.onresize = function() {
			if(window.innerWidth > 1200) {
				adminHeader.show();
			} else {
				adminHeader.hide();
			}
		};
	});
});