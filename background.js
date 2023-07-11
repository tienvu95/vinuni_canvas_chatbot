// Example response generation function
function generateResponse(message) {
  // Implement your chat bot's logic here
  if (message === 'Hello') {
    return 'Hi! How can I assist you?';
  } else if (message === 'How are you?') {
    return "I'm doing well, thank you!";
  } else {
    return "I'm sorry, I don't understand.";
  }
}

// Receive messages from the content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === 'chat') {
    // Process the user's message and generate a response
    var response = generateResponse(request.message);

    // Send the response back to the popup
    chrome.runtime.sendMessage({ type: 'chatResponse', message: response });
  }
});
