angular.module('portfolioFinal')
    .service('Contact', function (Restangular) {

        var _contactService = Restangular.all('contact');
        this.send = function (name,object) {
            return  _contactService.post(name,object);
        }

    });