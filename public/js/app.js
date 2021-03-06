/*
* @author: Leandro Henrique
* @date:   2016-12-02 08:53:11
* @last modified by:   Leandro Henrique
* @last modified time: 2016-12-24 09:45:48
*/

'use strict';

angular.module("app", ['ui.router'])
.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: '/views/domain/dashboard/index.html',
  })
  .state('client', {
    url: '/clientes',
    templateUrl: '/views/domain/client/index.html',
    controller: 'ClientCtrl'
  })
  .state('client_create', {
    url: '/clientes/criar',
    templateUrl: '/views/domain/client/form.html',
    controller: 'ClientCtrl'
  })
    .state('client_edit', {
    url: '/clientes/{id}/editar',
    templateUrl: '/views/domain/client/form.html',
    controller: 'ClientCtrl',
    params: {
      edit: true
    }
  })
}]);
