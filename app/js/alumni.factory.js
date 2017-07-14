(function () {
    'use strict';

    angular
        .module('app')
        .factory('AlumniFactory', AlumniFactory)

    AlumniFactory.$inject = ['$http', '$q', 'toastr'];

    function AlumniFactory($http, $q, toastr) {
        var service = {
            grabAlumni: grabAlumni,
            getAlumniById: getAlumniById,
            getMyJobSearches: getMyJobSearches
        };

        return service;

        //grabs all alumnis
        function grabAlumni(token) {
            var defer = $q.defer();

            $http.get('http://jobsearch-api.herokuapp.com/api/alumnis?access_token=' + token)
            // $http({
            //     method: 'GET',
            //     url: 'http://192.168.1.5:3000/api/alumnis',
            //     headers: {
            //         'Content-Type' : 'application/json',    
            //         'Authorization': `${token}`
            //     }
            // })
                .then(
                    function (response) {
                        defer.resolve(response);
                    },
                    function (error) {
                        defer.reject(error);
                        toastr.error(message);
                    }
                );

            return defer.promise;
        }

        //grabs alumni (alumna) by id with their job searches
        function getAlumniById(id, token) {
            var defer = $q.defer();

            $http.get('http://jobsearch-api.herokuapp.com/api/alumnis/' + id + '/jobsearches' + '?access_token=' + token)
                .then(
                    function (response) {
                        defer.resolve(response);
                    },
                    function (error) {
                        defer.reject(error);
                    }
                );

            return defer.promise;
        }

        //shows job searches of an alumni (alumna)
        function getMyJobSearches(userId, token) {
            var defer = $q.defer();

            $http.get('http://jobsearch-api.herokuapp.com/api/alumnis/' + userId + '/jobsearches' + '?access_token=' + token)
                .then(
                    function (response) {
                        defer.resolve(response);
                    },
                    function (error) {
                        defer.reject(error);
                    }
                );

            return defer.promise;
        }
    }
})();