

//convert the poem into an array
var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
//use the .split() method to split it on every space
var poemArray = poem.split(" ");
// console.log(poemArray)


var timeLeft = 5;
var timeEl = document.getElementById("timeEl");
var displayText = document.getElementById("displayText");


//call the function to start everything off
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
  var currentIndex = 0;
  var readingInterval = setInterval(function () {
    //Grab the current word, uses the var above to set the index of the array to 0
    var currentWord = poemArray[currentIndex];
    //every second, the index of the array will change +1
    currentIndex ++;
    //Sets my h1 in the html to my current word
    displayText.textContent = currentWord;

    //if the index is equal to the length of the array, meaning it has finished
    if(currentIndex === poemArray.length){
      clearInterval(readingInterval);
    }
  }, 1000)
}
