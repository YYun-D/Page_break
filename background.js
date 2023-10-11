let isHammerDisplayEnabled = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'toggleHammerDisplay') {
    isHammerDisplayEnabled = !isHammerDisplayEnabled;
    sendResponse({isEnabled: isHammerDisplayEnabled});
  } else if (request.action === 'getHammerDisplayStatus') {
    sendResponse({isEnabled: isHammerDisplayEnabled});
  }
});
