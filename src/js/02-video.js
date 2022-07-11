import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('iframe')

const player = new Player(iframeEl);

player.on('timeupdate', throttle(storage, 1000)); 

function storage(data) {
localStorage.setItem("videoplayer-current-time", data.seconds)
}
  
const getStorage = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(getStorage);