'use strict';

angular.module('cloudchiveApp')
  .controller('UserCtrl', function ($scope, $stateParams, Auth, Link, Board) {
  	
    Board.getByUser($stateParams.id).then(function(boards){
      $scope.board = boards.data[0];
    })

  

  	$scope.addLink = function (url) {
      Link.add(url, $scope.board._id).then(function(link){
        $scope.board.links.push(link.data);
      })
  	}

    $scope.createBoard = function() {
      Board.create($stateParams.id, {}).then(function(board) {
        $scope.board = board.data;
      })
    }

  });
