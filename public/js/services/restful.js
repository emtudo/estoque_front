/*
* @author: Leandro Henrique
* @date:   2016-12-02 08:43:57
* @last modified by:   Leandro Henrique
* @last modified time: 2016-12-24 09:54:56
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

    vm.put=function(path, data) {
      return $http.put(api+path, data, vm.getHeaders());
    }

    vm.save=function(path, data) {
      if (typeof(data.id) == 'undefined') {
        return vm.post(path, data);
      }

      return vm.put(path+'/'+data.id, data);
    }

    vm.delete = function(path) {
      return $http.delete(api + path, vm.getHeaders());
    }

    vm.login=function(path, data) {
      return $http.post(api+path, data);
    }

    vm.get=function(path)
    {
      return $http.get(api+path, vm.getHeaders());
    }
  }