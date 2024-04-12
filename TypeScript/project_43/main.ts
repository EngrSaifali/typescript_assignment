/* 43. Unchanged Magicians: Start with your work from Exercise 40. 
       Call the function makes_great() with a copy of the array of 
       magicians’ names. Because the original array will be unchanged, 
       return the new array and store it in a separate array. Call 
       show_magicians() with each array to show that you have one array 
       of the original names and one array with the Great added to each 
       magician’s name. */

// Define the function make_great to create a new array with "the Great" 
// added to each magician's name
function makes_great(magicians: string[]): string[] {

       let greatMagicians : string[] = [];
       for(let magician of magicians) {
       
              greatMagicians.push("The Great " + magician);
       
       };

       return greatMagicians;
       
};

// Define the function Shows_magicians to print the names of magicians 
// in an array
function Shows_magicians(magicians: string[]) {
              
       for(let magician of magicians) {
              
              console.log(magician);
              
       };

};

// Define an array of magician's names
let CircusMagicians : string[] = ["Saifee", "Xrusher", "Shane"];

// Call the makes_great function with a copy of the original array of 
// magicians' names
let greatCircusMagicians : string[] = makes_great(CircusMagicians);

// Call the shows_magicians function with both the original array and 
// the new array
Shows_magicians(CircusMagicians);
Shows_magicians(greatCircusMagicians);