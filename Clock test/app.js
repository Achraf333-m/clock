const millisHandle = document.querySelector(".handle__milliseconds");
const secondHandle = document.querySelector(".handle__seconds");
const minuteHandle = document.querySelector(".handle__minutes");
const hourHandle = document.querySelector(".handle__hours");

requestAnimationFrame(handleClock);

function handleClock() {
  const date = new Date();

  const hours = date.getHours() + date.getMinutes() / 60;
  const minutes = date.getMinutes() + date.getSeconds() / 60;
  const seconds = date.getSeconds() + date.getMilliseconds() / 1000;
  const millisecond = date.getMilliseconds()

  millisHandle.style.transform = `rotate(${millisecond * 0.36}deg)`
  secondHandle.style.transform = `rotate(${seconds * 6}deg)`;
  minuteHandle.style.transform = `rotate(${minutes * 6}deg)`;
  hourHandle.style.transform = `rotate(${hours * 30}deg)`;

  requestAnimationFrame(handleClock);
}
