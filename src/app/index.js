'use strict';

angular.module('portfolioFinal', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'mm.foundation', 'duScroll', 'angular-svg-round-progress'])
    .config(function ($stateProvider, $urlRouterProvider, RestangularProvider, $httpProvider, $locationProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            });

        $urlRouterProvider.otherwise('/');
        RestangularProvider.setBaseUrl('http://localhost:8000/api');
      //  RestangularProvider.setDefaultHeaders({'X-CSRF-Token': CSRF_TOKEN});
        RestangularProvider.addResponseInterceptor(function (data, operation, what, url, response, deferred) {
            var extractedData;
            if (operation === "getList") {
                extractedData = data.results;
            } else {
                extractedData = data.data;
            }
            return extractedData;
        });

        if (window.history && window.history.pushState) {
            //$locationProvider.html5Mode(true); will cause an error $location in HTML5 mode requires a  tag to be present! Unless you set baseUrl tag after head tag like so: <head> <base href="/">

            // to know more about setting base URL visit: https://docs.angularjs.org/error/$location/nobase

            // if you don't wish to set base URL then use this
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        }
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.withCredentials = true;
        delete $httpProvider.defaults.headers.common["X-Requested-With"];
        $httpProvider.defaults.headers.common["Accept"] = "application/json";
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";


    })
  ;



