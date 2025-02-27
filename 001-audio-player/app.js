// Select DOM elements
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progressBar = document.getElementById('progressBar');

// Track index
let trackIndex = 0;

/*
mockup of the playlist
*/
// Playlist array (add more songs as needed)
const playlist = [
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
];

// Load the current track
function loadTrack(index) {
  audio.src = playlist[index];
  audio.load();
}

// Play or pause the audio
function togglePlay() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = '❚❚'; // Pause icon
  } else {
    audio.pause();
    playBtn.textContent = '▶'; // Play icon
  }
}

// Update progress bar
function updateProgress() {
  const { currentTime, duration } = audio;
  if (duration > 0) {
    const progressPercentage = (currentTime / duration) * 100;
    progressBar.value = progressPercentage;

    // Automatically move to the next track when the current one ends
    if (progressPercentage >= 100) {
      nextTrack();
    }
  }
}

// Set progress on user input
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const progressPercentage = (clickX / width) * 100;
  progressBar.value = progressPercentage;
  audio.currentTime = (progressPercentage / 100) * audio.duration;
}

// Previous track
function prevTrack() {
  trackIndex = (trackIndex - 1 + playlist.length) % playlist.length;
  loadTrack(trackIndex);
  audio.play();
}

// Next track
function nextTrack() {
  trackIndex = (trackIndex + 1) % playlist.length;
  loadTrack(trackIndex);
  audio.play();
}

// Event listeners
playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', prevTrack);
nextBtn.addEventListener('click', nextTrack);
audio.addEventListener('timeupdate', updateProgress);
progressBar.addEventListener('input', setProgress);

// Load the first track initially
loadTrack(trackIndex);