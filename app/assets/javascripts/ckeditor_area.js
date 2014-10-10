/* Initialize CKeditor areas */

$(function(){
	$('.ckeditor').ckeditor({
	  customConfig: '/assets/ckeditor/custom_config.js'
	});
});

$(function(){
	$('.ckeditor-article').ckeditor({
	  customConfig: '/assets/ckeditor/article_config.js'
	});
});