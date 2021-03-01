var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var timeLeft = 5;
var timeEl = document.getElementById("timeEl");


prepareRead()

function prepareRead() {
  //Everything in this function will execute every second
 var prepareInterval = setInterval(function () {
    console.log("working");
    // the time will decrement every second
    timeLeft --;
    // setting the HTML text to dynamically change with the seconds
    timeEl.textContent = timeLeft + " seconds until start."
    if(timeLeft === 0){
      // cleared the interval when reaching 0
      clearInterval(prepareInterval);
      // set it to empty string to have it appear nothing on screen
      timeEl.textContent = "";
      // starts the speedRead function
      speedRead();
    }
 },1000)
}

function speedRead() {
  // Print words to the screen one at a time.
  console.log("print the speed reader.")
}
