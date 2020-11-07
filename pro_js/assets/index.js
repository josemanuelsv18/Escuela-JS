import MediaPlayer from './MediaPlayer.js';
import Autoplay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector("video");
const playButton = document.getElementById("play/pause");
const muteButton = document.getElementById("mute/unmute");
const player = new MediaPlayer({
    el: video, 
    plugins: [
    new Autoplay(),
    new AutoPause()
]});

playButton.onclick = () => player.playPause(); 
muteButton.onclick = () => player.toggleMute();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.messasge);
    });
}