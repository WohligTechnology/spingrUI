// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

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
    .state('liedetail', {
        url: "/liedetail",
        templateUrl: "views/template.html",
        controller: 'LieDetailCtrl'
    })
    .state('aboutus', {
        url: "/aboutus",
        templateUrl: "views/template.html",
        controller: 'AboutusCtrl'
    })

  .state('lie', {
    url: "/lie",
    templateUrl: "views/template.html",
    controller: 'LieCtrl'
  })

    .state('confessions', {
        url: "/confessions",
        templateUrl: "views/template.html",
        controller: 'ConfessionsCtrl'
    })

    .state('confessiondetail', {
        url: "/confessiondetail",
        templateUrl: "views/template.html",
        controller: 'ConfessionDetailCtrl'
    })
    .state('sexpert', {
        url: "/sexpert",
        templateUrl: "views/template.html",
        controller: 'SexpertCtrl'
    })
    .state('sexpertdetail', {
        url: "/sexpertdetail",
        templateUrl: "views/template.html",
        controller: 'SexpertDetailCtrl'
    })

    .state('queries', {
        url: "/queries",
        templateUrl: "views/template.html",
        controller: 'QueriesCtrl'
    })
    .state('queriesdetail', {
        url: "/queriesdetail",
        templateUrl: "views/template.html",
        controller: 'QueriesDetailCtrl'
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
