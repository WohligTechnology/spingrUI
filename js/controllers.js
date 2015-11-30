angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.footercolor = "";

    $scope.mySlides = [
    'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
  ];
    //    var get = false;
    //    $scope.shownav = "menu-out";
    //    $scope.getnav = function () {
    //        get = !get;
    //        if (get == true) {
    //            $scope.shownav = "menu-in";
    //            $("#icon1").addClass("top-bar")
    //            $("#icon2").addClass("mid-bar")
    //            $("#icon3").addClass("down-bar")
    //        } else {
    //            $scope.shownav = "menu-out";
    //            $("#icon1").removeClass("top-bar")
    //            $("#icon2").removeClass("mid-bar")
    //            $("#icon3").removeClass("down-bar")
    //        }
    //    }
})

.controller('LoveCtrl', function ($scope, TemplateService, NavigationService) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("love");
    $scope.menutitle = NavigationService.makeactive("Love");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.footercolor = "black";

    $scope.loveblog = [
        {
            img: "img/love-pic.jpg",
            title: "Love for Two, Please!",
            date: "March 13, 2015 by Anonymous",
            descp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
    },
        {
            img: "img/kiss-pic.jpg",
            title: "Love for Two, Please!",
            date: "March 13, 2015 by Anonymous",
            descp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
        },
        {
            img: "img/love-pic.jpg",
            title: "Love for Two, Please!",
            date: "March 13, 2015 by Anonymous",
            descp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
    },

        {
            img: "img/kiss-pic.jpg",
            title: "Love for Two, Please!",
            date: "March 13, 2015 by Anonymous",
            descp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
        },
        {
            img: "img/love-pic.jpg",
            title: "Love for Two, Please!",
            date: "March 13, 2015 by Anonymous",
            descp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
    },

        {
            img: "img/kiss-pic.jpg",
            title: "Love for Two, Please!",
            date: "March 13, 2015 by Anonymous",
            descp: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
        }
    ];
})

.controller('LoveDetailCtrl', function ($scope, TemplateService, NavigationService) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("lovedetail");
    $scope.menutitle = NavigationService.makeactive("Love Detail");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.footercolor = "black";
})

.controller('LieCtrl', function ($scope, TemplateService, NavigationService) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("lie");
    $scope.menutitle = NavigationService.makeactive("Lie");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('LustCtrl', function ($scope, TemplateService, NavigationService) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("lust");
    $scope.menutitle = NavigationService.makeactive("Lust");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('SliderCtrl', function ($scope, TemplateService, NavigationService) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("slider");
        $scope.menutitle = NavigationService.makeactive("slider");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.sliderpart = [

            {
                img: "img/love.jpg"
        },
            {
                img: "img/slide2.jpg"
        },
            {
                img: "img/slide3.jpg"
        },
            {
                img: "img/slide4.jpg"
        },
            {
                img: "img/lie.jpg"
        },
            {
                img: "img/slide6.jpg"
        },
            {
                img: "img/slide7.jpg"
        },
            {
                img: "img/slide8.jpg"
        },
            {
                img: "img/lust.jpg"
        }

    ];
    })
    .controller('headerctrl', function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService;
        var get = false;
        $scope.shownav = "menu-out";
        $scope.getnav = function () {
            get = !get;
            if (get == true) {
                $scope.shownav = "menu-in";
                $("#icon1").addClass("top-bar")
                $("#icon2").addClass("mid-bar")
                $("#icon3").addClass("down-bar")
            } else {
                $scope.shownav = "menu-out";
                $("#icon1").removeClass("top-bar")
                $("#icon2").removeClass("mid-bar")
                $("#icon3").removeClass("down-bar")
            }
        }
    })

;