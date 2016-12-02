/*
* @author: Leandro Henrique
* @date:   2016-12-02 08:39:52
* @last modified by:   Leandro Henrique
* @last modified time: 2016-12-02 09:03:48
*/

'use strict';

  angular.module("app")
  .controller("LoginCtrl", ['$scope','Restful', function($scope, Restful) {
    $scope.auth=function(login)
    {
      Restful.login('auth/login', login).then(function(response) {
        console.log('successo');
        console.log(response);
        window.localStorage.setItem('token',response.data.token);
        window.localStorage.setItem('user',JSON.stringify(response.data.user));
        location.href="/";
      }, function(response) {
        console.log('error');
        console.log(response);
      });
    }
  }]);
