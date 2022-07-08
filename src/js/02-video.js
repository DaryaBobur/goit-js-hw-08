import Player from '@vimeo/player';
import throttle  from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player')

const options = {
				id: 236203659,
				width: 640,
				loop: false
			};
const player = new Player(iframeEl.id, options);

player.on('timeupdate', function(data) {
   
    duration: 61.857
    percent: 0.049
    seconds: 3.034  
   
 localStorage.setItem("videoplayer-current-time", data.seconds);

});
    
const getStorage = localStorage.getItem("videoplayer-current-time");
console.log(getStorage)

player.setCurrentTime(getStorage).then(function(seconds) {
  
   seconds = getStorage;
}).catch(function(error) {
    switch (error.name) {
      case 'RangeError':
      break;

      default:
      break;
    }
});

