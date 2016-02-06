// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

var app = angular.module('GamerLink', []);

app.controller('GamersController', ['$scope', '$http', function($scope, $http){

  function getGamers(){
    $http.get('/api/gamers').then(function(response){
      var data = response.data;
      $scope.gamers = data.gamers;
    });
  }

  $scope.newGamer = {};
  $scope.createGamer = function(){
    $http.post('/api/gamers', {gamer: $scope.newGamer}).then(function(response){
      var data = response.data;
      $scope.gamers.push(data);
      $scope.newGamer = {};
    });
  };


  $scope.deleteGamer = function(id){
    $http.delete('/api/gamers/'+id).then(function(){
      getGamers();
    });
  };

  getGamers();

  $http.get('https://www.boardgamegeek.com/xmlapi2/search?query=Dominion').then(function(response){
    console.log(response);
  })

}]);
