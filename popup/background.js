// background.js

// Function to create or show the ChatGPT popup window
function toggleChatbotWindow() {
  const chatbotUrl = "https://chat.openai.com";
  let chatbotWindow = null;

  chrome.windows.getAll({ populate: true }, (windows) => {
    windows.forEach((win) => {
      win.tabs.forEach((tab) => {
        if (tab.url === chatbotUrl) {
          chatbotWindow = win.id;
        }
      });
    });

    if (chatbotWindow) {
      chrome.windows.update(chatbotWindow, { focused: true });
    } else {
      chrome.windows.create({
        url: chatbotUrl,
        type: "popup",
        width: 400,
        height: 600,
      });
    }
  });
}

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "toggle_chatbot") {
    toggleChatbotWindow();
  }
});
