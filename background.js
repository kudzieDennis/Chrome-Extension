// background.js

// Called when the user loads on the browser action.
//chrome.currentWindow.onLoad( "load",function(tabs) {
    // Send a message to the active tab
    //chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      //var activeTab = tabs[0];
      //chrome.tabs.sendText(activeTab.id, {"text": "clicked_browser_action"});
    //});
 // });
 chrome.browseraction.addEventListener("click",
 function(request, sender, sendResponse) {
   if( request.message === "clicked_brower_action" ) {
     var firstHref = $("a[href^='http']").eq(0).attr("href");

     console.log(firstHref);
   }
 }
);