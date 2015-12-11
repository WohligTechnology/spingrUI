var templateservicemod = angular.module('templateservicemod', []);
templateservicemod.service('TemplateService', function() {
  this.title = "Love Lie Lust";
  this.meta = "Love Lie Lust";
  this.metadesc = "Love Lie Lust";

  var d = new Date();
  this.year = d.getFullYear();

  this.init = function() {
    this.headermenu = "views/headermenu.html";
    this.slider = "views/content/slider.html";
    this.header = "views/header.html";
    this.menu = "views/menu.html";
    this.content = "views/content/content.html";
    this.footermenu = "views/footermenu.html";
    this.footer = "views/footer.html";
  };


  this.getheader = function(value) {
    value = parseInt(value);
    switch (value) {
      case 1:
        this.headermenu = "views/page-header/confessionhead.html";
        return "";
        break;
      case 2:
        this.headermenu = "views/page-header/liehead.html";
        return "put-me-green";
        break;
      case 3:
        this.headermenu = "views/page-header/lusthead.html";
        return "";
        break;
      case 4:
        this.headermenu = "views/page-header/confessionhead.html";
        return "put-me-confess";
        break;
      case 5:
        this.headermenu = "views/page-header/sexperthead.html";
        return "put-me-sexpert";
        break;
      case 6:
        this.headermenu = "views/page-header/querieshead.html";
        return "put-me-query";
        break;
      case 7:
        this.headermenu = "views/page-header/goopshead.html";
        return "put-me-query";
        break;
      default:
        this.headermenu = "views/page-header/lovehead.html";
        return "";
        break;
    }
  }

  this.changecontent = function(page) {
    this.init();
    var data = this;
    data.content = "views/content/" + page + ".html";
    return data;
  };

  this.init();

});
