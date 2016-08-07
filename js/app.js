var app = angular.module("SocialNPHS", ["ngMaterial", "ngRoute"]);

// Set up a dark theme using blue grey and amber colors
app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme("default")
    .primaryPalette("blue-grey")
    .accentPalette("amber")
    .warnPalette("deep-orange")
    .backgroundPalette("grey")
    .dark();
})
// Set up routing, etc.
.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {
      // The home page. This will display graphs in cards
      templateUrl: "pages/home.html",
      controller: "HomeCtrl"
    })
    .when("/timeline", {
      // The timeline page. This displays a list of tweets from New Paltz students.
      templateUrl: "pages/timeline.html",
      controller: "TimelineCtrl"
    })
    .otherwise("/");

    $locationProvider.html5Mode(true);
});
