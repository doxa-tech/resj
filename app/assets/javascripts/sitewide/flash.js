/* global $ */
"use strict";

$(document).on("ready turbolinks:load", function() {

  var flash = $("#flash");

	flash.find(".close").click(function(){
		flash.hide();
	});
});