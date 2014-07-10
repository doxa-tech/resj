$(function() {
  $("#container.cards .pagination a").on("click", function() {
    $.getScript(this.href);
    return false;
  });
});