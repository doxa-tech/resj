/* Page load indicator for Turbolinks */

function startSpinner() {
  $("html").css("cursor", "progress");
}
function stopSpinner() {
  $("html").css("cursor", "auto");
}
$(document).on("page:fetch", startSpinner);
$(document).on("page:receive", stopSpinner);