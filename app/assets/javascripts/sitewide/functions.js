function remove_fields(link) {
  fields = $(link).parents(".fields");
  fields.find("input[identifier=destroy]").val("1");
  fields.find("input[identifier=is_contact]").val("false")
  fields.hide();
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
  fields = $(link).parents(".fields");
	$('input[value=true][identifier=is_contact]').val("false");
	$(".fields").removeClass("contact");
	fields.find("input[identifier=is_contact]").val("true");
	fields.addClass("contact");
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
function selectize() {
    $('#card_card_type_id').selectize({
      create: true,
      sortField: 'text'
    });
  };

function tags() {
  $('.selectize-tags').selectize({
    delimiter: ' ',
    valueField: 'name',
    labelField: 'name',
    searchField: 'name',
    maxItems: 5,
    persist: false,
    sortField: [{field: 'popularity', direction: 'desc'}],
    create: true,
    render: {
      option: function(item, escape) {
        return '<div><span>' + escape(item.name) + '</span><span>' + escape(item.popularity || "None") + '</span></div>';
      }
    },
    load: function(query, callback) {
      if (!query.length) return callback();
      $.ajax({
        url: '/searches/tags',
        type: 'POST',
        data: 'query=' + query,
        dataType: 'json',
        error: function() {
          callback();
        },
        success: function(res) {
          callback(res);
        }
      });
    }
  });
}