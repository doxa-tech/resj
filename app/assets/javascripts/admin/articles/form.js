/* global app, $ */
"use strict";

app.controller("admin/articles#form", function() {

	var article_pre = $("#article-pre");
	var area = document.getElementById("article-area");

	article_pre.html(area.value);
	area.onkeyup=function(){
		article_pre.html(area.value);
	};

	var hide = false;
	var btn = $(".article-btn-pre");
	
	btn.click(function(){
		if(hide) {
			article_pre.hide();
			btn.text("Montrer la prévisualisation");
			hide=false;
		} else {
			article_pre.show();
			btn.text("Cacher la prévisualisation");
			hide=true;
		}
	});

});