'use strict';

/**
 * @ngdoc function
 * @name gitSearchWivoApp.endpoints:ConnectionService
 * @description
 * # ConnectionService
 * Controller of the gitSearchWivoApp for manage conections
 */

angular
.module('gitSearchWivoApp.endpoints')
.factory('ConnectionService', ConnectionService);
ConnectionService.$injector = ['$timeout', '$q', '$http', '$rootScope'];

function ConnectionService($timeout, $q, $http, $rootScope) {
	var service = {};
	service.get = get;
	service.post = post;
  service.put = put;
  service.remove = remove;

	function get(url, config){
		if(typeof config === 'undefined'){
			config = {};
		}

		var request = config;
		request.method = 'GET';
		request.header = {'Content-Type': 'application/json; charset=utf-8',
	'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
	'Access-Control-Allow-Origin': '*'};
		request.url = url;
		return doRequest(request);
	}

	function post(url, config, data){
		if(typeof config === 'undefined'){
			config = {};
		}

		if(typeof data === 'undefined'){
			data = {};
		}

		var request = config;
		request.method = 'POST';
		request.url = url;
		request.header = {'Content-Type': 'application/json; charset=utf-8',
	'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
	'Access-Control-Allow-Origin': '*'};
	request.json = true;
		request.data = data;
		return doRequest(request)
	}

  function put(url, config, data){
    if(typeof config === 'undefined'){
      config = {};
    }

    if(typeof data === 'undefined'){
      data = {};
    }

    var request = config;
    request.method = 'PUT';
    request.url = url;
		request.header = {'Content-Type': 'application/json; charset=utf-8',
		'Access-Control-Allow-Methods': 'PUT, OPTIONS',
		'Access-Control-Allow-Origin': '*'};
		request.json = true;
	  request.data = data;
    return doRequest(request)
  }

  function remove(url, config, data){
		if(typeof config === 'undefined'){
			config = {};
		}

		if(typeof data === 'undefined'){
			data = {};
		}

		var request = config;
		request.method = 'DELETE';
		request.url = url;
		request.data = data;
		return doRequest(request)
	}


	function doRequest(request){
		var deferred = $q.defer();

		console.log("ConnectionManager request:", request);

		$http(request).then(success,error).finally(end);

		function success(response) {
			try{
				//console.log("ConnectionManager Success:", response)
				deferred.resolve(response);
			} catch(err) {
				deferred.reject(response);
			}
		}

		function error(response) {
			console.log("ConnectionManager error:", response);
			deferred.reject(response);
		}

		function end(){

		}

		return deferred.promise;
	}

	return service;
}
