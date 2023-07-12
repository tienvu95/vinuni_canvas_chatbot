chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === 'chat') {
    // Handle the chat request from popup.js or background.js
    // and send the response back using sendResponse
    sendResponse({ type: 'chatResponse', message: 'Response from content script' });
  }
});
