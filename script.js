// Musik latar
const audio = document.getElementById('background-music');
audio.volume = 0.5;

// Hentikan musik setelah 18 detik
setTimeout(() => {
  audio.pause();
}, 18000);