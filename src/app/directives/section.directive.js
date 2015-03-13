angular.module('portfolioFinal')
    .directive('ngSectionContent', function ($compile, Contact, $rootScope, $timeout) {
        return {
            restrict: 'E',
            scope: {
                menu: '=',
                expertises: '='

            },
            templateUrl: 'app/partials/section.html',
            link: function (scope, elem, attr) {

                scope.submitForm = function (user, form) {
                    if (!form.$invalid) {
                        user._token = $rootScope._token;
                        Contact.send('user', user).then(function (response) {
                            if (response.status == 'success') {
                                scope.sendSuccess = true;
                                scope.contactMsg = response.message;
                                $timeout(function () {
                                    scope.sendSuccess = false;
                                }, 2500);
                            }
                            scope.resetForm(user, form);
                        }, function (response) {
                            scope.sendError = true;
                            scope.contactMsg = response.message;
                            $timeout(function () {
                                scope.sendError = false;
                            }, 2500);
                        });


                    }

                }
                scope.resetForm = function (user, form) {
                    user.name = '';
                    user.email = '';
                    user.message = '';
                    form.$setPristine();
                    form.name.$touched = false;
                    form.mail.$touched = false;
                    form.message.$touched = false;
                }
                scope.getTemplate = function (id) {
                    return 'app/partials/' + id + '.html';
                }

            }
        }

    });