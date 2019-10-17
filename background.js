// background.js

// Called when the user clicks on the page action.
chrome.broswerAction.addEventListener( "click",function(tabs) {
    // Send a message to the active tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    });
  });