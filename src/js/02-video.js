import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(e) {
  const currentTime = e.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}

window.addEventListener('load', function () {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
});

iframe.addEventListener('click', function () {
  player.play();
});
