(function() {

  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .service('<%= cameledName %>', <%= cameledName %>);

  /* @ngInject */
  function <%= cameledName %>() {
    // AngularJS will instantiate a singleton by calling "new" on this function
  }

})();