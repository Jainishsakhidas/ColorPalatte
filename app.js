//global selections and variables
const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelector(".generate");
const sliders = document.querySelectorAll('input[type="range"]');
const currentHexes = document.querySelectorAll(".color h2");
let initialColors;
//Functions

//Color Generator
function generateHex() {
  //manual code
  //   const hexLetters = "0123456789ABCDEF";
  //   let hash = "#";
  //   for (let i = 0; i < 6; i++) {
  //     hash += hexLetters[Math.floor(Math.random() * 16)];
  //   }
  //   return hash;
  //using Chroma.js library
  const hexColor = chroma.random();
  return hexColor;
}

function randomColors() {
  //   console.log(colorDivs[0].children[0]);
  colorDivs.forEach((div, index) => {
    const hexText = div.children[0];
    const randomColor = generateHex();

    //Add color to background
    div.style.backgroundColor = randomColor;
    hexText.innerHTML = randomColor;
  });
}

randomColors();
