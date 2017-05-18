'use strict';

/**
 * @ngdoc overview
 * @name listaTelefonicaApp
 * @description
 * # listaTelefonicaApp
 *
 * Main module of the application.
 */
angular
  .module('listaTelefonicaApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/lista', {
        templateUrl: 'views/lista.html',
        controller: 'ListaCtrl',
        controllerAs: 'lista'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
