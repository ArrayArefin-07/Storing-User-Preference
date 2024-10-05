// find element
const selectFontSize = document.getElementById("selectFontSize");

const selectBgColor = document.getElementById("selectBgColor");
const resetButton = document.getElementById("resetButton");
const mainElement = document.querySelector("main");


const setValues = (fontSize, bgColor) => {
  selectFontSize.value = fontSize;
  selectBgColor.value = bgColor;
  mainElement.style.fontSize = fontSize;
  mainElement.style.backgroundColor = bgColor;
}

//load LocalStorage Value after reloding
const initialSetup = () => { 
  const fontSize = localStorage.getItem("fontSize");
  const bgColor = localStorage.getItem("bgColor");

  if (fontSize && bgColor) {
    setValues(fontSize, bgColor)
  }
  if (!fontSize && !bgColor) {
    setValues("16px", "aqua");
  }
  if (fontSize && !bgColor) {
    setValues(fontSize, "aqua");
  }
  if (!fontSize && bgColor) {
    setValues("16px", bgColor);
  }
}


// change font size function
const changeFontSize = (event) => {
  const selectedFontSize = event.target.value
  mainElement.style.fontSize = selectedFontSize;
  localStorage.setItem("fontSize", selectedFontSize);
}

// Function for change Background color 

const changeBgColor = (event) => {
  const selectedBgColor = event.target.value
  mainElement.style.backgroundColor = selectedBgColor;
  localStorage.setItem("bgColor", selectedBgColor);
}

// function for clear local storage 
const cleareLocalStorage = () => {
  localStorage.removeItem("bgColor");
  localStorage.removeItem("fontSize");
  setValues("16px", "aqua");
}


// add event listeners 
selectFontSize.addEventListener("change", changeFontSize );
selectBgColor.addEventListener("change", changeBgColor);
resetButton.addEventListener("click", cleareLocalStorage);


initialSetup();