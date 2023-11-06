document.addEventListener('DOMContentLoaded', function() {
  var toggleButton = document.getElementById('Hammeronoff');
  var GuntoggleButton = document.getElementById('Gunonoff');
  
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

  chrome.runtime.sendMessage({action: 'getGunDisplayStatus'}, function(response) {
    var isGunDisplayEnabled = response.isEnabled;
    GuntoggleButton.checked = isGunDisplayEnabled ? true : false;
    if (isGunDisplayEnabled) {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
          target: {tabId: tabs[0].id},
          func: enableGunDisplay
        });
      });
    } else {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
          target: {tabId: tabs[0].id},
          func: disableGunDisplay
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

  // on/off 상태 변경
  GuntoggleButton.addEventListener('click', function() {
    chrome.runtime.sendMessage({action: 'toggleGunDisplay'}, function(response) {
      var isGunDisplayEnabled = response.isEnabled;
      GuntoggleButton.checked = isGunDisplayEnabled ? true : false;
      if (isGunDisplayEnabled) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            func: enableGunDisplay
          });
        });
      } else {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            func: disableGunDisplay
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

  // GunDisplay 활성화
  function enableGunDisplay() {
    var GunElement = document.getElementById('Gun');
    if (GunElement) {
      GunElement.style.display = 'block';
    }
  }

  // GunDisplay 비활성화
  function disableGunDisplay() {
    var GunElement = document.getElementById('Gun');
    if (GunElement) {
      GunElement.style.display = 'none';
    }
  }

});