// content.js
const buttonId = "chatbotButton";

function createChatbotButton() {
  const chatbotButton = document.createElement("button");
  chatbotButton.id = buttonId;
  chatbotButton.textContent = "ChatBot";
  chatbotButton.style.position = "fixed";
  chatbotButton.style.top = "10px";
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
}

function showChatbotPrompt() {
  const chatbotPrompt = "How may I help you?";
  chrome.runtime.sendMessage({ action: "show_chatbot_prompt", prompt: chatbotPrompt });
}

function toggleChatbot() {
  const chatbot = document.getElementById("chatbotContainer");
  if (chatbot) {
    chatbot.style.display = chatbot.style.display === "none" ? "block" : "none";
  }
}

// Inject the chatbot button and show the chatbot prompt on webpage load
createChatbotButton();
showChatbotPrompt();

// Add event listener to the button to toggle the chatbot UI
const chatbotButton = document.getElementById(buttonId);
chatbotButton.addEventListener("click", toggleChatbot);
