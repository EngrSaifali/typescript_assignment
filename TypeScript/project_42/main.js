"use strict";
/* 42. Great Magicians: Start with a copy of your program from
       Exercise 39. Write a function called make_great() that modifies
       the array of magicians by adding the phrase the Great to each
       magician’s name. Call show_magicians() to see that the list has
       actually been modified. */
function make_great(circusMagicians) {
    for (let i = 0; i < circusMagicians.length; i++) {
        circusMagicians[i] = "The Great " + circusMagicians[i];
    }
    ;
}
;
let circusMagicians = ["Saifee", "Xrusher", "Shane"];
function shows_magicians(circusMagicians) {
    for (let magician of circusMagicians) {
        console.log(`The one and only magician : "${magician}"`);
    }
    ;
}
;
make_great(circusMagicians);
shows_magicians(circusMagicians);
