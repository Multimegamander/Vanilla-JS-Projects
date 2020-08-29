'use strict';

// Generate new HeX color, add to 'Background Color' string, and apply color to body
const color = document.getElementById('color');
const btn = document.getElementById('btn');

btn.onclick = function() {
    const newColor = (Math.random()*0xFFFFFF<<0).toString(16);
    color.innerText = 'Background Color : #' + newColor;
    document.body.setAttribute('style', 'background-color:#'+newColor);
}



