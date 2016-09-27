'use strict';

/**
 * @ngdoc function
 * @name gitSearchWivoApp.endpoints:UrlService
 * @description
 * # UrlService
 * Controller of the gitSearchWivoApp for wrapper url to backend endpoints
 */

angular
.module('gitSearchWivoApp.endpoints')
.factory('UrlService', UrlService);

UrlService.$injector = [];
function UrlService() {
	var apiUrl = 'http://localhost:8000/github-recruiting';
	var apiVersion = 'v1';
	var service = {};
	service.getLanguages = getLanguages;
	service.getFavorites = getFavorites;
	service.isFavorite = isFavorite;
	service.addFavorite = addFavorite;
	service.removeFavorite = removeFavorite;

	function getLanguages(){
		return buildUrl('languages/');
	}

	function getFavorites(page, pageSize){
		var params = page+"/"+pageSize;
		return buildUrl('favorites/',[params]);
	}

	function isFavorite(login){
		return buildUrl('isfavorite/',[login]);
	}

	function addFavorite(){
		return buildUrl('favorites/add');
	}

	function removeFavorite(login){
		return buildUrl('favorites/remove/',[login]);
	}

	function buildUrl(method, params){
		var base = [apiUrl , apiVersion, method];
		var url = base.join('/');

		if(typeof params !== undefined && params != null){
			url = url.concat(params);
		}

		return url;
	}

	return service;
}
