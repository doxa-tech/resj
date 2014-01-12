// link to add or remove a responsable in the card's wizard
$(document).ready(function() {
	$('#container').on('click', '#new_responsable', function(event) {
		fields = $('#responsables_fields');
		count = fields.find('div').length;
		event.preventDefault();
		fields.append('<div id="responsable_fields"><input id="card_responsables_attributes_' + count + '_firstname" name="card[responsables_attributes][' + count + '][firstname]" type="text"><input id="card_responsables_attributes_' + count + '_lastname" name="card[responsables_attributes][' + count + '][lastname]" type="text"><input id="card_responsables_attributes_' + count + '_email" name="card[responsables_attributes][' + count + '][email]" type="text"><input name="card[responsables_attributes][' + count + '][_destroy]" type="hidden" value="0"><input id="card_responsables_attributes_' + count + '__destroy" name="card[responsables_attributes][' + count + '][_destroy]" type="checkbox" value="1"></div>');
	});
	$('#container').on('click', '#new_affiliation', function(event) {
		affFields = $('#affiliations_fields');
		affCount = affFields.find('div').length;
		event.preventDefault();
		affFields.append('<div id="affiliation_fields"><label for="card_affiliations_attributes_' + affCount + '_name">Name</label><input id="card_affiliations_attributes_' + affCount + '_name" name="card[affiliations_attributes][' + affCount + '][name]" type="text"><input name="card[affiliations_attributes][' + affCount + '][_destroy]" type="hidden" value="0"><input id="card_affiliations_attributes_' + affCount + '__destroy" name="card[affiliations_attributes][' + affCount + '][_destroy]" type="checkbox" value="1"></div>');
	});
});