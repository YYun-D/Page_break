document.addEventListener('DOMContentLoaded', function() {
  var toggleButton = document.getElementById('Hammeronoff');

  // 초기 on/off 상태 확인
  chrome.runtime.sendMessage({action: 'getHammerDisplayStatus'}, function(response) {
    var isHammerDisplayEnabled = response.isEnabled;
    toggleButton.checked = isHammerDisplayEnabled ? true : false;
    if (isHammerDisplayEnabled) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
          target: {tabId: tabs[0].id},
          func: enableHammerDisplay
        });
      });
    } else {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
          target: {tabId: tabs[0].id},
          func: disableHammerDisplay
        });
      });
    }
  });

  // on/off 상태 변경
  toggleButton.addEventListener('click', function() {
    chrome.runtime.sendMessage({action: 'toggleHammerDisplay'}, function(response) {
      var isHammerDisplayEnabled = response.isEnabled;
      toggleButton.checked = isHammerDisplayEnabled ? true : false;
      if (isHammerDisplayEnabled) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            func: enableHammerDisplay
          });
        });
      } else {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            func: disableHammerDisplay
          });
        });
      }
    });
  });

  // HammerDisplay 활성화
  function enableHammerDisplay() {
    var HammerElement = document.getElementById('Hammer');
    if (HammerElement) {
      HammerElement.style.display = 'block';
    }
  }

  // HammerDisplay 비활성화
  function disableHammerDisplay() {
    var HammerElement = document.getElementById('Hammer');
    if (HammerElement) {
      HammerElement.style.display = 'none';
    }
  }

});