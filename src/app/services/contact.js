angular.module('portfolioFinal')
    .service('Contact', function (Restangular) {

        var _contactService = Restangular.all('contact');
        var _tokenService = Restangular.one('contact');
        this.send = function (name,object) {
            return  _contactService.post(name,object);
        }
        this.tokenValue = function(){
           return _tokenService.getList();

        }

    });