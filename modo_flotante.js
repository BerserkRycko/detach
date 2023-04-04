var videoPlayer = document.querySelector('.html5-main-video');
var playerWidth = videoPlayer.offsetWidth;
var playerHeight = videoPlayer.offsetHeight;

var floatingPlayer = document.createElement('div');
floatingPlayer.style.position = 'fixed';
floatingPlayer.style.width = playerWidth + 'px';
floatingPlayer.style.height = playerHeight + 'px';
floatingPlayer.style.top = '10px';
floatingPlayer.style.right = '10px';
floatingPlayer.style.zIndex = '9999';

var videoContainer = document.querySelector('.html5-video-container');
videoContainer.appendChild(floatingPlayer);

var newVideoPlayer = document.createElement('video');
newVideoPlayer.src = videoPlayer.src;
newVideoPlayer.controls = true;
newVideoPlayer.style.width = '100%';
newVideoPlayer.style.height = '100%';

floatingPlayer.appendChild(newVideoPlayer);
videoPlayer.style.display = 'none';

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message === 'closePlayer') {
    floatingPlayer.remove();
    videoPlayer.style.display = 'block';
  }
});