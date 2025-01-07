// Step 1: Inside the first div, after the main heading add a sub-heading (h3 tag)
const mainHeading = document.querySelector('#main-heading');
const subHeading = document.createElement('h3');
subHeading.textContent = 'Buy high quality organic fruits online';

// Make the sub-heading text italic
subHeading.style.fontStyle = 'italic';

// Append the sub-heading after the main heading
mainHeading.parentElement.insertBefore(subHeading, mainHeading.nextSibling);

//create element
const para = document.createElement('p');

//create text node
const paraText = document.createTextNode('Total Fruits: 4');

//append child
para.appendChild(paraText);

const divs = document.getElementsByTagName('div');
const secondDiv = divs[1];

//insert before
const fruits = document.querySelector('.fruits');
const basketHeading = document.getElementById('basket-heading');
secondDiv.insertBefore(para, fruits);

//setAttribute, className, ID
para.className = 'fruitCount';
para.id = 'fruits-total';
para.setAttribute('title', 'fruitsTotal');