document.addEventListener('DOMContentLoaded', function() {
  var inputElement = document.getElementById('userInput');
  var botResponseElement = document.getElementById('botResponse');

  // Display the extension at the bottom right corner
  var botContainer = document.querySelector('.chat-bot-container');
  botContainer.style.visibility = 'visible';
  botContainer.style.opacity = 1;

  // Send message to content script when Enter key is pressed
  inputElement.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      var message = inputElement.value;
      sendMessageToContentScript({ type: 'chat', message: message });
      inputElement.value = '';
    }
  });

  // Receive message from content script
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === 'chatResponse') {
      botResponseElement.textContent = request.message;
    }
  });

  // Function to send message to content script
  function sendMessageToContentScript(message) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, message);
    });
  }
});
