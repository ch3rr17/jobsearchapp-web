(function() {
    'use strict';

    angular
        .module('app', [
          'ui.router',
          'toastr',
          'LocalStorageModule'
        ])

        .config(function($stateProvider, $urlRouterProvider, $httpProvider){
            $urlRouterProvider.otherwise('home');

            $httpProvider.interceptors.push('authInterceptor');

            $stateProvider.state('login',{
                url: '/login',
                templateUrl: 'app/partials/login.html',
                controller: 'LoginController as vm'
            })

            $stateProvider.state('home',{
                url: '/home',
                templateUrl: 'app/partials/home.html',
                controller: 'AlumniController as vm'
            })

            $stateProvider.state('alumniInfo',{
                url: '/alumniInfo/:id',
                templateUrl: 'app/partials/alumniInfo.html',
                controller: 'AlumniInfoController as vm'
            })
        })
})();
