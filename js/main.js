twttr.ready(function() {
  // Initialize the timeline view
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
});
