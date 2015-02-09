
var app = angular.module('MobileAngularUiExamples');

 app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {templateUrl: 'modules/core/views/home.html'});
    $routeProvider.when('/scroll', {templateUrl: 'modules/core/views/scroll.html', reloadOnSearch: false});
    $routeProvider.when('/toggle', {templateUrl: 'modules/core/views/toggle.html', reloadOnSearch: false});
    $routeProvider.when('/tabs', {templateUrl: 'modules/core/views/tabs.html', reloadOnSearch: false});
    $routeProvider.when('/accordion', {templateUrl: 'modules/core/views/accordion.html', reloadOnSearch: false});
    $routeProvider.when('/overlay', {templateUrl: 'modules/core/views/overlay.html', reloadOnSearch: false});
    $routeProvider.when('/forms', {templateUrl: 'modules/core/views/forms.html', reloadOnSearch: false});
    $routeProvider.when('/dropdown', {templateUrl: 'modules/core/views/dropdown.html', reloadOnSearch: false});
    $routeProvider.when('/touch', {templateUrl: 'modules/core/views/touch.html', reloadOnSearch: false});
    $routeProvider.when('/swipe', {templateUrl: 'modules/core/views/swipe.html', reloadOnSearch: false});
    $routeProvider.when('/drag', {templateUrl: 'modules/core/views/drag.html', reloadOnSearch: false});
    $routeProvider.when('/drag2', {templateUrl: 'modules/core/views/drag2.html', reloadOnSearch: false});
    $routeProvider.when('/carousel', {templateUrl: 'modules/core/views/carousel.html', reloadOnSearch: false});

}]);

