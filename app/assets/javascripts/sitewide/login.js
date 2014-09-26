/* Ajax login */

$(function() {
	$("#login-overlay .close").click(function(){
		$("#login-over").hide();
		$("#login-overlay").hide();
	});
	$('#login-overlay').click(function(){
		$("#login-over").hide();
		$('#login-overlay').hide();
	});
	var a = $('nav .profil ul');
	a.hide();
	$('nav .profil').hover(
		function(){
			a.show();
		}, 
		function(){
			a.hide();
		}
	);
});