chrome.runtime.onInstalled.addListener(details => {
    console.log(details);
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message);
});