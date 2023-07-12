document.addEventListener('DOMContentLoaded', function() {
  var botContainer = document.getElementById('botContainer');
  botContainer.style.visibility = 'visible';
  botContainer.style.opacity = 1;

  document.getElementById('userInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      var message = this.value;
      displayUserMessage(message);
      sendMessageToContentScript({ type: 'chat', message: message });
      this.value = '';
    }
  });

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === 'chatResponse') {
      displayBotMessage(request.message);
    }
  });

  function sendMessageToContentScript(message) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, message);
    });
  }

  function displayUserMessage(message) {
    var messageElement = document.createElement('p');
    messageElement.textContent = 'User: ' + message;
    document.getElementById('botResponse').appendChild(messageElement);
  }

  function displayBotMessage(message) {
    var messageElement = document.createElement('p');
    messageElement.textContent = 'Bot: ' + message;
    document.getElementById('botResponse').appendChild(messageElement);
  }
});

// Prevent the extension from closing when clicking outside the chat box
document.addEventListener('mousedown', function(event) {
  var botContainer = document.getElementById('botContainer');
  if (event.target !== botContainer && !botContainer.contains(event.target)) {
    event.preventDefault();
    event.stopPropagation();
  }
});
