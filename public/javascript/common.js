(() => {
  // <stdin>
  $(document).ready(function() {
    $("#searchIcon").on("click", function() {
      $("#searchModal").modal("toggle");
    });
    var i;
    var allTabs = document.querySelectorAll("[data-toggle-tab]");
    var allPanes = document.querySelectorAll("[data-pane]");
    function toggleTabs(event) {
      if (event.target) {
        event.preventDefault();
        var clickedTab = event.currentTarget;
        var targetKey = clickedTab.getAttribute("data-toggle-tab");
      } else {
        var targetKey = event;
      }
      if (window.localStorage) {
        window.localStorage.setItem("configLangPref", targetKey);
      }
      var selectedTabs = document.querySelectorAll("[data-toggle-tab=" + targetKey + "]");
      var selectedPanes = document.querySelectorAll("[data-pane=" + targetKey + "]");
      for (var i2 = 0; i2 < allTabs.length; i2++) {
        allTabs[i2].classList.remove("active");
        allPanes[i2].classList.remove("active");
      }
      for (var i2 = 0; i2 < selectedTabs.length; i2++) {
        selectedTabs[i2].classList.add("active");
        selectedPanes[i2].classList.add("show", "active");
      }
    }
    for (i = 0; i < allTabs.length; i++) {
      allTabs[i].addEventListener("click", toggleTabs);
    }
    if (window.localStorage.getItem("configLangPref")) {
      toggleTabs(window.localStorage.getItem("configLangPref"));
    }
  });
})();
