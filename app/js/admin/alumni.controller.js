(function(){
    'use strict';

    angular
        .module('app')
        .controller('AlumniController', AlumniController)

    AlumniController.$inject = ['AlumniFactory', 'toastr', 'authService2', 'localStorageService'];

    function AlumniController(AlumniFactory, toastr, authService2, localStorageService)  {
        /* jshint validthis:true */
        var vm = this;

        vm.isLoggedIn = function() {
            return authService2.state.loggedIn;
        };

        vm.getAlumni = function(){
            var authData = localStorageService.get('authorizationData');
            var token = authData.id;
            AlumniFactory.grabAlumni(token)
                         .then(
                             function(response){                                 
                                 vm.alumnis = response.data;
                             },
                             function(error){
                                 console.log(error);
                             }
                         );
        }

        vm.getAlumni();

        vm.logout = function() {
            authService2.logout();

        };

    }
})();