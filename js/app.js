// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice'
]);

firstapp.config(function($stateProvider, $urlRouterProvider,$httpProvider) {

    // for http request with session
    $httpProvider.defaults.withCredentials = true;

    $stateProvider

    .state('home', {
        url: "/home",
        templateUrl: "views/template.html",
        controller: 'HomeCtrl'
    })

    .state('love', {
        url: "/love",
        templateUrl: "views/template.html",
        controller: 'LoveCtrl'
    })

    .state('lovedetail', {
        url: "/lovedetail",
        templateUrl: "views/template.html",
        controller: 'LoveDetailCtrl'
    })

    .state('lie', {
        url: "/lie",
        templateUrl: "views/template.html",
        controller: 'LieCtrl'
    })

    .state('lust', {
        url: "/lust",
        templateUrl: "views/template.html",
        controller: 'LustCtrl'
    })

    $urlRouterProvider.otherwise("/home");

});


firstapp.directive('img', function($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            if(!attrs.noloading)
            {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function() {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            }
            else
            {
                $($element).addClass("doneLoading");
            }
        }
    };
});
