let isHammerDisplayEnabled = false;
let isGunDisplayEnabled = false;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'toggleHammerDisplay') {
    isHammerDisplayEnabled = !isHammerDisplayEnabled;
    sendResponse({isEnabled: isHammerDisplayEnabled});
  } else if (request.action === 'getHammerDisplayStatus') {
    sendResponse({isEnabled: isHammerDisplayEnabled});
  }
  if (request.action === 'toggleGunDisplay') {
    isGunDisplayEnabled = !isGunDisplayEnabled;
    sendResponse({isEnabled: isGunDisplayEnabled});
  } else if (request.action === 'getGunDisplayStatus') {
    sendResponse({isEnabled: isGunDisplayEnabled});
  }
});
