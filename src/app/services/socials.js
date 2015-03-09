angular.module('portfolioFinal')
    .service('Socials', function (Restangular) {

        var _socialService = Restangular.all('socials');
        this.list = function () {
            return _socialService.getList();
        }

    })