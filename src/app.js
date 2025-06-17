import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Arreglos con partes de la excusa
let who = ['Darth Vader', 'Big Brother', 'The Shadow Government', 'My shadow', 'John Wick', 'The bank', 'The Pope', 'The Rebel Alliance'];
let action = ['ate', 'disassembled', 'crushed', 'broke', 'disappeared', 'helped me with', 'liberated'];
let what = ['my homework', 'my phone', 'the car', 'my family', 'my bank account', 'my savings', 'the US government', 'the moon',];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during lunch', 'while I was praying'];

const pickRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

function excuseGenerator() {
  return `${pickRandomElement(who)} ${pickRandomElement(action)} ${pickRandomElement(what)} ${pickRandomElement(when)}`;
}

function updateExcuse() {
  document.getElementById("excuse").textContent = excuseGenerator();
}

window.onload = function () {
  updateExcuse();
  setInterval(updateExcuse, 10000);
};
