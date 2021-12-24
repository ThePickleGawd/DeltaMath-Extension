// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  // If the received message has the expected format...
  if (msg.text === "get_dom") {
    sendResponse(document.documentElement.innerHTML);
  }
  if (msg.text === "get_annotations") {
    let annotations = document.getElementsByClassName("katex");
    sendResponse(annotations);
  } else sendResponse("FAIL");
});
