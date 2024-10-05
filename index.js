// find element
const selectFontSize = document.getElementById("selectFontSize");

const selectBgColor = document.getElementById("selectBgColor");
const resetButton = document.getElementById("resetButton");
const mainElement = document.querySelector("main");


// change font size function
const changeFontSize = (event) => {
  mainElement.style.fontSize = event.target.value;
}

// Function for change Background color 

const changeBgColor = (event) => {
  mainElement.style.backgroundColor = event.target.value;
}


// add event listeners 
selectFontSize.addEventListener("change", changeFontSize );
selectBgColor.addEventListener("change", changeBgColor);