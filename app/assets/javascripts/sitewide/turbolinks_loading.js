/* Page load indicator for Turbolinks */

function startSpinner() {
  $("body").addClass('wait');
}
function stopSpinner() {
  $("body").removeClass('wait');
}
function mapbox_not_loaded() {
	load_mapbox.already_loaded = false;
}
$(document).on("page:fetch", startSpinner);
$(document).on("page:receive", stopSpinner);