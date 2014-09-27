/* New & edit action */

var AdminSubjectsController = Paloma.controller('Admin/Subjects');

AdminSubjectsController.prototype.new = function() {

	formP = $('#form-progress');
  formP.find('input[type="submit"]').on('click', function() {
  	console.log("works")
  	$(this).attr('value', "En cours...");
  });
  formP.ajaxForm(); 

};