var HammerElement = document.createElement('img');

HammerElement.src = 'https://drive.google.com/uc?id=1vopgYHCDe2kUcxoZMvDas_SQN_sotKxa';
HammerElement.style.width = '100px';
HammerElement.style.height = '100px';
HammerElement.style.position = 'fixed';
HammerElement.style.top = '50px';  // 상단으로 조정
HammerElement.style.right = '50px';  // 오른쪽으로 조정
HammerElement.style.zIndex = '10001';
HammerElement.style.borderRadius = '10px';
HammerElement.style.userSelect = 'none'; // 드래그 막기
HammerElement.style.textAlign = 'center';
HammerElement.style.display = 'none';
HammerElement.id = 'Hammer';

document.body.appendChild(HammerElement);

isDragging = false;
isCrashing = false;

HammerElement.addEventListener('click', (event) => {
  if (isCrashing) {
    const audio = new Audio('https://docs.google.com/uc?export=open&id=1ZcDnrVooc3_vkMOhbf_XzFNuZ6p3zkEb');
    audio.play();
    const CrackImage = document.createElement('img');
    CrackImage.src = 'https://drive.google.com/uc?id=13TWTLr5W_ePXiKXsCat6NKswRX0On_OY';
    CrackImage.style.position = 'fixed';
    CrackImage.style.zIndex = '10000';
    CrackImage.style.width = '100px';
    CrackImage.style.height = '100px';
    var newLeft = event.clientX - 130;
    var newTop = event.clientY - 100;
    CrackImage.style.left = `${newLeft}px`;
    CrackImage.style.top = `${newTop}px`;
    document.body.appendChild(CrackImage);
    HammerElement.style.transform = 'rotate(-30deg)';
    setTimeout(() => {
      HammerElement.style.transform = 'rotate(0deg)';
    }, 500);
  }
  isCrashing = true;
});

HammerElement.addEventListener('mousedown', function(event) {
  isDragging = true;
  offsetX = event.clientX - HammerElement.offsetLeft;
  offsetY = event.clientY - HammerElement.offsetTop;
});

document.addEventListener('mousemove', function(event) {
  if (isDragging) {
    var newLeft = event.clientX - offsetX;
    var newTop = event.clientY - offsetY;
    HammerElement.style.left = newLeft + 'px';
    HammerElement.style.top = newTop + 'px';
  }
});
