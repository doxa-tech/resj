/* used in /resource */

function goToByScroll(el){
  $('html,body').animate({
    scrollTop: el.offset().top},
  'slow');
}
