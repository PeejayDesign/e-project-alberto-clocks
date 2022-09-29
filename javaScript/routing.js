var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "/index.htm"
  })
  .when("/red", {
    templateUrl : "/pages/product.htm"
  })
  .when("/green", {
    templateUrl : "/pages/storeLocatore.htm"
  })
  .when("/blue", {
    templateUrl : "/pages/technology.htm"
  });
});