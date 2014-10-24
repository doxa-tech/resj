/* Admin table */

$(function() {
	
  var tableButtons = $('.table_buttons'),
      editLinkOn = tableButtons.find('a[class="edit on"]'),
      deleteLinkOn = tableButtons.find('a[class="delete on"]'),
      editLinkOff = tableButtons.find('a[class="edit off"]'),
      deleteLinkOff = tableButtons.find('a[class="delete off"]'),
      newRelationOn = tableButtons.find('a[class="new_relation on"]'),
      newRelationOff = tableButtons.find('a[class="new_relation off"]'),
      newOwnershipOn = tableButtons.find('a[class="new_ownership on"]'),
      newOwnershipOff = tableButtons.find('a[class="new_ownership off"]');

  // add ajax to the pagination
	$("#admin_table").find(".pagination").on("click", "a", function() {
    $.getScript(this.href);
    return false;
  });
  // line clickable
  $('#admin_table').on("click", "tbody tr", function(e) {
    var id = $(this).data('url') ;
    if (typeof id !== 'undefined') {
    	if ( $(this).hasClass('row_selected') ) {
        $(this).removeClass('row_selected');
        deleteLinkOn.add(editLinkOn).hide();
        deleteLinkOff.add(editLinkOff).show();
      }
      else {
        $('tr.row_selected').removeClass('row_selected');
        $(this).addClass('row_selected');
        deleteLinkOff.add(editLinkOff).hide();
        editLinkOn.attr('href', window.location.pathname + '/' + id + '/edit').show();
        deleteLinkOn.attr('href', window.location.pathname + '/' + id).show();
      }
    } 
	});

  // Double click
  $('#admin_table').on("dblclick", "tbody tr", function(e) {
    if( $('#admin_table').find('.edit').length ) {
      window.location = window.location.pathname + '/' + $(this).data('url') + '/edit'
    }
  });

});