/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function excuseGenerator() {
    let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

    let quien = who[Math.floor(Math.random() * 4)]
    let accion = action[Math.floor(Math.random() * 4)]
    let que = what[Math.floor(Math.random() * 3)]
    let cuando = when[Math.floor(Math.random() * 5)]

    return `${quien} ${accion} ${que} ${cuando}`
}

console.log(excuseGenerator())

};
