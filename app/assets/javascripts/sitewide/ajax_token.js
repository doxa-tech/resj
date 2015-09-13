/* global $ */
"use strict";

/* CSRF Token for ajax request */

$.ajaxSetup({
  headers: {
    "X-CSRF-Token": $("meta[name='csrf-token']").attr("content")
  }
});