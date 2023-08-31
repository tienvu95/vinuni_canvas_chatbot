// background.js

// Function to toggle the ChatGPT popup window
// function toggleChatbotWindow() {
//   const chatbotUrl = "https://chat.openai.com";
//   let chatbotWindow = null;
//
//   chrome.windows.getAll({ populate: true }, (windows) => {
//     windows.forEach((win) => {
//       win.tabs.forEach((tab) => {
//         if (tab.url === chatbotUrl) {
//           chatbotWindow = win.id;
//         }
//       });
//     });
//
//     if (chatbotWindow) {
//       chrome.windows.update(chatbotWindow, { focused: true });
//     } else {
//       chrome.windows.create({
//         url: chatbotUrl,
//         type: "popup",
//         width: 400,
//         height: 600,
//       });
//     }
//   });
// }
//
// // Listen for messages from the content script
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.action === "toggle_chatbot") {
//     toggleChatbotWindow();
//   }
// });
//
//


// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const GOOGLE_ORIGIN = 'https://vinuni.instructure.com';

// Allows users to open the side panel by clicking on the action toolbar icon
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
  if (!tab.url) return;
  const url = new URL(tab.url);
  // Enables the side panel on google.com
  if (url.origin === GOOGLE_ORIGIN) {
    await chrome.sidePanel.setOptions({
      tabId,
      path: 'sidepanel.html',
      enabled: true
    });
  } else {
    // Disables the side panel on all other sites
    await chrome.sidePanel.setOptions({
      tabId,
      enabled: false
    });
  }
});
