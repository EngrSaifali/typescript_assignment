/* 41. Magicians: Make a array of magician’s names. Pass the array to a 
   function called show_magicians(), which prints the name of each 
   magician in the array. */

let magicians : string[] = ["Saifee", "Xrusher", "Shane"];

function show_magicians(magicians : string[]) {

   for(let magician of magicians) {

      console.log(`The one and only magician : "${magician}"`);

   };

};

show_magicians(magicians);