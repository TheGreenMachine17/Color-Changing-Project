//use this function to change the background color using JS
/*
  document.body.style.backgroundColor = "blue";
*/

function Changing() {
//put colors in an array
var theColors = ["green", "blue", "orange", "red", "violet", "gray", "white", "pink"];

//using the random method to put it with the color changing action
 document.body.style.backgroundColor = theColors[Math.floor(Math.random()*theColors.length)]; 
  

}
