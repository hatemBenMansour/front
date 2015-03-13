'use strict';

angular.module('portfolioFinal')
    .controller('MainCtrl', function ($scope, $rootScope, config, Restangular, $document, $timeout, $cookies, $cookieStore, Competences, MenusContents, Socials,Contact) {
        $scope.showMenu = false;
        $scope.showContactMe = false;
        $scope.toTop = false;
        $rootScope.offsets = [];
        $scope.section = config.defaultSection;
        $scope.loading = false;
        $timeout(function () {
            $scope.loading = true;
        }, 4500);

        Competences.list().then(function (expertises) {
            $scope.expertises = expertises;
        });
        Socials.list().then(function (socials) {
            $scope.socials = socials;
        });
        MenusContents.list().then(function (menus) {
            $scope.menus = menus;
        });
        Contact.tokenValue().then(function (response) {
            $rootScope._token = response[0]._token;
        });

        $scope.goScrollTo = function (element) {
            var _elementToGo = angular.element(document.getElementById(element));
            $document.scrollToElement(_elementToGo, config.offset, config.duration).then(function () {
                $scope.showMenu = false;
                $scope.section = element;
                if (element != config.defaultSection) {
                    $scope.toTop = true;
                }
            });
        }
        $document.on('scroll', function (element) {
            var _limit = $scope.offsets;
            var _scrollOffset = $document.scrollTop();

            if (_scrollOffset < _limit[config.about]) {
                $scope.toTop = false;
                $scope.section = config.home;
            }
            if (_scrollOffset >= _limit[config.about] && _scrollOffset < _limit[config.expertise]) {
                $scope.toTop = true;
                $scope.section = config.about;
            }
            if (_scrollOffset >= _limit[config.expertise] && _scrollOffset < _limit[config.reference]) {
                $scope.section = config.expertise;
            }
            if (_scrollOffset >= _limit[config.reference] && _scrollOffset < _limit[config.contact]) {
                $scope.section = config.reference;
            }
            if (_scrollOffset >= _limit[config.contact]) {
                $scope.section = config.contact;
            }
            $scope.$apply();

        });


    });
