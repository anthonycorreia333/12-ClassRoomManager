(function() {
    'use strict';

    angular
        .module('app')
        .factory('studentFactory', studentFactory);

    studentFactory.$inject = ['$http'];

    /* @ngInject */
    function studentFactory($http) {
        var service = {
            getAll: getAll,
            create: create,
            getById: getById,
            update: update,
            remove: remove
        };
        return service;

        ////////////////

        function getAll() {
            return $http.get('http://localhost:62206/api/students');
        }


        function create(post) {
            return $http.post('http://localhost:62206/api/students', post);
        }


        function getById(id) {
            return $http.get('http://localhost:62206/api/students/' + id);
        }


        function update(id, post) {
            return $http.put('http://localhost:62206/api/students/' + id, post);
        }


        function remove(id) {
            return $http.delete('http://localhost:62206/api/students/' + id);
        }
    }
})();