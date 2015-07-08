var load_google_map = {

  already_loaded: false,

  // Asynchronous loading of google map javascript API
  // Params :
  //   - second_callback (String)
  //   method executed only after the API has fully loaded.
  //   - second_callback_params (Array)
  //   optional params for second_callback
  //   - not_delayed (Boolean)
  //   optional, if true the script doesn't wait for window.onload
  // See https://developers.google.com/maps/documentation/javascript/tutorial
  // See http://www.sitepoint.com/call-javascript-function-string-without-using-eval/
  loadScript: function(callback, not_delayed) {
    function load() {
      if(!load_google_map.already_loaded) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&callback=' + callback;
        script.setAttribute('data-turbolinks-track', true)
        document.getElementsByTagName('head')[0].appendChild(script);
      } else {
        callback();
      }
    }
    if(not_delayed) {
      load();
    } else {
      window.onload = function() {
        load();
      }
    }
  },

}
