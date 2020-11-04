// Set the date we're counting down to
const countDownDate = new Date("Dec 24, 2020 18:00:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the countdown date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;


  // If the countdown is finished change the headline
  if (distance < 0) {
    clearInterval(x);
    document.getElementsByTagName("h1").innerHTML = "Merry Christmas";
  }
}, 1000);



function addSnow() {
  const snow = document.createElement('span');

  const left = Math.round(Math.random() * window.innerWidth);
  snow.style.left = left + 'px';

  const radius = Math.round(Math.random() * 15 + 5);
  snow.style.width = radius + 'px';
  snow.style.height = radius + 'px';

  snow.style.animationDelay = Math.random() * 10 + 's';

  document.body.appendChild(snow);

}

function letItSnow() {
  for (let i = 0; i < 50; i++) {
    addSnow();
  }
}