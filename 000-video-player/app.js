// Select elements
const video = document.getElementById('videoPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const seekBar = document.getElementById('seekBar');
const muteBtn = document.getElementById('muteBtn');
const fullScreenBtn = document.getElementById('fullScreenBtn');

// Play/Pause functionality
playPauseBtn.addEventListener('click', () => {
  if (video.paused || video.ended) {
    video.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    video.pause();
    playPauseBtn.textContent = 'Play';
  }
});

// Update seek bar as video plays
video.addEventListener('timeupdate', () => {
  const progress = (video.currentTime / video.duration) * 100;
  seekBar.value = progress;
});

// Seek bar functionality
seekBar.addEventListener('input', () => {
  const time = (seekBar.value / 100) * video.duration;
  video.currentTime = time;
});

// Mute/Unmute functionality
muteBtn.addEventListener('click', () => {
  if (video.muted) {
    video.muted = false;
    muteBtn.textContent = 'Mute';
  } else {
    video.muted = true;
    muteBtn.textContent = 'Unmute';
  }
});

// Fullscreen functionality
fullScreenBtn.addEventListener('click', () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) { // For Safari
    video.webkitRequestFullscreen();
  }
});