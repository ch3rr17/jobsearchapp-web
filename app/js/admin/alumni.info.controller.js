(function(){
    'use strict';

    angular
        .module('app')
        .controller('AlumniInfoController', AlumniInfoController)

    AlumniInfoController.$inject = ['AlumniFactory','$stateParams','authService', 'localStorageService'];

    function AlumniInfoController(AlumniFactory, $stateParams, authService, localStorageService)  {
        /* jshint validthis:true */
        var vm = this;

    
        vm.alumniInfo = function(){
            var authData = localStorageService.get('authorizationData');
            var token = authData.id;
            AlumniFactory.getAlumniById($stateParams.id, token)
                         .then(
                             function(response){
                                 vm.moreInfo = response.data;
                             },
                             function(error){
                                 console.log(error);
                             }
                         );
        }

        vm.alumniInfo();

        vm.logout = function() {
            authService.logout();

        };
    }
})();