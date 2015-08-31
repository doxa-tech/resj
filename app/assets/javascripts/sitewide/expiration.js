/* global $ */
"use strict";

/* Automatic page reload if user inactive */

$(document).on("ready page:load", function() {
  var idleTimer;
  function resetTimer(){
    clearTimeout(idleTimer);
    idleTimer = setTimeout(function() { window.location.reload(); }, 1800000);
  }
  $(document).on("click", resetTimer );
  resetTimer();
});