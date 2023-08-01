chrome.runtime.onMessage.addListener(((e, r, t) => {
    if ("FETCH_TEXT_CONTENT" === e.type) return chrome.tabs.query({
        active: !0,
        currentWindow: !0
    }, (e => {
        const r = e[0];
        chrome.tabs.sendMessage(r.id, {
            type: "FETCH_TEXT_CONTENT"
        }, (e => {
            t(e)
        }))
    })), !0
})), chrome.action.onClicked.addListener((e => {
    chrome.scripting.executeScript({
        target: {
            tabId: e.id
        },
        files: ["contentScript.ts"]
    }, (() => {
        chrome.runtime.lastError && console.error(chrome.runtime.lastError.message)
    }))
}));
