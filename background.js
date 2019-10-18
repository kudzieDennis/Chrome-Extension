// background.js

// Called when the user loads on the browser action.
chrome.currentWindow.onLoad( "load",function(tabs) {
    // Send a message to the active tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendText(activeTab.id, {"text": "clicked_browser_action"});
    });
  });