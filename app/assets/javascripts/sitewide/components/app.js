var module = angular.module('components');

module.directive('displayLetter', function() {
  return {
    restrict: 'E',
    transclude: true,
    template: '<li class="letter" ng-transclude></li>',
    link: function(scope, element, attrs) {
      if(scope.letter === null || attrs.new !== scope.letter.current) {
        scope.letter.current = attrs.new;
      } else {
        element.remove();
      }
    }
  };
});