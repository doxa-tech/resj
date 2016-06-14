/* global $, YT */
"use strict";

/* used in /resource */

function goToByScroll(element){
  if(element.length) {
    $("html, body").animate({
      scrollTop: element.offset().top },
    "slow");
  }
}

/* used to add youtube script */

function appendScript(filepath) {
  if (window.YT) { return; }
  var tag = document.createElement("script");
  tag.src = filepath;
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

/* youtube callback */
var player = null;
function onYouTubeIframeAPIReady() {
  if (!window.YT) { return; }
  player = new YT.Player("player", {
    height: "390",
    width: "640",
    videoId: "ppQ23qycHC0",
    playerVars: {"modestbranding": 1, "wmode": "opaque", "showinfo": 0, "autohide": 1, "controls": 1},
  });
}

/* Upload form with ajax */

function customAjaxForm(locator) {
	var formP = $(locator);
  formP.find("input[type='submit']").on("click", function() {
  	$(this).attr("value", "En cours...");
  });
  formP.ajaxForm();
}

/* used in google map to execute callbacks */

function executeFunctionByName(functionName, context /*, args */) {
  var args = [].slice.call(arguments).splice(2);
  var namespaces = functionName.split(".");
  var func = namespaces.pop();
  for(var i = 0; i < namespaces.length; i++) {
    context = context[namespaces[i]];
  }
  return context[func].apply(this, args);
}
