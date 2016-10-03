// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeBar = false;
    cfpLoadingBarProvider.includeSpinner = true;
    cfpLoadingBarProvider.spinnerTemplate = '<div class="white-blurbg"><div class="lll-loader"><img src="img/loader.gif" alt="" class="img-responsive" /></div></div>';
    // for http request with session
    $httpProvider.defaults.withCredentials = true;

    $stateProvider

        .state('home', {
        url: "/home",
        templateUrl: "views/template.html",
        controller: 'HomeCtrl'
    })

    .state('slider', {
        url: "/slider",
        templateUrl: "views/template.html",
        controller: 'SliderCtrl'
    })

    .state('comingSoon', {
            url: "/comingSoon",
            templateUrl: "views/template.html",
            controller: 'ComingCtrl'
        })
        .state('lll_emailer', {
            url: "/lll_emailer",
            templateUrl: "views/template.html",
            controller: 'lll_emailerCtrl'
        })

    .state('love', {
        url: "/love",
        templateUrl: "views/template.html",
        controller: 'LoveCtrl'
    })

    .state('detail', {
        url: "/detail/:id",
        templateUrl: "views/template.html",
        controller: 'LoveDetailCtrl'
    })

    .state('liedetail', {
        url: "/liedetail/:id",
        templateUrl: "views/template.html",
        controller: 'LoveDetailCtrl'
    })

    .state('aboutus', {
        url: "/aboutus",
        templateUrl: "views/template.html",
        controller: 'AboutusCtrl'
    })

    .state('lie', {
        url: "/lie",
        templateUrl: "views/template.html",
        controller: 'LoveCtrl'
    })

    .state('confessions', {
        url: "/confessions",
        templateUrl: "views/template.html",
        controller: 'LoveCtrl'
    })

    .state('confessiondetail', {
        url: "/confessiondetail",
        templateUrl: "views/template.html",
        controller: 'LoveDetailCtrl'
    })

    .state('sexpert', {
        url: "/sexpert",
        templateUrl: "views/template.html",
        controller: 'LoveCtrl'
    })

    .state('sexpertdetail', {
        url: "/sexpertdetail",
        templateUrl: "views/template.html",
        controller: 'LoveDetailCtrl'
    })

    .state('queries', {
        url: "/queries",
        templateUrl: "views/template.html",
        controller: 'LoveCtrl'
    })

    .state('queriesdetail', {
        url: "/queriesdetail",
        templateUrl: "views/template.html",
        controller: 'LoveDetailCtrl'
    })

    .state('goops', {
        url: "/goops",
        templateUrl: "views/template.html",
        controller: 'LoveCtrl'
    })

    .state('goopsdetail', {
        url: "/goopsdetail",
        templateUrl: "views/template.html",
        controller: 'LoveDetailCtrl'
    })

    .state('lust', {
        url: "/lust",
        templateUrl: "views/template.html",
        controller: 'LoveCtrl'
    })

    .state('lustdetail', {
        url: "/lust",
        templateUrl: "views/template.html",
        controller: 'LoveDetailCtrl'
    });

    $urlRouterProvider.otherwise("/comingSoon");

});
firstapp.directive('autoHeightfixed', function($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            var windowHeight = $(window).height();
            var addHeight = function() {
                $element.css("height", windowHeight);
            };
            addHeight();
        }
    };
});
firstapp.filter('serverimage', function() {
    return function(image) {
        if (image && image !== null) {
            return adminUrl + "uploads/" + image;
        } else {
            return "img/default.png";
        }
    };
})

firstapp.directive('img', function($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            if (!attrs.noloading) {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function() {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            } else {
                $($element).addClass("doneLoading");
            }
        }
    };
});
