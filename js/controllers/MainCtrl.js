/* Controller for the whole app, the stuff encompassing the individual pages */
app.controller(
  "MainCtrl", function($scope) {
    $scope.navItems = [
      {
        name: "Home",
        icon: "home",
        href: "/"
      },
      {
        name: "Timeline",
        icon: "list",
        href: "/timeline"
      },
      {
        name: "About",
        icon: "person",
        href: "/about"
      }
    ];
  }
);
