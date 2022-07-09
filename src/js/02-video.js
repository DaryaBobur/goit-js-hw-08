import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('iframe')

const player = new Player(iframeEl);

player.on('timeupdate', throttle(storage, 1000)); 

function storage(data) {
    duration: 61.857
    percent: 0.049
    seconds: 3.034
  localStorage.setItem("videoplayer-current-time", data.seconds)
  console.log(data.seconds);
}
  
const getStorage = localStorage.getItem("videoplayer-current-time");
console.log(getStorage)

player.setCurrentTime(getStorage);