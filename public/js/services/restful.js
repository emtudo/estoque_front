/*
* @author: Leandro Henrique
* @date:   2016-12-02 08:43:57
* @last modified by:   Leandro Henrique
* @last modified time: 2016-12-02 09:04:16
*/

'use strict';


angular.module('app')
  .service('Restful', Restful);

Restful.$inject=['$http'];
function Restful($http) {
    var vm=this;
 
    var api='http://api.estoque.dev/';

    vm.getHeaders=function()
    {
      return {
        'headers': {
        'Authorization': 'Bearer'+window.localStorage.getItem('token')
        }
      }
    };

    vm.post=function(path, data) {
      return $http.post(api+path, data, vm.getHeaders());
    }

    vm.login=function(path, data) {
      return $http.post(api+path, data);
    }

    vm.get=function(path)
    {
      return $http.get(api+path, vm.getHeaders());
    }
  }