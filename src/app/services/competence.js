angular.module('portfolioFinal')
    .service('Competences', function (Restangular) {

        var _competenceService = Restangular.all('competences');
        this.list = function () {
            return  _competenceService.getList();
        }

    });