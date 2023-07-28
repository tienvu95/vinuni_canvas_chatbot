// content.js

// Function to create the chatbot button and append it to the webpage.
function createChatbotButton() {
  // Set the ID for the chatbot button.
  const buttonId = "chatbotButton";
  // Create a new button element for the chatbot.
  const chatbotButton = document.createElement("button");
  // Assign the ID to the button element.
  chatbotButton.id = buttonId;
  // Set the text content for the button.
  chatbotButton.textContent = "ChatBot";
  // Apply styles to the button to position it at the top-right corner of the page.
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
  // Append the chatbot button to the body of the webpage.
  document.body.appendChild(chatbotButton);

  // Add an event listener to the chatbot button to toggle the chatbot UI when clicked.
  chatbotButton.addEventListener("click", toggleChatbot);
}

// Function to show the chatbot prompt in the chatlog container.
function showChatbotPrompt() {
  // The chatbot prompt message.
  const chatbotPrompt = "How may I help you?";
  // Get the chatlog container element.
  const chatlog = document.getElementById("chatlog");
  // Create a new div element to display the chatbot prompt.
  const messageDiv = document.createElement("div");
  // Set the text content of the message div to the chatbot prompt.
  messageDiv.textContent = chatbotPrompt;
  // Add CSS classes to style the message div as a chat message from the user.
  messageDiv.classList.add("message", "user");
  // Append the message div to the chatlog container.
  chatlog.appendChild(messageDiv);
  // Automatically scroll to the bottom of the chatlog container to show the new message.
  chatlog.scrollTop = chatlog.scrollHeight;
}

// Function to toggle the chatbot UI visibility.
function toggleChatbot() {
  // Get the chatbot container element.
  const chatbotContainer = document.getElementById("chatbotContainer");
  // If the chatbot container exists:
  if (chatbotContainer) {
    // Toggle the display style of the chatbot container between "block" (visible) and "none" (hidden).
    chatbotContainer.style.display = chatbotContainer.style.display === "none" ? "block" : "none";
  }
}

// Inject the chatbot button and show the chatbot prompt when the page loads.
document.addEventListener("DOMContentLoaded", function () {
  createChatbotButton();

  // Delay the display of the chatbot prompt to ensure the chatbot button is created.
  setTimeout(function () {
    showChatbotPrompt();
  }, 500); // Adjust the delay time (in milliseconds) if needed.
});
// ... (any other additional functionality you may have)

const chatbotButton = document.getElementById("chatbotButton");
chatbotButton.addEventListener("click", toggleChatbot);
