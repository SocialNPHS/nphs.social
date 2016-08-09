var app = angular.module("SocialNPHS", ["ngMaterial", "ngRoute"]);

navPages = [
  {
    name: "Home",
    href: "/",
    templateUrl: "pages/home.html",
    controller: "HomeCtrl",
    icon: "home",
    selected: true
  },
  {
    name: "Timeline",
    href: "/timeline",
    templateUrl: "pages/timeline.html",
    controller: "TimelineCtrl",
    icon: "list",
    selected: false
  },
  {
    name: "About",
    href: "/about",
    templateUrl: "pages/about.html",
    icon: "person",
    selected: false
  }
];

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
  // Register routes
  for (var i = 0; i < navPages.length; i++) {
    $routeProvider.when(navPages[i].href, navPages[i]);
  }
  $routeProvider.otherwise("/");
  // Use the html5 history API so that hashes aren't necessary in URLs
  $locationProvider.html5Mode(true);
})

// Run far away from global variables as soon as we can because this is Angular
.run(function($rootScope) {
  $rootScope.navPages = navPages;
  delete window.navPages;
})

// Listen to navigation events
.run(function($rootScope) {
  $rootScope.$on("$routeChangeSuccess", function(e, current, pre) {
    var path = current.$$route.originalPath;
    console.log("Navigating to " + path);

    // Highlight the active tab when we switch pages
    for (var i = 0; i < $rootScope.navPages.length; i++) {
      if ($rootScope.navPages[i].href === path) {
        $rootScope.navPages[i].selected = true;
      } else {
        $rootScope.navPages[i].selected = false;
      }
    }
  });
});
