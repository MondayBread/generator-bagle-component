(function() {

  'use strict';

  angular
    .module('<%= scriptAppName %>')
    .controller('<%= classedName %>Ctrl', <%= classedName %>Ctrl);

  /* @ngInject */
  function <%= classedName %>Ctrl($scope) {

    ///////////////////////////////////////
    //
    // Init
    //
    ///////////////////////////////////////
    $scope.vm = {};
    $scope.vm.getXyzHandler = getXyzHandler;


    ///////////////////////////////////////
    //
    // Scope Handler
    //  - must set postfix xxxHandler
    //
    ///////////////////////////////////////
    function getXyzHandler() {

    }

    ///////////////////////////////////////
    //
    // inner function
    //
    ///////////////////////////////////////
    function innerXyz() {

    }

    ///////////////////////////////////////
    //
    // Event Listener
    //
    ///////////////////////////////////////


  }

})();