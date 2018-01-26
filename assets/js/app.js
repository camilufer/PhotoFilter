'use strict'

const blurButton = document.getElementById('blurButton');
const brightnessButton = document.getElementById('brightnessButton');
const contrastButton = document.getElementById('contrastButton');
const dropShadowButton = document.getElementById('dropShadowButton');
const saturateButton = document.getElementById('saturateButton');
const sepiaButton = document.getElementById('sepiaButton');
const photofilterButton = document.getElementById('photofilterButton');
const noneButton = document.getElementById('noneButton');

blurButton.addEventListener('click', function(){
document.getElementById('blur').style.filter = 'blur(2px)';
// Code for Safari 6.0 - 9.0
document.getElementById('blur').style.WebkitFilter = 'blur(2px)';
});


brightnessButton.addEventListener('click', function(){
document.getElementById('brightness').style.filter = 'brightness(190%)';
// Code for Safari 6.0 - 9.0
document.getElementById('brightness').style.WebkitFilter = 'brightness(190%)';
});

contrastButton.addEventListener('click', function(){
document.getElementById('contrast').style.filter = 'contrast(300%)';
// Code for Safari 6.0 - 9.0
document.getElementById('contrast').style.WebkitFilter = 'contrast(300%)';
});

dropShadowButton.addEventListener('click', function(){
document.getElementById('drop-shadow').style.filter = 'drop-shadow(10px 8px 20px red)';
// Code for Safari 6.0 - 9.0
document.getElementById('drop-shadow').style.WebkitFilter = 'drop-shadow(10px 8px 20px red)';
});
saturateButton.addEventListener('click', function(){
  document.getElementById('saturate').style.filter = 'saturate(8)';
  document.getElementById('saturate').style.WebkitFilter = 'saturate(8)';
});
sepiaButton.addEventListener('click', function(){
  document.getElementById('sepia').style.filter = 'sepia(100%)';
  document.getElementById('sepia').style.WebkitFilter = 'sepia(100%)';
});
photofilterButton.addEventListener('click', function(){
  document.getElementById('photofilter').style.filter = 'hue-rotate(270deg)';
  document.getElementById('photofilter').style.WebkitFilter = 'hue-rotate(270deg)';
});
noneButton.addEventListener('click', function(){
  document.getElementById('none').style.filter = 'none';
  document.getElementById('none').style.WebkitFilter = 'none';
});