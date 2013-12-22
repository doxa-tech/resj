// Initizalize ckeditor's textarea by using the class 'inline'
$(document).ready(function() {
	$('.inline').each(function(){
    CKEDITOR.inline( $(this).attr('id'), {
    	
    });
	});
});