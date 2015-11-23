angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.mySlides = [
    'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
  ];
})

.controller('LoveCtrl', function($scope, TemplateService, NavigationService) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("love");
  $scope.menutitle = NavigationService.makeactive("Love");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('LoveDetailCtrl', function($scope, TemplateService, NavigationService) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("lovedetail");
  $scope.menutitle = NavigationService.makeactive("Love Detail");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('LieCtrl', function($scope, TemplateService, NavigationService) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("lie");
  $scope.menutitle = NavigationService.makeactive("Lie");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('LustCtrl', function($scope, TemplateService, NavigationService) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("lust");
  $scope.menutitle = NavigationService.makeactive("Lust");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})
.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
})

;
