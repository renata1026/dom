const body = document.querySelector('body');

function numUp() {
  for (i = 0; i < 6; i++) {
    let div = document.createElement('div');
    body.appendChild(div);
    div.setAttribute('id', (i + 1).toString());
    let num = document.createElement('h2');

    num.textContent = i + 1;
    div.appendChild(num);
    div.appendChild(document.createElement('hr'));
  }
}
numUp();

const divTwo = document.getElementById('2');
const blueBox = document.createElement('div');
blueBox.style.cssText = 'background:blue; width:50px;height:50px';

divTwo.prepend(blueBox);

const divThree = document.getElementById('3');
const img = document.createElement('img');
img.setAttribute('src', './image.webp');
img.style.width = '300px';
img.objectFit = 'cover';

divThree.prepend(img);

const divFour = document.getElementById('4');

const container = document.createElement('div');
container.style.cssText = 'display: flex; flex-wrap: wrap; gap: 1px;';
divFour.insertAdjacentElement('beforebegin', container); // Insert the container before divFour

for (let i = 0; i < 100; i++) {
  const redBox = document.createElement('div');
  container.appendChild(redBox);
  redBox.style.cssText =
    'background: red; width: 10px; height: 10px; margin:1px;';
}

const divFive = document.getElementById('5');
const ghost = document.createElement('p');
ghost.classList.add('hidden');
ghost.textContent = '👻';
divFive.prepend(ghost);
ghost.style.cssText = 'font-size:100px; margin:0;';

setInterval(function () {
  ghost.classList.toggle('hidden');
}, 1000);

const divSix = document.getElementById('6');

// Create the paragraph element
const p = document.createElement('p');
p.textContent = `I'm a magician. If I hover over a rabbit, it will disappear!`;

// Create the container for rabbit divs
const rabbitContainer = document.createElement('div');
rabbitContainer.style.cssText = 'display: flex; flex-wrap: wrap; gap: 1px;';

// Create the rabbit divs and add them to the container
for (let i = 0; i < 20; i++) {
  const rabbit = document.createElement('div');
  rabbit.classList.add('hover');
  rabbit.textContent = '🐇';
  rabbit.style.cssText = 'font-size: 40px;';
  rabbitContainer.appendChild(rabbit);
}

// Use insertAdjacentElement to place elements in the desired order
divSix.insertAdjacentElement('beforebegin', p);
divSix.insertAdjacentElement('beforebegin', rabbitContainer);

const destruct = document.createElement('p');
let countDown = 999;

const bombEmoji = ['💣']; // Array of bomb emojis

setInterval(function () {
  if (countDown > 0) {
    destruct.textContent = `This page will self-destruct in ${countDown} seconds.`;
    destruct.style.cssText =
      'background-color:#000;font-size:100px;color:red;margin:0;';
    countDown--;
  } else {
    const randomBomb = bombEmoji[Math.floor(Math.random() * bombEmoji.length)];
    destruct.textContent = randomBomb.repeat(6500); // Repeat the emoji multiple times
    destruct.style.cssText =
      'background-color:red;font-size:16px;color:white;height:100vh;width:100vw;position:fixed;z-index:9999;top:0;left:0;display:flex;align-items:center;justify-content:center;margin:0;text-align:center';
  }
  body.appendChild(destruct);
}, 1000);
