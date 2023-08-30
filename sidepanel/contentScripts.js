function createButton() {
  const button = document.createElement("button");
  button.textContent = "Click Me!";
  button.style.position = "fixed";
  button.style.bottom = "20px";
  button.style.right = "10px";
  button.style.backgroundColor = "rgba(0, 123, 255, 0.8)"; // Transparent blue background  button.style.color = "#fff";
  button.style.border = "none";
  button.style.borderRadius = "5px";
  button.style.padding = "10px";
  button.style.fontSize = "16px";
  button.style.fontWeight = "bold";
  button.style.cursor = "pointer";
  button.style.zIndex = "9999";

  document.body.appendChild(button);

  button.addEventListener("click", () => {
    openChatGPTPopup();
  });
}

function openChatGPTPopup() {
  const popupWidth = 400;
  const popupHeight = 600;
  const chatGPTUrl = "https://huggingface.co/chat/";
  const left = window.screen.width - popupWidth - 10;
  const top = 10;

  window.open(
    chatGPTUrl,
    "ChatGPTPopup",
    `width=${popupWidth},height=${popupHeight},left=${left},top=${top}`
  );
}

createButton();
