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
    $scope.viewed = [
        {
            img: "img/kiss-pic.jpg",
            caption: "Butterfly Junkie"
    },
        {
            img: "img/post2.jpg",
            caption: "Butterfly Junkie"
    },
        {
            img: "img/kiss-pic.jpg",
            caption: "Butterfly Junkie"
    },
        {
            img: "img/post2.jpg",
            caption: "Butterfly Junkie"
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
    .controller('LieDetailCtrl', function ($scope, TemplateService, NavigationService) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("liedetail");
        $scope.menutitle = NavigationService.makeactive("Lie Detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.footercolor = "black";
    })
    .controller('ConfessionDetailCtrl', function ($scope, TemplateService, NavigationService) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("Confessiondetail");
        $scope.menutitle = NavigationService.makeactive("Confession Detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.footercolor = "black";

        $scope.confessionblog = [
            {
                head: "#51",
                content: "I was into a relationship for 5 years.. I loved him more than anything in this world. But we always fought. I never was loved by anyone.. Not by parents, not by sisters, friends betrayed me. Even he started behaving which i never expectd. Made fun of me always, stopped hearing my problem, he just stopped talking with me. We lived together but he was never there with me. Ignored me for his friends, family.. Then he would always spend my money and will say he has spent alot on me which i dont even know. I was into a relationship for 5 years.. I loved him more than anything in this world. But we always fought. I never was loved by anyone.. Not by parents, not by sisters, friends..."
        }];
    })
    .controller('ConfessionsCtrl', function ($scope, TemplateService, NavigationService) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("confessions");
        $scope.menutitle = NavigationService.makeactive("Confessions");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.footercolor = "black";
        $scope.confessionblog = [
            {
                head: "#51",
                content: "I was into a relationship for 5 years.. I loved him more than anything in this world. But we always fought. I never was loved by anyone.. Not by parents, not by sisters, friends betrayed me. Even he started behaving which i never expectd. Made fun of me always, stopped hearing my problem, he just stopped talking with me. We lived together but he was never there with me. Ignored me for his friends, family.. Then he would always spend my money and will say he has spent alot on me which i dont even know. I was into a relationship for 5 years.. I loved him more than anything in this world. But we always fought. I never was loved by anyone.. Not by parents, not by sisters, friends..."
        },
            {
                head: "#52",
                content: "I was into a relationship for 5 years.. I loved him more than anything in this world. But we always fought. I never was loved by anyone.. Not by parents, not by sisters, friends betrayed me. Even he started behaving which i never expectd. Made fun of me always, stopped hearing my problem, he just stopped talking with me. We lived together but he was never there with me. Ignored me for his friends, family.. Then he would always spend my money and will say he has spent alot on me which i dont even know. I was into a relationship for 5 years.. I loved him more than anything in this world. But we always fought. I never was loved by anyone.. Not by parents, not by sisters, friends..."
        },
            {
                head: "#53",
                content: "I was into a relationship for 5 years.. I loved him more than anything in this world. But we always fought. I never was loved by anyone.. Not by parents, not by sisters, friends betrayed me. Even he started behaving which i never expectd. Made fun of me always, stopped hearing my problem, he just stopped talking with me. We lived together but he was never there with me. Ignored me for his friends, family.. Then he would always spend my money and will say he has spent alot on me which i dont even know. I was into a relationship for 5 years.. I loved him more than anything in this world. But we always fought. I never was loved by anyone.. Not by parents, not by sisters, friends..."
        }
    ];
    })

.controller('LieCtrl', function ($scope, TemplateService, NavigationService) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("lie");
    $scope.menutitle = NavigationService.makeactive("Lie");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.footercolor = "black";

    $scope.lieblog = [
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
    $scope.viewed = [
        {
            img: "img/kiss-pic.jpg",
            caption: "Butterfly Junkie"
    },
        {
            img: "img/post2.jpg",
            caption: "Butterfly Junkie"
    },
        {
            img: "img/kiss-pic.jpg",
            caption: "Butterfly Junkie"
    },
        {
            img: "img/post2.jpg",
            caption: "Butterfly Junkie"
    }
    ];
})

.controller('LustCtrl', function ($scope, TemplateService, NavigationService) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("lust");
        $scope.menutitle = NavigationService.makeactive("Lust");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('SexpertCtrl', function ($scope, TemplateService, NavigationService) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("sexpert");
        $scope.menutitle = NavigationService.makeactive("Sexpert");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.footercolor = "black";

        $scope.sexpertblog = [
            {
                content: "I was into a relationship for 5 years.. I loved him more than anything in this world. But we always fought. I never was loved by anyone.. Not by parents, not by sisters, friends betrayed me. Even he started behaving which i never expectd. Made fun of me always, stopped hearing my problem, he just stopped talking with me. I never was loved by anyone.. Not by parents, not by sisters, friends..."
        },
            {
                content: "I was into a relationship for 5 years.. I loved him more than anything in this world. But we always fought. I never was loved by anyone.. Not by parents, not by sisters, friends betrayed me. Even he started behaving which i never expectd. Made fun of me always, stopped hearing my problem, he just stopped talking with me.I never was loved by anyone.. Not by parents, not by sisters, friends..."
        },
            {
                content: "I was into a relationship for 5 years.. I loved him more than anything in this world. But we always fought. I never was loved by anyone.. Not by parents, not by sisters, friends betrayed me. Even he started behaving which i never expectd. Made fun of me always, stopped hearing my problem, he just stopped talking with me. I never was loved by anyone.. Not by parents, not by sisters, friends..."
        }
    ];
    })
    .controller('QueriesCtrl', function ($scope, TemplateService, NavigationService) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("queries");
        $scope.menutitle = NavigationService.makeactive("Queries");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.footercolor = "black";
        $scope.confessionblog = [
            {
                content: "I was into a relationship for 5 years.. I loved him more than anything in this world. But we always fought. I never was loved by anyone.. Not by parents, not by sisters, friends betrayed me. Even he started behaving which i never expectd. Made fun of me always, stopped hearing my problem, he just stopped talking with me. I never was loved by anyone.. Not by parents, not by sisters, friends..."
        },
            {
                content: "I was into a relationship for 5 years.. I loved him more than anything in this world. But we always fought. I never was loved by anyone.. Not by parents, not by sisters, friends betrayed me. Even he started behaving which i never expectd. Made fun of me always, stopped hearing my problem, he just stopped talking with me.I never was loved by anyone.. Not by parents, not by sisters, friends..."
        },
            {
                content: "I was into a relationship for 5 years.. I loved him more than anything in this world. But we always fought. I never was loved by anyone.. Not by parents, not by sisters, friends betrayed me. Even he started behaving which i never expectd. Made fun of me always, stopped hearing my problem, he just stopped talking with me. I never was loved by anyone.. Not by parents, not by sisters, friends..."
        }
    ];
    })

.controller('AboutusCtrl', function ($scope, TemplateService, NavigationService) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("aboutus");
        $scope.menutitle = NavigationService.makeactive("AboutUs");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.footercolor = "black";
    })
    .controller('SexpertDetailCtrl', function ($scope, TemplateService, NavigationService) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("sexpertdetail");
        $scope.menutitle = NavigationService.makeactive("Sexpert Detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.footercolor = "black";
        $scope.confessionblog = [
            {
                content: "I was into a relationship for 5 years.. I loved him more than anything in this world. But we always fought. I never was loved by anyone.. Not by parents, not by sisters, friends betrayed me. Even he started behaving which i never expectd. Made fun of me always, stopped hearing my problem, he just stopped talking with me. I never was loved by anyone.. Not by parents, not by sisters, friends..."
        }];
    })
    .controller('QueriesDetailCtrl', function ($scope, TemplateService, NavigationService) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("queriesdetail");
        $scope.menutitle = NavigationService.makeactive("Queries Detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.footercolor = "black";
        $scope.confessionblog = [
            {
                content: "I was into a relationship for 5 years.. I loved him more than anything in this world. But we always fought. I never was loved by anyone.. Not by parents, not by sisters, friends betrayed me. Even he started behaving which i never expectd. Made fun of me always, stopped hearing my problem, he just stopped talking with me. I never was loved by anyone.. Not by parents, not by sisters, friends..."
        }];
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
