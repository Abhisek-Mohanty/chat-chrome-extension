import { io } from "./socket.io.esm.min.js";

chrome.runtime.onInstalled.addListener(details => {
    console.log(details);
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message);
    // console.log("hii", io);
});




