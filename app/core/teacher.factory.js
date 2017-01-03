(function() {
    'use strict';

    angular
        .module('app')
        .factory('teacherFactory', teacherFactory);

    teacherFactory.$inject = ['$http'];

    /* @ngInject */
    function teacherFactory($http) {
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
            return $http.get('http://localhost:62206/api/teachers');
        }


        function create(post) {
            return $http.post('http://localhost:62206/api/teachers', post);
        }


        function getById(id) {
            return $http.get('http://localhost:62206/api/teachers/' + id);
        }


        function update(id, post) {
            return $http.put('http://localhost:62206/api/teachers/' + id, post);
        }


        function remove(id) {
            return $http.delete('http://localhost:62206/api/teachers/' + id);
        }
    }
})();