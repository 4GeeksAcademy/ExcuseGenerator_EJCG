import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Arreglos con partes de la excusa
let who = ['Darth Vader', 'Big Brother', 'The Shadow Government', 'My Reflection', 'John Wick', 'The Bank'];
let action = ['ate', 'disassembled', 'crushed', 'broke', 'disappeared', 'helped me with'];
let what = ['my homework', 'my phone', 'the car', 'my family', 'my bank account', 'my savings'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during lunch', 'while I was praying'];


function excuseGenerator() {
  let excuse = "";
  excuse += who[Math.floor(Math.random() * who.length)] + " ";
  excuse += action[Math.floor(Math.random() * action.length)] + " ";
  excuse += what[Math.floor(Math.random() * what.length)] + " ";
  excuse += when[Math.floor(Math.random() * when.length)];
  return excuse;
}


function updateExcuse() {
  document.getElementById("excuse").innerHTML = excuseGenerator();
}


window.onload = function () {
  updateExcuse();
  setInterval(updateExcuse, 10000);
};
