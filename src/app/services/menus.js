angular.module('portfolioFinal')
    .service('MenusContents', function (Restangular) {

        var _menuService = Restangular.all('menus');
        this.list = function () {
            return _menuService.getList();

        }
    })