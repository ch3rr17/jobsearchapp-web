(function() {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['authService', '$state', 'toastr'];

    /* @ngInject */
    function LoginController(authService, $state, toastr) {
        var vm = this;
        vm.title = 'LoginController';
       

        vm.login = function() {
            // console.log('LOCAL FACTORY', LocalStorageFactory)
            console.log('AUTHSERVICE', authService)
                authService.login(vm.email, vm.password)
                    .then(
                        function(response) {
                            console.log('LOGIN RES', response);
                            $state.go('home');
                        },
                        function(message) {
                            toastr.warning(message);
                        }
                    );

            } //end of login function
    }
})();

