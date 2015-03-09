angular.module('portfolioFinal')
    .directive('ngTopOffset', function ($timeout,$rootScope ) {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            template: "<div class='no-margin' ng-transclude  ></div>",
            link: function (scope, elem, attr) {
                $timeout(function () {
                    $timeout(function () {
                        var _container = elem[0];
                        var _elScrollTopOriginal = Math.round($(_container).offset().top);
                        var _id= attr.id;
                        $rootScope.offsets[_id] = _elScrollTopOriginal - 150;
                    }, 0);
                });


            }
        }
    });