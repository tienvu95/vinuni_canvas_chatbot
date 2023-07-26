chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "open_chatbot") {
    // Show the floating icon
    const chatbotIcon = document.getElementById('chatbot-icon');
    if (chatbotIcon) {
      chatbotIcon.style.display = 'block';
    }
  }
});
