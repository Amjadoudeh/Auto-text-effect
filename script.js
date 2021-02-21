const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = " We are waiting for you";

let index = 1;
let speed = 500;

writeText();

function writeText() {

textEl.innerHTML=text.slice(0,index);

index++;

if(index > text.length) {
    index = 1 ;
  }
// to repeat the function when its done
  setTimeout(writeText, speed);

}
// targeting the input value
speedEl.addEventListener('input', (e) => speed = 300 / e.target.value);