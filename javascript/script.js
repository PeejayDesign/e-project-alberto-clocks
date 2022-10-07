var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/main", {
        templateUrl : "main.html"
    })
    .when("/aboutus", {
        templateUrl : "pages/aboutus.html"
    })
    .when("/home", {
        templateUrl : "home.html"
    })
    .when("/product", {
        templateUrl : "pages/product.html"
    })
    .when("/support", {
        templateUrl : "pages/support.html"
    })
    .when("/technology", {
        templateUrl : "pages/technology.html"
    })
    .when("/contact", {
        templateUrl : "pages/contact.html"
    })
    .when("/storelocator", {
        templateUrl : "pages/storelocator.html"
    });
});