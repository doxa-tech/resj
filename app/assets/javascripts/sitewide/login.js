/* global $ */
"use strict";

/* Ajax login */

$(document).on("ready turbolinks:load", function() {

	var loginOverlay = $("#login-overlay"),
			loginOver = $("#login-over");
	
	loginOverlay.find(".close").click(function() {
		loginOver.hide();
		loginOverlay.hide();
	});
	loginOverlay.click(function(){
		loginOver.hide();
		loginOverlay.hide();
	});
	// also called in session/new.js.erb
	var nav = $("nav .profil ul");
	nav.hide();
	$("nav .profil").hover(
		function(){
			nav.show();
		}, 
		function(){
			nav.hide();
		}
	);
});