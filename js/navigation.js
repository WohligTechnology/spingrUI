// var adminUrl = "http://localhost/lllbackend/";
var adminUrl = "http://wohlig.co.in/lllbackend/";
// var adminUrl = "http://localhost/lllbackend/";
// var adminUrl = "http://192.168.0.122/lllbackend/";
var adminJson = adminUrl + "index.php/json/";
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function ($http) {
  var navigation = [{
    name: "Home",
    classis: "active",
    link: "#/home",
    subnav: [{
      name: "Subnav1",
      classis: "active",
      link: "#/home"
    }]
  }, {
    name: "Features",
    active: "",
    link: "#/feature",
    classis: "active",
    subnav: []
  }];

  return {
    getnav: function () {
      return navigation;
    },
    getCategories: function (callback) {
      $http.get(adminJson + 'getCategories').success(callback);
    },
    getArticle: function (id, callback) {
      $http.get(adminJson + 'getArticle?id=' + id).success(callback);
    },
    getCategoryArticles: function (id, callback) {
      $http.get(adminJson + 'getCategoryArticles?id=' + id).success(callback);
    },
    sendSubsribe: function (email, callback) {
      $http.get(adminJson + 'addSubscriber?email=' + email).success(callback);
    },
    makeactive: function (menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },

  };
});