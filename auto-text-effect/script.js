// Get all divs that we need to work
const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');

// text to create typing effect
const text = 'Kalat Zadeh Abolfazl';
// slicing value. We need it to slice the letters to create the effect
let idx = 1;

// speed value.
let speed = 300 / speedEl.value;

writeText();

// function to create text and set it to innerText.
// function compares the length of the given text and appends it to textEl with a given time interval
function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

// event listener to set speed value
speedEl.addEventListener('input', (e) => (speed = 300 / e.target.value));
