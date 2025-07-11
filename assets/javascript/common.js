$(document).ready(function () {
  $('#searchIcon').on('click', function () {
    $('#searchModal').modal('toggle')
  })
  var i;
  var allTabs = document.querySelectorAll('[data-toggle-tab]');
  var allPanes = document.querySelectorAll('[data-pane]');

  function toggleTabs(event) {
    if (event.target) {
      event.preventDefault();
      var clickedTab = event.currentTarget;
      var targetKey = clickedTab.getAttribute('data-toggle-tab');
    } else {
      var targetKey = event;
    }
    if (window.localStorage) {
      window.localStorage.setItem('configLangPref', targetKey);
    }
    var selectedTabs = document.querySelectorAll('[data-toggle-tab=' + targetKey + ']');
    var selectedPanes = document.querySelectorAll('[data-pane=' + targetKey + ']');
    for (var i = 0; i < allTabs.length; i++) {
      allTabs[i].classList.remove('active');
      allPanes[i].classList.remove('active');
    }
    for (var i = 0; i < selectedTabs.length; i++) {
      selectedTabs[i].classList.add('active');
      selectedPanes[i].classList.add('show', 'active');
    }
  }
  for (i = 0; i < allTabs.length; i++) {
    allTabs[i].addEventListener('click', toggleTabs);
  }
  if (window.localStorage.getItem('configLangPref')) {
    toggleTabs(window.localStorage.getItem('configLangPref'));
  }
})
