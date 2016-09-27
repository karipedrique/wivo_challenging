'use strict';

/**
 * @ngdoc overview
 * @name gitSearchWivoApp config
 * @description
 * # gitSearchWivoApp
 *
 * Config module of the application.
 */

angular
  .module('gitSearchWivoApp')
  .config(routerConfig);

routerConfig.$injector = ['$stateProvider', '$urlRouterProvider', 'localStorageServiceProvider'];
function routerConfig($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
        // Setup the apps routes

        // 404 & 500 pages
        $stateProvider
        .state('404', {
            url: '/404',
            templateUrl: '404.html',
            controllerAs: 'vm',
            controller: function($state) {
                var vm = this;
                vm.goHome = function() {
                    $state.go('home');
                };
            }
        })
        .state('main', {
            url: '/main',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .state('gitusers', {
            url: '/gitusers',
            templateUrl: 'views/list-user.html',
            controller: 'ListUsersCtrl',
            controllerAs: 'gitusers'
        })
        .state('favorites', {
            url: '/favorites',
            templateUrl: 'views/favorites.html',
            controller: 'ListFavoritesCtrl',
            controllerAs: 'fusers'
        });


        // set default routes when no path specified
        $urlRouterProvider.when('#', '/main');
        $urlRouterProvider.when('', '/main');

        // always goto 404 if route not found
        $urlRouterProvider.otherwise('/404');

        localStorageServiceProvider
        .setPrefix('webVisitorApp')
        .setStorageType('sessionStorage')
        .setNotify(true, true);
    }
