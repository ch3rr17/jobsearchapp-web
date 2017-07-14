(function(){
    'use strict';

    angular
        .module('app')
        .controller('AlumniController', AlumniController)

    AlumniController.$inject = ['AlumniFactory', 'toastr', 'authService', 'authService2', 'localStorageService'];

    function AlumniController(AlumniFactory, toastr, authService, authService2, localStorageService)  {
        /* jshint validthis:true */
        var vm = this;

        vm.getAlumni = function(){
            var authData = localStorageService.get('authorizationData');
            var token = authData.id;
            AlumniFactory.grabAlumni(token)
                         .then(
                             function(response){                                 
                                 vm.alumnis = response.data;
                                 console.log(response.data);
                                //  toastr.success("we got data");
                             },
                             function(error){
                                 console.log(error);
                                //  toastr.error("no data");
                             }
                         );
        }

        vm.getAlumni();

    }
})();