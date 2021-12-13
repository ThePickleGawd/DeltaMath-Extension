let color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log("Default background color set to %cgreen", `color: ${color}`);

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([deltaMathRule]);
  });
});

// Checks if url is at delta math
var deltaMathRule = {
  conditions: [
    new chrome.declarativeContent.PageStateMatcher({
      pageUrl: { hostEquals: "deltamath.com" },
    }),
  ],
  actions: [new chrome.declarativeContent.ShowPageAction()],
};
