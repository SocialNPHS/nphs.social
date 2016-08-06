var app = angular.module("SocialNPHS", ["ngMaterial"]);

app.config(function($mdThemingProvider) {
  // Set up a dark theme using blue grey and amber colors
  $mdThemingProvider.theme("default")
    .primaryPalette("blue-grey")
    .accentPalette("amber")
    .warnPalette("deep-orange")
    .backgroundPalette("grey")
    .dark();
});
