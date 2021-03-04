const end = document.querySelector('.endTime')
let countdown;
const timerDisplay = document.querySelector('.timer');
console.log(end);


function timer(seconds){
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round(then - Date.now())/ 1000;
    if(secondsLeft < 0){
      clearInterval(countdown);
      return;
    }

    console.log(secondsleft);

  }, 1000);
}


function displayTimeLeft(seconds){
  const minutes = Math.floor(seconds/60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}: ${remainderSeconds < 10 ? '0': ''}${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;

  console.log(seconds);

}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${hour}:${minutes}`;
}
