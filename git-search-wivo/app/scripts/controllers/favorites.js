'use strict';

/**
 * @ngdoc function
 * @name gitSearchWivoApp.controller:ListFavoritesCtrl
 * @description
 * # ListFavoritesCtrl
 * Controller of the gitSearchWivoApp
 */
angular
.module('gitSearchWivoApp')
.controller('ListFavoritesCtrl',ListFavoritesCtrl);

ListFavoritesCtrl.$injector = ['$scope', '$stateParams', '$rootScope','ContentService'];
function ListFavoritesCtrl($scope, $stateParams, $rootScope, ContentService){
  var fusers = this;
  fusers.page = 0;
  fusers.totalPages = 0;
  fusers.list = [];
  fusers.findFavorites = findFavorites;
  fusers.nextPage = nextPage;
  fusers.previousPage = previousPage;
  if($rootScope.pageSize == null){
      $rootScope.pageSize = 10;
  }

  function findFavorites(){
    ContentService.getFavorites(fusers.page,$rootScope.pageSize).then(success, error);

        function success(response) {
          //console.log("success",response.data.errors,response);
          if (response.data.response.items !== null) {
             fusers.list = response.data.response.items;
            // console.log("here",fusers.list);
             if(fusers.page == 0){
               //console.log("Total Rows: "+response.data.response.total_rows);
               var mod = parseInt(response.data.response.total_rows%$rootScope.pageSize);
               fusers.totalPages = parseInt(response.data.response.total_rows/$rootScope.pageSize);
               if(mod > 0) fusers.totalPages += 1;
             }
          }

        }

        function error(response) {
          console.log('digital:', response);
        }

  }

  function nextPage(){
    if( fusers.page + 1 < fusers.totalPages ){
      fusers.page = fusers.page+1;
      findFavorites();
    }
  }

  function previousPage(){
    if( fusers.page - 1 >= 0 ){
      fusers.page = fusers.page-1;
      findFavorites();
    }
  }


  findFavorites();

}
