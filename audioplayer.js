let style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `a {text-decoration: none} .audio-hud {display: flex; flex-direction: row} .audio-container { border: 1px solid #000; background: #ffffff; border-radius: 10px; width: 50%; color: #404040; display: flex; flex-direction: column; } .audio-player { width:100%; margin:0; } .video-hud {	margin: 0;	padding: 4px;	display: flex;	align-items: center;	justify-content: space-between; } .audio-hud__element { cursor:pointer; display:inline-block; vertical-align:middle; } .audio-hud__mute:hover ~ .audio-hud__volume {	display: block;} .audio-hud__volume:hover {	display: block; } .audio-hud__volume {	display: none; height: 100%; margin-top: 5px } .video-hud__mute_true { 		} .audio-hud__mute_false {	width: 20px;	transition-property: width } .audio-hud__mute_false:hover {	width: 160px } /* Special styling for WebKit/Blink */ input[type=range]::-webkit-slider-thumb {  -webkit-appearance: none;  border: 1px solid #000000;  border-radius: 40px;  height: 12px;  width: 12px;  background: black;  opacity: 0.9;  cursor: pointer;  margin-top: -4px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */ } /* All the same stuff for Firefox */ input[type=range]::-moz-range-thumb {  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;  border: 1px solid #000000;  height: 36px;  width: 16px;  border-radius: 3px;  background: #ffffff;  cursor: pointer; } /* All the same stuff for IE */ input[type=range]::-ms-thumb {  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;  border: 1px solid #000000;  height: 36px;  width: 16px;  border-radius: 3px;  background: #ffffff;  cursor: pointer; } input[type=range] {  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */  width: 100%; /* Specific width is required for Firefox. */  background: transparent; /* Otherwise white in Chrome */ } input[type=range]::-webkit-slider-thumb {  -webkit-appearance: none; } input[type="range"]::-moz-range-progress {  background-color: #43e5f7; } input[type=range]:focus {  outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */ } input[type=range]::-ms-track {  width: 100%;  cursor: pointer;  /* Hides the slider so custom styles can be added */  background: transparent;   border-color: transparent;  color: transparent; } input[type=range]::-webkit-slider-runnable-track {  width: 100%;  height: 4px;  cursor: pointer;  background: lightgrey;  border-radius: 20px;  border: 0.2px solid #010101; } input[type=range]::-moz-range-track {  width: 100%;  height: 4px;  cursor: pointer;  background: lightgrey;  border-radius: 20px;  border: 0.2px solid #010101; } input[type=range]::-ms-track {  width: 100%;  height: 4px;  cursor: pointer;  background: transparent;  border-color: transparent;  border-width: 16px 0;  color: transparent; } input[type=range]::-ms-fill-lower {  background: #2a6495;  border: 0.2px solid #010101;  border-radius: 20px;  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; } input[type=range]:focus::-ms-fill-lower {  background: #3071a9; } input[type=range]::-ms-fill-upper {  background: #3071a9;  border: 0.2px solid #010101;  border-radius: 20px;  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; } input[type=range]:focus::-ms-fill-upper {  background: #367ebd; } progress[value] {  /* Reset the default appearance */  -webkit-appearance: none;   appearance: none; margin: 0 5px 0 5px;  width: 100%;  height: 4px; } progress[value]::-webkit-progress-bar {  background-color: #eee;  border-radius: 2px;  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset; } progress[value]::-webkit-progress-value { background-color: black;    border-radius: 2px;     background-size: 35px 20px, 100% 100%, 100% 100%; } select {    -webkit-appearance: none;    -moz-appearance: none;    text-indent: 1px;    text-overflow: '';    border: none; } select:focus{    outline: none; }`;
document.getElementsByTagName('head')[0].appendChild(style);

let audio = document.createElement('audio');
let audioHudDuv = document.createElement('div');
let audioHudElement = document.createElement('div');
let imagePlay = document.createElement('i');
let imagePause = document.createElement('i');
let imageVolumeUp = document.createElement('i');
let imageVolumeOff = document.createElement('i');
let progressWrapper = document.createElement('div');
let audioCurrTime = document.createElement('div');
let audioDuration = document.createElement('div');
let progressTrack = document.createElement('progress');
let volumeWrapper = document.createElement('div');
let volumeIcons = document.createElement('div');
let volumeHud = document.createElement('div');
let inputVolume = document.createElement('input');
let selectSpeed = document.createElement('select');
let selectOption50 = document.createElement('option');
let selectOption100 = document.createElement('option');
let selectOption125 = document.createElement('option');
let selectOption150 = document.createElement('option');
let selectOption175 = document.createElement('option');
let selectOption200 = document.createElement('option');
let selectOption250 = document.createElement('option');
let download = document.createElement('a');
let downloadImage = document.createElement('i');
let upload = document.createElement('a');
let uploadImage = document.createElement('i');
let playerWrapper = document.createElement('div');
let trackTitle = document.createElement('h4');

audio.src = "https://t4.bcbits.com/stream/3ae47b1b01c51a8643c63a102eaa3250/mp3-128/3095990638?p=0&amp;ts=1578148493&amp;t=cccc394c9715eb391421e38242893783006aeb2d&amp;token=1578148493_1897680b91920cb36c2619d5f2d428f0597a0555";
audio.className = 'audio-player';
audio.id = 'audio-player';

trackTitle.style = "margin: 5px 0 5px 30px";
trackTitle.innerHTML = "Название трека";
playerWrapper.appendChild(trackTitle);

audioHudDuv.className = "audio-hud";
audioHudDuv.appendChild(audio);
audioHudDuv.appendChild(audioHudElement);

audioHudElement.className = "audio-hud__element";
audioHudElement.id = "audio-hud__action_btn";
audioHudElement.style = "flex-basis: auto; margin: 0 5px 0 5px"

imagePlay.id = "audio-hud__action_play";
imagePlay.className = "material-icons video-hud__action audio-hud__action_play";
imagePlay.style = "color: black";
imagePlay.innerHTML = "play_arrow";
imagePause.id = "audio-hud__action_pause";
imagePause.className = "material-icons video-hud__action audio-hud__action_pause";
imagePause.style = "color: black; display: none"
imagePause.innerHTML = "pause";
audioHudElement.appendChild(imagePlay);
audioHudElement.appendChild(imagePause);

progressWrapper.style = "display: flex; align-items: center; flex-basis: 100%";
audioCurrTime.className = "audio-hud__curr-time";
audioCurrTime.id = "audio-hud__curr-time";
audioCurrTime.innerHTML = "00:00";
audioDuration.className = "video-hud__duration";
audioDuration.id = "video-hud__duration";
audioDuration.innerHTML = "00:00";
progressTrack.value = '0';
progressTrack.max = '100';
progressTrack.id = "audio-hud__progress-bar";
progressWrapper.appendChild(audioCurrTime);
progressWrapper.appendChild(progressTrack);
progressWrapper.appendChild(audioDuration);
audioHudDuv.appendChild(progressWrapper);

volumeWrapper.className = "audio-hud__element audio-hud__mute_false";
//volumeWrapper.id = "audio-hud__mute";
volumeWrapper.style = "display: flex; flex-direction: row; align-items: center; flex-basis: auto; margin: 0 5px 0 5px";

imageVolumeUp.id = "audio-hud__mute_volume";
imageVolumeUp.className = "material-icons";
imageVolumeUp.style = "color: black";
imageVolumeUp.innerHTML = "volume_up";

imageVolumeOff.id = "audio-hud__mute_mute";
imageVolumeOff.className = "material-icons";
imageVolumeOff.style = "color: black; display: none";
imageVolumeOff.innerHTML = "volume_off";

volumeIcons.appendChild(imageVolumeUp);
volumeIcons.appendChild(imageVolumeOff);

inputVolume.type = "range";
inputVolume.value = "100";
inputVolume.max = "100";
inputVolume.title = "Громкость";
inputVolume.className = "audio-hud__element";
inputVolume.id = "audio-hud__volume";
volumeHud.appendChild(inputVolume);

volumeHud.className = "audio-hud__volume";
volumeIcons.className = "audio-hud__mute";
volumeIcons.id = "audio-hud__mute";
volumeIcons.style = "display: flex; height: 100%";
volumeWrapper.appendChild(volumeIcons);
volumeWrapper.appendChild(volumeHud);
audioHudDuv.appendChild(volumeWrapper);

selectSpeed.title = "Скорость";
selectSpeed.className = "audio-hud__element audio-hud__speed";
selectSpeed.id = "audio-hud__speed";
selectSpeed.style = "flex-basis: auto; margin: 0 10px 3px 10px";
selectOption50.value = "50";
selectOption50.innerHTML = "0.5X";
selectSpeed.appendChild(selectOption50);
selectOption100.value = "100";
selectOption100.setAttribute('selected', '');
selectOption100.innerHTML = "1X";
selectSpeed.appendChild(selectOption100);
selectOption125.value = "125";
selectOption125.innerHTML = "1.25X";
selectSpeed.appendChild(selectOption125);
selectOption150.value = "150";
selectOption150.innerHTML = "1.5X";
selectSpeed.appendChild(selectOption150);
selectOption175.value = "175";
selectOption175.innerHTML = "1.75X";
selectSpeed.appendChild(selectOption175);
selectOption200.value = "200";
selectOption200.innerHTML = "2X";
selectSpeed.appendChild(selectOption200);
selectOption250.value = "250";
selectOption250.innerHTML = "2.5X";
selectSpeed.appendChild(selectOption250);
audioHudDuv.appendChild(selectSpeed);

download.className = "audio-hud__element";
download.style = "flex-basis: auto; margin: 0 5px 0 5px";
download.title = "Скачать";
download.target = "_blank";
download.href = audio.src;
download.setAttribute('download', '');

downloadImage.className = "material-icons";
downloadImage.style = "color: black";
downloadImage.innerHTML = "cloud_download";

download.appendChild(downloadImage);
audioHudDuv.appendChild(download);

upload.style = "flex-basis: auto; margin: 0 5px 0 5px";
upload.title = "Загрузить";
upload.className = "audio-hud__element";

uploadImage.className = "material-icons";
uploadImage.style = "color: black";
uploadImage.innerHTML = "cloud_upload";

upload.appendChild(uploadImage);
audioHudDuv.appendChild(upload);

playerWrapper.className = "audio-container";
playerWrapper.appendChild(audioHudDuv);
document.body.appendChild(playerWrapper);

let speedSelect = document.getElementById('audio-hud__speed');

const videoAct = () => {
    if (audio.paused) {

        audio.play();

        imagePlay.style.display = "none";
        imagePause.style.display = "inline";

    } else {

        audio.pause();

        imagePlay.style.display = "inline";
        imagePause.style.display = "none";

    }

    if (audioDuration.innerHTML == '00:00') {

        audioDuration.innerHTML = videoTime(audio.duration); //Об этой функции чуть ниже

    }

}




const videoTime = (time) => {
    time = Math.floor(time);

    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes * 60);
    let minutesVal = minutes;
    let secondsVal = seconds;

    if (minutes < 10) {
        minutesVal = '0' + minutes;
    }
    if (seconds < 10) {
        secondsVal = '0' + seconds;
    }
    return minutesVal + ':' + secondsVal;
};

const videoProgress = () => {
    progress = (Math.floor(audio.currentTime) / (Math.floor(audio.duration) / 100));
    progressTrack.value = progress;
    audioCurrTime.innerHTML = videoTime(audio.currentTime);
};

const videoChangeTime = (e) => {
    let mouseX = Math.floor(e.pageX - progressTrack.offsetLeft);
    let progress = mouseX / (progressTrack.offsetWidth / 100);
    audio.currentTime = audio.duration * (progress / 100);
};

const audioChangeVolume = () => {
    let volume = inputVolume.value / 100;
    audio.volume = volume;
    if (audio.volume == 0) {
        imageVolumeUp.style.display = "none";
        imageVolumeOff.style.display = "inline";
    } else {
        imageVolumeUp.style.display = "inline";
        imageVolumeOff.style.display = "none";
    }
};

const audioMute = () => {
    if (audio.volume == 0) {
        audio.volume = inputVolume.value / 100;
        imageVolumeUp.style.display = "inline";
        imageVolumeOff.style.display = "none";

    } else {
        audio.volume = 0;
        imageVolumeUp.style.display = "none";
        imageVolumeOff.style.display = "inline";
    }
};

const audioChangeSpeed = () => {
    let speed = speedSelect.value / 100;
    audio.playbackRate = speed;
};

const uploadAudio = () => {
    console.log('Downloading ...')
};

volumeIcons.addEventListener('click', audioMute);
inputVolume.addEventListener('change', audioChangeVolume);
selectSpeed.addEventListener('change', audioChangeSpeed);
upload.addEventListener('click', uploadAudio);
audio.addEventListener('timeupdate', videoProgress);
progressTrack.addEventListener('click', videoChangeTime);
audioHudElement.addEventListener('click', videoAct);
audio.addEventListener('click', videoAct);



