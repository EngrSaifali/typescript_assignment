"use strict";
/* 35. Animals: Think of at least three different animals that
       have a common characteristic. Store the names of these animals in a
       list, and then use a for loop to print out the name of each animal.

• Modify your program to print a statement about each animal, such
  as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have
  in common. You could print a sentence such as Any of these animals
  would make a great pet! */
let animal = ["Tiger", "Lion", "Leopard"];
// Method : 1
for (let favAnimal of animal) {
    console.log(`A ${favAnimal} is a dangerous animal.`);
}
;
// Method : 2
for (let favoriteAnimat of animal) {
    switch (favoriteAnimat) {
        case 'Tiger':
            console.log("I really like tigers.");
            break;
        case 'Lion':
            console.log("I really like lions");
            break;
        case 'Leopard':
            console.log("I really like leopards");
            break;
        default:
            console.log(`Unknown animal: ${animal}`);
    }
    ;
}
;
console.log("Any of these animals wouldn't make a great pet!");
