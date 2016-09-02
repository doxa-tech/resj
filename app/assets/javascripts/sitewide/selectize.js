/* global $ */
"use strict";

/* Functions to selectize different types of field */

$(document).on("ready page:load", function() {

	selectize.default();
  selectize.tags();
  selectize.location();
  selectize.cards();
  selectize.themes();

});

var selectize = {
  default: function() {
    $(".selectize").selectize();
  },
  themes: function() {
    $(".selectize-themes").selectize({
      maxItems: 10,
      plugins: ["remove_button"],
      dropdownParent: "body" // prevent overflow error in admin
    });
  },
  tags: function() {
    $(".selectize-tags").selectize({
      delimiter: " ",
      valueField: "name",
      labelField: "name",
      searchField: "name",
      maxItems: 5,
      persist: false,
      sortField: [{field: "popularity", direction: "desc"}],
      create: true,
      plugins: ["remove_button"],
      render: {
        option: function(item, escape) {
          return "<div><span>" + escape(item.name) + "</span><span style='float: right;'>" + escape(item.popularity || "None") + "</span></div>";
        }
      },
      load: function(query, callback) {
        if (!query.length) return callback();
        $.ajax({
          url: "/searches/tags",
          type: "POST",
          data: "query=" + query,
          dataType: "json",
          error: function() {
            callback();
          },
          success: function(res) {
            callback(res);
          }
        });
      }
    });
  },
  location: function() {
    $(".selectize-location").selectize({
      valueField: "id",
      labelField: "name",
      searchField: "name",
      load: function(query, callback) {
        if (!query.length) return callback();
        $.ajax({
          url: "/searches/locations",
          type: "POST",
          data: "query=" + query,
          dataType: "json",
          error: function() {
            callback();
          },
          success: function(res) {
            callback(res);
          }
        });
      }
    });
  },
  cards: function() {
    $(".selectize-cards").selectize({
      maxItems: 4,
      plugins: ["remove_button"],
      dropdownParent: "body" // prevent overflow error in admin
    });
  },

  users: function() {
    $(".selectize-users").selectize({
      valueField: "id",
      labelField: "full_name",
      searchField: "full_name",
      load: function(query, callback) {
        if (!query.length) return callback();
        $.ajax({
          url: "/searches/users",
          type: "POST",
          data: "query=" + query,
          dataType: "json",
          error: function() {
            callback();
          },
          success: function(res) {
            callback(res);
          }
        });
      }
    });
  }
};
