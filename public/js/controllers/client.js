/*
* @author: Leandro Henrique
* @date:   2016-12-02 08:41:13
* @last modified by:   Leandro Henrique
* @last modified time: 2016-12-24 09:55:45
*/

'use strict';

angular.module("app")
 .controller("ClientCtrl", ['$scope','Restful', '$state', '$stateParams', function($scope, Restful, $state, $stateParams) {
  $scope.clients=[];
  Restful.get('client').then(function(response) {
    $scope.clients=response.data;
    }, function (response) {
      alert('algo deu errado');
    });

  if ($stateParams.edit === true) {
    Restful.get('client/'+$stateParams.id).then( function (response) {
      $scope.client = response.data;
    }, function (response) {
      alert('algo deu erro');
    });
  }
  $scope.save = function(client)
  {
    Restful.save('client',client).then(function (response) {
      alert('ok');
    }, function(response) {
      alert('algo deu erro');
    });
  }

  $scope.edit = function (client)
  {
    $state.go('client_edit', {id: client.id});
  }

  $scope.delete = function (client)
  {
    Restful.delete('client/'+client.id).then(function (response) {
      var index = $scope.clients.indexOf(client);
      $scope.clients.splice(index, 1);
    }, function (response) {
      alert('algo deu erro');
    });
  }

  var user=JSON.parse(window.localStorage.getItem('user'));
  if (user!=null) {
    $scope.username=user.name;
  }
}]);
