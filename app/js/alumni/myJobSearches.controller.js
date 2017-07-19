(function(){
    'use strict';

    angular
        .module('app')
        .controller('JobSearchController', JobSearchController)

    JobSearchController.$inject = ['AlumniFactory','$stateParams','authService', 'localStorageService'];

    function JobSearchController(AlumniFactory, $stateParams, authService, localStorageService) {
        /* jshint validthis:true */
        var vm = this;

        vm.isLoggedIn = function() {
            return authService.state.loggedIn;
        };


        vm.getJobSearches = function(){
            var authData = localStorageService.get('authorizationData');
            var token = authData.id;
            var userId = authData.userId;
            AlumniFactory.getMyJobSearches(userId, token)
                         .then(
                             function(response){
                                 vm.jobSearches = response.data;
                             },
                             function(error){
                                 console.log(error);
                             }
                         );
        }

        vm.getJobSearches();

         vm.logout = function() {
            authService.logout();

        };
    }
})();