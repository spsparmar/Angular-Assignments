mainModule.config(function($routeProvider) {
  $routeProvider
  .when("/home", {
    templateUrl : "Partials/home.html",
  })
  .when("/listMedia", {
    templateUrl : "Partials/medialist.html",
    controller: "mediaListController"
  })
  .otherwise({
    redirectTo: '/home'
  });
});
