$(document).ready(function() {
	
	var editLinkOn = $('.table_buttons').find('a[class="edit on"]'),
      deleteLinkOn = $('.table_buttons').find('a[class="delete on"]'),
      editLinkOff = $('.table_buttons').find('a[class="edit off"]'),
      deleteLinkOff = $('.table_buttons').find('a[class="delete off"]'),
      newRelationOn = $('.table_buttons').find('a[class="new_relation on"]'),
      newRelationOff = $('.table_buttons').find('a[class="new_relation off"]'),
      newOwnershipOn = $('.table_buttons').find('a[class="new_ownership on"]'),
      newOwnershipOff = $('.table_buttons').find('a[class="new_ownership off"]');

  // add ajax to the pagination
	$(".pagination").on("click", "a", function() {
    $.getScript(this.href);
    return false;
  });
  // line clickable
  $('#admin_table tbody').on("click", "tr", function(e) {
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

  /*
  // specific for user table in ownerships page
  $('#user_table tbody').on("click", "tr", function(e) {
    var id = $(this).data('url') ;
    if ( $(this).hasClass('row_selected') ) {
      $(this).removeClass('row_selected');
      newRelationOn.add(newOwnershipOn).hide();
      newRelationOff.add(newOwnershipOff).show();
    }
    else {
      $('tr.row_selected').removeClass('row_selected');
      $(this).addClass('row_selected');
      newRelationOff.add(newOwnershipOff).hide();
      newRelationOn.attr('href', '/admin/parents/nouveau?user_id=' + id).show();
      newOwnershipOn.attr('href', '/admin/ownerships/nouveau?user_id=' + id).show();
    }
  });
  */
});