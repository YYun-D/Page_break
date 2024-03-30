var HammerElement = document.createElement('img');
var GunElement = document.createElement('img');

HammerElement.src = chrome.runtime.getURL("assets/hammer.png");
HammerElement.style.width = '125px';
HammerElement.style.height = '125px';
HammerElement.style.position = 'fixed';
HammerElement.style.zIndex = '10001';
HammerElement.style.borderRadius = '10px';
HammerElement.style.userSelect = 'none'; // 드래그 막기
HammerElement.style.textAlign = 'center';
HammerElement.style.display = 'none';

HammerElement.id = 'Hammer';

GunElement.src = chrome.runtime.getURL("assets/gun.png");
GunElement.style.width = '200px';
GunElement.style.height = '200px';
GunElement.style.position = 'fixed';
GunElement.style.zIndex = '10001';
GunElement.style.borderRadius = '10px';
GunElement.style.userSelect = 'none'; // 드래그 막기
GunElement.style.textAlign = 'center';
GunElement.style.display = 'none';
GunElement.id = 'Gun';

document.body.appendChild(HammerElement);
document.body.appendChild(GunElement);

HammerElement.addEventListener('click', (event) => {
  const audio = new Audio(chrome.runtime.getURL("assets/hit-sound.mp3"));
  audio.play();
  const CrackImage = document.createElement('img');
  CrackImage.src = chrome.runtime.getURL("assets/crack.png");;
  CrackImage.style.position = 'fixed';
  CrackImage.style.zIndex = '10000';
  CrackImage.style.width = '120px';
  CrackImage.style.height = '120px';
  var newLeft = event.clientX - 150;
  var newTop = event.clientY - 70;
  CrackImage.style.left = `${newLeft}px`;
  CrackImage.style.top = `${newTop}px`;
  document.body.appendChild(CrackImage);
  HammerElement.style.transform = 'rotate(-30deg)';
  setTimeout(() => {
    HammerElement.style.transform = 'rotate(0deg)';
  }, 500);
});

GunElement.addEventListener('click', (event) => {
  const audio = new Audio(chrome.runtime.getURL("assets/gun-sound.mp3"));
  audio.play();
  const CrackImage = document.createElement('img');
  CrackImage.src = chrome.runtime.getURL("assets/gun-crack.png");
  CrackImage.style.position = 'fixed';
  CrackImage.style.zIndex = '10000';
  CrackImage.style.width = '150px';
  CrackImage.style.height = '150px';
  var newLeft = event.clientX - 300;
  var newTop = event.clientY - 125;
  CrackImage.style.left = `${newLeft}px`;
  CrackImage.style.top = `${newTop}px`;
  document.body.appendChild(CrackImage);
  GunElement.style.transform = 'rotate(30deg)';
  setTimeout(() => {
    GunElement.style.transform = 'rotate(0deg)';
  }, 500);
});

document.addEventListener('mousemove', function(event) {
    HammerElement.style.left = event.clientX - 90 + 'px';
    HammerElement.style.top = event.clientY - 90 + 'px';
    GunElement.style.left = event.clientX - 150 + 'px';
    GunElement.style.top = event.clientY - 120 + 'px';
});
