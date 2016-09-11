// Initialize a timeline inside a div with id `timeline-main`
function _createTimeline() {
  twttr.widgets.createTimeline(
    {
      sourceType: "list",
      ownerScreenName: "1Defenestrator",
      slug: "NPHS",
    },
    document.getElementById("timeline-main"),
    {
      theme: "dark",
      chrome: "transparent noheader nofooter"
    }
  );
}

// Controller for the front page of the app
app.controller("TimelineCtrl", function($scope) {
  // Create the timeline, waiting for widgets.js to load if it hasn't yet.
  if (twttr_ready) {
    _createTimeline();
  } else {
    twttr.ready(_createTimeline);
  }
});
