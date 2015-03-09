'use strict';

angular.module('portfolioFinal', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'mm.foundation', 'duScroll', 'angular-svg-round-progress'])
    .constant("CSRF_TOKEN", '{{ csrf_token() }}')
    .config(function ($stateProvider, $urlRouterProvider, RestangularProvider, $httpProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            });

        $urlRouterProvider.otherwise('/');


        RestangularProvider.setBaseUrl('http://localhost:8000/api');
        $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
        RestangularProvider.addResponseInterceptor(function (data, operation, what, url, response, deferred) {
            var extractedData;
            if (operation === "getList") {
                extractedData = data.results;
            } else {
                extractedData = data.data;
            }
            return extractedData;
        });


// RestangularProvider.setDefaultRequestParams('application/json');
// RestangularProvider.setDefaultRequestParams({apiKey: 'cDJBs2yBJPPCyNQC6zShuzTCaYnVlEiM'})


    })
;
