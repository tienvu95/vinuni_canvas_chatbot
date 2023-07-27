// popup.js
document.addEventListener("DOMContentLoaded", function () {
  const chatlog = document.getElementById("chatlog");
  const userInput = document.getElementById("user-input");
  const sendBtn = document.getElementById("send-btn");

  // Function to display the chatbot prompt message
  function displayChatbotPrompt(prompt) {
    const promptContainer = document.createElement("div");
    promptContainer.className = "message bot";
    promptContainer.textContent = "Bot: " + prompt;
    chatlog.appendChild(promptContainer);
    chatlog.scrollTop = chatlog.scrollHeight;
  }

  // Function to handle user input and display bot responses
  function handleUserInput() {
    const userMessage = userInput.value.trim();
    if (userMessage !== "") {
      displayMessage("You: " + userMessage, true);
      userInput.value = "";

      // Simulate a bot response for demonstration purposes
      setTimeout(function () {
        const botResponse = "Bot: This is a sample response from the chatbot.";
        displayMessage(botResponse);
      }, 500);
    }
  }

  // Function to handle the chatbot prompt
  function handleChatbotPrompt(prompt) {
    displayChatbotPrompt(prompt);
  }

  sendBtn.addEventListener("click", handleUserInput);
  userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      handleUserInput();
    }
  });

  // Receive messages from the background script
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "show_chatbot_prompt") {
      handleChatbotPrompt(request.prompt);
    }
  });

  // Show the chatbot UI on extension button click
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "toggle_chatbot") {
      const chatbot = document.getElementById("chatbotContainer");
      chatbot.style.display = request.visible ? "block" : "none";
      displayChatbotPrompt(request.prompt);
    }
  });
});
