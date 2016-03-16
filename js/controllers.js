angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.footercolor = "";
  $scope.allCategory = [[]];
  function getArticles(data) {
    console.log(data.category.id);
    _.each(data.article, function(n) {
      n.timestamp2 = moment(n.timestamp).toDate();
    });
    $scope.allCategory[parseInt(data.category.id)] = data.article;
  }

  for (var i = 0; i < 7; i++) {
    $scope.allCategory.push([]);
    NavigationService.getCategoryArticles(i + 1, getArticles);
  }

  $scope.mySlides = [
    'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
  ];
})

.controller('LoveCtrl', function($scope, TemplateService, NavigationService, $location) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("love");
  $scope.menutitle = NavigationService.makeactive("Love");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.footercolor = "black";

  function getArticles(data) {
    $scope.catColor = TemplateService.getheader(data.category.id);
    console.log(data);
    $scope.category = data.catgory;
    $scope.loveblog = data.article;
    _.each($scope.loveblog, function(n) {
      n.timestamp = moment(n.timestamp).toDate();
    });
    $scope.viewed = data.mostViewed;
  }

  switch ($location.path()) {
    case "/love":
      NavigationService.getCategoryArticles(1, getArticles);
      console.log("Love");
      break;
    case "/lie":
      NavigationService.getCategoryArticles(2, getArticles);
      console.log("Lie");
      break;
    case "/lust":
      NavigationService.getCategoryArticles(3, getArticles);
      console.log("Lust");
      break;
    case "/confessions":
      NavigationService.getCategoryArticles(4, getArticles);
      $scope.template = TemplateService.changecontent("sexpert");
      console.log("confessions");
      break;
    case "/sexpert":
      NavigationService.getCategoryArticles(5, getArticles);
      $scope.template = TemplateService.changecontent("sexpert");
      console.log("sexpert");
      break;
    case "/queries":
      NavigationService.getCategoryArticles(6, getArticles);
      $scope.template = TemplateService.changecontent("sexpert");
      console.log("queries");
      break;
    case "/goops":
      NavigationService.getCategoryArticles(7, getArticles);
      console.log("goops");
      break;
  }
})

.controller('ConfessionsCtrl', function($scope, TemplateService, NavigationService) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("confessions");
  $scope.menutitle = NavigationService.makeactive("Confessions");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.footercolor = "black";
  $scope.confessionblog = [{
    head: "#51",
    content: "I have heard a lot about women pleasuring themselves and reaching orgasm without a man. I want to try it out. Are there any precautions that I need to take?"
  }, {
    head: "#52",
    content: "I have heard a lot about women pleasuring themselves and reaching orgasm without a man. I want to try it out. Are there any precautions that I need to take?"
  }, {
    head: "#53",
    content: "I have heard a lot about women pleasuring themselves and reaching orgasm without a man. I want to try it out. Are there any precautions that I need to take?"
  }];
})

.controller('AboutusCtrl', function($scope, TemplateService, NavigationService) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("aboutus");
    $scope.menutitle = NavigationService.makeactive("AboutUs");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.footercolor = "black";
  })
  .controller('SexpertDetailCtrl', function($scope, TemplateService, NavigationService) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("sexpertdetail");
    $scope.menutitle = NavigationService.makeactive("Sexpert Detail");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.footercolor = "black";
    $scope.sexpertblog = [{
      content: "I have just graduated and have been offered my dream job in Mumbai. But it will be moving away from my family and my boyfriend. I don’t know if i will be able to live without him.",
      ans: "Yes, of course you can enjoy intercourse with a man even after you pleasure yourself. You can masturbate by having a fantasy, touching your breasts and stroking your genitals. Do not insert objects or fingers into the vagina. Study the anatomy of the vulva and vagina. You will learn that the clitoris is the female penis, which brings about an orgasm for women when stimulated. It is situated at the apex of the vulva.Yes, of course you can enjoy intercourse with a man even after you pleasure yourself. You can masturbate by having a fantasy, touching your breasts and stroking your genitals. Do not insert objects or fingers into the vagina. Study the anatomy of the vulva and vagina. You will learn that the clitoris is the female penis, which brings about an orgasm for women when stimulated. It is situated at the apex of the vulva."
    }];
  })
  .controller('QueriesDetailCtrl', function($scope, TemplateService, NavigationService) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("queriesdetail");
    $scope.menutitle = NavigationService.makeactive("Queries Detail");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.footercolor = "black";
    $scope.queriesblog = [{
      content: "I have just graduated and have been offered my dream job in Mumbai. But it will be moving away from my family and my boyfriend. I don’t know if i will be able to live without him.",
      ans: "Yes, of course you can enjoy intercourse with a man even after you pleasure yourself. You can masturbate by having a fantasy, touching your breasts and stroking your genitals. Do not insert objects or fingers into the vagina. Study the anatomy of the vulva and vagina. You will learn that the clitoris is the female penis, which brings about an orgasm for women when stimulated. It is situated at the apex of the vulva.Yes, of course you can enjoy intercourse with a man even after you pleasure yourself. You can masturbate by having a fantasy, touching your breasts and stroking your genitals. Do not insert objects or fingers into the vagina. Study the anatomy of the vulva and vagina. You will learn that the clitoris is the female penis, which brings about an orgasm for women when stimulated. It is situated at the apex of the vulva."
    }];
  })

.controller('SliderCtrl', function($scope, TemplateService, NavigationService) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("slider");
  $scope.menutitle = NavigationService.makeactive("slider");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('LoveDetailCtrl', function($scope, TemplateService, NavigationService, $stateParams) {
  //Used to name the .html file
  function loadArticle(data) {
    $scope.catColor = TemplateService.getheader(data.category.id);
    if($scope.catColor == 'put-me-sexpert' || $scope.catColor == 'put-me-query' || $scope.catColor == 'put-me-confess') {
      $scope.template = TemplateService.changecontent("sexpertdetail");
      $scope.catColor = TemplateService.getheader(data.category.id);
    }
    data.article.timestamp = moment(data.article.timestamp).toDate();
    $scope.article = data.article;
    $scope.article.next = data.next;
    $scope.article.prev = data.prev;
    $scope.recommended = data.recommended;
    console.log($scope.template);
  }
  NavigationService.getArticle($stateParams.id, loadArticle);
  $scope.template = TemplateService.changecontent("lovedetail");
  $scope.menutitle = NavigationService.makeactive("Love Detail");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.footercolor = "black";

    /**
     * RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
     * LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
     */

    var disqus_config = function () {
    this.page.url = "detail/"+$stateParams.id; // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = $stateParams.id; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };

    (function() { // DON'T EDIT BELOW THIS LINE
      var d = document,
        s = d.createElement('script');

      s.src = '//lustlielove.disqus.com/embed.js';

      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();
})

.controller('footerCtrl', function($scope, TemplateService, NavigationService) {
  $scope.form = {
    isdisable: true
  };

  function doneCallback(data) {
    $scope.form.done = true;
    if (data.value) {
      $scope.form.complete = "Thank you for Subscribing.";
    } else {
      $scope.form.complete = "Email id is already Subscribed.";
    }

  }
  $scope.checkdisble = function(email) {
    console.log(email);
    if (email) {
      $scope.form.isdisable = false;
    } else {
      $scope.form.isdisable = true;
    }
  };
  $scope.sendEmail = function(email) {
    if (!$scope.form.isdisable) {
      NavigationService.sendSubsribe(email, doneCallback);
    }

  };

})

.controller('headerctrl', function($scope, TemplateService, NavigationService) {
  $scope.template = TemplateService;
  var get = false;
  $scope.shownav = "menu-out";
  $scope.getnav = function() {
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
