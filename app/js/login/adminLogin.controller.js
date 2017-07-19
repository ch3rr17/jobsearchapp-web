(function() {
    'use strict';

    angular
        .module('app')
        .controller('AdminLoginController', AdminLoginController);

    AdminLoginController.$inject = ['authService2', '$state', 'toastr'];

    /* @ngInject */
    function AdminLoginController(authService2, $state, toastr) {
        var vm = this;
        vm.title = 'AdminLoginController';

       

        vm.adminLogin = function() {
                authService2.login(vm.email, vm.password)
                    .then(
                        function(response) {
                            console.log('LOGIN RES', response);
                            $state.go('home');
                        },
                        function(message) {
                            toastr.warning(message);
                        }
                    );

            } 
    }
})();

