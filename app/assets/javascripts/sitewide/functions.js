function remove_fields(link) {
  $(link).prev("input[type=hidden]").val("1");
  $(link).parent(".fields").hide();
}
function add_fields(link) {
	associationFields = $(link).parent('.association_fields')
	fields = associationFields.find('.fields')
	count = fields.length;
	//content = "<div class='fields'>" + associationFields.find(".fields:last").html().replace(new RegExp(count-1, "g"), count) + "</div>";
	content = associationFields.find(".fields:last").clone();
	content.find('input').attr('value', '');
	content = "<div class='fields'>" + content.html().replace(new RegExp(count-1, "g"), count) + "</div>";
	$(content).insertBefore(associationFields.find(">:last-child"));
}