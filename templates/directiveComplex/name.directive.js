(function() {

  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .directive('<%= cameledName %>', <%= cameledName %>);

  /* @ngInject */
  function <%= cameledName %>() {
    return {
      templateUrl: '<%= htmlUrl %>',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  }

})();