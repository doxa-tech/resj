$(document).ready(function() {
	$('.search').find('input').autocomplete({
    source: function(request, response) {
      var attr = this.element.data('attr'),
      		link = this.element.parents('.search').data('link');
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
});