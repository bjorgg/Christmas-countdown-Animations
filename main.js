// The countdown

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

  // Display the result in the elements which we get from id's
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


// The snowfall

// This function adds snow to the DOM and apply's some random styling
function addSnow() {
  // Creating the snow element
  const snow = document.createElement('span');

  // Setting random positions to the snow on the x-axis
  const left = Math.round(Math.random() * window.innerWidth);
  snow.style.left = left + 'px';

  // Setting random sizes to the snow  
  const radius = Math.round(Math.random() * 15 + 5);
  snow.style.width = radius + 'px';
  snow.style.height = radius + 'px';

  // Setting a random delay on the fall animation in the css 
  // so all snow elements won't start falling at the same time
  snow.style.animationDelay = Math.random() * 10 + 's';

  // Appending the snow to the DOM
  document.body.appendChild(snow);

}

// The onclick function which is on the the snowflake icon
function letItSnow() {
  // Calling the addSnow function in a loop to add 50 snow elements
  for (let i = 0; i < 50; i++) {
    addSnow();
  }
}