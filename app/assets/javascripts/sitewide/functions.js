/* used in /resource */

function goToByScroll(el){
  $('html,body').animate({
    scrollTop: el.offset().top},
  'slow');
}

/* used to add youtube and google api scrip */

function appendScript(filepath) {
    if ($('head script[src="' + filepath + '"]').length > 0)
      return;
	  var script = document.createElement('script');
	  script.setAttribute('data-turbolinks-track', true)
	  script.type = 'text/javascript';
	  script.src = filepath;
	  document.getElementsByTagName('head')[0].appendChild(script);
}

/* Upload form with ajax */

function customAjaxForm(locator) {
	formP = $(locator);
  formP.find('input[type="submit"]').on('click', function() {
  	$(this).attr('value', "En cours...");
  });
  formP.ajaxForm(); 
}