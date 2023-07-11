// Receive messages from the popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === 'chat') {
    // Send the message to the background script
    chrome.runtime.sendMessage(request);
  }
});
