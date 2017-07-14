(function(){
    'use strict';

    angular
        .module('app')
        .factory('authService2', authService2)

    authService2.$inject = ['$q', '$http', 'localStorageService', '$location', '$state'];

    function authService2($q, $http, localStorageService, $location, $state) {
        
        var state = {
            loggedIn: true
        };

        var service = {
            state: state,
            login: login
        };

        var apiUrl = 'http://jobsearch-api.herokuapp.com/api/';

        return service;

        function login(email, password) {
            //logout(); 
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
                    console.log('hello world');
                    console.log('SERVICE RESPONSE', response);
                    localStorageService.set('authorizationData', response.data);
                    defer.resolve(response.data);
                    console.log('LOGGING IN', response.data);
                },
                function(error){
                    defer.reject(error);
                }
            );

            return defer.promise

        }

        // function init(){
        //     var authData = localStorageService.get('authData');
        //     state.loggedIn = true;
        //     $location.path('#/alumniInfo');
        // }
    }
})();