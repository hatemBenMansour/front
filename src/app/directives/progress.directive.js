angular.module('portfolioFinal')
    .directive('ngProgressBar', function () {
        return {
            restrict: 'E',
            scope :{
              language: '='
            },
            templateUrl: 'app/partials/round_progress.html'
        }
    });