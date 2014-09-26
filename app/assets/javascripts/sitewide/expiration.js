/* Automatic page reload if user inactive */

$(function() {
  var idleTimer;
  function resetTimer(){
    clearTimeout(idleTimer);
    idleTimer = setTimeout(function() { window.location.reload(); }, 1800000);
  }
  resetTimer();
});

$(document).on('click', resetTimer );