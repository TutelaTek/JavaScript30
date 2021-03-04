//const secondHand = document.querySelector('.second-hand');

function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const secondsDegrees = ((seconds/ 60) * 360) + 90;
  const minutesDegrees = ((minutes/60) * 360) + 90;
  const hoursDegrees = ((hours/12) * 360) + 90;
  document.querySelector('.hour-hand').style.transform = `rotate(${hoursDegrees}deg)`;
  document.querySelector('.min-hand').style.transform = `rotate(${minutesDegrees}deg)`;
  document.querySelector('.second-hand').style.transform = `rotate(${secondsDegrees}deg)`;
  console.log(seconds);
}


setInterval(setDate, 1000);
