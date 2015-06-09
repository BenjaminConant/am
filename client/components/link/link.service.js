'use strict';

angular.module('cloudchiveApp')
  .factory('Link', function ($http) {
   
    return {
      add: function (url, boardId) {
        return $http.post('api/links', {url: url, boardId: boardId});
      }
    };
  });
