'use strict';

/**
 * @ngdoc function
 * @name gitSearchWivoApp.controller:ListUsersCtrl
 * @description
 * # ListUsersCtrl
 * Controller of the gitSearchWivoApp
 */
angular
.module('gitSearchWivoApp')
.controller('ListUsersCtrl',ListUsersCtrl);

ListUsersCtrl.$injector = ['$scope', '$stateParams', '$rootScope','GitContentService','ContentService'];
function ListUsersCtrl($scope, $stateParams, $rootScope,GitContentService, ContentService){
  var gitusers = this;
  gitusers.filters = {
    location : "all",
    language : "all",
    followersBegin : 0,
    followersEnd : 1000000
  };
  gitusers.languages = [];
  gitusers.page = 1;
  gitusers.totalPages = 0;
  gitusers.list = [];
  gitusers.findUsers = findUsers;
  gitusers.nextPage = nextPage;
  gitusers.previousPage = previousPage;
  if($rootScope.pageSize == null){
      $rootScope.pageSize = 10;
  }



  function fillLanguages(){
    ContentService.getLanguages().then(success, error);

    function success(response){
      gitusers.languages = response.data.response;
    }

    function error(response){
      console.log("error retrieve languages: ",response);
    }
  }

  function findUsers(){
    GitContentService.getGitUsers(gitusers.filters,gitusers.page).then(success, error);

        function success(response) {
          //console.log("success",response.data.errors,response);
          if (response.data.items !== null) {
             gitusers.list = response.data.items;
             //console.log("here",gitusers.list);
             if(gitusers.page == 1){
                var mod = parseInt(response.data.total_count%$rootScope.pageSize);
               gitusers.totalPages = parseInt(response.data.total_count/$rootScope.pageSize);
               if(mod !== 0){
                 gitusers.totalPages += 1;
               }
             }
          }

        }

        function error(response) {
          console.log('digital:', response);
        }

  }

  function nextPage(){
    if( gitusers.page + 1 <= gitusers.totalPages ){
      gitusers.page = gitusers.page+1;
      findUsers();
    }
  }

  function previousPage(){
    if( gitusers.page - 1 >= 0 ){
      gitusers.page = gitusers.page-1;
      findUsers();
    }
  }

  function InitLoad(){
    fillLanguages();
    findUsers();
  }


  InitLoad();

}
