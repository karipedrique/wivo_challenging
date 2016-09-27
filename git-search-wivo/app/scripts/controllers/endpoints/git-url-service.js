'use strict';

/**
 * @ngdoc function
 * @name gitSearchWivoApp.endpoints:GitUrlService
 * @description
 * # GitUrlService
 * Controller of the gitSearchWivoApp for wrapper  github url
 */

angular
.module('gitSearchWivoApp.endpoints')
.factory('GitUrlService', GitUrlService);

GitUrlService.$injector = ['$rootScope'];
function GitUrlService($rootScope) {
	var apiUrl = 'https://api.github.com'; //search/users
	var service = {};
  service.searchUsers = searchUsers;

  function searchUsers(page,language,location,followersBegin, followersEnd){
    var params = "?page="+page+"&per_page="+$rootScope.pageSize+"&q= ";
    if(language !== null && language !== "all"){
      params += "language:"+language+" ";
    }
    if(location !== null && location !== "all"){
      params += "location:"+location+" ";
    }
    if(followersBegin > -1 && followersBegin > -1){
      params += "followers:"+followersBegin+".."+followersEnd;
    }else if(followersBegin > -1){
      params += "followers:>="+followersBegin;
    }else if(followersEnd > -1){
        params += "followers:<="+followersEnd;
    }else{
      params += "followers:>=0"; //all
    }
    return buildUrl('search','users',[params]);
  }

  function buildUrl(api, method, params){
		var base = [apiUrl , api , method];
		var url = base.join('/');

		if(typeof params !== undefined && params != null){
			url = url.concat(params);
		}

		return url;
	}

  return service;
}
