// find element
const selectFontSize = document.getElementById("selectFontSize");

const selectBgColor = document.getElementById("selectBgColor");
const resetButton = document.getElementById("resetButton");
const mainElement = document.querySelector("main");


// change font size function
const changeFontSize = (event) => {
  console.log(event.target.value);
}

// Function for change Background color 

const changeBgColor = (event) => {
  console.log(event.target.value);
}


// add event listeners 
selectFontSize.addEventListener("change", changeFontSize );
selectBgColor.addEventListener("change", changeBgColor);