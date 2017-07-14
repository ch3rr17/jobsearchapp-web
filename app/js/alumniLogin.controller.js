(function() {
    'use strict';

    angular
        .module('app')
        .controller('AlumniLoginController', AlumniLoginController);

    AlumniLoginController.$inject = ['authService', '$state', 'toastr'];

    /* @ngInject */
    function AlumniLoginController(authService, $state, toastr) {
        var vm = this;
        vm.title = 'AlumniLoginController';

       

        vm.alumniLogin = function() {
                authService.login(vm.email, vm.password)
                    .then(
                        function(response) {
                            console.log('LOGIN RES', response);
                            $state.go('myJobSearches');
                        },
                        function(message) {
                            toastr.warning(message);
                        }
                    );

            } 
    }
})();

