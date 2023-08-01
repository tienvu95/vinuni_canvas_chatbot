// contentScripts.js

// Function to create the chatbot button
function createChatbotButton() {
  // Check if the button is already created to avoid duplicates
  if (!document.getElementById("chatbotButton")) {
    // Create a new button element for the chatbot
    const chatbotButton = document.createElement("button");
    chatbotButton.id = "chatbotButton";
    chatbotButton.textContent = "ChatGPT";
    chatbotButton.style.position = "fixed";
    chatbotButton.style.top = "10px"; // Position the button at the bottom right corner
    chatbotButton.style.right = "10px";
    chatbotButton.style.backgroundColor = "#007bff";
    chatbotButton.style.color = "#fff";
    chatbotButton.style.border = "none";
    chatbotButton.style.borderRadius = "5px";
    chatbotButton.style.padding = "15px";
    chatbotButton.style.fontSize = "18px";
    chatbotButton.style.fontWeight = "bold";
    chatbotButton.style.cursor = "pointer";
    chatbotButton.style.zIndex = "9999";
    document.body.appendChild(chatbotButton);

    // Add event listener to the button to toggle the ChatGPT window
    chatbotButton.addEventListener("click", () => {
      sendMessageToBackground({ action: "toggle_chatbot" });
    });
  }
}

// Function to send a message to the background script
function sendMessageToBackground(message) {
  chrome.runtime.sendMessage(message);
}

// Inject the chatbot button when the page loads
document.addEventListener("DOMContentLoaded", function () {
  createChatbotButton();
});
