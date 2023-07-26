chrome.runtime.onInstalled.addListener(function() {
  chrome.browserAction.onClicked.addListener(function() {
    chrome.runtime.sendMessage({ message: "show_icon" });
  });
});
