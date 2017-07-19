(function(){
    'use strict';

    angular
        .module('app')
        .factory('authService2', authService2)

    authService2.$inject = ['$q', '$http', 'localStorageService', '$location', '$state', 'apiUrl'];

    function authService2($q, $http, localStorageService, $location, $state, apiUrl) {
        
        var state = {
            loggedIn: true
        };

        var service = {
            state: state,
            login: login,
            logout: logout
        };

        return service;

        function login(email, password) {
           // logout(); 
            state.loggedIn = true;
            var defer = $q.defer();

            $http({
                method: 'POST',
                url: apiUrl + 'admins/login',
                data: {email,password},
                headers: { 'Authorization': 'access_token'}
            })
            .then(
                function(response){
                    localStorageService.set('authorizationData', response.data);
                    defer.resolve(response.data);
                },
                function(error){
                    defer.reject(error);
                }
            );

            return defer.promise

        }


        function logout(){
        	localStorageService.remove('authorizationData');
        	state.isLoggedIn = false;
        	$location.path('#/main');
        }

        // function init(){
        //     var authData = localStorageService.get('authData');
        //     state.loggedIn = true;
        //     $location.path('#/alumniInfo');
        // }
    }
})();