//alert("propaganda noun /ˌprɑp·əˈɡæn·də information or ideas that are spread by an organized group or government to influence people’s opinions, esp. by not giving all the facts or by secretly emphasizing only one way of looking at the facts")
// popup.js
//chrome.browseraction.onLoad.addEventListener("load",
   // function(request, sender, sendResponse) {
     // if( request.text === "clicked_brower_action" ) {
       // var firstHref = $("a[href^='popup.html']").eq(0).attr("href");
  
        //console.log(window.onload);
      //}
   // }
  //)
  chrome.window.onload = function(){
    Text.getElementById("popup.html").onload=function(){
        alert("propaganda");
    }
}