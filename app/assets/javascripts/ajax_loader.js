$(document).ajaxStart(function(){
  $("#overlay").show(1000);
});
$(document).ajaxStop(function(){
  $("#overlay").hide();
});