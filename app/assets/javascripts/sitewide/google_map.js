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
  loadScript: function(second_callback, second_callback_params, not_delayed) {
    function load() {
      load_google_map.second_callback = second_callback; // Set 'second' callback
      load_google_map.second_callback_params = second_callback_params; // Set 'second' callback
      if(!load_google_map.already_loaded) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
            'callback=load_google_map.callback';
        script.setAttribute('data-turbolinks-track', true)
        document.getElementsByTagName('head')[0].appendChild(script);
      } else {
        load_google_map.callback();
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

  callback: function() {
    load_google_map.already_loaded = true;
    var fn = eval(load_google_map.second_callback);
    fn.apply(null, load_google_map.second_callback_params);
  }

}

