/*
* @author: Leandro Henrique
* @date:   2016-12-02 08:41:13
* @last modified by:   Leandro Henrique
* @last modified time: 2016-12-02 09:00:33
*/

'use strict';

angular.module("app")
 .controller("ClientCtrl", ['$scope','Restful', function($scope, Restful) {
  $scope.clientes=[];
  Restful.get('client').then(function(response) {
    $scope.clients=response.data;
    }, function (response) {
      alert('algo deu errado');
    });

  var user=JSON.parse(window.localStorage.getItem('user'));
  if (user!=null) {
    $scope.username=user.name;
  }
}]);
