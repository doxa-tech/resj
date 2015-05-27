var app = angular.module('Resj', ['checklist-model'])

$(document).on('ready page:load', function(arguments) {
  angular.bootstrap(document.body, ['Resj'])
});