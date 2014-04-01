function remove_fields(link) {
  fields = $(link).parents(".fields");
  fields.find("input[identifier=destroy]").val("1");
  fields.find("input[identifier=is_contact]").val("false")
  fields.hide();
}
function add_fields(link) {
	associationFields = $(link).parents('.association_fields')
	fields = associationFields.find('.fields')
	count = fields.length;
	content = associationFields.find(".fields:last").clone();
	content.find('input').attr('value', '');
	content.find('span').remove();
  content.find('.add_contact').show();
	content = "<div class='fields'>" + content.html().replace(new RegExp(count-1, "g"), count) + "</div>";
	$(content).insertBefore(associationFields.find(">:last-child"));
	autocomplete();
}
function add_contact(link) {
  fields = $(link).parents(".fields");
  currentContact = $('.fields.contact')
	currentContact.find('input[identifier=is_contact]').val("false");
  currentContact.find('.add_contact').show();
	$(".fields").removeClass("contact");
	fields.find("input[identifier=is_contact]").val("true");
	fields.addClass("contact");
  $(link).hide();
}

function autocomplete() {
	$('.autocomplete').find('input').autocomplete({
    source: function(request, response) {
      attr = this.element.data('attr');
      link = this.element.parents('.autocomplete').data('link');
      if (attr) {
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
    }
  });
}
function selectize() {
  $('.selectize').selectize();
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
};

function selectize_location() {
  $('.selectize-location').selectize({
    valueField: 'id',
    labelField: 'name',
    searchField: 'name',
    load: function(query, callback) {
      if (!query.length) return callback();
      $.ajax({
        url: '/searches/locations',
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
};