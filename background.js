// background.js
let chatbotVisible = false;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "show_chatbot_prompt") {
    chatbotVisible = !chatbotVisible;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "toggle_chatbot", visible: chatbotVisible, prompt: request.prompt });
    });
  }
});
