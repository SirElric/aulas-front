"use strict";
const $lamp = document.getElementById('lamp');

const torn_on = () => $lamp.src = "./img/ligada.jpg";
const torn_off = () => $lamp.src = "./img/desligada.jpg";
const lamp_state = () => !Boolean($lamp.src.match ('desligada'));

const on_off = () => {  
    if (lamp_state()) {
        torn_off();
    }else {
        torn_on();
    }
}
let id;

const blinking = () => {
    if ( id === undefined){
       id = setInterval ( on_off, 250);
    }
}
const stop = () => id = clearInterval( id );

$lamp.addEventListener ( 'mouseenter', torn_on );
$lamp.addEventListener ( 'mouseout', torn_off );
$lamp.addEventListener ( 'click', blinking);
document.getElementById( 'switch').addEventListener('click',stop);