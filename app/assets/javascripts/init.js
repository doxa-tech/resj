var app = angular.module('Resj', ['checklist-model', 'components'])

angular.module('components', []);

$(document).on('ready page:load', function(arguments) {
  angular.bootstrap(document.body, ['Resj'])
});