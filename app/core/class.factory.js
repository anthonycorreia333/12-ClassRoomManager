(function() {
    'use strict';

    angular
        .module('app')
        .factory('classFactory', classFactory);

    classFactory.$inject = ['$http'];

    /* @ngInject */
    function classFactory($http) {
        var vm = this
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
            return $http.get('http://localhost:62206/api/classes');
        }


        function create(post) {
            return $http.post('http://localhost:62206/api/classes', post);
        }


        function getById(id) {
            return $http.get('http://localhost:62206/api/classes/' + id);
        }


        function update(id, post) {
            return $http.put('http://localhost:62206/api/classes/' + id, post);
        }


        function remove(id) {
            return $http.delete('http://localhost:62206/api/classes/' + id);
        }


        function create(post) {
            return $http.post('http://localhost:62206/api/classes/{classId}/students/{studentId}', post);
        }


        function remove(id) {
            return $http.delete('http://localhost:62206/api/classes/{classId}/students/{studentId}' + id);
        }
    }
    
})();