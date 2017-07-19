(function() {
    'use strict';

    angular
        .module('app', [
          'ui.router',
          'toastr',
          'LocalStorageModule'
        ])

        .config(function($stateProvider, $urlRouterProvider, $httpProvider){
            $urlRouterProvider.otherwise('main');

            $httpProvider.interceptors.push('authInterceptor');

            $stateProvider.state('main',{
                url: '/main',
                templateUrl: 'app/partials/main.html'

            })
            
            $stateProvider.state('adminLogin',{
                url: '/adminLogin',
                templateUrl: 'app/partials/adminLogin.html',
                controller: 'AdminLoginController as vm'
            })

            $stateProvider.state('alumniLogin',{
                url: '/alumniLogin',
                templateUrl: 'app/partials/alumniLogin.html',
                controller: 'AlumniLoginController as vm'
            })

            $stateProvider.state('home',{
                url: '/home',
                templateUrl: 'app/partials/home.html',
                controller: 'AlumniController as vm'
            })

           $stateProvider.state('myJobSearches',{
                url: '/myJobSearches/',
                templateUrl: 'app/partials/myJobSearches.html',
                controller: 'JobSearchController as vm'
            })

            $stateProvider.state('alumniInfo',{
                url: '/alumniInfo/:id',
                templateUrl: 'app/partials/alumniInfo.html',
                controller: 'AlumniInfoController as vm'
            })

        })

        //API URL
        .value('apiUrl', 'http://jobsearch-api.herokuapp.com/api/');
})();
