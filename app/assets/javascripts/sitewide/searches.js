$(document).ready(function() {
  autocomplete();
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
  $('.selectize').selectize();

  var delay = (function(){
    var timer = 0;
    return function(callback, ms){
      clearTimeout (timer);
      timer = setTimeout(callback, ms);
    };
  })();

  $('.live-search').on("keyup", function() {
    tag = $('#facets').data('tag');
    query = $(this).val();
    delay(function(){
      $.getScript( "reseau?search="+query+"&tag="+tag );
    }, 500 );
  });
});