/* global angular */
"use strict";

var module = angular.module("components");

module.directive("displayLetter", function() {
  return {
    restrict: "E",
    transclude: true,
    template: "<li class='letter' ng-transclude></li>",
    link: function(scope, element, attrs) {
      if(scope.letter === null || attrs.new !== scope.letter.current) {
        scope.letter.current = attrs.new;
      } else {
        element.remove();
      }
    }
  };
});

module.directive("loading", ["$http", function($http)
{
  return {
    restrict: "A",
    link: function(scope, elm, attrs) {
      scope.isLoading = function () {
        return $http.pendingRequests.length > 0;
      };
      scope.$watch(scope.isLoading, function(v) {
        elm.toggle(v);
      });
    }
  };
}]);

module.filter("parameterize", function () {
  return function (text) {
    var str = text.replace(/[\.\s\/,:;'()]+/g, "-");
    str = str.replace(/[éèë]+/g, "e").replace(/[ï]+/g, "i").replace(/[àä]+/g, "a").replace(/[ùü]+/g, "u");
    return str.toLowerCase();
  };
});