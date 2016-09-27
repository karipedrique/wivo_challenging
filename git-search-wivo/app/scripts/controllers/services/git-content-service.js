'use strict';

/**
 * @ngdoc function
 * @name gitSearchWivoApp.endpoint:GitContentService
 * @description
 * # GitContentService
 * Controller of the gitSearchWivoApp to retrieve information from github conexion web service
 */

angular
.module('gitSearchWivoApp.endpoints')
.factory('GitContentService', GitContentService);
GitContentService.$injector = ['GitUrlService', 'ConnectionService'];

function GitContentService(GitUrlService, ConnectionService) {
  var service = {};
  service.getGitUsers = getGitUsers;
  service.getRowInfo = getRowInfo;

  function getGitUsers(filters,page){
    return ConnectionService.get(GitUrlService.searchUsers(page,filters.language, filters.location,filters.followersBegin, filters.followersEnd), {});
  }

  function getRowInfo(url){
    return ConnectionService.get(url,{});
  }

  return service;
}
