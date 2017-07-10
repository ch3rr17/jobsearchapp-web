(function(){
    'use strict';

    angular
        .module('app')
        .controller('AlumniController', AlumniController)

    AlumniController.$inject = ['AlumniFactory', 'toastr', '$stateParams', 'authService', 'localStorageService'];

    function AlumniController(AlumniFactory, toastr, $stateParams, authService, localStorageService)  {
        /* jshint validthis:true */
        var vm = this;

        vm.getAlumni = function(){
            console.log('ALUMNI $STATE PARAMS', $stateParams)
            var authData = localStorageService.get('authorizationData');
            var token = authData;
            AlumniFactory.grabAlumni(token)
                         .then(
                             function(response){                                 
                                 vm.alumnis = response.data;
                                 console.log(response.data);
                                 toastr.success("we got data");
                             },
                             function(error){
                                 //$log.error(error);
                                 console.log(error);
                                 toastr.error("no data");
                             }
                         );
        }

        vm.getAlumni();

    }
})();