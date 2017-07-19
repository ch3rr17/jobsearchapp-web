(function () {
    'use strict';

    angular
        .module('app')
        .factory('AlumniFactory', AlumniFactory)

    AlumniFactory.$inject = ['$http', '$q', 'toastr', 'apiUrl'];

    function AlumniFactory($http, $q, toastr, apiUrl) {
        var service = {
            grabAlumni: grabAlumni,
            getAlumniById: getAlumniById,
            getMyJobSearches: getMyJobSearches
        };

        return service;

        //grabs all alumnis
        function grabAlumni(token) {
            var defer = $q.defer();

            $http({
                method: 'GET',
                url: apiUrl + 'alumnis',
                headers: {   
                    'Authorization': `${token}`
                }
            })
                .then(
                    function (response) {
                        defer.resolve(response);
                    },
                    function (error) {
                        defer.reject(error);
                        console.log(error);
                    }
                );

            return defer.promise;
        }

        //grabs alumni (alumna) by id with their job searches
        function getAlumniById(id, token) {
            var defer = $q.defer();

            $http({
                method: 'GET',
                url: apiUrl + 'alumnis/' + id + '/jobsearches',
                headers: {   
                    'Authorization': `${token}`
                }
            })
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

            $http({
                method: 'GET',
                url: apiUrl + 'alumnis/' + userId + '/jobsearches',
                headers: {   
                    'Authorization': `${token}`
                }
            })

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