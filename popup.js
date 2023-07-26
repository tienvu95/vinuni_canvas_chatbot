document.addEventListener('DOMContentLoaded', function () {
  const chatbotIcon = document.getElementById('chatbot-icon');

  chatbotIcon.addEventListener('click', function () {
    // Open the chatbot pop-up
    chrome.runtime.sendMessage({ action: "open_chatbot" });
  });
});
