/* Page load indicator for Turbolinks */

function startSpinner() {
  $("body").addClass('wait');
}
function stopSpinner() {
  $("body").removeClass('wait');
}
$(document).on("page:fetch", startSpinner);
$(document).on("page:receive", stopSpinner);
