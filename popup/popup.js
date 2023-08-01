// Wait for the DOM to be loaded before adding the event listener
document.addEventListener("DOMContentLoaded", function () {
  // Add event listener to the chatbotButton
  document.getElementById("chatbotButton").addEventListener("click", function () {
    // Send a message to the content script to open the chatbot
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "open_chatbot" });
    });
  });
});
