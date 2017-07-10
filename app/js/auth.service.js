(function(){
    'use strict';

    angular
        .module('app')
        .factory('authService', authService)

    authService.$inject = ['$q', '$http', 'localStorageService', '$location', '$state'];

    function authService($q, $http, localStorageService, $location, $state) {
        
        var state = {
            loggedIn: true
        };

        var service = {
            state: state,
            login: login,
            init: init
        };

        var apiUrl = 'http://192.168.1.5:3000/api/';

        return service;

        function login(email, password) {
            //logout(); 
            state.loggedIn = true;
            var defer = $q.defer();

            console.log("HELLO!");

            $http({
                method: 'POST',
                url: apiUrl + 'alumnis/login',
                data: {email,password},
                headers: { 'Authorization': 'access_token'}
            })
            .then(
                function(response){
                    console.log('hello world');
                    console.log('SERVICE RESPONSE', response);
                    localStorageService.set('authorizationData', response.data.id);
                    defer.resolve(response.data.id);
                    console.log('LOGGING IN', response.data.id);
                },
                function(error){
                    defer.reject(error);
                }
            );

            return defer.promise

        }

        function init(){
            var authData = localStorageService.get('authData');
            state.loggedIn = true;
            $location.path('#/home');
        }
    }
})();