'use strict';

/**
 * @ngdoc overview
 * @name gitSearchWivoApp
 * @description
 * # gitSearchWivoApp
 *
 * Main module of the application.
 */
angular
  .module('gitSearchWivoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule',
    'gitSearchWivoApp.endpoints',
    'gitSearchWivoApp.directives'
  ])
  .config(function ($httpProvider) {
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
   });
