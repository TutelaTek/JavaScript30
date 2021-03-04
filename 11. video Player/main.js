/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


/* Build out functions*/
function togglePlay(){
  if(video.paused){
    video.play();
    toggle.textContent = "Pause";
  } else {
    video.pause();
    toggle.textContent = "Play";
  }
}

function skip(){
  video.currentTime += parseFloat(this.dataset.skip);
}


function handleRangeUpdate() {
  video[this.name] = this.value;
  console.log(this.value);
}

/* Hook up the event listners */
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
console.log(skipButtons);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
