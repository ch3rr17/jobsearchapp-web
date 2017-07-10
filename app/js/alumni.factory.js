(function () {
    'use strict';

    angular
        .module('app')
        .factory('AlumniFactory', AlumniFactory)

    AlumniFactory.$inject = ['$http', '$q', 'toastr'];

    function AlumniFactory($http, $q, toastr) {
        var service = {
            grabAlumni: grabAlumni,
            getAlumniById: getAlumniById
        };

        return service;

        function grabAlumni(token) {
            var defer = $q.defer();

            $http.get('http://192.168.1.5:3000/api/alumnis?access_token=' + token)
                .then(
                    function (response) {
                        defer.resolve(response);
                        console.log(response);
                    },
                    function (error) {
                        defer.reject(error);
                        toastr.error(message);
                    }
                );

            return defer.promise;
        }

        function getAlumniById(id, token) {
            var defer = $q.defer();

            $http.get('http://192.168.1.5:3000/api/alumnis/' + id + '/jobsearches' + '?access_token=' + token)
                .then(
                    function (response) {
                        defer.resolve(response);
                        console.log('JOBSEARCH', response);
                    },
                    function (error) {
                        defer.reject(error);
                    }
                );

            return defer.promise;
        }
    }
})();