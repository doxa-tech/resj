function remove_fields(link) {
  $(link).prev("input[identifier=destroy]").val("1");
  $(link).nextAll("input[identifier=is_contact]").val("false")
  $(link).parent(".fields").hide();
}
function add_fields(link) {
	associationFields = $(link).parent('.association_fields')
	fields = associationFields.find('.fields')
	count = fields.length;
	content = associationFields.find(".fields:last").clone();
	content.find('input').attr('value', '');
	content.find('span').remove();
	content = "<div class='fields'>" + content.html().replace(new RegExp(count-1, "g"), count) + "</div>";
	$(content).insertBefore(associationFields.find(">:last-child"));
	autocomplete();
}
function add_contact(link) {
	$('input[value=true][identifier=is_contact]').val("false");
	$(".fields").removeClass("contact");
	$(link).prev("input[identifier=is_contact]").val("true");
	$(link).parent(".fields").addClass("contact");
}

function autocomplete() {
	$('.autocomplete').find('input').autocomplete({
    source: function(request, response) {
      var attr = this.element.data('attr'),
      		link = this.element.parents('.autocomplete').data('link');
    	$.ajax({
        url:'/searches/' + link,
        type:"post",
        dataType: 'json',
        data: 'term=' + request.term + '&attr=' + attr,
        async: true,
        cache: true,
        success: function(data){
         	response(data); 
        }
    	});
    }
  });
}