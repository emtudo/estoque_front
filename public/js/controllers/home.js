/*
* @author: Leandro Henrique
* @date:   2016-12-02 08:40:22
* @last modified by:   Leandro Henrique
* @last modified time: 2016-12-02 08:58:17
*/

'use strict';

angular.module("app")
.controller("HomeCtrl", ['$scope','Restful', function($scope, Restful) {
  var user=JSON.parse(window.localStorage.getItem('user'));
  if (user!=null) {
    $scope.username=user.name;
  }
  $scope.logout=function() {
    Restful.post('auth/logout', {}).then(function(response) {
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('user');
      location.href="/login.html";
    }, function (response) {
      alert('algo deu errado');
    });
  }
}]);
