var templateservicemod = angular.module('templateservicemod', []);
templateservicemod.service('TemplateService', function () {
    this.title = "Love Lie Lust";
    this.meta = "Love Lie Lust";
    this.metadesc = "Love Lie Lust";

    var d = new Date();
    this.year = d.getFullYear();

    this.init = function () {
        this.headermenu = "views/headermenu.html";
        this.lovehead = "views/lovehead.html";
        this.slider = "views/content/slider.html";
        this.header = "views/header.html";
        this.menu = "views/menu.html";
        this.content = "views/content/content.html";
        this.footermenu = "views/footermenu.html";
        this.footer = "views/footer.html";
    };

    this.changecontent = function (page) {
        this.init();
        var data = this;
        data.content = "views/content/" + page + ".html";
        return data;
    };

    this.init();

});
