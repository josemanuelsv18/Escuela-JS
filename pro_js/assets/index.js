import MediaPlayer from './MediaPlayer.js';
import Autoplay from '../plugins/AutoPlay.js';

const video = document.querySelector("video");
const playButton = document.getElementById("play/pause");
const muteButton = document.getElementById("mute/unmute");
const player = new MediaPlayer({el: video, plugins: [
    //new Autoplay()
]});

playButton.onclick = () => player.playPause(); 
muteButton.onclick = () => player.toggleMute();